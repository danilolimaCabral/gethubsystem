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
    id: "christmas-2024",
    imageUrl: "/images/banner-christmas-robot.png",
    alt: "Feliz Natal - GetHubSystem com IA",
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    delayMs: 1500,
    expiryDays: 1, // Show again after 1 day if closed
  },
  {
    id: "new-year-2025",
    videoUrl: "/videos/fireworks-2025.mp4",
    imageUrl: "/images/banner-new-year-2025.png", // Fallback image
    alt: "Feliz Ano Novo 2025 - GetHubSystem",
    startDate: "2025-01-01",
    endDate: "2025-01-15",
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
