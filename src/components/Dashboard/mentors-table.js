import React from "react";
import Calendar from "./calendar";
import { TextBold14, TextBold12 } from "./texts";
import { PlusIcon } from "../icons";
import MentorRow from "./mentor-row";
import { FormatMoneyNoUZS } from "../format-money";

export default function MentorsTable() {
  const data = [
    {
      name: "Alisher Davlatov",
      students: { all: 401, thisMonth: 20 },
      income: {
        all: 11100000,
        given: 9900000,
        left: 23000000,
      },
      courses: [
        {
          title: "Frontend Development",
          modules: "5 ta modul  |  54 ta dars",
          students: { all: 312, thisMonth: 28 },
          income: {
            all: 8300000,
            given: 5300000,
            left: 3000000,
          },
        },
        {
          title: "Backend Development",
          modules: "3 ta modul  |  32 ta dars",
          students: { all: 199, thisMonth: 13 },
          income: {
            all: 5000000,
            given: 4000000,
            left: 1000000,
          },
        },
        {
          title: "Flutter Development",
          modules: "8 ta modul  |  69 ta dars",
          students: { all: 292, thisMonth: 1 },
          income: {
            all: 11900000,
            given: 700000,
            left: 49000000,
          },
        },
      ],
    },
    {
      name: "Nizom Muhammadov",
      students: { all: 300, thisMonth: 13 },
      income: {
        all: 8300000,
        given: 5300000,
        left: 30000000,
      },
      courses: [
        {
          title: "Frontend Development",
          modules: "5 ta modul  |  54 ta dars",
          students: { all: 312, thisMonth: 28 },
          income: {
            all: 8300000,
            given: 5300000,
            left: 3000000,
          },
        },
        {
          title: "Backend Development",
          modules: "3 ta modul  |  32 ta dars",
          students: { all: 199, thisMonth: 13 },
          income: {
            all: 5000000,
            given: 4000000,
            left: 1000000,
          },
        },
        {
          title: "Flutter Development",
          modules: "8 ta modul  |  69 ta dars",
          students: { all: 292, thisMonth: 1 },
          income: {
            all: 11900000,
            given: 700000,
            left: 49000000,
          },
        },
      ],
    },
    {
      name: "Dilshod Mirsoatov",
      students: { all: 200, thisMonth: 11 },
      income: {
        all: 8000000,
        given: 4800000,
        left: 38000000,
      },
      courses: [
        {
          title: "Frontend Development",
          modules: "5 ta modul  |  54 ta dars",
          students: { all: 312, thisMonth: 28 },
          income: {
            all: 8300000,
            given: 5300000,
            left: 3000000,
          },
        },
        {
          title: "Backend Development",
          modules: "3 ta modul  |  32 ta dars",
          students: { all: 199, thisMonth: 13 },
          income: {
            all: 5000000,
            given: 4000000,
            left: 1000000,
          },
        },
        {
          title: "Flutter Development",
          modules: "8 ta modul  |  69 ta dars",
          students: { all: 292, thisMonth: 1 },
          income: {
            all: 11900000,
            given: 700000,
            left: 49000000,
          },
        },
      ],
    },
    {
      name: "Alisher Davlatov",
      students: { all: 401, thisMonth: 20 },
      income: {
        all: 11100000,
        given: 9900000,
        left: 23000000,
      },
      courses: [
        {
          title: "Frontend Development",
          modules: "5 ta modul  |  54 ta dars",
          students: { all: 312, thisMonth: 28 },
          income: {
            all: 8300000,
            given: 5300000,
            left: 3000000,
          },
        },
        {
          title: "Backend Development",
          modules: "3 ta modul  |  32 ta dars",
          students: { all: 199, thisMonth: 13 },
          income: {
            all: 5000000,
            given: 4000000,
            left: 1000000,
          },
        },
        {
          title: "Flutter Development",
          modules: "8 ta modul  |  69 ta dars",
          students: { all: 292, thisMonth: 1 },
          income: {
            all: 11900000,
            given: 700000,
            left: 49000000,
          },
        },
      ],
    },
    {
      name: "Nizom Muhammadov",
      students: { all: 300, thisMonth: 13 },
      income: {
        all: 8300000,
        given: 5300000,
        left: 30000000,
      },
      courses: [
        {
          title: "Frontend Development",
          modules: "5 ta modul  |  54 ta dars",
          students: { all: 312, thisMonth: 28 },
          income: {
            all: 8300000,
            given: 5300000,
            left: 3000000,
          },
        },
        {
          title: "Backend Development",
          modules: "3 ta modul  |  32 ta dars",
          students: { all: 199, thisMonth: 13 },
          income: {
            all: 5000000,
            given: 4000000,
            left: 1000000,
          },
        },
        {
          title: "Flutter Development",
          modules: "8 ta modul  |  69 ta dars",
          students: { all: 292, thisMonth: 1 },
          income: {
            all: 11900000,
            given: 700000,
            left: 49000000,
          },
        },
      ],
    },
    {
      name: "Dilshod Mirsoatov",
      students: { all: 200, thisMonth: 11 },
      income: {
        all: 8000000,
        given: 4800000,
        left: 38000000,
      },
      courses: [
        {
          title: "Frontend Development",
          modules: "5 ta modul  |  54 ta dars",
          students: { all: 312, thisMonth: 28 },
          income: {
            all: 8300000,
            given: 5300000,
            left: 3000000,
          },
        },
        {
          title: "Backend Development",
          modules: "3 ta modul  |  32 ta dars",
          students: { all: 199, thisMonth: 13 },
          income: {
            all: 5000000,
            given: 4000000,
            left: 1000000,
          },
        },
        {
          title: "Flutter Development",
          modules: "8 ta modul  |  69 ta dars",
          students: { all: 292, thisMonth: 1 },
          income: {
            all: 11900000,
            given: 700000,
            left: 49000000,
          },
        },
      ],
    },
  ];

  return (
    <div className="data-block mentors-table">
      <div className="flex-row align-center space-between">
        <TextBold14
          style={{ width: "25%" }}
          content="Mentor ishlab topgan pul"
        />
        <Calendar />
      </div>
      <div className="flex-column">
        <div className="flex-row mentor-table-head space-between">
          <TextBold12 content="MENTOR ISMI" style={{ width: "200px" }} />
          <TextBold12 content="O'QUVCHI" style={{ width: "100px" }} />
          <TextBold12 content="KURSLARI" style={{ width: "100px" }} />
          <TextBold12 content="DAROMAD" style={{ width: "100px" }} />
          <TextBold12 content="BERILDI" style={{ width: "100px" }} />
          <TextBold12 content="QOLDI" style={{ width: "100px" }} />
          <PlusIcon style={{ opacity: "0" }} />
        </div>
        {data.map((item) => {
          return <MentorRow data={item} />;
        })}
        <div className="flex-row overall space-between">
          <TextBold12
            content="Jammi Summa"
            style={{ paddingLeft: "10px", width: "200px" }}
          />
          <TextBold14 content="1020" style={{ width: "100px" }} />
          <TextBold14 content="31" style={{ width: "100px" }} />
          <TextBold14
            content={FormatMoneyNoUZS(21000000)}
            style={{ width: "100px" }}
          />
          <TextBold14
            content={FormatMoneyNoUZS(15000000)}
            style={{ width: "100px", color: "#00B533" }}
          />
          <TextBold14
            content={FormatMoneyNoUZS(6000000)}
            style={{ width: "100px", color: "#DE1E3A" }}
          />
          <PlusIcon style={{ opacity: "0" }} />
        </div>
      </div>
    </div>
  );
}
