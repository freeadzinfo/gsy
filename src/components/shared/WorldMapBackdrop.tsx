import React from "react";
import { WORLD_POLITICAL_COUNTRIES } from "@/data/worldPoliticalCountries";

// 6-tone classic Political Atlas palette matching greedy graph coloring (no touching countries share a color)
const POLITICAL_FILLS = [
  "#ECE0B4", // Warm sand / buff
  "#CCE2BD", // Soft sage green
  "#F1CEC2", // Muted rose / coral
  "#DCD2EB", // Pale lavender
  "#C2E2DC", // Soft mint teal
  "#F4D7AC", // Warm apricot
] as const;

const HIGHLIGHT_FILLS = [
  "#F3DE8A",
  "#B9DB9E",
  "#F5B8A5",
  "#CEC0EB",
  "#A9DDD3",
  "#F5C67E",
] as const;

interface MapLabelItem {
  name: string;
  x: number;
  y: number;
  size?: number;
  rotate?: number;
  worldOnly?: boolean;
}

const COUNTRY_LABELS: MapLabelItem[] = [
  // Europe
  { name: "UK", x: 493, y: 97, size: 4.1 },
  { name: "FRANCE", x: 506, y: 121, size: 4.1 },
  { name: "SPAIN", x: 489, y: 138, size: 4.1 },
  { name: "GERMANY", x: 529, y: 108, size: 4.0 },
  { name: "ITALY", x: 535, y: 131, size: 3.8 },
  { name: "POLAND", x: 554, y: 105, size: 3.8 },
  { name: "UKRAINE", x: 587, y: 114, size: 4.2 },
  { name: "TURKEY", x: 598, y: 142, size: 4.2 },
  // Middle East & Gulf
  { name: "SAUDI ARABIA", x: 623, y: 185, size: 4.2 },
  { name: "IRAQ", x: 621, y: 157, size: 3.7 },
  { name: "IRAN", x: 649, y: 155, size: 4.4 },
  { name: "OMAN", x: 659, y: 194, size: 3.6 },
  { name: "YEMEN", x: 632, y: 207, size: 3.6 },
  { name: "EGYPT", x: 583, y: 175, size: 4.2 },
  // Africa
  { name: "MOROCCO", x: 483, y: 160, size: 3.8 },
  { name: "ALGERIA", x: 507, y: 172, size: 4.5 },
  { name: "LIBYA", x: 548, y: 175, size: 4.4 },
  { name: "MALI", x: 494, y: 201, size: 4.0 },
  { name: "NIGER", x: 526, y: 201, size: 4.0 },
  { name: "CHAD", x: 552, y: 207, size: 4.0 },
  { name: "SUDAN", x: 584, y: 206, size: 4.4 },
  { name: "ETHIOPIA", x: 610, y: 225, size: 4.0 },
  { name: "NIGERIA", x: 523, y: 223, size: 3.8 },
  { name: "CÔTE D'IVOIRE", x: 486, y: 228, size: 3.1 },
  { name: "D.R. CONGO", x: 565, y: 258, size: 4.0 },
  { name: "KENYA", x: 605, y: 247, size: 3.7 },
  { name: "TANZANIA", x: 595, y: 267, size: 3.7 },
  { name: "ANGOLA", x: 549, y: 284, size: 4.1 },
  { name: "ZAMBIA", x: 577, y: 289, size: 3.8 },
  { name: "NAMIBIA", x: 549, y: 311, size: 3.8 },
  { name: "SOUTH AFRICA", x: 568, y: 332, size: 4.1 },
  { name: "MADAGASCAR", x: 629, y: 304, size: 3.4, rotate: -68 },
  // Asia
  { name: "RUSSIA", x: 736, y: 81, size: 5.5 },
  { name: "KAZAKHSTAN", x: 686, y: 117, size: 4.6 },
  { name: "PAKISTAN", x: 691, y: 166, size: 4.0 },
  { name: "INDIA", x: 719, y: 187, size: 5.2 },
  { name: "CHINA", x: 787, y: 151, size: 5.8 },
  { name: "THAILAND", x: 781, y: 207, size: 3.5 },
  { name: "VIETNAM", x: 800, y: 203, size: 3.4 },
  { name: "MALAYSIA", x: 818, y: 240, size: 3.6 },
  { name: "INDONESIA", x: 806, y: 270, size: 4.2 },
  { name: "JAPAN", x: 882, y: 149, size: 4.0 },
  // Americas & Oceania (world view)
  { name: "CANADA", x: 225, y: 98, size: 6.2, worldOnly: true },
  { name: "UNITED STATES", x: 225, y: 145, size: 6.2, worldOnly: true },
  { name: "MEXICO", x: 215, y: 188, size: 5.0, worldOnly: true },
  { name: "BRAZIL", x: 355, y: 280, size: 6.2, worldOnly: true },
  { name: "ARGENTINA", x: 320, y: 350, size: 5.0, worldOnly: true },
  { name: "AUSTRALIA", x: 872, y: 325, size: 6.0, worldOnly: true },
];

const SEA_LABELS: MapLabelItem[] = [
  { name: "ATLANTIC OCEAN", x: 494, y: 295, size: 4.5 },
  { name: "MEDITERRANEAN SEA", x: 552, y: 151, size: 3.7 },
  { name: "RED SEA", x: 606, y: 194, size: 3.3, rotate: 64 },
  { name: "ARABIAN SEA", x: 678, y: 212, size: 4.2 },
  { name: "BAY OF BENGAL", x: 748, y: 222, size: 3.9 },
  { name: "INDIAN OCEAN", x: 711, y: 300, size: 5.2 },
  { name: "SOUTH CHINA SEA", x: 817, y: 217, size: 3.8 },
  { name: "PACIFIC OCEAN", x: 115, y: 225, size: 6.0, worldOnly: true },
];

export interface HoveredCountryInfo {
  id: string;
  name: string;
}

export function WorldMapBackdrop({
  className = "",
  showGrid = true,
  showLabels = true,
  labelDensity = "regional",
  highlightIds = [],
  hoveredId = null,
  onHoverCountry,
}: {
  className?: string;
  showGrid?: boolean;
  showLabels?: boolean;
  labelDensity?: "world" | "regional";
  highlightIds?: string[];
  hoveredId?: string | null;
  onHoverCountry?: (country: HoveredCountryInfo | null) => void;
}) {
  const highlightSet = React.useMemo(() => new Set(highlightIds), [highlightIds]);

  const visibleCountryLabels = React.useMemo(
    () =>
      COUNTRY_LABELS.filter((item) =>
        labelDensity === "world" ? true : !item.worldOnly
      ),
    [labelDensity]
  );

  const visibleSeaLabels = React.useMemo(
    () =>
      SEA_LABELS.filter((item) =>
        labelDensity === "world" ? true : !item.worldOnly
      ),
    [labelDensity]
  );

  const uid = React.useId().replace(/:/g, "");
  const oceanGradId = `gsy-ocean-${uid}`;

  return (
    <g className={className}>
      <defs>
        <linearGradient id={oceanGradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DCF0FC" />
          <stop offset="50%" stopColor="#CAE6F8" />
          <stop offset="100%" stopColor="#B8DAF0" />
        </linearGradient>
      </defs>

      {/* Ocean backdrop spanning extended plane for zoomed/panned viewBoxes */}
      <rect x="-100" y="-80" width="1200" height="660" fill={`url(#${oceanGradId})`} />

      {/* Cartographic Latitude / Longitude Graticule (every 30 deg + Equator / Tropics) */}
      {showGrid && (
        <g aria-hidden="true" pointerEvents="none">
          {/* Meridians (30° intervals) */}
          {[83.3, 166.7, 250, 333.3, 416.7, 500, 583.3, 666.7, 750, 833.3, 916.7].map(
            (x) => (
              <line
                key={`mer-${x}`}
                x1={x}
                y1="-80"
                x2={x}
                y2="580"
                stroke="#7EB1D2"
                strokeOpacity={x === 500 ? "0.55" : "0.35"}
                strokeWidth="0.6"
                strokeDasharray={x === 500 ? "3 3" : undefined}
                vectorEffect="non-scaling-stroke"
              />
            )
          )}
          {/* Parallels (30° intervals + Equator + Tropics) */}
          {[83.3, 166.7, 184.7, 250, 315.3, 333.3, 416.7].map((y) => {
            const isEquator = y === 250;
            const isTropic = y === 184.7 || y === 315.3;
            return (
              <line
                key={`par-${y}`}
                x1="-100"
                y1={y}
                x2="1100"
                y2={y}
                stroke={isEquator ? "#5590B7" : "#7EB1D2"}
                strokeOpacity={isEquator ? "0.55" : isTropic ? "0.4" : "0.35"}
                strokeWidth={isEquator ? "0.8" : "0.55"}
                strokeDasharray={isEquator || isTropic ? "4 3" : undefined}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </g>
      )}

      {/* Sovereign Countries — Natural Earth Political Map */}
      <g strokeLinejoin="round" strokeLinecap="round">
        {WORLD_POLITICAL_COUNTRIES.map((country) => {
          const isHovered = hoveredId === country.id;
          const isHighlighted = highlightSet.has(country.id);
          const paletteIdx = country.c % POLITICAL_FILLS.length;
          const fill =
            isHovered || isHighlighted
              ? HIGHLIGHT_FILLS[paletteIdx]
              : POLITICAL_FILLS[paletteIdx];

          return (
            <path
              key={country.id}
              d={country.d}
              fill={fill}
              fillRule="evenodd"
              stroke={
                isHovered
                  ? "#0B1F3A"
                  : isHighlighted
                    ? "#334155"
                    : "#5A7289"
              }
              strokeWidth={isHovered ? 1.4 : isHighlighted ? 0.9 : 0.7}
              vectorEffect="non-scaling-stroke"
              className={onHoverCountry ? "cursor-pointer transition-colors duration-150" : undefined}
              onMouseEnter={
                onHoverCountry
                  ? () => onHoverCountry({ id: country.id, name: country.name })
                  : undefined
              }
              onMouseLeave={onHoverCountry ? () => onHoverCountry(null) : undefined}
            >
              <title>{country.name}</title>
            </path>
          );
        })}
      </g>

      {/* Ocean & Sea Cartographic Typography */}
      {showLabels && (
        <g aria-hidden="true" pointerEvents="none" textAnchor="middle">
          {visibleSeaLabels.map((sea) => (
            <text
              key={sea.name}
              x={sea.x}
              y={sea.y}
              transform={
                sea.rotate ? `rotate(${sea.rotate} ${sea.x} ${sea.y})` : undefined
              }
              fill="#2B6791"
              fillOpacity="0.8"
              fontSize={sea.size ?? 4.2}
              fontStyle="italic"
              fontWeight="600"
              letterSpacing="0.14em"
            >
              {sea.name}
            </text>
          ))}

          {/* Country Labels with subtle light halo for atlas legibility */}
          {visibleCountryLabels.map((lbl) => (
            <text
              key={lbl.name}
              x={lbl.x}
              y={lbl.y}
              transform={
                lbl.rotate ? `rotate(${lbl.rotate} ${lbl.x} ${lbl.y})` : undefined
              }
              fill="#28384D"
              fillOpacity="0.88"
              stroke="#FFFFFF"
              strokeOpacity="0.65"
              strokeWidth="1.2"
              paintOrder="stroke"
              fontSize={lbl.size ?? 4}
              fontWeight="700"
              letterSpacing="0.06em"
            >
              {lbl.name}
            </text>
          ))}
        </g>
      )}
    </g>
  );
}
