import React from "react";
import home from "../../images/home.png";
import mocktest from "../../images/mocktest.png";
import lec from "../../images/vidoelec.png";
import forum from "../../images/forum.png";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import onlineLec from "../../images/onlineLectures.jpg";
import onlineNotes from "../../images/onlineNotes.jpg";
import onlineTest from "../../images/onlineTest.jpg";
import onlineForum from "../../images/onlineForum2.jpg";

const Home = () => {
  const details = [
    {
      img: onlineLec,
      chip: 'onlineLec',
      details1: "Be Mentored By the Best",
      details2:
        "All the Sorted Best Video Lectures At Your Finger Tips .Learn At Your Own Pace",
    },
    {
      img: onlineNotes,
      chip: 'onlineNotes',
      details1: "Not A Video Lecture Fan",
      details2:
        "Dont Worry We Got You covred. Learn From  Notes Of Best Professors. A Perfect Revision Patner ",
    },
    {
      img: onlineTest,
      chip: 'onlineTest',
      details1: "Done With The Study ",
      details2:
        "Time To Test Your Knowledge. Get Onboard With Mock Test For Each Sub With Each Level Of Diffculty",
    },
    {
      img: onlineForum,
      chip: 'onlineForum',
      details1: "Stuck On A Problem You Cant Find Answer To ",
      details2: "Ask the Experinced. Connect With People Share Your Knowledge",
    },
  ];

  return (
    <>
      <main rolo="main" className="homeMainDiv">
        <div className="homeSliderDiv">
          <section className="slide1">
            <img alt="home" src={home} />
          </section>
          <section className="slide1">
            <img alt="home" src={mocktest} />
          </section>
          <section className="slide1">
            <img alt="home" src={lec} />
          </section>
          <section className="slide1">
            <img alt="home" src={forum} />
          </section>
        </div>
        <div className="homeDetailsDiv">
          <section className="homeDetailsTitle">
            <h1>Kick Start Your GATE Prep Journey </h1>
            <br />
            <h1>With..</h1>
          </section>
          <br />
          <section className="homeDetailsCont">
            {details.map((val) => {
              return (
                <div key={val.img}>
                  <div className="homeDetails1">
                    <div className="imgContainer">
                      <img src={val.img} alt="onlineLec"></img>
                    </div>
                    <p>
                      {val.details1} <br /> {val.details2}
                    </p>
                  </div>
                  <Divider>
                    <Chip label={`${val.chip}`}></Chip>
                  </Divider>
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
};
export default Home;
