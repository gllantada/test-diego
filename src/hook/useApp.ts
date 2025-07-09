import { useState, useEffect } from "react";
import { fetchTransactionData } from "../service/fetchTransactionData";
import { TData, TRangeDate } from "../types";

export const useApp = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TData[]>([]);
  const handleDateChange = (rangeDate: TRangeDate) => {
    fetchTransactionData(rangeDate)
      .then((data) => {
        if (data) {
          setData(data);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    fetchTransactionData({})
      .then((data) => {
        setIsLoading(false);
        if (data) {
          setData(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);
  return { data, isLoading, error, handleDateChange };
};
