import { useState, useEffect } from 'react'
import AnimatedLetter from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'

const About = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetter
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={10}
                        />
                    </h1>
                    <p>I'm currently a 2nd year undergraduate student at IIIT-Bangalore pursuing a BTech and Mtech in CSE.</p>
                    <p>I'm</p>
                    <p>Hey</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cube-spinner'>
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About