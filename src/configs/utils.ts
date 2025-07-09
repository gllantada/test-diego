import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "transactionId",
    headerName: "Transaction ID",
    width: 150,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
];
