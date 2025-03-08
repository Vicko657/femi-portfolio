import { useState } from "react";
import "./App.css";
import MegaScroll from "react-mega-scroll";
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";

export default function App() {
  const [active, setActive] = useState(0);
  return (
    <MegaScroll class="container-fluid" onChange={setActive}>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Portfolio />
      </div>
      <div style={{ background: "#333" }}>Keyboard Support</div>
      <div style={{ background: "#222" }}>State Listeners</div>
      <div style={{ background: "#111" }}>Free Forever</div>
    </MegaScroll>
  );
}
