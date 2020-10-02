import React from "react";
import Menu from "./Menu/Menu";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="app flex-row">
      <Router>
        <Menu />
        <Route path="/" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
