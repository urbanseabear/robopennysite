import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.scss";
import { useState } from "react";

function About() {
  const [showResume, setShowResume] = useState(false);
  const [showPics, setShowPics] = useState("hidden");
  return (
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <Head>
        <title>Robo Penny</title>
        <link rel="icon" href="/favicon.ico" />
        <div className="nav">
          <a href="/">Home |</a>
          <a href="/about"> About |</a>
          <a href="/docs"> Docs |</a>
          <a href="/deploy"> Deploy</a>
        </div>
      </Head>
      <div className={styles.container}>
        <h2 className={styles.title}>About the developer</h2>
        <p className={styles.about}>
          <i>
            Hi! My name is Calvin and you can find me most nights somewhere on
            the Goblin server on Crystal in FFXIV. I made this bot in order to
            work on my dev skills and give our FC discord server some unique
            abilities. If you've been directed here as a portfolio link, click <button>here</button> to view my resume.
          </i>
        </p>
        <h3
          className={styles.char}
          onClick={() => {
            if (showPics === "hidden") {
              setShowPics("visible");
            } else {
              setShowPics("hidden");
            }
          }}
        >
          PENNY URA  
          {showPics === "hidden"
              ? <span style={{ marginLeft: "8px", fontSize: "1rem" }}>&#9660;</span>
              : <span style={{ marginLeft: "8px",fontSize: "1rem" }}>&#9650;</span>
          }
        </h3>
        <img
          src="https://img2.finalfantasyxiv.com/f/9c0b4a932340579824dd05b0db0dc0d5_8e81e2940511f7152ba4462fe53e35b8fl0_640x873.jpg?1611084345&_ga=2.91680218.1124699889.1610844458-424753855.1557808539"
          alt="Penny Ura"
          width={300}
          height={300}
          style={{ visibility: showPics }}
        />
      </div>
      <div></div>
    </div>
  );
}

export default About;
