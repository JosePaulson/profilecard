import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faAmazon, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer () {
    return (
        <div className='footer'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faGoogle} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faAmazon} />
        </div>
    )
}