import React, { useState, useEffect, useRef } from "react";

import "./Portfolio.css";

export default function Portfolio() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef({});

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleAccordion = (accordionId) => {
    if (openAccordion === accordionId) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(accordionId);

      setTimeout(() => {
        accordionRefs.current[accordionId]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 400);
    }
  };

  return (
    <div className="portfolio-bg h-100">
      {openAccordion === null && (
        <div className=" pt-5 ps-5 pb-4 row">
          <div className="portfolio-header col-12 p-1 m-0">
            <h2>PORTFOLIO</h2>
            <p className="portfolio-summary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      )}
      <div
        className="accordion accordion-flush d-flex row pt-0 p-2"
        id="accordionFlushExample"
      >
        {openAccordion === null || openAccordion === "jbl" ? (
          <div
            className="accordion-item portfolio-jbl"
            ref={(el) => (accordionRefs.current["jbl"] = el)}
          >
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  openAccordion === "jbl" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("jbl")}
              >
                <h2>Social Campaign JBL</h2>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === "jbl" ? "show" : ""
              }`}
            >
              <div className="accordion-body vh-100 d-flex rows">
                <div className="row">
                  <div className="col-lg-3 col-12 p-lg-5 pb-2 pt-3 p-5 ">
                    <p className="portfolio-role">Client</p>
                    <h2 className="text-black mb-3">JBL</h2>
                    <p className="portfolio-role"> Role</p>
                    <h2 className="text-black mb-3">Producer/Writer</h2>
                  </div>
                  <div className="col-lg-5 col-12 p-lg-5 pt-0 p-5">
                    <h2 className="portfolio-main text-black mb-4">
                      JBL approached us to lead a dynamic marketing campaign for
                      their latest Live 770 headphones, blending engaging
                      content with product-driven storytelling.
                    </h2>
                    <p className="portfolio-text">
                      Our goal was to showcase the immersive sound, cutting-edge
                      features, and sleek design of the headphones in a way that
                      resonated with diverse audiences. To achieve this, we
                      crafted a three-part campaign, each segment designed to
                      highlight the versatility of the Live 770s:
                    </p>

                    <ul className="mt-4 mb-4">
                      <li className="mb-2">
                        🎤 Street Content with Klaudia{" "}
                        <span>
                          – Taking to the streets, we captured authentic,
                          high-energy interactions that put the Live 770s to the
                          test in real-world scenarios, emphasizing their
                          seamless connectivity and premium sound quality.
                        </span>
                      </li>

                      <li className="mb-2">
                        💪 Competition Content with Armz in Gyms{" "}
                        <span>
                          – Showcasing the durability and stability of the
                          headphones, we brought them into the fitness world,
                          where Armz led high-intensity challenges, proving that
                          JBL’s Live 770s can keep up with even the toughest
                          workouts.
                        </span>
                      </li>

                      <li>
                        🎭 Skit Creations{" "}
                        <span>
                          – Infused with humor and creativity, our skits
                          highlighted the headphones’ standout features, from
                          adaptive noise cancellation to 360-degree spatial
                          sound, making product education both entertaining and
                          memorable.
                        </span>
                      </li>
                    </ul>

                    <p className="portfolio-text">
                      This multi-layered campaign successfully merged lifestyle,
                      fitness, and humor, bringing the Live 770s to life through
                      compelling, shareable content.
                    </p>
                  </div>

                  <div className="col-4 p-5">
                    <blockquote
                      className="tiktok-embed d-lg-block d-none"
                      cite="https://www.tiktok.com/@jblaudio.uk/video/7464600504975297825"
                      data-video-id="7464600504975297825"
                      style={{
                        maxWidth: "100%",
                        minWidth: "250px",
                        transform: "scale(0.7)",
                        margin: "0px",
                        transformOrigin: "top left",
                      }}
                    >
                      <section>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          title="@jblaudio.uk"
                          href="https://www.tiktok.com/@jblaudio.uk?refer=embed"
                        >
                          @jblaudio.uk
                        </a>{" "}
                        @benzothe1st_ & @elliottjcass deserve a rising star
                        nomination for this d r a m a 🏆{" "}
                        <a
                          title="jbllivebeam3"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/tag/jbllivebeam3?refer=embed"
                        >
                          #JBLLiveBeam3
                        </a>{" "}
                        <a
                          title="jbluk"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/tag/jbluk?refer=embed"
                        >
                          #JBLUK
                        </a>{" "}
                        <a
                          title="commute"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/tag/commute?refer=embed"
                        >
                          #commute
                        </a>{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          title="♬ original sound - JBLaudio UK"
                          href="https://www.tiktok.com/music/original-sound-7464601672250100512?refer=embed"
                        >
                          ♬ original sound - JBLaudio UK
                        </a>
                      </section>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {openAccordion === null || openAccordion === "boarders" ? (
          <div
            className="accordion-item portfolio-boarders"
            ref={(el) => (accordionRefs.current["boarders"] = el)}
          >
            <h2 className="accordion-header ">
              <button
                className={`accordion-button ${
                  openAccordion === "boarders" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("boarders")}
              >
                <h2>BBC Boarders Social Campaign</h2>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === "boarders" ? "show" : ""
              }`}
            >
              <div className="accordion-body vh-100 d-flex rows">
                <div className="row">
                  <div className="col-lg-3 col-12 p-lg-5 pb-2 pt-3 p-5 ">
                    <p className="portfolio-role">Client</p>
                    <h2 className="text-black mb-3">BBC THREE</h2>
                    <p className="portfolio-role"> Role</p>
                    <h2 className="text-black mb-3">CONTENT STRATEGY</h2>
                  </div>
                  <div className="col-lg-5 col-12 p-lg-5 pt-0 p-5">
                    <h2 className="portfolio-main text-black mb-4">
                      Ahead of the highly anticipated release of Boarders Season
                      2, the BBC approached us to create a dynamic campaign that
                      would not only build excitement for the new season but
                      also introduce Season 1 to a broader, more diverse
                      audience.
                    </h2>

                    <p className="portfolio-text">
                      To achieve this, we developed a bespoke content strategy
                      that blended entertainment and engagement, ensuring
                      maximum reach across social platforms. The campaign
                      included:
                    </p>

                    <ul className="mt-4 mb-4">
                      <li className="mb-2">
                        🎭 Sit-Down Games with the Cast
                        <span>
                          – We brought the cast together for a series of fun,
                          interactive games, allowing audiences to see their
                          chemistry, humor, and personalities beyond the show.
                        </span>
                      </li>

                      <li className="mb-2">
                        🎬 Skit Creations
                        <span>
                          – We produced engaging, shareable skits inspired by
                          the show’s themes and characters, using humor and
                          relatability to drive interest and conversation around
                          the series.
                        </span>
                      </li>

                      <li className="mb-2">
                        📺 Repurposed Content
                        <span>
                          – Leveraging key moments from Season 1 alongside fresh
                          Season 2 assets, we strategically reintroduced the
                          show to new audiences while keeping longtime fans
                          engaged.
                        </span>
                      </li>
                    </ul>

                    <p className="portfolio-text">
                      The campaign has been a huge success, amassing over
                      500,000 views across TikTok and Instagram, effectively
                      expanding the show's reach and building anticipation for
                      the new season.
                    </p>
                  </div>
                  <div className="col-4 p-5">
                    <blockquote
                      class="tiktok-embed d-lg-block d-none"
                      cite="https://www.tiktok.com/@wallofentertainment/video/7463225910116896032"
                      data-video-id="7463225910116896032"
                      style={{
                        maxWidth: "100%",
                        minWidth: "250px",
                        transform: "scale(0.8)",
                        margin: "0px",
                        transformOrigin: "top left",
                      }}
                    >
                      {" "}
                      <section>
                        {" "}
                        <a
                          target="_blank"
                          title="@wallofentertainment"
                          href="https://www.tiktok.com/@wallofentertainment?refer=embed"
                        >
                          @wallofentertainment
                        </a>{" "}
                        Sekou plays who’s most likely to 🤔💭 Watch{" "}
                        <a
                          title="Boarders"
                          target="_blank"
                          href="https://www.tiktok.com/tag/Boarders?refer=embed"
                        >
                          #Boarders
                        </a>{" "}
                        series 1 now on{" "}
                        <a
                          title="bbciplayer"
                          target="_blank"
                          href="https://www.tiktok.com/tag/bbciplayer?refer=embed"
                        >
                          #bbciplayer
                        </a>{" "}
                        &#38;{" "}
                        <a
                          title="bbcthree"
                          target="_blank"
                          href="https://www.tiktok.com/tag/bbcthree?refer=embed"
                        >
                          #bbcthree
                        </a>{" "}
                        <a
                          title="toby"
                          target="_blank"
                          href="https://www.tiktok.com/tag/toby?refer=embed"
                        >
                          #toby
                        </a>{" "}
                        <a
                          target="_blank"
                          title="♬ original sound - Wall of Entertainment"
                          href="https://www.tiktok.com/music/original-sound-7463225972226083617?refer=embed"
                        >
                          ♬ original sound - Wall of Entertainment
                        </a>{" "}
                      </section>{" "}
                    </blockquote>{" "}
                    <script
                      async
                      src="https://www.tiktok.com/embed.js"
                    ></script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {openAccordion === null || openAccordion === "plt" ? (
          <div
            className="accordion-item portfolio-plt"
            ref={(el) => (accordionRefs.current["plt"] = el)}
          >
            <h2 className="accordion-header ">
              <button
                className={`accordion-button ${
                  openAccordion === "plt" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("plt")}
              >
                <h2>Pink Courtroom</h2>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === "plt" ? "show" : ""
              }`}
            >
              <div className="accordion-body vh-100 d-flex rows">
                <div className="row">
                  <div className="col-lg-3 col-12 p-lg-5 pb-2 pt-3 p-5 ">
                    <p className="portfolio-role">Client</p>
                    <h2 className="text-black mb-3">PLT</h2>
                    <p className="portfolio-role"> Role</p>
                    <h2 className="text-black mb-3">
                      PRODUCTION CO-ORDINATOR/MANAGER
                    </h2>
                  </div>
                  <div className="col-lg-5 col-12 p-lg-5 pt-0 p-5">
                    <h2 className="portfolio-main text-black mb-4">
                      As Production Manager for PrettyLittleThing’s hit YouTube
                      series, "The Pink Courtroom," I played a key role in
                      bringing this bold and entertaining show to life.
                    </h2>

                    <p className="portfolio-text mb-4">
                      Hosted by fan-favorites Nella Rose and Indiyah Polack, the
                      series transforms a classic courtroom setting into a
                      vibrant, fashion-fueled stage where lighthearted disputes
                      are settled with humor, style, and plenty of personality.
                    </p>

                    <p className="portfolio-text mb-4">
                      From pre-production to execution, I ensured the seamless
                      coordination of every element, overseeing logistics, crew
                      management, and creative alignment to deliver a visually
                      engaging and high-energy experience for audiences.
                    </p>

                    <p className="portfolio-text mb-4">
                      Since its launch, "The Pink Courtroom" has amassed over 66
                      million views across social platforms, proving to be a
                      massive success in blending fashion, entertainment, and
                      viral content.
                    </p>

                    <p className="portfolio-text mb-4">
                      With its mix of drama, comedy, and all things
                      PrettyLittleThing, "The Pink Courtroom" continues to
                      captivate viewers, reinforcing the brand’s influence in
                      the world of digital entertainment.
                    </p>
                  </div>
                  <div className="col-4 p-5 d-lg-block d-none">
                    <iframe
                      style={{
                        maxWidth: "100%",
                        minWidth: "250px",
                        margin: "0px",
                        transformOrigin: "top left",
                      }}
                      width="530"
                      height="305"
                      src="https://www.youtube.com/embed/FC4klvSe-P0?si=badpqNdcSs1K9lyf"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                    <br />
                    <em className=" mt-2">
                      THE PINK COURTROOM | S1 EP 1 | PrettyLittleThing
                    </em>
                    <img className="img-fluid" src="./imgs/plt_youtube.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {openAccordion === null || openAccordion === "minor" ? (
          <div
            className="accordion-item portfolio-minor"
            ref={(el) => (accordionRefs.current["minor"] = el)}
          >
            <h2 className="accordion-header ">
              <button
                className={`accordion-button ${
                  openAccordion === "minor" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("minor")}
              >
                <h2>Minor Issues</h2>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === "minor" ? "show" : ""
              }`}
            >
              <div className="accordion-body vh-100 d-flex rows">
                <div className="row">
                  <div className="col-lg-3 col-12 p-lg-5 pb-2 pt-3 p-5 ">
                    <p className="portfolio-role">Client</p>
                    <h2 className="text-black mb-3">CHANNEL 4.0</h2>
                    <p className="portfolio-role"> Role</p>
                    <h2 className="text-black mb-3">PRODUCTION MANAGER</h2>
                  </div>
                  <div className="col-lg-5 col-12 p-lg-5 pt-0 p-5">
                    <h2 className="portfolio-main text-black mb-4">
                      As Production Manager for Channel 4.0's audacious series,
                      "Minor Issues," I orchestrated the seamless production of
                      this innovative show that flips the script on celebrity
                      critiques.
                    </h2>
                    <p className="portfolio-text mb-4">
                      In each episode, a panel of candid and unfiltered children
                      delivers their honest opinions on various celebrities,
                      offering a fresh and humorous perspective that has
                      resonated with audiences.
                    </p>

                    <p className="portfolio-text mb-4">
                      My responsibilities encompassed coordinating all
                      production aspects, from pre-production planning to on-set
                      execution, ensuring that the unique concept was brought to
                      life effectively. This involved managing schedules,
                      overseeing crew operations, and maintaining a creative
                      environment that allowed the young panelists to shine.
                    </p>

                    <p className="portfolio-text mb-4">
                      Since its launch, "Minor Issues" has garnered significant
                      attention, with individual episodes achieving impressive
                      view counts. For instance, the episode "Savage Kids RATE
                      Rappers!" has amassed over 5.1 million views on YouTube.
                    </p>
                    <p className="portfolio-text mb-4">
                      This success underscores the show's appeal and its
                      innovative approach to celebrity commentary. By blending
                      authenticity with entertainment, "Minor Issues" has carved
                      out a unique niche in digital content, reflecting the
                      evolving landscape of audience engagement.
                    </p>
                  </div>
                  <div className="col-4 p-5 d-lg-block d-none">
                    <iframe
                      style={{
                        maxWidth: "100%",
                        minWidth: "250px",
                        margin: "0px",
                        transformOrigin: "top left",
                      }}
                      width="530"
                      height="305"
                      src="https://www.youtube.com/embed/kgez5GmQ-6Y?si=O9nGacvvBH3H2UoW"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    <br />
                    <em className=" mt-2">
                      Savage Kids RATE Rappers! | Minor Issues | @channel4.0
                    </em>
                    <img className="img-fluid" src="./imgs/minor_youtube.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {openAccordion === null || openAccordion === "worst" ? (
          <div
            className="accordion-item portfolio-worst"
            ref={(el) => (accordionRefs.current["worst"] = el)}
          >
            <h2 className="accordion-header ">
              <button
                className={`accordion-button ${
                  openAccordion === "worst" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("worst")}
              >
                <h2>Harry Pinero’s Worst In Class</h2>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === "worst" ? "show" : ""
              }`}
            >
              <div className="accordion-body vh-100 d-flex rows">
                <div className="row">
                  <div className="col-lg-3 col-12 p-lg-5 pb-2 pt-3 p-5 ">
                    <p className="portfolio-role">Client</p>
                    <h2 className="text-black mb-3">CHANNEL 4.0</h2>
                    <p className="portfolio-role"> Role</p>
                    <h2 className="text-black mb-3">PRODUCTION CO-ORDINATOR</h2>
                  </div>
                  <div className="col-lg-5 col-12 p-lg-5 pt-0 p-5">
                    <h2 className="portfolio-main text-black mb-4">
                      As Production Manager for Channel 4.0's dynamic series,
                      "Harry Pinero's Worst In Class," I played a pivotal role
                      in bringing this unique and entertaining show to life.
                    </h2>
                    <p className="portfolio-text mb-4">
                      Hosted by the charismatic Harry Pinero, the series places
                      celebrity guests in a humorous detention setting,
                      challenging them with quirky science experiments, playful
                      impersonations, and lighthearted roasts. This innovative
                      format blends comedy and education, offering viewers a
                      fresh and engaging experience.
                    </p>

                    <p className="portfolio-text mb-4">
                      My responsibilities included overseeing all aspects of
                      production, from pre-production planning to on-set
                      coordination, ensuring that each episode was executed
                      seamlessly. This involved managing schedules, coordinating
                      with talent, and working closely with the creative team to
                      maintain the show's distinctive tone and energy.
                    </p>

                    <p className="portfolio-text mb-4">
                      The success of "Harry Pinero's Worst In Class" is
                      reflected in its impressive viewership. The show has
                      amassed over 2.5 Million views across YouTube y The show's
                      popularity has led to multiple seasons, with the latest
                      episodes continuing to attract significant attention.
                    </p>
                    <p className="portfolio-text mb-4">
                      By combining humor with an unconventional classroom
                      setting, "Harry Pinero's Worst In Class" has carved out a
                      unique niche in digital entertainment, resonating with a
                      diverse audience and contributing to Channel 4.0's
                      innovative content lineup.
                    </p>
                  </div>
                  <div className="col-4 p-5 d-lg-block d-none">
                    <iframe
                      style={{
                        maxWidth: "100%",
                        minWidth: "250px",
                        margin: "0px",
                        transformOrigin: "top left",
                      }}
                      width="530"
                      height="305"
                      src="https://www.youtube.com/embed/nQprWww0m0U?si=R5zZY2tzdk1fmR_8"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    <br />
                    <em className=" mt-2">
                      Nella’s AWFUL Stormzy Impression Earns Her An F!! | Harry
                      Pinero's Worst In Class | Channel 4.0
                    </em>
                    <img className="img-fluid" src="./imgs/worst_youtube.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {openAccordion === null || openAccordion === "gc" ? (
          <div
            className="accordion-item portfolio-gc"
            ref={(el) => (accordionRefs.current["gc"] = el)}
          >
            <h2 className="accordion-header ">
              <button
                className={`accordion-button ${
                  openAccordion === "gc" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("gc")}
              >
                <h2>Groupchat</h2>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === "gc" ? "show" : ""
              }`}
            >
              <div className="accordion-body vh-100 d-flex rows">
                <div className="row">
                  <div className="col-lg-3 col-12 p-lg-5 pb-2 pt-3 p-5 ">
                    <p className="portfolio-role">Client</p>
                    <h2 className="text-black mb-3">CHANNEL 4.0</h2>
                    <p className="portfolio-role"> Role</p>
                    <h2 className="text-black mb-3">PRODUCTION MANAGER</h2>
                  </div>
                  <div className="col-lg-5 col-12 p-lg-5 pt-0 p-5">
                    <h2 className="portfolio-main text-black mb-4">
                      When Channel 4.0 approached the team to create Group Chat,
                      a fast-paced digital sketch show, I stepped in as
                      Production Manager to turn wild ideas into on-screen gold.
                    </h2>
                    <p className="portfolio-text mb-4">
                      My job was to keep the madness organized—juggling
                      schedules, budgets, and logistics while working closely
                      with directors, writers, and cast to bring sketches to
                      life.
                    </p>

                    <p className="portfolio-text mb-4">
                      I secured locations, managed props, and ensured every
                      shoot ran smoothly, troubleshooting any on-set surprises.
                      In post-production, I oversaw edits to make sure each
                      sketch was sharp, funny, and ready for Channel 4.0’s
                      digital audience.
                    </p>

                    <p className="portfolio-text mb-4">
                      With tight deadlines, unpredictable ideas, and a
                      constantly moving production, the role required quick
                      thinking, adaptability, and a strong sense of
                      humor—because in comedy, the only thing you can expect is
                      the unexpected.
                    </p>
                  </div>
                  <div className="col-4 p-5 d-lg-block d-none">
                    <iframe
                      style={{
                        maxWidth: "100%",
                        minWidth: "250px",
                        margin: "0px",
                        transformOrigin: "top left",
                      }}
                      width="530"
                      height="305"
                      src="https://www.youtube.com/embed/J4ZbSf-zLz8?si=BmquyeLpP2YfLtiL"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    <br />
                    <em className=" mt-2">
                      20 MEN VS NELLA ROSE: ICK EDITION | The Group Chat |
                      @channel4.0
                    </em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {openAccordion === null || openAccordion === "who" ? (
          <div
            className="accordion-item portfolio-who"
            ref={(el) => (accordionRefs.current["who"] = el)}
          >
            <h2 className="accordion-header ">
              <button
                className={`accordion-button ${
                  openAccordion === "who" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("who")}
              >
                <h2>Whos The</h2>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === "who" ? "show" : ""
              }`}
            >
              <div className="accordion-body vh-100 d-flex rows">
                <div className="row">
                  <div className="col-lg-3 col-12 p-lg-5 pb-2 pt-3 p-5 ">
                    <p className="portfolio-role">Client</p>
                    <h2 className="text-black mb-3">FOOTASYLUM</h2>
                    <p className="portfolio-role"> Role</p>
                    <h2 className="text-black mb-3">PRODUCTION MANAGER</h2>
                  </div>
                  <div className="col-lg-5 col-12 p-lg-5 pt-0 p-5">
                    <h2 className="portfolio-main text-black mb-4">
                      Who's The is a witty, fast-paced chat show where talented
                      individuals debate intriguing topics and choose who among
                      them best fits each subject.
                    </h2>
                    <p className="portfolio-text mb-4">
                      After the success of the first season, I was thrilled to
                      join the project as Production Manager for the new season,
                      aiming to elevate the show even further. My role involved
                      coordinating all aspects of production, from managing
                      schedules and resources to working closely with the
                      creative team.
                    </p>

                    <p className="portfolio-text mb-4">
                      I helped ensure the right talent was selected, maintaining
                      chemistry and dynamic interactions, while also curating
                      exciting, thought-provoking topics that kept the debates
                      fresh and engaging.
                    </p>

                    <p className="portfolio-text mb-4">
                      With a focus on seamless execution, I made sure everything
                      ran smoothly to bring this fun and lively show to life,
                      delivering a top-tier experience for both the talent and
                      the audience.
                    </p>
                  </div>
                  <div className="col-4 p-5 d-lg-block d-none">
                    <iframe
                      style={{
                        maxWidth: "100%",
                        minWidth: "250px",
                        margin: "0px",
                        transformOrigin: "top left",
                      }}
                      width="530"
                      height="305"
                      src="https://www.youtube.com/embed/LiMqlZYhk0c?si=kVnw2wxrrNyof-rY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    <br />
                    <em className=" mt-2">
                      GB Skip navigation Search Create 9+ Avatar image WHO'S THE
                      BOUGIEST? YUNG FILLY, DARKEST MAN OR ADEOLA? | Who's
                      The... S2 Ep3
                    </em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {openAccordion === null || openAccordion === "mcplant" ? (
          <div
            className="accordion-item portfolio-mcplant"
            ref={(el) => (accordionRefs.current["mcplant"] = el)}
          >
            <h2 className="accordion-header ">
              <button
                className={`accordion-button ${
                  openAccordion === "mcplant" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("mcplant")}
              >
                <h2>Mcplant Campaign</h2>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === "mcplant" ? "show" : ""
              }`}
            >
              <div className="accordion-body vh-100 d-flex rows">
                <div className="row">
                  <div className="col-lg-3 col-12 p-lg-5 pb-2 pt-3 p-5 ">
                    <p className="portfolio-role">Client</p>
                    <h2 className="text-black mb-3">MCDONALDS</h2>
                    <p className="portfolio-role"> Role</p>
                    <h2 className="text-black mb-3">PRODUCTION MANAGER</h2>
                  </div>
                  <div className="col-lg-5 col-12 p-lg-5 pt-0 p-5">
                    <h2 className="portfolio-main text-black mb-4">
                      For the McDonald's McPlant campaign, we took to the
                      streets of London to capture the public’s honest reviews
                      of the new McPlant meal.
                    </h2>
                    <p className="portfolio-text">
                      The shoot was fast-paced, with limited time to capture all
                      the footage needed. As Production Manager, I was thrilled
                      to lead this exciting project, especially as it was one of
                      my first major campaigns for such an iconic brand.
                    </p>
                    <br />
                    <p className="portfolio-text">
                      My role involved quick thinking and on-the-spot
                      problem-solving, ensuring the team stayed on track and we
                      captured genuine reactions from the public. With a focus
                      on efficiency and creativity, we delivered a campaign that
                      met and exceeded the client’s expectations.
                    </p>
                  </div>
                  <div className="col-4 p-5 d-lg-block d-none">
                    <iframe
                      style={{
                        maxWidth: "100%",
                        minWidth: "250px",
                        margin: "0px",
                        transformOrigin: "top left",
                      }}
                      width="530"
                      height="305"
                      src="https://www.youtube.com/embed/PoMnFptEJg8?si=kd-OfnJJhbs8Vb9I&amp;start=103"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    <br />
                    <em className=" mt-2">
                      Harry Pinero Takes The McDonald’s McPlant Van To The
                      Streets
                    </em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {openAccordion === null || openAccordion === "ndl" ? (
          <div
            className="accordion-item portfolio-ndl"
            ref={(el) => (accordionRefs.current["ndl"] = el)}
          >
            <h2 className="accordion-header ">
              <button
                className={`accordion-button ${
                  openAccordion === "ndl" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("ndl")}
              >
                <h2>NDL Mayor Campaign</h2>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === "ndl" ? "show" : ""
              }`}
            >
              <div className="accordion-body vh-100 d-flex rows">
                <div className="row">
                  <div className="col-lg-3 col-12 p-lg-5 pb-2 pt-3 p-5 ">
                    <p className="portfolio-role">Client</p>
                    <h2 className="text-black mb-3">Niko</h2>
                    <p className="portfolio-role"> Role</p>
                    <h2 className="text-black mb-3">PRODUCTION CO-ORDINATOR</h2>
                  </div>
                  <div className="col-lg-5 col-12 p-lg-5 pt-0 p-5">
                    <h2 className="portfolio-main text-black mb-4">
                      I had the privilege of working as a Production Coordinator
                      on Nikos NDL’s Mayor Campaign, where my role was to align
                      closely with Nikos’ creative vision and ensure everything
                      came together seamlessly.
                    </h2>
                    <p className="portfolio-text mb-4">
                      I coordinated all aspects of production, from managing
                      schedules to handling logistics, while maintaining clear
                      communication with the team to ensure we stayed on track.
                    </p>

                    <p className="portfolio-text mb-4">
                      A big part of my responsibility was making sure the
                      campaign reflected Nikos’ vision, working with the
                      creative team to capture the right tone and messaging.
                    </p>

                    <p className="portfolio-text mb-4">
                      With tight timelines and a collaborative effort, I helped
                      facilitate a smooth production process, ensuring the
                      campaign was delivered on time and met the desired
                      objectives.
                    </p>
                  </div>
                  <div className="col-4 p-5 d-lg-block d-none">
                    <iframe
                      style={{
                        maxWidth: "100%",
                        minWidth: "250px",
                        margin: "0px",
                        transformOrigin: "top left",
                      }}
                      width="530"
                      height="305"
                      src="https://www.youtube.com/embed/TFxhcnZqZPM?si=r2jMHNfOeYRDnVNJ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    <br />
                    <em className=" mt-2">Niko Vs The Prime Minister</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {openAccordion === null || openAccordion === "parental" ? (
          <div
            className="accordion-item portfolio-parental"
            ref={(el) => (accordionRefs.current["parental"] = el)}
          >
            <h2 className="accordion-header ">
              <button
                className={`accordion-button ${
                  openAccordion === "parental" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion("parental")}
              >
                <h2>Parental Guidance</h2>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === "parental" ? "show" : ""
              }`}
            >
              <div className="accordion-body vh-100 d-flex rows">
                <div className="row">
                  <div className="col-lg-3 col-12 p-lg-5 pb-2 pt-3 p-5 ">
                    <p className="portfolio-role">Client</p>
                    <h2 className="text-black mb-3">BOOHOOMAN</h2>
                    <p className="portfolio-role"> Role</p>
                    <h2 className="text-black mb-3">PRODUCTION CO-ORDINATOR</h2>
                  </div>
                  <div className="col-lg-5 col-12 p-lg-5 pt-0 p-5">
                    <h2 className="portfolio-main text-black mb-4">
                      Parental Guidance by BoohooMan is a unique dating show
                      where two generations come together to help find the
                      perfect match for a family member.
                    </h2>
                    <p className="portfolio-text mb-4">
                      It was exciting to see these different worlds collide,
                      with the older and younger generations offering
                      contrasting yet entertaining perspectives on love and
                      dating.
                    </p>

                    <p className="portfolio-text mb-4">
                      As the Production Manager, my role was to ensure
                      everything ran smoothly behind the scenes, from managing
                      schedules and coordinating with the casting team to
                      sourcing locations that reflected the show’s playful,
                      dynamic vibe.
                    </p>

                    <p className="portfolio-text mb-4">
                      I worked closely with the creative team to maintain the
                      show’s fun, witty tone while ensuring all logistical
                      elements were on point, delivering a seamless production
                      that blended both generations' humor and style.
                    </p>
                  </div>
                  <div className="col-4 p-5 d-lg-block d-none">
                    <iframe
                      style={{
                        maxWidth: "100%",
                        minWidth: "250px",
                        margin: "0px",
                        transformOrigin: "top left",
                      }}
                      width="530"
                      height="305"
                      src="https://www.youtube.com/embed/6tkWo8hDCBA?si=UnUS25ZWHW8raInw"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    <br />
                    <em className=" mt-2">
                      PARENTAL GUIDANCE ft. Ty Logan | S1E1 | boohooMAN 2023
                    </em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
