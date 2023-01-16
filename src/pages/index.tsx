import { type NextPage } from "next";
import Head from "next/head";
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

import { api } from "../utils/api";

const Home: NextPage = () => {
  const { data } = api.labor_stats.getEmploymentByGeography.useQuery({
    geography: "Canada ",
    typeOfEmployee: "Salaried employees paid a fixed salary",
  });

  const chartData = [
    {
      dataKey: "forestry_logging_and_support",
      fill: "#3AB795",
      name: "Forestry",
    },
    {
      dataKey: "mining_quarrying_and_oil_and_gas_extraction",
      fill: "#A0E8AF",
      name: "Mining",
    },
    { dataKey: "utilities", fill: "#86BAA1", name: "Utilities" },
    { dataKey: "construction", fill: "#EDEAD0", name: "Construction" },
    { dataKey: "manufacturing", fill: "#FFCF56", name: "Manufacturing" },
  ];

  const formatTick = (value: number) => {
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
    }).format(value);
  };

  const Chart = () => {
    return (
      <div className="m-2 flex w-full flex-col items-center rounded border border-gray-400 lg:mx-8 lg:w-1/2 lg:py-4">
        <h1 className="text-2xl font-bold text-gray-700">
          Employment by Industry
        </h1>

        <ResponsiveContainer width="95%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              interval={1}
              // tickFormatter={(value): string => {
              //   const months = [
              //     "Jan",
              //     "Feb",
              //     "Mar",
              //     "Apr",
              //     "May",
              //     "Jun",
              //     "Jul",
              //     "Aug",
              //     "Sep",
              //     "Oct",
              //     "Nov",
              //     "Dec",
              //   ];
              //   const dateArr = value.split(" ");
              //   const month = months.indexOf(dateArr[0]?.slice(0, 3));
              //   const year = dateArr[1]?.slice(-2);
              //   return `${months[month]} ${year}`;
              // }}
            />
            <YAxis tickFormatter={(value): string => value.toLocaleString()} />
            <Tooltip
              formatter={(value) => value && value.toLocaleString()}
              wrapperStyle={{ outline: "none" }}
            />
            <Legend />
            {chartData.map((item) => {
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

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <div>Hi there</div>
        <div className="flex w-full flex-col lg:flex-row">
          {data && <Chart />}
          {data && <Chart />}
        </div>
        {/* </div> */}
      </main>
    </>
  );
};

export default Home;
