import React, { useState } from 'react'
import './../styles/Header.css'
import bg from './../assets/logo_img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown'
import { href } from 'react-router-dom'



const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>

            <header>
                <div className='container'>
                    <div className='logo' >
                        <img src={bg} alt="Freightnaut" className='logo_img' />
                        <a href="./" className='logo_text'>Freightnaut</a>
                    </div>

                    <div className='links-holder'>
                        <nav className='navLinks'>
                            <a href='#about' className='links'>About</a>

                            {/* <label htmlFor="Services">Services</label>
                        <select name="Services" id="Services">
                            <option value="Cha"></option>
                            <option value="Soft"></option>
                        </select> */}
                            <div id='service_link_cont'>
                                <button className='service_btn' onClick={()=> setIsOpen(!isOpen)}>Services</button>
                                <FontAwesomeIcon icon={faAngleDown} className='service_drop_icon' />
                                {isOpen &&
                                    <div className='service_sublinks'>
                                        <a href='/CHA' className='links'>CHA & Freight Forwarding Services </a>
                                        <a href='/Software' className='links'>Freightnaut Software </a>
                                    </div>
                                }
                            </div>

                            {/* <a className='links'>Global Networks</a>
                        <a className='links'>Resource</a> */}
                            <a href='/blog' className='links'>Blog</a>
                            <a href='/contact' className='links'>Contact</a>
                        </nav>
                    </div>

                    <div className='btn-holder'>
                        <button className='nav-btn' ><a href="#form">Get Quote</a></button>
                        <button className='nav-btn'> <a href="https://app.freightnaut.com/">Join Free</a></button>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
