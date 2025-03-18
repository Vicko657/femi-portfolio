import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="card contact-bg h-100 rows">
      <div className="card-body d-flex row">
        <div className="col-lg-5 col-12 p-lg-5">
          <h2 className="mb-4">Contact Me</h2>
          <a className="pe-2" href="linkedin.com/in/femi-opedo-1633471ab">
            <em>LinkedIn</em>
          </a>
          <br />
          <a
            className="pe-2"
            href="https://www.tiktok.com/@femiopedo?is_from_webapp=1&sender_device=pc"
          >
            <em>Tiktok</em>
          </a>
          <br />
          <a href="https://youtube.com/@lof9791?si=BXKq--tHAonNfvy0">
            <em>YouTube</em>
          </a>
          <br />
          <a href="mailto:lifeoffemi@gmail.com">
            <em>lifeoffemi@gmail.com</em>
          </a>
          <br />
          <a href="tel:+44 7951 147670">
            <em>+44 7951 147670</em>
          </a>
        </div>
        <div className="col-lg-7 d-lg-block d-none p-lg-5">
          <img className="img-fluid" src="./imgs/femi_contact.png" />
        </div>
        <div className="d-block d-lg-none col-12">
          <img className="img-fluid" src="./imgs/femi_contact.png" />
        </div>
        <footer className="pt-5 ps-lg-5 pt-lg-0 d-flex rows justify-content-left">
          💻 Designed & Coded by
          <a
            className="ps-1"
            href="https://vix-portfolio-project-shecodes.netlify.app/"
          >
            VICTORIA
          </a>
        </footer>
      </div>
    </div>
  );
}
