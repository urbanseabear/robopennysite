import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import '@fortawesome/fontawesome-free/js/all.js';

export default function Home() {

  return (
    <div >
      <div id='stars'></div>
      <div id='stars2'></div>
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
        <a href='https://discord.gg/dHbsSvKfbP' target="_blank" className="badgob" ><i className="fab fa-discord"></i><span className="bgtext">Help & Support</span></a>
        </div>
        </div>
      </Head>
      
      <main className={styles.main}>
      
        <h1 className={styles.title}>
          RoboPenny says hi!
        </h1>

        <p className={styles.description}>
          A utility bot for FFXIV discord servers
         
        </p>

        <div className={styles.grid}>
          <a href="/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about RoboPenny's features.</p>
          </a>

          <a
            href="/deploy"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Enable RoboPenny on your own discord server!
            </p>
          </a>

          <a
            href="/about"
            className={styles.card}
          >
            <h3>About &rarr;</h3>
            <p>Learn about the developer behind RoboPenny.</p>
          </a>

        </div>
        <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      </main>

      
    </div>
    </div>
  )
}
