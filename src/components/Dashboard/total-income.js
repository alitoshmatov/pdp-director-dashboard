import React from "react";
import {
  TextBold14,
  TextMedium16,
  TextRegular14,
  TextSB30,
  TextHeavy40,
  TextRegular16,
  TextMedium14,
  TextMedium10,
} from "./texts";
import { CalendarIcon } from "../icons";

function TotalIncome() {
  return (
    <div className=" flex-column total-income data-block space-between">
      <div className="flex-row align-center space-between">
        <TextBold14
          style={{ width: "25%" }}
          content="Umumiy tushum. Barcha tiplar bo’yicha"
        />
        <div className="flex-row align-center">
          <TextMedium14 content="Sentabr 2020" />
          <CalendarIcon />
        </div>
      </div>
      <div className="flex-row space-between align-end">
        <div className="type-change-btn flex-row">
          <a href="">BARCHASI</a>
          <a href="" className="active">
            REAL PUL
          </a>
          <a href="">NO REAL PUL</a>
        </div>
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
