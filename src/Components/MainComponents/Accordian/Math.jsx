import React from "react";
import Accordian from "./Accordian";
import mathData from "../../../dataFiles/videoLec/MathLec.json";

const Math = () => {
  return (
    <>
      <div className="drawerSubContainer">
        <div className="drawerSubName">
          <p>Math</p>
        </div>
        {mathData.map((val,index) => {
          return <Accordian initial='0' index={index} key={val.topic} topic={val.topic} dataArr={val.title} />;
        })}
      </div>
    </>
  );
};
export default Math;
