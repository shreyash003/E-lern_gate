import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const VideoLec = () => {

 
  return (
    <>
      <main role="main" className="lecMainDiv">
        <nav className="lecSubNav">
          <section className="lecDrawerIcon">
            <IconButton sx={{width:'2rem'}} >
                <ArrowCircleRightIcon    fontSize="large"/>
            </IconButton>
          </section>
          <section className="lecSubNavSec">
            <p>Maths</p>
            <p>network analysis signals and systems</p>
            <p>analog circuits</p>
            <p>electronic devices</p>
          </section>
          <section className="lecSubNavCol">
              
          </section>
        </nav>
        <div></div>
      </main>
    </>
  );
};
export default VideoLec;
