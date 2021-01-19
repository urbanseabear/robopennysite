import Head from 'next/head';

function Docs () {
    return (
        <div>
            <div id='stars'></div>
      <div id='stars2'></div>
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
            Docs
        </div>
    )
}

export default Docs;