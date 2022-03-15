import React from "react";
import Accordian from "./Accordian";
import AcData from "../../../dataFiles/videoLec/Analog_Circuit.json"

const Ac = ({toggleDrawer}) => {
  return (
    <>
      <div className="drawerSubContainer">
        <div className="drawerSubName">
          <p>Analog Circuit</p>
        </div>
        {AcData.map((val,index) => {
          return <Accordian initial='2' toggleDrawer={toggleDrawer} index={index} key={val.topic} topic={val.topic} dataArr={val.title} />;
        })}
      </div>
    </>
  );
};
export default Ac;
