import Headshot from '../assets/headshot.jpg'


function Home() {
    return (    
        <main>

        <h1>Hi, I'm Jenn -- A womens wrestling collegiate athlete turned software engineer</h1>
        <img className='profileImage' src={Headshot} alt='profile' />

        <h2> I am a software engineer with a background in business management, coaching and athletics!</h2>
 
       </main>
    )
}

export default Home;