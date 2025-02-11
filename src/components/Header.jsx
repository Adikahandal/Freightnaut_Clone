import React from 'react'
import './../styles/Header.css'
import bg from './../assets/logo_img.png'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='logo' >
                    <img src={bg} alt="Freightnaut" className='logo_img' />
                    <a href="#" className='logo_text'>Freightnaut</a>
                </div>

                <div className='links-holder'>
                    <nav className='navLinks'>
                        <a className='links'>About</a>
                        <a className='links'>Services</a>
                        <a className='links'>Global Networks</a>
                        <a className='links'>Resource</a>
                        <a className='links'>Blog</a>
                        <a className='links'>Contact</a>
                    </nav>
                </div>

                <div className='btn-holder'>
                    <button className='nav-btn'>Get Quote</button>
                    <button className='nav-btn'> Join Free</button>

                </div>
            </div>
        </header>
    )
}

export default Header
