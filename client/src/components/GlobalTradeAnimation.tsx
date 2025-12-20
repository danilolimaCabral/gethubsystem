export default function GlobalTradeAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for globe */}
          <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0A5CFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0A5CFF" stopOpacity="0.05" />
          </radialGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#0A5CFF" opacity="0.8" />
          </marker>
        </defs>

        {/* Globe */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="url(#globeGradient)"
          stroke="#0A5CFF"
          strokeWidth="1"
          opacity="0.4"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="30s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Grid lines on globe */}
        <g opacity="0.3" stroke="#0A5CFF" strokeWidth="0.5" fill="none">
          <ellipse cx="200" cy="200" rx="100" ry="40" />
          <ellipse cx="200" cy="200" rx="100" ry="60" />
          <ellipse cx="200" cy="200" rx="100" ry="80" />
          <line x1="200" y1="100" x2="200" y2="300" />
          <line x1="150" y1="100" x2="150" y2="300" />
          <line x1="250" y1="100" x2="250" y2="300" />
        </g>

        {/* Orbital paths with animated arrows */}
        <g filter="url(#glow)">
          {/* Path 1 */}
          <ellipse
            cx="200"
            cy="200"
            rx="150"
            ry="120"
            fill="none"
            stroke="#0A5CFF"
            strokeWidth="1.5"
            opacity="0.4"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="20"
              dur="2s"
              repeatCount="indefinite"
            />
          </ellipse>

          {/* Arrow 1 moving along path 1 */}
          <circle r="3" fill="#0A5CFF">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M 200,80 A 150,120 0 1,1 200,320 A 150,120 0 1,1 200,80"
            />
          </circle>

          {/* Path 2 */}
          <ellipse
            cx="200"
            cy="200"
            rx="130"
            ry="160"
            fill="none"
            stroke="#0A5CFF"
            strokeWidth="1.5"
            opacity="0.4"
            strokeDasharray="5,5"
            transform="rotate(45 200 200)"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="20"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </ellipse>

          {/* Arrow 2 moving along path 2 */}
          <circle r="3" fill="#0A5CFF">
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              path="M 200,40 A 130,160 0 1,0 200,360 A 130,160 0 1,0 200,40"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Path 3 */}
          <ellipse
            cx="200"
            cy="200"
            rx="140"
            ry="140"
            fill="none"
            stroke="#0A5CFF"
            strokeWidth="1.5"
            opacity="0.4"
            strokeDasharray="5,5"
            transform="rotate(-30 200 200)"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="20"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </ellipse>

          {/* Arrow 3 moving along path 3 */}
          <circle r="3" fill="#0A5CFF">
            <animateMotion
              dur="12s"
              repeatCount="indefinite"
              path="M 200,60 A 140,140 0 1,1 200,340 A 140,140 0 1,1 200,60"
            />
          </circle>
        </g>

        {/* Ship moving along route */}
        <g>
          <path
            d="M -8,-4 L 8,-4 L 10,0 L 8,4 L -8,4 L -6,0 Z"
            fill="#0A5CFF"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            filter="url(#glow)"
          >
            <animateMotion
              dur="15s"
              repeatCount="indefinite"
              path="M 50,200 Q 100,150 200,100 T 350,200 Q 300,250 200,300 T 50,200"
              rotate="auto"
            />
          </path>
          {/* Ship wake effect */}
          <circle r="2" fill="#0A5CFF" opacity="0.3">
            <animateMotion
              dur="15s"
              repeatCount="indefinite"
              path="M 50,200 Q 100,150 200,100 T 350,200 Q 300,250 200,300 T 50,200"
            />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="1s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Containers moving back and forth */}
        <g>
          {/* Container 1 */}
          <rect
            x="-6"
            y="-4"
            width="12"
            height="8"
            fill="#0A5CFF"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            opacity="0.8"
            filter="url(#glow)"
          >
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              values="80,280; 320,120; 80,280"
              keyTimes="0; 0.5; 1"
            />
          </rect>

          {/* Container 2 */}
          <rect
            x="-6"
            y="-4"
            width="12"
            height="8"
            fill="#0A5CFF"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            opacity="0.8"
            filter="url(#glow)"
          >
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              values="320,280; 80,120; 320,280"
              keyTimes="0; 0.5; 1"
            />
          </rect>

          {/* Container 3 */}
          <rect
            x="-6"
            y="-4"
            width="12"
            height="8"
            fill="#0A5CFF"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            opacity="0.8"
            filter="url(#glow)"
          >
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              values="200,80; 200,320; 200,80"
              keyTimes="0; 0.5; 1"
            />
          </rect>
        </g>

        {/* Pulsing connection points */}
        <g>
          <circle cx="80" cy="120" r="4" fill="#0A5CFF" opacity="0.6">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="320" cy="120" r="4" fill="#0A5CFF" opacity="0.6">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="80" cy="280" r="4" fill="#0A5CFF" opacity="0.6">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="320" cy="280" r="4" fill="#0A5CFF" opacity="0.6">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="1.5s" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1.5s" />
          </circle>
        </g>
      </svg>
    </div>
  );
}
