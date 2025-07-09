import React from "react";
import "./App.css";
import { Table } from "./components/Table/Table";
import { useApp } from "./hook/useApp";
import { columns } from "./configs/utils";
import DateRangePicker from "./components/Table/DateRangePicker";

function App() {
  const { data, isLoading, error,handleDateChange } = useApp();
  return (
    <div className="App">
      {isLoading && <div>Loading...</div>}
      <DateRangePicker onChange={handleDateChange} />
      {data && !error && <Table {...{ columns, data, isLoading }} />}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
    </div>
  );
}

export default App;
