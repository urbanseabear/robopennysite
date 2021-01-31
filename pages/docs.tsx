import Head from 'next/head';

function Docs () {
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
        </div>
      </Head>
            <h1>Documentation</h1>
        </div>
    )
}

export default Docs;