import React from "react";
import { TextSB30 } from "./texts";
import Profile from "./profile";
import StudentsBlock from "./students-block";
import GraphColumn from "./graph-column";

function Dashboard() {
  return (
    <div className="dashboard">
      <Profile />
      <TextSB30 content="DIREKTOR DASHBOARD" />
      <StudentsBlock />
      <GraphColumn />
    </div>
  );
}

export default Dashboard;
