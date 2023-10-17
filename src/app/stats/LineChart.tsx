import React from "react";
import ReactApexChart from "react-apexcharts";

const MyChart: React.FC = () => {
  const chartOptions = {
    theme: {
      mode: "dark" as "dark",
    },
    toolbar: {
      style: {
        fontSize: "16px",
        color: "#FF5000",
      },
    },
    dataLabels: {
      enabled: false,
    },
    chart: {
      background: "transparent",
      zoom: {
        enabled: false, // Disable zooming
      },
      selection: {
        enabled: false, // Disable selection
      },
      toolbar: {
        show: false, // Hide the toolbar, including the reset zoom button
      },
    },
    colors: ["#FF5000"],
    tooltip: {
      style: {
        fontSize: "16px",
        color: "#FF5000",
      },
    },
  };

  const chartSeries = [
    {
      name: "Series 1",
      data: [
        30, 40, 35, 150, 490, 60, 170, 91, 125, 0, 150, 490, 60, 170, 91, 125,
      ],
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
      <style>
        {`
          .apexcharts-menu-item {
            color: #FF5000; /* Change the color to the one you want */
          }
        `}
      </style>
    </div>
  );
};

export default MyChart;
