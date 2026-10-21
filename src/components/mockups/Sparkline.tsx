import { cn } from "@/lib/cn";

type Point = { x: number; y: number };

function buildPoints(values: number[], width: number, height: number, padding: number): Point[] {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / Math.max(values.length - 1, 1);

  return values.map((value, index) => ({
    x: padding + index * stepX,
    y: height - padding - ((value - min) / range) * (height - padding * 2),
  }));
}

export function buildSmoothPath(values: number[], width: number, height: number, padding = 8) {
  if (values.length === 0) return { line: "", area: "" };
  const points = buildPoints(values, width, height, padding);

  let line = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    const controlX = (previous.x + current.x) / 2;
    line += ` C ${controlX.toFixed(2)} ${previous.y.toFixed(2)}, ${controlX.toFixed(2)} ${current.y.toFixed(2)}, ${current.x.toFixed(2)} ${current.y.toFixed(2)}`;
  }

  const area = `${line} L ${points[points.length - 1].x.toFixed(2)} ${height} L ${points[0].x.toFixed(2)} ${height} Z`;

  return { line, area };
}

/**
 * Grafik area SVG statis untuk mockup produk (tanpa library chart).
 * Selalu dekoratif — informasi tetap disampaikan lewat teks pendamping.
 */
export function AreaSparkline({
  values,
  gradientId,
  className,
  stroke = "var(--color-brand)",
  showGrid = false,
}: {
  values: number[];
  gradientId: string;
  className?: string;
  stroke?: string;
  showGrid?: boolean;
}) {
  const width = 400;
  const height = 140;
  const { line, area } = buildSmoothPath(values, width, height, 10);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.22" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      {showGrid ? (
        <g stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 5">
          {[0.25, 0.5, 0.75].map((ratio) => (
            <line
              key={ratio}
              x1="0"
              x2={width}
              y1={height * ratio}
              y2={height * ratio}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      ) : null}
      <path d={area} fill={`url(#${gradientId})`} />
      <path
        d={line}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
