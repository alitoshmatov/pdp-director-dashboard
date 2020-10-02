import Chart from "./chart";
import ChartDescription from "./chart-description";
import React from "react";

function SingleGraphChart(props) {
  return (
    <div className="data-block income-chart flex-column">
      <ChartDescription content={props.desc} />
      <Chart data={props.data} />
    </div>
  );
}

export default SingleGraphChart;
