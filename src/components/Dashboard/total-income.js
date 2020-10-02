import React from "react";
import { TextBold14, TextRegular14 } from "./texts";
import Calendar from "./calendar";
import TypeChangeBtn from "./type-change-btn";
import FormatMoney from "../format-money";

function TotalIncome() {
  const dataMoney = {
    real: 400000000,
    noreal: 120000000,
    thisMonth: { real: 9000000, noreal: 2000000 },
  };

  const [data, setData] = React.useState({
    main: dataMoney.real + dataMoney.noreal,
    thisMonth: dataMoney.thisMonth.real + dataMoney.thisMonth.noreal,
    activeBtn: 1,
  });

  function showAll() {
    setData({
      main: dataMoney.real + dataMoney.noreal,
      thisMonth: dataMoney.thisMonth.real + dataMoney.thisMonth.noreal,
      activeBtn: 1,
    });
  }
  function showReal() {
    setData({
      main: dataMoney.real,
      thisMonth: dataMoney.thisMonth.real,
      activeBtn: 2,
    });
  }

  function showNoReal() {
    setData({
      main: dataMoney.noreal,
      thisMonth: dataMoney.thisMonth.noreal,
      activeBtn: 3,
    });
  }

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
        <TypeChangeBtn
          showAll={showAll}
          showReal={showReal}
          showNoReal={showNoReal}
          active={data.activeBtn}
        />
        <div className="flex-column align-end">
          <TextBold14
            style={{ color: "black", fontSize: "30px" }}
            content={FormatMoney(data.main)}
          />
          <div className="flex-row">
            <TextRegular14 content="This month:" />
            <TextRegular14
              style={{ color: "#00B533" }}
              content={FormatMoney(data.thisMonth)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalIncome;
