import Head from "next/head";
import useModal from "../helpers/_useModal";
import Modal from "../helpers/_Modal";
import styles from "../styles/About.module.scss";
import { useState } from "react";
import '@fortawesome/fontawesome-free/js/all.js';

function About() {

  
  const {isShowing, toggle} = useModal();
  const [showResume, setShowResume] = useState("hidden");
  const [showPics, setShowPics] = useState("hidden");
  
  return (
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div className={styles.container}>
      <Head>
        <title>Robo Penny</title>
        <link rel="icon" href="/favicon.ico" />
        <div id='first' className='nav'>
        <a className='navOption' href='/'>Home</a>
        
        <a className='navOption' href='/about'>About</a>
        
        <a className='navOption' href='/docs'>Docs</a>
        
        <a className='navOption' href='/deploy'> Deploy</a>
        <div className="social">
        <a href='https://discord.gg/dHbsSvKfbP' target="_blank" className="badgob" ><span className="bgtext">Help & Support</span><i className="fab fa-discord"></i></a>
        <a href='https://github.com/urbanseabear/robopenny' target="_blank" className="badgob" ><i className="fab fa-github-square"></i></a>
        <a href='https://twitter.com/RoboPennyFFXIV' target="_blank" className="badgob" ><i className="fab fa-twitter"></i></a>
        </div>
        </div>
      </Head>
      
        <h2 className={styles.title}>About the developer</h2>
        <p className={styles.about}>
          <i>
            Hi! My name is Calvin and you can find me most nights somewhere on
            the Goblin server on Crystal in FFXIV. I made this bot in order to
            work on my dev skills and give our FC discord server some unique
            abilities. If you've been directed here as a portfolio link, click below to view my resume.
            
          </i>
        </p>
        <p className={styles.about}><i>This site is currently under construction, so please excuse the bare bones sections!</i></p>
        <div className={styles.drops}>
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
        
        <h3
          className={styles.char}
          onClick={toggle}
        >
          RESUME  
          {showResume === "hidden"
              ? <span style={{ marginLeft: "8px", fontSize: "1rem" }}>&#9660;</span>
              : <span style={{ marginLeft: "8px",fontSize: "1rem" }}>&#9650;</span>
          }
        </h3>
        <Modal
        isShowing={isShowing}
        hide={toggle}
        />
        </div>
        <img
          src="https://img2.finalfantasyxiv.com/f/9c0b4a932340579824dd05b0db0dc0d5_8e81e2940511f7152ba4462fe53e35b8fl0_640x873.jpg?1611084345&_ga=2.91680218.1124699889.1610844458-424753855.1557808539"
          alt="Penny Ura"
          width={200}
          height={300}
          style={{ visibility: showPics }}
        />
        
        
      </div>
      <div></div>
    </div>
  );
}

export default About;
