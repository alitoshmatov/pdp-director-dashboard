import React from "react";
import SingleStudentsBlock from "./single-students-block";

function StudentsBlock() {
  return (
    <div className="flex-row">
      <SingleStudentsBlock color="black" />
      <SingleStudentsBlock color="#00B533" />
      <SingleStudentsBlock color="#FFB436" />
      <SingleStudentsBlock color="#DE1E3A" />
    </div>
  );
}

export default StudentsBlock;
