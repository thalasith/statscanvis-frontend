export const formatDate = (value: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateArr = value.split(" ");
  const month = months.indexOf((dateArr[0] || "January")?.slice(0, 3));
  const year = (dateArr[1] || "2020")?.slice(-2);
  return `${months[month] || "Jan"} ${year}` || "Jan 20";
};

export const shortenNumber = (value: number): string => {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
};
