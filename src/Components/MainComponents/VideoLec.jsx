import React, { useState,useEffect, useRef } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import IconButton from "@mui/material/IconButton";
import { Collapse } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Math from "./Accordian/Math";
import Na from "./Accordian/Na";
import Ac from "./Accordian/Ac";
import Edc from "./Accordian/Edc";
import MainMath from "./lecMainFiles/MainMath";
import NaMain from "./lecMainFiles/NaMain";
import AcMain from "./lecMainFiles/AcMain";
import MainEdc from "./lecMainFiles/MainEdc";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Button from "@mui/material/Button";
import ClickAwayListener from 'react-click-away-listener';




const VideoLec = () => {
  const [subColl, setSubColl] = useState(false);

  const [drawer, setDrawer] = useState(true);

 

  const openSubColl = () => {
    setSubColl(!subColl);
    console.log("open");
  };

  const toggleDrawer = () => {
    setDrawer(!drawer);
    const Drawer = document.querySelector(".lecDrawer");
    if (drawer) {
      Drawer.classList.add("lecDrawerOpen");
    } else {
      Drawer.classList.remove("lecDrawerOpen");
    }
  };

  const handleListner=()=>{
    const Drawer = document.querySelector(".lecDrawer");
    
    if(drawer){
      Drawer.classList.remove("lecDrawerOpen");
      
    }
    setDrawer(!drawer)
  }

  const [show,setShow]=useState(false);

  const onScroll=()=>{
    // console.log(window.scrollY)
    if(window.scrollY>330){
      setShow(true)
    }else{
      setShow(false)
    }
  }
  
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
 


  
  useEffect(()=>{
    window.addEventListener("scroll",onScroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
    return(()=>{
      window.removeEventListener("scroll",onScroll)
    })
  },[])

  function scrollToele(e) { 
    const offy=e.target.id
    window.scrollTo({
      top: offy,
      behavior: 'smooth',
    });
  }
 
  
  return (
    <>
      <main role="main" className="lecMainDiv">
        <nav className="lecSubNav">
          <section className="lecDrawerIcon">
            <IconButton  onClick={toggleDrawer} sx={{ width: "2rem" }}>
              {drawer ? (
                <ArrowCircleRightIcon  sx={{color:"#f5f6fa"}} fontSize="large" />
              ) : (
                <ArrowCircleLeftIcon sx={{color:"#f5f6fa"}} fontSize="large" />
              )}
            </IconButton>
          </section>
          <section className="lecSubNavSec">
            <p id='80' onClick={scrollToele}>Maths</p>
            <p id='8473' onClick={scrollToele} >Network Analysis Signals and Systems</p>
            <p onClick={scrollToele}>Analog Circuits</p>
            <p onClick={scrollToele}>Electronic Devices</p>
          </section>
          <div className="lecSubNavColl">
            <button type="button" onClick={openSubColl}>
              Subjects<i className="fa fa-chevron-down"></i>
            </button>
          </div>
        </nav>
          <Collapse  in={subColl} timeout="auto" unmountOnExit>
        <div className="navSubCollapse">
              <Button onClick={openSubColl} sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>Home</Button>
              <Button onClick={openSubColl}   sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>Video Lec</Button>
              <Button onClick={openSubColl}  sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>Notes</Button>
              <Button onClick={openSubColl}  sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>MockTest</Button>
        </div>
          </Collapse>



        <div  className="lecDrawer">
          <Math toggleDrawer={toggleDrawer}  />
          <Na  toggleDrawer={toggleDrawer}/>
          <Ac toggleDrawer={toggleDrawer}/>
          <Edc toggleDrawer={toggleDrawer}/>
        </div>


      <div className="lecContentDiv">
            <section className="lecHeaderDiv">
              <p  id='top'>Lets Get Started...</p>
            </section>
            <section className="lecContentContainer">
                <MainMath/>
                <NaMain/>
                <AcMain/>
                <MainEdc/>
            </section>
      </div>
        <div className="toTop">
            <IconButton   size="large">
              {show && <KeyboardDoubleArrowUpIcon onClick={topFunction} htmlColor="#f5f6fa" fontSize="2rem"/>}
            </IconButton>
        </div>
      </main>
    </>
  );
}; 
export default VideoLec;
