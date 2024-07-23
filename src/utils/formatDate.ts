const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

export const formatDate = (date: Date) => {
  const arr = date.toLocaleDateString("en-US", options).split("/");
  return [arr[2], arr[0], arr[1]].join("-");
};
