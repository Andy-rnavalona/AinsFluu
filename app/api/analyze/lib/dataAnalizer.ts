/* eslint-disable @typescript-eslint/no-explicit-any -- need it because we don't know the exact structure of the data */
export type ColumnType = "number" | "date" | "category";

export interface ColumnStats {
  type: ColumnType;
  name: string;
  min?: number;
  max?: number;
  avg?: number;
  sum?: number;
  count?: number;
  unique?: number;
  top?: string;
  grouped?: Record<string, any>;
}

export function analyzeColumns(data: any[]): ColumnStats[] {
  if (data.length === 0) return [];

  const columns = Object.keys(data[0]);
  const stats: ColumnStats[] = [];

  columns.forEach((col) => {
    const values = data
      .map((row) => row[col])
      .filter((v) => v !== null && v !== undefined);

    // Test numeric
    const numericValues = values.map(Number).filter((v) => !isNaN(v));
    if (numericValues.length === values.length) {
      const sum = numericValues.reduce((a, b) => a + b, 0);
      const avg = sum / numericValues.length;
      stats.push({
        name: col,
        type: "number",
        min: Math.min(...numericValues),
        max: Math.max(...numericValues),
        sum,
        avg,
        count: numericValues.length,
      });
      return;
    }
    // Test date (regroupement)
    const dateValues = values
      .map((v, i) => {
        const d = new Date(v);
        return isNaN(d.getTime())
          ? null
          : { date: d.toISOString().slice(0, 10), row: data[i] };
      })
      .filter(Boolean);

    if (dateValues.length === values.length) {
      // Grouper par date
      const grouped: Record<string, any> = {};
      dateValues.forEach((item) => {
        const date = item!.date; // "2025-01-01"
        const key = date.slice(0, 7); // "2025-01" pour regrouper par mois
        const row = item!.row;
        const category = row["Category"]; 
        if (!grouped[key]) grouped[key] = {};
        if (!grouped[key][category]) {
          grouped[key][category] = { Quantity: row['Quantity'], Amount: row['Amount'] }; 
        } else {
          Object.keys(row).forEach((field) => {
            if (typeof row[field] === "number") {
              grouped[key][category][field] += row[field];
            }
          });
        }
      });

      stats.push({ name: col, type: "date", grouped });
      return;
    }

    const freqMap: Record<string, number> = {};
    values.forEach((v) => {
      const key = String(v);
      freqMap[key] = (freqMap[key] || 0) + 1;
    });
    const sorted = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);
    stats.push({
      name: col,
      type: "category",
      unique: Object.keys(freqMap).length,
      top: sorted[0][0],
      count: values.length,
    });
  });

  return stats;
}
