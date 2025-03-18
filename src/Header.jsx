import { useState, useEffect } from "react";
import "./Header.css";
const images = [
  "./imgs/femi_img_1.png",
  "./imgs/femi_img_3.png",
  "./imgs/femi_img_4.png",
  "./imgs/femi_img_5.png",
  "./imgs/femi_img_7.png",
];

export default function Header() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState({});

  useEffect(() => {
    let imgObjects = {};
    images.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imgObjects[i] = true;
        if (Object.keys(imgObjects).length === images.length) {
          setLoaded(imgObjects);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (Object.keys(loaded).length !== images.length) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [index, loaded]);

  return (
    <div className="card d-flex rows">
      {images.map((src, i) => (
        <div
          key={i}
          className={`bg-img ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      <div className="card-body content d-flex flex-grow-1  flex-column ">
        <div className="p-lg-5 top-row d-flex rows justify-content-between">
          <div className="pe-2">
            <h3>
              <em>Producer</em>
            </h3>
          </div>
          <div className="pe-2">
            <h3>
              <em>Content Creator </em>
            </h3>
          </div>
          <div className="">
            <h3>
              <em>Production Manager</em>
            </h3>
          </div>
        </div>
        <div className="title p-lg-5 row">
          <h1>Femi Opedo</h1>
          <p>2025 Portfolio</p>
        </div>
      </div>
    </div>
  );
}
