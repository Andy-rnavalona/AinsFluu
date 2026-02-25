"use client";

import { TrendingDown, TrendingUp, BarChart2, Sigma } from "lucide-react";

export default function DashboardGrid() {
  const cards = [
    {
      label: "Min",
      value: "€12.000",
      icon: TrendingDown,
      accent: "#6366f1",
      bg: "rgba(99,102,241,0.08)",
    },
    {
      label: "Max",
      value: "€12.000",
      icon: TrendingUp,
      accent: "#10b981",
      bg: "rgba(16,185,129,0.08)",
    },
    {
      label: "Moyenne",
      value: "€12.000",
      icon: BarChart2,
      accent: "#f59e0b",
      bg: "rgba(245,158,11,0.08)",
    },
    {
      label: "Somme Total",
      value: "€12.000",
      icon: Sigma,
      accent: "#3b82f6",
      bg: "rgba(59,130,246,0.08)",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 8,
        }}
        className="col-span-4"
      >
        {cards.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="card-in border border-gray-200 rounded-sm p-4 relative overflow-hidden"
            style={{
              background: "transparent",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 10,
                background: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <Icon size={10} style={{ color: "white" }} strokeWidth={2.2} />
            </div>

            {/* Label */}
            <p className="text-xs text-gray-400 tracking-wide mb-1">{label}</p>
            <div>
              <span className="text-xl font-semibold text-gray-800">
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
