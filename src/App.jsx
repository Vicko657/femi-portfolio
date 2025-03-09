import { useState } from "react";
import "./App.css";
import MegaScroll from "react-mega-scroll";
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";

export default function App() {
  const [active, setActive] = useState(0);
  return (
    <MegaScroll className="container-fluid" onChange={setActive}>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Portfolio />
      </div>
      <div style={{ background: "#333" }}></div>
      <div style={{ background: "#222" }}></div>
      <div style={{ background: "#111" }}></div>
    </MegaScroll>
  );
}
