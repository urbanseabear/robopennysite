import Head from 'next/head';

function Deploy () {
  return (
      <div>
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
          <h2>How To Get RoboPenny</h2>
          <p>Follow these steps to add RoboPenny to any server.</p>
          <button><a href='https://discord.com/api/oauth2/authorize?client_id=754507160083365898&permissions=2110254327&scope=bot'>Add me!</a></button>
      </div>
  )
}

export default Deploy;