import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetter from '../AnimatedLetters';
// import LogoN from '../../assets/images/Nilay_N.png'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray=[' ', 'N', 'i', 'l', 'a', 'y', '!']
    const jobArray=['2', 'n', 'd', ' ', 'y', 'e', 'a', 'r', ' ', 'u', 'n', 'd', 'e', 'r', 'g', 'r', 'a', 'd', 'u', 'a', 't', 'e', ' ', 'a', 't', ' ', 'I', 'I', 'I', 'T', '-', 'B']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i!</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetter letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetter letterClass={letterClass} strArray={jobArray} idx={17} /></h1>
                <h2>CTF Enthusiast / App Developer</h2>
                <Link to='/contact' className='flat-button'>Contact me here</Link>
            </div>
        </div>
    );
}

export default Home