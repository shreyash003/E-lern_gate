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
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
 
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
          <div className="homeDetailsCont">
          <Divider>
              <Chip label='Online Lecture'></Chip>
            </Divider>
            <section className="details1">
              <div  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-out" className="details1ImgDiv">
                <img src={onlineLec} alt="lecture"></img>
              </div>
              <div className="details1ContentDiv">
                <p>
                Be Mentored By the Best<br/>All the Sorted Best Video Lectures At Your Finger Tips .Learn At Your Own Pace
                </p>
              </div>
            </section>
            <Divider>
              <Chip label='Online Notes'></Chip>
            </Divider>
            <section className="details2">
              <div className="detai2s1ContentDiv">
              <p>
              Not A Video Lecture Fan<br/>Dont Worry We Got You covred. Learn From  Notes Of Best Professors. A Perfect Revision Patner 
                </p>
              </div>
            <div  data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-out" className="details2ImgDiv">
            <img src={onlineNotes} alt="lecture"></img>

            </div>
            </section>
            <Divider>
              <Chip label='Online Test'></Chip>
            </Divider>
            <section className="details1">
              <div  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-out" className="details1ImgDiv">
              <img src={onlineTest} alt="lecture"></img>

              </div>
              <div className="details1ContentDiv">
              <p>
              Done With The Study <br/>Ask the Experinced. Connect With People Share Your Knowledge
                </p>
              </div>
            </section>
            <Divider>
              <Chip label='Online Forum'></Chip>
            </Divider>
            <section className="details2">
              <div className="detai2s1ContentDiv">
              <p>
              Stuck On A Problem You Cant Find Answer To <br/>All the Sorted Best Video Lectures At Your Finger Tips .Learn At Your Own Pace
                </p>
              </div>
            <div  data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-out" className="details2ImgDiv">
            <img src={onlineForum} alt="lecture"></img>

            </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
