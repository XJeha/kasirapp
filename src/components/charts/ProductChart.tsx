"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { topProducts } from "@/data/analytics";
import { formatCompactRupiah, formatRupiah } from "@/lib/format";

export function ProductChart() {
  return (
    <div className="min-w-0">
      <div
        role="img"
        aria-label="Diagram batang produk dengan pendapatan tertinggi: Kopi Susu, Americano, Croissant, Matcha Latte, dan Chocolate Cake. Rincian tersedia pada tabel teks setelah grafik."
        className="h-[280px] w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={topProducts}
            layout="vertical"
            margin={{ top: 0, right: 12, left: 0, bottom: 0 }}
            accessibilityLayer
          >
            <CartesianGrid horizontal={false} strokeDasharray="3 5" stroke="var(--color-line)" />
            <XAxis
              type="number"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 10, fill: "var(--color-ink-muted)" }}
              tickFormatter={(value) => formatCompactRupiah(Number(value))}
            />
            <YAxis
              type="category"
              dataKey="name"
              width={94}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 10, fill: "var(--color-ink-soft)" }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid var(--color-line)",
                fontSize: 12,
                padding: "8px 12px",
              }}
              formatter={(value) => [formatRupiah(Number(value)), "Pendapatan"]}
            />
            <Bar
              dataKey="revenue"
              name="Pendapatan"
              fill="var(--color-brand)"
              radius={[0, 5, 5, 0]}
              barSize={16}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <table className="sr-only">
        <caption>Data contoh produk terlaris</caption>
        <thead>
          <tr>
            <th scope="col">Produk</th>
            <th scope="col">Terjual</th>
            <th scope="col">Pendapatan</th>
          </tr>
        </thead>
        <tbody>
          {topProducts.map((product) => (
            <tr key={product.name}>
              <th scope="row">{product.name}</th>
              <td>{product.units} unit</td>
              <td>{formatRupiah(product.revenue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
