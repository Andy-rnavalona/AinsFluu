import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import { analyzeColumns } from "./lib/dataAnalizer";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json(
      { error: "No file uploaded" },
      { status: 400 }
    );
  }

  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(worksheet, {
    defval: null,
  });

  const columnsStats = analyzeColumns(data);

  return NextResponse.json({
    sheetName,
    cleanData: columnsStats,
  });
}