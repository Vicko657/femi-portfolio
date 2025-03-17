import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="card contact-bg h-100 rows">
      <div className="card-body  d-flex row">
        <div className="col-lg-5 col-12 p-lg-5">
          <h2>Contact Me</h2>
          <p className="">lifeoffemi@gmail.com</p>
          <p className="pb-4">+44 7951 147670</p>
        </div>
        <div className="col-lg-7 d-lg-block d-none p-lg-5">
          <img className="img-fluid" src="./imgs/femi_contact.png" />
        </div>
        <div className="d-block d-lg-none col-12 p-5">
          <img className="img-fluid" src="./imgs/femi_contact.png" />
        </div>
      </div>
    </div>
  );
}
