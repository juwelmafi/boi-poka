import React from "react";
import { useLoaderData } from "react-router";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const PagesToRead = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mt-10  overflow-x-scroll">
      <BarChart data={data} width={600} height={400} className="mx-auto">
        <Bar dataKey="totalPages" fill="green"></Bar>
        <XAxis dataKey="bookName"></XAxis>
        <YAxis></YAxis>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
