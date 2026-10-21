"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { chartColors, paymentDistribution } from "@/data/analytics";
import { formatPercent } from "@/lib/format";

export function PaymentChart() {
  return (
    <div className="flex min-w-0 flex-col items-center gap-5 sm:flex-row sm:gap-6">
      <div
        role="img"
        aria-label="Diagram donat distribusi pembayaran: Tunai 35 persen, QRIS 30 persen, Transfer Bank 20 persen, E-Wallet 15 persen."
        className="relative h-[190px] w-[190px] shrink-0"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={paymentDistribution}
              dataKey="value"
              nameKey="name"
              innerRadius="62%"
              outerRadius="88%"
              paddingAngle={2}
              stroke="#ffffff"
              strokeWidth={2}
              isAnimationActive={false}
            >
              {paymentDistribution.map((entry, index) => (
                <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid var(--color-line)",
                fontSize: 12,
                padding: "8px 12px",
              }}
              formatter={(value) => [`${value}%`, "Porsi pembayaran"]}
            />
          </PieChart>
        </ResponsiveContainer>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
        >
          <span className="text-xl font-bold tracking-tight text-ink">100%</span>
          <span className="text-[10px] text-ink-muted">pembayaran</span>
        </div>
      </div>

      <ul className="w-full min-w-0 space-y-2.5">
        {paymentDistribution.map((item, index) => (
          <li key={item.name} className="flex items-center justify-between gap-3">
            <span className="flex min-w-0 items-center gap-2 text-sm text-ink-soft">
              <span
                aria-hidden="true"
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: chartColors[index % chartColors.length] }}
              />
              <span className="truncate">{item.name}</span>
            </span>
            <span className="text-sm font-semibold text-ink">{formatPercent(item.value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
