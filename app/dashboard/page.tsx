import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChartExample from "./components/chart-data";
import { ChartPieDonut } from "./components/pie-chart";
import { ChartRadialShape } from "./components/radial-chart";

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="grid grid-cols-4 gap-4">
        <Card className="text-xs rounded-sm shadow-none">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-3">
          <ChartExample />
        </div>
        <div className="col-span-1">
          <ChartPieDonut />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-1">
          <ChartRadialShape />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
