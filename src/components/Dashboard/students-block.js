import React from "react";
import SingleStudentsBlock from "./single-students-block";

function StudentsBlock() {
  return (
    <div className="flex-row">
      <SingleStudentsBlock
        color="black"
        title="Ro’yxatdan o’tgan talabalar soni"
        studentsNumber="620"
        thisMonth="25"
      />
      <SingleStudentsBlock
        color="#00B533"
        title="Aktiv talabalar soni"
        studentsNumber="150"
        thisMonth="12"
      />
      <SingleStudentsBlock
        color="#FFB436"
        title="Bitirgan talabalar soni"
        studentsNumber="130"
        thisMonth="7"
      />
      <SingleStudentsBlock
        color="#DE1E3A"
        title="To’xtab qolgan talabalar soni"
        studentsNumber="34"
        thisMonth="3"
      />
    </div>
  );
}

export default StudentsBlock;
