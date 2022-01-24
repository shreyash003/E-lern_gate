import { Collapse } from "@mui/material";
import React, { useState } from "react";

const Accordian = ({topic,dataArr,index,initial,toggleDrawer}) => {

  const [openAccordian,setOpenAccordian]=useState(false)

  const Accordian=()=>{
    setOpenAccordian(!openAccordian)
  }
  return (
    <>
      <div className="drawerAccordianContainer">
 
        <div  onClick={Accordian}  className="accordianPrimary"><p>{topic}{openAccordian?
        <i  onClick={Accordian}  className="fa fa-chevron-up fa-xs"></i>
        :<i onClick={Accordian} className="fa fa-chevron-down fa-xs"></i> }</p></div>
        <Collapse in={openAccordian} timeout="auto" unmountOnExit>
            <div className="accordianSecondary" >
            {dataArr.map((val,ind)=>{
              return(
                <div key={ind} onClick={toggleDrawer} className="accordianSecondaryLink">
                      <a href={`#${initial}${index}${ind}`}>{val}</a>
                </div>

              )
            })}
            
            </div>
        </Collapse>
      </div>
      
    </>
  );
};
export default Accordian;