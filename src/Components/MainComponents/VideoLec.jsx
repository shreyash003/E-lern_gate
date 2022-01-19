import React, { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import IconButton from "@mui/material/IconButton";
import { Collapse } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Math from "./Accordian/Math";
import Na from "./Accordian/Na";

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
    }
     else{
       Drawer.classList.remove("lecDrawerOpen")
     }
  };

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
            <a href="#a">Maths</a>
            <a href="#a">network analysis signals and systems</a>
            <a href="#a">analog circuits</a>
            <a href="#a">electronic devices</a>
          </section>
          <div className="lecSubNavColl">
            <button type="button" onClick={openSubColl}>
              Subjects<i className="fa fa-chevron-down"></i>
            </button>
          </div>
        </nav>
        <div className="navSubCollapse">
          <Collapse in={subColl} timeout="auto" unmountOnExit>
            {anchor.map((val) => {
              return (
                <div key={val} className="navSubCollCont">
                  <a href="#a">{val}</a>
                </div>
              );
            })}
          </Collapse>
        </div>
        <div className="lecDrawer">
          <Math />
          {/* <Na/> */}
        </div>
      </main>
    </>
  );
};
export default VideoLec;
