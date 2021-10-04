import React from "react";
import "./style/graphs.scss"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Legend,
  Line
} from "recharts";
import { graphData1 } from "../../DummyData";

export default function Graphs() {
  return (
    <div className="container ml-3 graphContainer">
      <div className="d-flex ">
        <div className=" bg-white graph1">
          <p>Area Chart</p>
            <AreaChart
                width={500}
                height={400}
                data={graphData1}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#4379de"
                    fill="#4379de"
                />
                <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#e2849a"
                    fill="#e2849a"
                />
                
            </AreaChart>
        </div>
        <div className=" bg-white graph2">
          <p>Yearly Reports</p>
          <LineChart
            width={500}
            height={400}
            data={graphData1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#c0392b"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
