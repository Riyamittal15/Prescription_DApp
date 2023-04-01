import React from "react";
// import { JackInTheBox } from "react-awesome-reveal";
import Heading from "../../CommonComponents/Heading";
import "./HMain.css";

const HMain = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            {/* <JackInTheBox duration="2000" triggerOnce> */}
              <Heading
                subtitle="TRU Pharma"
                title="The pharmacy that knows you’re not just a number."
              />
              <p>
                Unique in its kind, a one stop shop to providing validation, privacy, security  and authenticity to your medical requirements .
              </p>
            {/* </JackInTheBox> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HMain;
