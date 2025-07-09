import * as React from "react";
import { TData } from "../../types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type TableProps = {
  columns: GridColDef[];
  data: TData[];
  isLoading: boolean;
};

export const Table = ({ columns, data, isLoading }: TableProps) => {
  return (
    <DataGrid
      getRowId={(row) => row.transactionId}
      {...{ loading: isLoading, columns, rows: data }}
    />
  );
};
