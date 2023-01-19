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

interface xAxisData {
  dataKey: string;
  fill: string;
  name: string;
}

import { shortenNumber } from "../utils/formatter";

const LineGraph = (props: {
  title: string;
  xAxisData: xAxisData[];
  chartData: any;
}) => {
  return (
    <div className="m-2 flex w-full flex-col items-center rounded border border-gray-400 lg:w-1/2">
      <h1 className="text-2xl font-bold text-gray-700">{props.title}</h1>

      <ResponsiveContainer width="95%" height={300}>
        <LineChart data={props.chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" interval={1} />
          <YAxis
            tickFormatter={(value): string => shortenNumber(value as number)}
          />
          <Tooltip
            formatter={(value): string => shortenNumber(value as number)}
            wrapperStyle={{ outline: "none" }}
          />
          <Legend />
          {props.xAxisData.map((item) => {
            return (
              <Line
                key={item.name}
                type="monotone"
                name={item.name}
                dataKey={item.dataKey}
                stroke={item.fill}
                fill={item.fill}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
