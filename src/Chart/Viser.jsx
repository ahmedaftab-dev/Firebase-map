import React,{useState} from "react";
import { Chart, Tooltip, Axis, Legend, StackArea, Line } from "viser-react";
import { simpleData } from "./ChartData";
import moment from "moment";
const scale = [
  {
    dataKey: "y",
    type: "linear",
    tickInterval: 5
  }
];

export const ViserArea = ()=> {
  // const data=[ ...simpleData().map((d, i) => ({ ...d})),]
  const [data,setData]=useState([ ...simpleData().map((d, i) => ({ ...d})),])
  // state = {
  //   data: [
  //     ...simpleData().map((d, i) => ({ ...d})),
      
  //   ]
  // };
  
    // const { data } = this.state;
    return (
      <div >
        <Chart forceFit height={150} data={data} scale={scale}>
          <Tooltip />
          <Axis
            dataKey="x"
            label={{ formatter: text => moment(text).format("mm:ss") }}
          />
          <Legend />
          <Line position="x*y" size={2} color="type" adjust="stack" />
          <StackArea position="x*y" color="type" />
        </Chart>
      </div>
    );
}
