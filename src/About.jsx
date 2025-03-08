import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="card about-bg h-100 d-flex flex-row">
      <div className="card-body d-flex rows">
        <div className="col-5 p-5">
          <h2>Who am I?</h2>
          <p>
            I am an award-winning Producer and Production Manager with a proven
            track record of delivering high-profile projects. <br /> <br />
            From hit shows like Pink Courtroom to Minor Issues, I’ve worked with
            some of the biggest names in the industry, including Netflix,
            McDonald's, Channel 4.0, JBL, Ann Summers, and the BBC. <br />{" "}
            <br /> With a wealth of experience across Film, TV, and Branded
            content, I’m known for bringing ambitious visions to life with
            precision and creativity
          </p>
        </div>
        <div className="col-7 p-5">
          <div></div>
          <div>
            <img className="img-fluid" src="./imgs/femi_about.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
