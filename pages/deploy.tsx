import Head from 'next/head';
import '@fortawesome/fontawesome-free/js/all.js';
import styles from "../styles/Deploy.module.scss";

function Deploy () {
  return (
      <div>
        <div id='stars'></div>
      <div id='stars2'></div>
      <div>
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
          <h2>Interested in adding RoboPenny to your server?</h2>
          <p>Follow these invite below to add it!</p>
          <div className={styles.eContain}>
          <button className='inviteBot'><a href='https://discord.com/api/oauth2/authorize?client_id=754507160083365898&permissions=2110254327&scope=bot' target='botlink'>Invite RoboPenny!</a></button>
          <iframe className={styles.dEmbed} src="https://discordapp.com/widget?id=728734535956693013&theme=dark" width="350" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
          </div>
          
      </div>
  )
}

export default Deploy;