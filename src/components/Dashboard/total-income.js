import React from "react";
import { TextBold14, TextRegular14 } from "./texts";
import Calendar from "./calendar";
import TypeChangeBtn from "./type-change-btn";

function TotalIncome() {
  return (
    <div className=" flex-column total-income data-block space-between">
      <div className="flex-row align-center space-between">
        <TextBold14
          style={{ width: "25%" }}
          content="Umumiy tushum. Barcha tiplar bo’yicha"
        />
        <Calendar />
      </div>
      <div className="flex-row space-between align-end">
        <TypeChangeBtn />
        <div className="flex-column align-end">
          <TextBold14
            style={{ color: "black", fontSize: "30px" }}
            content="450.000.000 UZS"
          />
          <div className="flex-row">
            <TextRegular14 content="This month: " />
            <TextRegular14 style={{ color: "#00B533" }} content="12.000.000" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalIncome;
