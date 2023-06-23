import React, { FunctionComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { useEffect, useState } from "react";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import axios from "axios";

const colors = scaleOrdinal(schemeCategory10).range();


const data = [];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};


const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Analytics() {
  useEffect(() => {
    axios
      .get("http://localhost:5003/userdata", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        axios
          .post(
            "http://localhost:5003/enterroom/" +
              localStorage.getItem("roomid") +
              "/" +
              localStorage.getItem("userid")
          )
          .then((res) => {
            console.log(res.data.exists.represents);
            let r = 0;
            const represents = res.data.exists.represents;
            for (let i in represents) {
              const data_1 = {
                name: r,
                uv: represents[i].count,
              };
              data.push(data_1);
             r+=1;
            }
            console.log(data);
          });
      });
  }, []);
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar
        dataKey="uv"
        fill="#8884d8"
        shape={data ? <TriangleBar />: null}
        label={{ position: "top" }}
      >
        {data && data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}
