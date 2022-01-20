import React, { useState,useEffect } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import IconButton from "@mui/material/IconButton";
import { Collapse } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Math from "./Accordian/Math";
import Na from "./Accordian/Na";
import MainMath from "./lecMainFiles/MainMath";
import NaMain from "./lecMainFiles/NaMain";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Button from "@mui/material/Button";



const VideoLec = () => {
  const [subColl, setSubColl] = useState(false);
  const [drawer, setDrawer] = useState(true);

  const anchor = [
    "Maths",
    "network analysis signals and systems",
    "analog circuits",
    "electronic devices",
  ];

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


  const [show,setShow]=useState(false);

  const onScroll=()=>{
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


  return (
    <>
      <main role="main" className="lecMainDiv">
        <nav className="lecSubNav">
          <section className="lecDrawerIcon">
            <IconButton onClick={toggleDrawer} sx={{ width: "2rem" }}>
              {drawer ? (
                <ArrowCircleRightIcon fontSize="large" />
              ) : (
                <ArrowCircleLeftIcon fontSize="large" />
              )}
            </IconButton>
          </section>
          <section className="lecSubNavSec">
            <a href="#top">Maths</a>
            <a href="#0640">network analysis signals and systems</a>
            <a href="#a">analog circuits</a>
            <a href="#a">electronic devices</a>
          </section>
          <div className="lecSubNavColl">
            <button type="button" onClick={openSubColl}>
              Subjects<i className="fa fa-chevron-down"></i>
            </button>
          </div>
        </nav>
          <Collapse in={subColl} timeout="auto" unmountOnExit>
        <div className="navSubCollapse">
              <Button  sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>Home</Button>
              <Button  sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>Video Lec</Button>
              <Button  sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>Notes</Button>
              <Button  sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>MockTest</Button>
        </div>
          </Collapse>
        <div className="lecDrawer">
          <Math />
          <Na />
        </div>


      <div className="lecContentDiv">
            <section className="lecHeaderDiv">
              <p  id='top'>Lets Get Started...</p>
            </section>
            <section className="lecContentContainer">
                <MainMath/>
                <NaMain/>
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
