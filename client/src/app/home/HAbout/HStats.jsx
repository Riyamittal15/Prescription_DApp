import React from "react";
// import { hStats } from "./dummydata";

export const hStatsData = [
  {
    data: "3,000",
    title: "SUCCESS STORIES",
  },

  {
    data: "003",
    title: "TRUSTED TUTORS",
  },
  {
    data: "1,000",
    title: "SCHEDULES",
  },
  {
    data: "005",
    title: "COURSES",
  },
];

const HStats = () => {
  return (
    <>
      <section className="awrapper">
        <div className="container grid">
          {hStatsData.map((val) => {
            return (
              <div className="box flex">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HStats;
