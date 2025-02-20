import React from 'react'
import './../../styles/Home_page/why_us.css'
import bg1 from './../../assets/user_content1.png'
import bg2 from './../../assets/Exp_Expertise2.png'
import bg3 from './../../assets/team3.png'
import bg4 from './../../assets/network4.png'
import bg5 from './../../assets/solutions5.png'
import bg6 from './../../assets/tech_adv6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const WhyUs = () => {
    return (
        <div className='parent_cont'>
            {/* Heading */}
            <div className='heading_parent'>
                <p>Why Choose Freightnaut?</p>
            </div>
            {/* Grid */}
            <div className='why_Grid'>
                <div className="gridchildren">
                    <img src={bg1} alt="Customer_Centric_Approach" />
                    <div>
                        <p className="content">Customer Centric Approach</p>
                    </div>
                </div>
                <div className="gridchildren">
                    <img src={bg2} alt="Experience&Expertise" />
                    <div>
                        <p className="content">Experience and Expertise</p>
                    </div>
                </div>
                <div className="gridchildren">
                    <img src={bg3} alt="Professional_Team" />
                    <div>
                        <p className="content">Professional Team</p>
                    </div>
                </div>
                <div className="gridchildren">
                    <img src={bg4} alt="Global Network" />

                    <div>
                        <p className="content">
                            Global Network</p>
                    </div>
                </div>
                <div className="gridchildren">
                    <img src={bg5} alt="Comprehensive_Solutions" />

                    <div>
                        <p className="content">Comprehensive Solutions</p>
                    </div>
                </div>
                <div className="gridchildren">
                    <img src={bg6} alt="Technological Advantage" />

                    <div>
                        <p className="content">Technological Advantage</p>
                    </div>
                </div>
            </div>
            {/* Button */}
            <div className="why_btn_div">
                <div className="button_wrapper">
                    <button className='ffs_btn'>Learn More <FontAwesomeIcon icon={faArrowRight} className='ffs_icon' /></button>

                </div>
            </div>
        </div >
    )
}

export default WhyUs
