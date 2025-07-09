import { resolve } from "path";
import { MOCK_DATA } from "../configs/mocks";
import { TData } from "../types";
import dayjs from "dayjs";

export const fetchTransactionData = async ({
  startDate,
  endDate,
}: {
  startDate?: any;
  endDate?: any;
}): Promise<TData[] | null> => {
  return new Promise((resolve, reject) => {
    if (startDate && endDate) {
      const filteredData: TData[] = MOCK_DATA.filter((item) => {
        const currentDate = dayjs(item.date, "DD-MM-YYYY");
        return currentDate >= startDate && currentDate <= endDate;
      });
      setTimeout(() => {
        resolve(filteredData);
      }, 1000);
    }
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }
    const fail = getRandomInt(2) === 2;
    if (fail) {
      setTimeout(() => {
        reject(new Error("Failed to fetch transaction data"));
      }, 500);
    } else {
      setTimeout(() => {
        resolve(MOCK_DATA);
      }, 1000);
    }
  });
};
