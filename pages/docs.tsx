import Head from 'next/head';
import '@fortawesome/fontawesome-free/js/all.js';

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
        <div className="social">
        <a href='https://discord.gg/dHbsSvKfbP' target="_blank" className="badgob" ><i className="fab fa-discord"></i><span className="bgtext">Help & Support</span></a>
        </div>
        </div>
      </Head>
            <h1>Documentation</h1>
        </div>
    )
}

export default Docs;