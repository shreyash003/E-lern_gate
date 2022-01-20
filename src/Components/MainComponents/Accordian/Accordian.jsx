import { Collapse } from "@mui/material";
import React, { useState } from "react";

const Accordian = ({topic,dataArr,index,initial}) => {

  const [openAccordian,setOpenAccordian]=useState(false)

  const Accordian=()=>{
    setOpenAccordian(!openAccordian)
  }
  return (
    <>
      <div className="drawerAccordianContainer">
 
        <div className="accordianPrimary"><p>{topic}{openAccordian?
        <i  onClick={Accordian}  className="fa fa-chevron-up fa-xs"></i>
        :<i onClick={Accordian} className="fa fa-chevron-down fa-xs"></i> }</p></div>
        <Collapse in={openAccordian} timeout="auto" unmountOnExit>
            <div className="accordianSecondary" >
            {dataArr.map((val,ind)=>{
              return(
              <a href={`#${initial}${index}${ind}`}>{val}</a>

              )
            })}
            
            </div>
        </Collapse>
      </div>
      
    </>
  );
};
export default Accordian;