import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { xAxisData, chartData } from "../types";

import { shortenNumber } from "../utils/formatter";

const AreaGraph = (props: {
  title: string;
  xAxisData: xAxisData[];
  chartData: chartData[] | undefined;
}) => {
  return (
    <div className="m-2 flex w-full flex-col items-center rounded border border-gray-400 lg:w-1/2">
      <h1 className="text-2xl font-bold text-gray-700">{props.title}</h1>

      <ResponsiveContainer width="95%" height={300}>
        <AreaChart data={props.chartData}>
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
              <Area
                key={item.name}
                type="monotone"
                name={item.name}
                dataKey={item.dataKey}
                stroke={item.fill}
                fill={item.fill}
                stackId="1"
              />
            );
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaGraph;
