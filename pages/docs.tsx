import Head from 'next/head';
import '@fortawesome/fontawesome-free/js/all.js';
import styles from "../styles/Docs.module.scss";
import fs from 'fs';
import { useEffect, useState } from 'react';
import remark from 'remark';
import html from 'remark-html';
import { motion } from 'framer-motion';


function Docs ({ commands }) {
    const [currentCommand, setCurrent] = useState('meow. click on a command in the sidebar to see more info.');

    const handleClick = (e) => {
        
        remark().use(html).process(commands[e.target.value].content)
        .then((result) => {
            setCurrent(result.toString());
        })
        .catch(err => console.error(err));
    }
    return (
        <div>
            <div id='stars'></div>
      <div id='stars2'></div>
      <Head>
        <title>Robo Penny</title>
        <link rel="icon" href="/favicon.ico" />
        <div id='first' className='nav'>
        <a className='navOption' href='/'>Home</a>
        
        <a className='navOption' href='/about'>About</a>
        
        <a className='navOption' href='/docs'>Docs</a>
        
        <a className='navOption' href='/deploy'> Deploy</a>
        <div className="social">
        <a href='https://discord.gg/dHbsSvKfbP' target="_blank" className="badgob" ><i className="fab fa-discord"></i><span className="bgtext">Help & Support</span></a>
        </div>
        </div>
      </Head>
      <div className={styles.docContain}>
          <div className={styles.docHead}>
            <h1>Documentation</h1>
            </div>
            <div className={styles.sidebar}>Commands
                <ul>
                    {commands.map((com, i) => {
                        return (<li className={styles.coms} value={i} onClick={(e) => handleClick(e)}>{com.name}</li>);
                    })}
                </ul>
            </div>
            <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            },
          }}>
            <div id='method-info' className={styles.documentation}  dangerouslySetInnerHTML={{__html: currentCommand}}>
            </div>
            </motion.div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const allCommands = fs.readdirSync('/home/calvin/vscode/robopennysite/docs');
    let commands = []; 
    for (const file of allCommands) {
       let command = { name: file.slice(0, file.length - 3), content: fs.readFileSync(`/home/calvin/vscode/robopennysite/docs/${file}`).toString() };
       commands.push(command);
    }
    return {
        props: {
            commands
        }
    }
}
export default Docs;