import { useEffect, useState } from "react";

export default function MouseFollowerRobot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show robot after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000);

    const handleMouseMove = (e: MouseEvent) => {
      // Smooth follow with slight delay (lerp effect)
      setPosition((prev) => ({
        x: prev.x + (e.clientX - prev.x) * 0.1,
        y: prev.y + (e.clientY - prev.y) * 0.1,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-opacity duration-500"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
      
      {/* Robot Body */}
      <div className="relative w-12 h-12 animate-bounce-slow">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(10,92,255,0.8)]"
          style={{
            filter: "drop-shadow(0 0 8px rgba(10, 92, 255, 0.8))",
          }}
        >
          {/* Robot Head */}
          <rect
            x="30"
            y="20"
            width="40"
            height="35"
            rx="5"
            fill="#0A5CFF"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          
          {/* Antenna */}
          <line
            x1="50"
            y1="20"
            x2="50"
            y2="10"
            stroke="#0A5CFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="50" cy="8" r="3" fill="#0A5CFF">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Eyes */}
          <circle cx="40" cy="35" r="4" fill="#FFFFFF">
            <animate
              attributeName="opacity"
              values="1;0.2;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="60" cy="35" r="4" fill="#FFFFFF">
            <animate
              attributeName="opacity"
              values="1;0.2;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Smile */}
          <path
            d="M 38 45 Q 50 50 62 45"
            stroke="#FFFFFF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Body */}
          <rect
            x="35"
            y="55"
            width="30"
            height="25"
            rx="3"
            fill="#0A5CFF"
            stroke="#FFFFFF"
            strokeWidth="2"
          />

          {/* Arms */}
          <line
            x1="35"
            y1="60"
            x2="20"
            y2="65"
            stroke="#0A5CFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="18" cy="67" r="3" fill="#0A5CFF" />

          <line
            x1="65"
            y1="60"
            x2="80"
            y2="65"
            stroke="#0A5CFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="82" cy="67" r="3" fill="#0A5CFF" />

          {/* Legs */}
          <line
            x1="42"
            y1="80"
            x2="42"
            y2="90"
            stroke="#0A5CFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="42" cy="92" r="3" fill="#0A5CFF" />

          <line
            x1="58"
            y1="80"
            x2="58"
            y2="90"
            stroke="#0A5CFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="58" cy="92" r="3" fill="#0A5CFF" />
        </svg>
      </div>
    </div>
  );
}
