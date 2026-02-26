"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "a12f9c3d",
    amount: 250,
    status: "success",
    email: "client1@mail.com",
  },
  {
    id: "b87d4e21",
    amount: 75,
    status: "failed",
    email: "client2@mail.com",
  },
  {
    id: "c91e7a56",
    amount: 180,
    status: "pending",
    email: "client3@mail.com",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
