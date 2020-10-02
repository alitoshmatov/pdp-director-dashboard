import React from "react";
import DonutChart from "./donut-chart";
import TitleAndCalendar from "./title-calendar";

function SingleRadialChartBlock(props) {
  const data = props.data;
  return (
    <div className="data-block single-radial-chart flex-column  space-between">
      <TitleAndCalendar title="Sotib olgan va ro’yxatdan o’tganlar nisbati" />
      <DonutChart data={data} />
    </div>
  );
}

export default SingleRadialChartBlock;
