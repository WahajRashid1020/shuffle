"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
}

const CustomizedDot = (props: any) => {
  const { cx, cy, fill } = props;
  return (
    <svg x={cx - 5} y={cy - 5} width={10} height={10} fill={fill}>
      <circle cx={5} cy={5} r={5} />
    </svg>
  );
};

const CustomizedAxisTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} fill="#666" transform="rotate(0)">
        {payload.value}
      </text>
    </g>
  );
};

const DarkLineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="linear"
          dataKey="value"
          stroke="#FF5000"
          activeDot={{ r: 8 }}
          dot={<CustomizedDot />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DarkLineChart;
