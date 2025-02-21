import React from 'react'
import './../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import bg from './../assets/logo_img.png'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'


const Footer = () => {
    return (
        <div className='Footer_u_cont'>
            <div className='Footer_sub_cont'>
                <div className='foot_links'>
                    <div className='Company_links'>
                        <h1>Company</h1>
                        <a href="./">Home</a>
                        <a href="/about">About</a>
                        <a href="/blog">Blog</a>
                        <a href="/contact">Contact</a>
                    </div>

                    <div className='service_links'>
                        <h1>Services</h1>
                        <a href="./">Freightnaut Software</a>
                        <a href="/about">Digital Freight Forwarding</a>
                    </div>
                    <div className='Address'>
                        <h1>Address</h1>
                        <h2>Pune</h2>
                        <p id='pune_add'>Office No 919, Suratwala Mark Plazoo, Opposite Indian Oil Petrol Pump, Phase 1, Hinjewadi, Pune, Maharshtra, 411057</p>
                        <h2>Loni</h2>
                        <p id='loni_add'>Office No. 21,22,42,43, First Floor, Loni central, loni KD Tal- Rahata, Dist: Ahmednagar, Maharashtra, 413736</p>
                    </div>
                </div>
                <div className='foot_logo'>
                    <div className='company_descrip'>
                        <img src={bg} alt="Freightnaut_Logo" />
                        <div className='com_des_content'>
                            <h1>Freightnaut</h1>
                            <p>seamless export, smart logistics</p>
                        </div>
                    </div>
                    <div className='social_links'>
                        <FontAwesomeIcon icon={faLinkedin} className='social_icons'/>
                        <FontAwesomeIcon icon={faFacebookSquare} className='social_icons'/>
                        <FontAwesomeIcon icon={faInstagram} className='social_icons'/>
                        <FontAwesomeIcon icon={faTwitter} className='social_icons'/>
                    </div>
                </div>
                <p className='comp_rights'> &copy; 2024 All Right Reserved by PRIHIR TECHNOLOGIES PRIVATE LIMITED</p>
            </div>
        </div>
    )
}

export default Footer
