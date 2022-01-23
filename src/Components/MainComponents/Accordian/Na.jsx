import React from 'react'
import Na_ss  from "../../../dataFiles/videoLec/Network_signals_andSystems.json"
import Accordian from './Accordian';



const Na=({toggleDrawer}) =>{
return(
    <>
      <div className="drawerSubContainer">
            <div className="drawerSubName">
              <p id='0641'>Network Theory,Signals and System</p>
            </div>
            {Na_ss.map((val,index) => {
          return <Accordian toggleDrawer={toggleDrawer} index={index} initial='1' key={val.topic} topic={val.topic} dataArr={val.title} />;
        })}
          </div>
    </>)
}
export default Na