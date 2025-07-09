import * as React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TRangeDate } from "../../../types";

type TBasicDateRangePicker = {
  onChange: (rangeDate: TRangeDate) => void;
  defaultValues?: {
    startDate: any;
    endDate: any;
  };
};
export default function BasicDateRangePicker({
  onChange,
  defaultValues,
}: TBasicDateRangePicker) {
  const [startDate, setStartDate] = React.useState<any | undefined>(null);
  const [endDate, setEndDate] = React.useState<any | undefined>(null);
  const [rangeDate, setRangeDate] = React.useState<TRangeDate | undefined>(
    defaultValues
  );
  React.useEffect(() => {
    if (startDate && endDate) {
      setRangeDate({ startDate, endDate });
      onChange({ startDate, endDate });
    }
  }, [startDate, endDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={startDate}
        onChange={(newValue) => {
          setStartDate(newValue);
        }}
      />
      <DatePicker
        value={endDate}
        onChange={(newValue) => {
          setEndDate(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
