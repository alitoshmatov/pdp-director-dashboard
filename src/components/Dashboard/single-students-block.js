import React from "react";
import { TextBold14, TextRegular14, TextRegular16, TextHeavy40 } from "./texts";
import { CalendarIcon } from "../icons";

function SingleStudentsBlock(props) {
  return (
    <div className="data-block sm-block ">
      <div className="flex-row">
        <TextBold14 content="Ro’yxatdan o’tgan talabalar soni" />
        <CalendarIcon />
      </div>
      <div
        className="flex-row"
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <TextHeavy40 content="620" style={{ color: props.color }} />
        <div className="flex-column">
          <TextRegular16 content="+5" style={{ color: props.color }} />
          <TextRegular14 content="in this month" />
        </div>
      </div>
    </div>
  );
}

export default SingleStudentsBlock;
