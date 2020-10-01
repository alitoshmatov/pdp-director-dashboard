import React from "react";
import Menu from "./Menu/Menu";
import Dashboard from "./Dashboard/Dashboard";
import CustomChart from "./Dashboard/chart";

function App() {
  return (
    <div className="app flex-row">
      <Menu />
      <Dashboard />
    </div>
  );
}

export default App;
