import React from "react";
import ytLogo from "../../../images/youtube.png";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import MathData from "../../../dataFiles/videoLec/MathLec.json";

const MainMath = () => {
  return (
    <>
      <div className="lecSubLinksContainer">
        <section className="lecSubName">
          <p>Math</p>
        </section>
        {MathData.map((val,ind) => {
          return (
            <div key={val.topic}>
              <section className="lecSubTopicName">
                <p>{val.topic}</p>
              </section>
              {val.title.map((value,index)=>{
                  return(
                    <section key={index} className="lecLinkContainer">
                <section className="linkIconDiv">
                  <img alt="youtube" src={ytLogo}></img>
                </section>
                <section className="linkTitleDiv">
                  <Typography 
                    sx={{ color: "#f5f6fa" }}
                    noWrap
                    variant="subtitle1"
                  >
                    <Link
                      sx={{ textDecoration: "none" }}
                      color="#f5f6fa"
                      href={`${val.lec[index]}`}
                      target='_blank'
                      rel="noreferrer noopener"
                      id={`0${ind}${index}`}
                    >
                      {value}
                    </Link>
                  </Typography>
                </section>
              </section>
                  )
              })}
           
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MainMath;
