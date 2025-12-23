import { ENV } from "./_core/env";

/**
 * Envia notificação por e-mail quando um novo lead é capturado
 */
export async function sendLeadNotification(lead: {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}) {
  const emailTo = "danilo.rcbaral@gmail.com";
  
  const subject = `🚀 Novo Lead Capturado - ${lead.service || "Contato Geral"}`;
  
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0A5CFF 0%, #0047CC 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #0A5CFF; margin-bottom: 5px; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #0A5CFF; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">🤖 Novo Lead Capturado!</h1>
          <p style="margin: 10px 0 0 0;">Um novo cliente demonstrou interesse em nossos serviços</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Nome:</div>
            <div class="value">${lead.name || "Não informado"}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 E-mail:</div>
            <div class="value">${lead.email || "Não informado"}</div>
          </div>
          
          <div class="field">
            <div class="label">📱 Telefone:</div>
            <div class="value">${lead.phone || "Não informado"}</div>
          </div>
          
          <div class="field">
            <div class="label">🎯 Serviço de Interesse:</div>
            <div class="value">${lead.service || "Não especificado"}</div>
          </div>
          
          ${lead.message ? `
          <div class="field">
            <div class="label">💬 Mensagem:</div>
            <div class="value">${lead.message}</div>
          </div>
          ` : ""}
          
          <div class="field">
            <div class="label">⏰ Data/Hora:</div>
            <div class="value">${new Date().toLocaleString("pt-BR")}</div>
          </div>
        </div>
        <div class="footer">
          <p>Este é um e-mail automático do sistema GetHubSystem.</p>
          <p>Acesse o <a href="https://gethubsystem.manus.space/admin">painel administrativo</a> para gerenciar este lead.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textBody = `
Novo Lead Capturado - GetHubSystem

Nome: ${lead.name || "Não informado"}
E-mail: ${lead.email || "Não informado"}
Telefone: ${lead.phone || "Não informado"}
Serviço: ${lead.service || "Não especificado"}
${lead.message ? `Mensagem: ${lead.message}` : ""}
Data/Hora: ${new Date().toLocaleString("pt-BR")}

Acesse o painel administrativo para gerenciar este lead.
  `;

  try {
    // Usa a API de notificações do Manus para enviar e-mail
    const response = await fetch(`${ENV.forgeApiUrl}/v1/notification/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ENV.forgeApiKey}`,
      },
      body: JSON.stringify({
        to: emailTo,
        subject: subject,
        html: htmlBody,
        text: textBody,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("[Email] Failed to send notification:", error);
      return { success: false, error };
    }

    console.log("[Email] Lead notification sent successfully to:", emailTo);
    return { success: true };
  } catch (error) {
    console.error("[Email] Error sending notification:", error);
    return { success: false, error };
  }
}
