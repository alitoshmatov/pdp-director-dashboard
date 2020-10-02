import React from "react";
import { TextRegular14, TextRegular16, TextHeavy40 } from "./texts";
import TitleAndCalendar from "./title-calendar";

function SingleStudentsBlock(props) {
  return (
    <div className="data-block sm-block ">
      <TitleAndCalendar title={props.title} />
      <div className="flex-row align-center space-between">
        <TextHeavy40
          content={props.studentsNumber}
          style={{ color: props.color }}
        />
        <div className="flex-column">
          <TextRegular16
            content={"+" + props.thisMonth}
            style={{ color: props.color }}
          />
          <TextRegular14 content="in this month" />
        </div>
      </div>
    </div>
  );
}

export default SingleStudentsBlock;
