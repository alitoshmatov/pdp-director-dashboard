import React from "react";
import { TextSB16, TextMedium14, TextMedium10 } from "./texts";
import { PlusIcon } from "../icons";
import MentorCourseRow from "./mentor-course-row";
import { FormatMoneyNoUZS } from "../format-money";

export default function MentorRow(props) {
  const [isHidden, setIsHidden] = React.useState(true);

  const data = props.data;

  function toggleCourses() {
    setIsHidden(!isHidden);
  }

  return (
    <div className="mentor-table-row">
      <div className="flex-row space-between align-center mentor-table-row-witout-course">
        <TextSB16 content={data.name} style={{ width: "200px" }} />

        <div className="flex-column" style={{ width: "100px" }}>
          <TextMedium14 content={data.students.all} />
          <TextMedium10
            content={"+" + data.students.thisMonth}
            style={{ color: "#00B533" }}
          />
        </div>
        <TextMedium14
          content={data.courses.length + " ta"}
          style={{ width: "100px" }}
        />

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
        <PlusIcon
          onClick={toggleCourses}
          className={isHidden ? "plus-icon" : "plus-icon rotate"}
        />
      </div>
      <div
        className={isHidden ? "mentor-courses hide-courses" : "mentor-courses"}
      >
        {data.courses.map((item) => {
          return <MentorCourseRow data={item} />;
        })}
      </div>
    </div>
  );
}
