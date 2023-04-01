import React from "react";
// import { Slide } from "react-awesome-reveal";
import Heading from "../../CommonComponents/Heading";
import "./HAbout.css";
import HStats from "./HStats";




export const hAboutData = [
  {
    id: 1,
    cover: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
    title: "Validated Prescriptions",
    desc: "We care for you, more than you do for yourself!",
  },
  {
    id: 1,
    cover: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
    title: "Privacy",
    desc: "Nothing more important than privacy.Privacy here is our utmost priority!",
  },
  {
    id: 1,
    cover: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
    title: "Accessibility",
    desc: "Easy to access prescriptions, trusted doctors at one store.",
  },
];






const HAbout = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB1">
          <div className="left row">
            <img src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg" />
          </div>
          <div className="right">
            <Heading
              subtitle="at your service"
              title="Best Heroes Don’t Wear Capes. We Wear Surgical Gowns!"
            />
            <div className="items">
              
              {hAboutData.map((val) => {
                return (
                  // <Slide duration={1500}>
                    <div className="item flexSB">
                      <div className="img">
                        <img
                          src="https://static.thenounproject.com/png/372615-200.png"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  // </Slide>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <HStats /> */}
    </>
  );
};

export default HAbout;
