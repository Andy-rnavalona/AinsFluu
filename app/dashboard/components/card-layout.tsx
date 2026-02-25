"use client";

import { ChartRadialStacked } from "./radial-chart-stacked";

export default function DashboardGrid() {
  const baseStyle = {
    background: "transparent",
    padding: 15,
    display: "flex",
    borderRadius: 10,
    flexDirection: "column",
    gap: 12,
    color: "#e2e8f0",
  } as React.CSSProperties;

  return (
    <div className="grid grid-cols-4 gap-2">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 8,
        }}
        className="col-span-3"
      >
        <div
          style={{ ...baseStyle }}
          className="card-in border border-gray-300 relative"
        >
          <p>Min</p>
          <div className="absolute bottom-5">
            <span className="font-semibold text-black">€12.000</span>
          </div>
        </div>
        <div
          style={{ ...baseStyle }}
          className="card-in border border-gray-300"
        >
          <p>Max</p>
          <span className="font-semibold text-black">€12.4k</span>
        </div>
        <div
          style={{ ...baseStyle }}
          className="card-in border border-gray-300"
        >
          <p>Moyenne</p>
          <span className="font-semibold text-black">€12.4k</span>
        </div>
        <div
          style={{ ...baseStyle }}
          className="card-in border border-gray-300"
        >
          <p>Somme Total</p>
          <span className="font-semibold text-black">€12.4k</span>
        </div>
      </div>
      <div className="col-span-1">
        <ChartRadialStacked />
      </div>
    </div>
  );
}
