import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robo Penny</title>
        <link rel="icon" href="/favicon.ico" />
        <div className='nav'>
        <a href='/'>Home  |</a>
        <a href='/about'> About |</a>
        <a href='/docs'> Docs |</a>
        <a href='/deploy'> Deploy</a>
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
            href="/about"
            className={styles.card}
          >
            <h3>About &rarr;</h3>
            <p>Learn about the developer behind RoboPenny!</p>
          </a>

          <a
            href="/deploy"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly add RoboPenny to your discord server.
            </p>
          </a>
        </div>
      </main>

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
    </div>
  )
}
