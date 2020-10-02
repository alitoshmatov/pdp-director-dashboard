import React from "react";
import { TextMedium14, TextMedium10, TextRegular14 } from "./texts";
import { PlusIcon } from "../icons";
import { FormatMoneyNoUZS } from "../format-money";

export default function MentorCourseRow(props) {
  const data = props.data;

  return (
    <div className="flex-row space-between align-center mentor-course-row">
      <div
        className="flex-column"
        style={{ paddingLeft: "30px", width: "200px" }}
      >
        <TextRegular14 content={data.title} style={{ color: "#000" }} />
        <TextRegular14 content={data.modules} />
      </div>
      <div className="flex-column space-between" style={{ width: "100px" }}>
        <TextMedium14 content={data.students.all} />
        <TextMedium10
          content={"+" + data.students.thisMonth}
          style={{ color: "#00B533" }}
        />
      </div>
      <TextMedium14 style={{ width: "100px" }} />

      <TextMedium14
        content={FormatMoneyNoUZS(data.income.all)}
        style={{ width: "100px" }}
      />
      <TextMedium14
        content={FormatMoneyNoUZS(data.income.given)}
        style={{ width: "100px", color: "#00B533" }}
      />
      <TextMedium14
        content={FormatMoneyNoUZS(data.income.left)}
        style={{ width: "100px", color: "#DE1E3A" }}
      />
      <PlusIcon style={{ opacity: "0" }} />
    </div>
  );
}
