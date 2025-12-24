import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface BannerConfig {
  id: string;
  imageUrl?: string;
  videoUrl?: string;
  alt: string;
  link?: string;
  delayMs?: number; // Delay before showing (default: 1500ms)
  expiryDays?: number; // Days before showing again after close (default: 7)
}

interface BannerModalProps {
  banner: BannerConfig | null;
}

export default function BannerModal({ banner }: BannerModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // If no banner provided, don't render anything
  if (!banner) return null;

  const STORAGE_KEY = `banner-closed-${banner.id}`;

  useEffect(() => {
    // Check if banner was previously closed
    const closedTimestamp = localStorage.getItem(STORAGE_KEY);
    
    if (closedTimestamp) {
      const closedDate = new Date(parseInt(closedTimestamp));
      const expiryDays = banner.expiryDays || 7;
      const daysSinceClosed = (Date.now() - closedDate.getTime()) / (1000 * 60 * 60 * 24);
      
      if (daysSinceClosed < expiryDays) {
        // Banner was closed recently, don't show
        return;
      }
    }

    // Show banner after delay
    const delay = banner.delayMs || 1500;
    const timer = setTimeout(() => {
      setShouldRender(true);
      // Small delay for animation
      setTimeout(() => setIsVisible(true), 50);
    }, delay);

    return () => clearTimeout(timer);
  }, [banner.id, banner.delayMs, banner.expiryDays, STORAGE_KEY]);

  const handleClose = () => {
    setIsVisible(false);
    // Save close timestamp
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    // Remove from DOM after animation
    setTimeout(() => setShouldRender(false), 300);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleBannerClick = () => {
    if (banner.link) {
      window.open(banner.link, "_blank", "noopener,noreferrer");
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative max-w-4xl w-full transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-10 bg-primary hover:bg-primary/90 text-white rounded-full p-2 shadow-lg shadow-primary/50 transition-all hover:scale-110 hover:rotate-90 duration-300"
          aria-label="Fechar banner"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Banner Content */}
        <div
          className={`relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 ${
            banner.link ? "cursor-pointer hover:border-primary/60 transition-all" : ""
          }`}
          onClick={handleBannerClick}
        >
          {/* Video Banner */}
          {banner.videoUrl && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain bg-[#0B0F1A]"
            >
              <source src={banner.videoUrl} type="video/mp4" />
              {banner.alt}
            </video>
          )}

          {/* Image Banner */}
          {banner.imageUrl && !banner.videoUrl && (
            <img
              src={banner.imageUrl}
              alt={banner.alt}
              className="w-full h-auto object-contain bg-[#0B0F1A]"
            />
          )}
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Optional link indicator */}
        {banner.link && (
          <div className="text-center mt-3 text-xs text-muted-foreground">
            Clique no banner para saber mais
          </div>
        )}
      </div>
    </div>
  );
}
