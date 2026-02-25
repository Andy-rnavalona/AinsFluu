import ChartExample from "./components/chart-data";
import { ChartPieDonut } from "./components/pie-chart";
import { ChartRadialShape } from "./components/radial-chart";
import DashboardGrid from "./components/card-layout";

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col gap-2">
      <DashboardGrid />
      <div className="grid grid-cols-4">
        <div className="col-span-4">
          <ChartExample />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-2">
          <ChartRadialShape />
        </div>
        <div className="col-span-2">
          <ChartPieDonut />
        </div>
      </div>
    </div>
  );
}
