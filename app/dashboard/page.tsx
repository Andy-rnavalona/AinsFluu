"use client";

import DashboardGrid from "./components/card-layout";
import { ChartRadialStacked } from "./components/radial-chart-stacked";
import { ChartAreaInteractive } from "./components/area-chart";
import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { ChartPieDonut } from "./components/pie-chart";
import { DataTable } from "./components/payements/data-table";
import { columns, payments } from "./components/payements/columns";

export default function Dashboard() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between gap-4 items-center">
        <div className="flex flex-col space-y-0">
          <h1 className="font-semibold text-xl">Dashboard</h1>
          <span className="text-xs text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          </span>
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="default"
                size={"sm"}
                className="cursor-pointer p-0"
              >
                <Plus className="w-4 h-4" />
                <span className="text-xs font-normal">Analyze</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="w-100 p-4">
              <DialogHeader>
                <DialogTitle className="text-sm">
                  Are you absolutely sure?
                </DialogTitle>
                <DialogDescription className="text-xs">
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <Empty className="border border-dashed">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <Upload className="w-2 h-2" />
                  </EmptyMedia>
                  <EmptyTitle className="text-xs">
                    Cloud Storage Empty
                  </EmptyTitle>
                  <EmptyDescription className="text-xs">
                    Upload files to your cloud storage to access them anywhere.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Input
                    ref={fileInputRef}
                    id="file-excel"
                    type="file"
                    className="hidden"
                    accept=".xls,.xlsx"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFileName(file.name);
                      }
                    }}
                  />

                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <span className="text-xs font-normal">Upload File</span>
                  </Button>
                  {fileName && (
                    <span className="text-xs text-gray-600 truncate max-w-50">
                      {fileName}
                    </span>
                  )}
                </EmptyContent>
              </Empty>
              <DialogFooter>
                <DialogClose asChild>
                  <Button size={"sm"} variant="outline">
                    <span className="text-xs font-normal">Cancel</span>
                  </Button>
                </DialogClose>
                <Button size={"sm"} type="submit">
                  <span className="text-xs font-normal">Save changes</span>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-2">
        <div className="col-span-3 flex flex-col gap-2">
          <DashboardGrid />
          <div className="grid grid-cols-4">
            <div className="col-span-4">
              <ChartAreaInteractive />
            </div>
          </div>
          <DataTable columns={columns} data={payments} />
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <ChartPieDonut />
          <ChartRadialStacked />
        </div>
      </div>
    </div>
  );
}
