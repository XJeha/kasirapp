import { chartColors } from "@/data/analytics";

/**
 * Donut chart SVG statis untuk mockup dashboard.
 * Persentase tetap disediakan sebagai teks di luar chart oleh pemanggil.
 */
export function DonutMini({
  data,
  size = 132,
  thickness = 16,
}: {
  data: Array<{ name: string; value: number }>;
  size?: number;
  thickness?: number;
}) {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  const segments = data.map((item, index) => ({
    name: item.name,
    color: chartColors[index % chartColors.length],
    visibleLength: Math.max((item.value / 100) * circumference - 3, 0),
    offset: data
      .slice(0, index)
      .reduce((sum, entry) => sum + (entry.value / 100) * circumference, 0),
  }));

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-surface-sunken)"
        strokeWidth={thickness}
      />
      {segments.map((segment) => (
        <circle
          key={segment.name}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={segment.color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={`${segment.visibleLength} ${circumference - segment.visibleLength}`}
          strokeDashoffset={-segment.offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      ))}
    </svg>
  );
}
