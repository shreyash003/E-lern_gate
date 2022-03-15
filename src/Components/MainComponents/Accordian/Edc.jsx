import React from "react";
import Accordian from "./Accordian";
import EdcData from "../../../dataFiles/videoLec/Electronic_Devices.json"

const Edc = ({toggleDrawer}) => {
  return (
    <>
      <div className="drawerSubContainer">
        <div className="drawerSubName">
          <p>Electronic Devices</p>
        </div>
        {EdcData.map((val,index) => {
          return <Accordian initial='3' toggleDrawer={toggleDrawer} index={index} key={val.topic} topic={val.topic} dataArr={val.title} />;
        })}
      </div>
    </>
  );
};
export default Edc;
