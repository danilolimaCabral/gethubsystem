import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { leads, type Lead } from "../../drizzle/schema";
import { eq, desc } from "drizzle-orm";
import { sendLeadNotification } from "../email";

export const leadsRouter = router({
  // Criar novo lead (público - usado pelo robô)
  create: publicProcedure
    .input(
      z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        service: z.string().optional(),
        message: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      
      const [newLead] = await db.insert(leads).values({
        name: input.name,
        email: input.email,
        phone: input.phone,
        service: input.service,
        message: input.message,
        status: "novo",
        source: "robo_chat",
      });

      // Enviar notificação por e-mail
      try {
        await sendLeadNotification({
          name: input.name,
          email: input.email,
          phone: input.phone,
          service: input.service,
          message: input.message,
        });
      } catch (error) {
        console.error("[Leads] Failed to send email notification:", error);
        // Não falha a requisição se o e-mail não for enviado
      }

      return { success: true, leadId: newLead.insertId };
    }),

  // Listar todos os leads (protegido - apenas admin)
  list: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "admin") {
      throw new Error("Acesso negado");
    }

    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt));
    return allLeads;
  }),

  // Obter detalhes de um lead específico (protegido - apenas admin)
  getById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Acesso negado");
      }

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const [lead] = await db.select().from(leads).where(eq(leads.id, input.id));
      return lead;
    }),

  // Atualizar status de um lead (protegido - apenas admin)
  updateStatus: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["novo", "em_atendimento", "convertido", "perdido"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Acesso negado");
      }

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      await db.update(leads).set({ status: input.status }).where(eq(leads.id, input.id));
      return { success: true };
    }),

  // Atualizar notas de um lead (protegido - apenas admin)
  updateNotes: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        notes: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Acesso negado");
      }

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      await db.update(leads).set({ notes: input.notes }).where(eq(leads.id, input.id));
      return { success: true };
    }),

  // Deletar um lead (protegido - apenas admin)
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Acesso negado");
      }

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      await db.delete(leads).where(eq(leads.id, input.id));
      return { success: true };
    }),

  // Estatísticas de leads (protegido - apenas admin)
  stats: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "admin") {
      throw new Error("Acesso negado");
    }

    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const allLeads = await db.select().from(leads);
    
    const stats = {
      total: allLeads.length,
      novo: allLeads.filter((l: Lead) => l.status === "novo").length,
      emAtendimento: allLeads.filter((l: Lead) => l.status === "em_atendimento").length,
      convertido: allLeads.filter((l: Lead) => l.status === "convertido").length,
      perdido: allLeads.filter((l: Lead) => l.status === "perdido").length,
      taxaConversao: allLeads.length > 0 
        ? ((allLeads.filter((l: Lead) => l.status === "convertido").length / allLeads.length) * 100).toFixed(1)
        : "0",
    };

    return stats;
  }),
});
