import React from "react";
import Chart from "react-apexcharts";
import FormatMoney, { MillionToM } from "../format-money";

function CustomChart(props) {
  // Setting fake data

  let data = props.data;
  //
  let state = {
    options: {
      grid: {
        show: true,
        borderColor: "#f9f9f9",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          right: 25, //this value should be same but opposite sign value with options>chart>toolbar>offsetX
        },
        // row: {
        //   colors: ["#f9f9f9", "transparent"],
        //   opacity: 1,
        // },  ///----------------Optional styling to color rows
      },
      markers: {
        size: 0,
        colors: ["#00B533", "#ffb436"],
        strokeColors: "#fff",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: 7,
          colors: ["#00B533", "#ffb436"],
        },
      },
      stroke: {
        show: true,

        lineCap: "butt",
        colors: ["#00B533", "#ffb436"],
        width: 1,
        dashArray: 0,
      },

      tooltip: {
        marker: {
          fillColors: ["#00B533", "#ffb436"],
        },
        y: {
          formatter: function (value) {
            if (data.isMoney) {
              return FormatMoney(value);
            } else {
              return value;
            }
          },
        },
      },
      chart: {
        id: "basic-bar",
        toolbar: {
          show: true,
          offsetX: -15, //this value should be same but opposite sign value with options>grid>padding>right
        },
      },
      xaxis: {
        categories: data.xAxis,
        labels: {
          show: true,
          rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: false,
          minHeight: undefined,
          maxHeight: 120,
          style: {
            colors: "#ABB0B4",
            fontSize: "10px",
            fontFamily: "SF-Regular",
            cssClass: "apexcharts-xaxis-label",
          },
          offsetX: 0,
          offsetY: 0,
          format: undefined,
          formatter: (value) => {
            return value + " " + data.month;
          },
          datetimeUTC: true,
          datetimeFormatter: {
            year: "yyyy",
            month: "MMM 'yy",
            day: "dd MMM",
            hour: "HH:mm",
          },
        },

        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#ABB0B4",
            fontSize: "10px",
            fontFamily: "SF-Regular",
          },
          formatter: (value) => {
            if (data.isMoney) {
              return MillionToM(value);
            } else {
              return value;
            }
          },
        },
        title: {
          text: undefined,
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "12px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },

      legend: {
        show: false,
        markers: {
          fillColors: ["#00B533", "#ffb436"],
        },
      },
    },
    series: [
      {
        name: data.lineTitle[0],
        data: data.line[0],
      },
      {
        name: data.lineTitle,
        data: data.line[1],
      },
    ],
  };

  return (
    <div>
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="100%"
            height="250px"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomChart;
