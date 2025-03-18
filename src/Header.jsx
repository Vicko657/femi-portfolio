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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedImages = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          setLoaded(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [index, loaded]);

  return (
    <div
      className="card header-bg h-100 d-flex flex-row"
      style={{ backgroundImage: loaded ? `url(${images[index]})` : "none" }}
    >
      <div className="card-body d-flex flex-grow-1  flex-column ">
        <div className="p-5 top-row d-flex rows justify-content-between">
          <div className="pe-5">
            <h3>Producer</h3>
          </div>
          <div className="pe-5">
            <h3>Content Creator </h3>
          </div>
          <div className="pe-5">
            <h3>Production Manager</h3>
          </div>
        </div>
        <div className="title p-5 row">
          <h1>Femi Opedo</h1>
          <p>2025 Portfolio</p>
        </div>
      </div>
    </div>
  );
}
