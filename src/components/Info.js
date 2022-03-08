import React from 'react'
import profilePic from '../images/profile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Info () {
    return (
        <div className='info'>
            <img className='profile-pic' src={profilePic} alt="andrew sullivan"/>
            <h1>Andrew Sullivan</h1>
            <h4>Frontend Developer</h4>
            <a className='weblink' target={'_blank'} href='https://www.google.com' rel='noopener noreferrer'>andrew.website</a>
            <button className='btn btn-m'><FontAwesomeIcon icon={faEnvelope} /> Email</button>
            <button className='btn btn-l'><FontAwesomeIcon icon={faLinkedin} />Linkedin</button>
        </div>
    )
}