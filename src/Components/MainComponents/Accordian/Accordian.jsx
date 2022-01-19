import { Collapse } from "@mui/material";
import React, { useState } from "react";

const Accordian = ({topic,dataArr}) => {

  const [openAccordian,setOpenAccordian]=useState(false)

  const Accordian=()=>{
    setOpenAccordian(!openAccordian)
  }
  return (
    <>
      <div className="drawerAccordianContainer">
        <div className="accordianPrimary"><p>{topic}<i onClick={Accordian} className="fa fa-chevron-down fa-xs"></i></p></div>
        <Collapse in={openAccordian} timeout="auto" unmountOnExit>
            <div className="accordianSecondary" >
            {dataArr.map((val)=>{
              return(
              <p>{val}</p>

              )
            })}
            
            </div>
        </Collapse>
      </div>
      
    </>
  );
};
export default Accordian;
