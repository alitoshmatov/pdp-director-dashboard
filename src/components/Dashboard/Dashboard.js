import React from "react";
import { TextSB30 } from "./texts";
import Profile from "./profile";
import StudentsBlock from "./students-block";
import GraphColumn from "./graph-column";
import RadialCharts from "./radial-charts";
import MentorsTable from "./mentors-table";

function Dashboard() {
  return (
    <div className="dashboard">
      <Profile />
      <TextSB30 content="DIREKTOR DASHBOARD" />
      <StudentsBlock />
      <div className="flex-row">
        <GraphColumn />
        <RadialCharts />
      </div>
      <MentorsTable />
    </div>
  );
}

export default Dashboard;
