interface BannerConfig {
  id: string;
  imageUrl?: string;
  videoUrl?: string;
  alt: string;
  link?: string;
  delayMs?: number;
  expiryDays?: number;
}

interface SeasonalBanner extends BannerConfig {
  startDate: string; // Format: "YYYY-MM-DD"
  endDate: string;   // Format: "YYYY-MM-DD"
}

/**
 * Seasonal banners configuration
 * Add new banners here with start and end dates
 * The system will automatically show the correct banner based on current date
 */
export const SEASONAL_BANNERS: SeasonalBanner[] = [
  {
    id: "christmas-2025",
    videoUrl: "/videos/christmas-robot-2024.mp4",
    imageUrl: "/images/banner-christmas-robot.png", // Fallback image
    alt: "Feliz Natal - GetHubSystem com IA",
    startDate: "2025-12-01",
    endDate: "2025-12-31",
    delayMs: 1500,
    expiryDays: 1, // Show again after 1 day if closed
  },
  {
    id: "new-year-2026",
    videoUrl: "/videos/new-year-2026.mp4",
    imageUrl: "/images/banner-new-year-2025.png", // Fallback image
    alt: "Feliz Ano Novo - Que venha 2026 com muita IA",
    startDate: "2026-01-01",
    endDate: "2026-01-15",
    delayMs: 1500,
    expiryDays: 1,
  },
  // Add more seasonal banners here
  // Example:
  // {
  //   id: "black-friday-2025",
  //   imageUrl: "/images/banner-black-friday.png",
  //   alt: "Black Friday - GetHubSystem",
  //   startDate: "2025-11-20",
  //   endDate: "2025-11-30",
  //   link: "/promocoes",
  //   delayMs: 2000,
  //   expiryDays: 1,
  // },
];

/**
 * Get the active banner for the current date
 * Returns null if no banner is active
 */
export function getActiveBanner(): BannerConfig | null {
  const now = new Date();
  const today = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD

  for (const banner of SEASONAL_BANNERS) {
    if (today >= banner.startDate && today <= banner.endDate) {
      return banner;
    }
  }

  return null;
}
