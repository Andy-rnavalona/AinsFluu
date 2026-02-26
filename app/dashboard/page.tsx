import DashboardGrid from "./components/card-layout";
import { ChartRadialStacked } from "./components/radial-chart-stacked";
import CardAnomalie from "./components/card-anomalie";
import { ChartAreaInteractive } from "./components/area-chart";

export default function Dashboard() {
  return (
    <div className="w-full grid grid-cols-4 gap-2">
      <div className="col-span-3 flex flex-col gap-2">
        <DashboardGrid />
        <div className="grid grid-cols-4">
          <div className="col-span-4">
            <ChartAreaInteractive />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <ChartRadialStacked />
        <div>
          <CardAnomalie />
        </div>
      </div>
    </div>
  );
}
