import React from "react";
import SingleRadialChartBlock from "./single-radial-chart-block";

function RadialCharts() {
  const allStudentsRatio = {
    isMoney: false,
    values: [620, 780],
    labels: ["Sotib olgan", "Ro'yhatdan o'tgan"],
    subTitle: "Jami foydalanuvchilar",
  };

  const moneyCoursesRatio = {
    isMoney: true,
    values: [140000000, 200000000, 150000000, 30000000],
    labels: [
      "Frontend Development",
      "Backend Development",
      "Android development",
      "Flutter Development",
    ],
    subTitle: "Jami pul",
  };
  const studentsCoursesRatio = {
    isMoney: false,
    values: [127, 142, 105, 291],
    labels: [
      "Frontend Development",
      "Backend Development",
      "Android development",
      "Flutter Development",
    ],
    subTitle: "Jami foydalanuvchilar",
  };

  return (
    <div className="radial-charts flex-column">
      <SingleRadialChartBlock data={allStudentsRatio} />
      <SingleRadialChartBlock data={moneyCoursesRatio} />
      <SingleRadialChartBlock data={studentsCoursesRatio} />
    </div>
  );
}

export default RadialCharts;
