"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { type SalesRangeKey, salesRanges } from "@/data/analytics";
import { formatCompactRupiah, formatRupiah } from "@/lib/format";

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid var(--color-line)",
  boxShadow: "0 10px 30px -18px rgba(12, 26, 51, 0.25)",
  fontSize: 12,
  padding: "8px 12px",
};

export function SalesChart({ range }: { range: SalesRangeKey }) {
  const data = salesRanges[range];
  const total = data.points.reduce((sum, point) => sum + point.value, 0);

  return (
    <div className="min-w-0">
      <div
        role="img"
        aria-label={`Grafik penjualan ${data.label}. Total ${formatRupiah(total)}. Rincian tersedia pada tabel teks setelah grafik.`}
        className="h-[260px] w-full sm:h-[300px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data.points}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            accessibilityLayer
          >
            <defs>
              <linearGradient id="sales-chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-brand)" stopOpacity={0.24} />
                <stop offset="100%" stopColor="var(--color-brand)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 5" vertical={false} stroke="var(--color-line)" />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              minTickGap={24}
              interval="preserveStartEnd"
              tick={{ fontSize: 11, fill: "var(--color-ink-muted)" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={66}
              tick={{ fontSize: 11, fill: "var(--color-ink-muted)" }}
              tickFormatter={(value) => formatCompactRupiah(Number(value))}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              labelStyle={{ color: "var(--color-ink)", fontWeight: 600, marginBottom: 4 }}
              labelFormatter={(label) => `${data.tooltipPrefix}${label}`}
              formatter={(value) => [formatRupiah(Number(value)), "Penjualan"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              name="Penjualan"
              stroke="var(--color-brand)"
              strokeWidth={2.5}
              fill="url(#sales-chart-fill)"
              activeDot={{ r: 4, strokeWidth: 2, stroke: "#ffffff" }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <table className="sr-only">
        <caption>Data contoh penjualan {data.label}</caption>
        <thead>
          <tr>
            <th scope="col">Periode</th>
            <th scope="col">Penjualan</th>
          </tr>
        </thead>
        <tbody>
          {data.points.map((point) => (
            <tr key={`${point.label}-${point.value}`}>
              <th scope="row">
                {data.tooltipPrefix}
                {point.label}
              </th>
              <td>{formatRupiah(point.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
