import React from "react";

/**
 * Clean equirectangular world continent silhouette SVG (viewBox 0 0 1000 500)
 * calibrated to match geographic percentages mapX = (lng + 180) / 360 * 100, mapY = (90 - lat) / 180 * 100
 */
export function WorldMapBackdrop({
  className = "",
  showGrid = true,
}: {
  className?: string;
  showGrid?: boolean;
}) {
  return (
    <g className={className} aria-hidden="true">
      {showGrid && (
        <g stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.8">
          <line x1="0" y1="125" x2="1000" y2="125" />
          <line x1="0" y1="250" x2="1000" y2="250" strokeDasharray="4 4" />
          <line x1="0" y1="375" x2="1000" y2="375" />
          <line x1="250" y1="0" x2="250" y2="500" />
          <line x1="500" y1="0" x2="500" y2="500" strokeDasharray="4 4" />
          <line x1="750" y1="0" x2="750" y2="500" />
        </g>
      )}

      {/* Simplified World Continents calibrated to equirectangular coordinates */}
      <g fill="currentColor" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1">
        {/* North America */}
        <path d="M120,65 L235,55 L325,75 L340,120 L295,155 L268,185 L245,212 L222,225 L196,195 L162,175 L125,135 L105,95 Z" />
        {/* Greenland */}
        <path d="M350,28 L420,25 L435,62 L380,78 L345,58 Z" />
        {/* South America */}
        <path d="M275,232 L338,242 L398,285 L385,342 L348,402 L318,448 L295,432 L288,365 L266,295 Z" />
        {/* Europe & UK */}
        <path d="M465,135 L488,108 L525,72 L565,68 L595,95 L580,132 L552,148 L525,156 L496,162 L470,152 Z" />
        <path d="M480,104 L495,96 L502,115 L485,120 Z" />
        {/* Africa */}
        <path d="M468,185 L522,168 L578,180 L618,215 L638,248 L612,302 L585,358 L556,378 L532,340 L515,288 L474,252 L455,218 Z" />
        {/* Madagascar */}
        <path d="M624,308 L636,304 L634,344 L620,340 Z" />
        {/* Middle East & Arabian Peninsula */}
        <path d="M582,162 L636,158 L668,185 L655,222 L615,228 L592,195 Z" />
        {/* Asia Main (Russia, Central Asia, India, China, Indochina) */}
        <path d="M595,88 L715,62 L855,75 L920,105 L885,148 L855,182 L825,212 L795,232 L768,225 L748,195 L725,232 L708,222 L685,185 L640,165 L615,132 Z" />
        {/* Sri Lanka */}
        <path d="M720,235 L726,235 L725,245 L719,244 Z" />
        {/* Indonesia / Malaysia Archipelago */}
        <path d="M768,242 L798,245 L805,262 L772,262 Z" />
        <path d="M775,268 L825,274 L828,284 L778,280 Z" />
        <path d="M832,208 L845,205 L846,232 L833,234 Z" />
        {/* Japan */}
        <path d="M876,125 L895,118 L898,152 L878,156 Z" />
        {/* Australia */}
        <path d="M812,315 L898,308 L924,348 L905,392 L852,396 L812,368 Z" />
      </g>
    </g>
  );
}

