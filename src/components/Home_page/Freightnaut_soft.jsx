import React from 'react'
import './../../styles/Freightnaut_soft.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import bg1 from './../../assets/FSOFT_page1.png'
import bg2 from './../../assets/FSOFT_page2.png'


const Freightnaut_soft = () => {
    return (
        <div className="FSoft_cont">
            <h1 >
                Your one-stop solution for export documents & logistics operations
            </h1>
            <div className='part'>
                <div className='info'>
                    <div className='info_cut '>
                        <p>FREIGHTNAUT SOFTWARE</p>
                        <h1>
                            Your all-in-one trade management software
                        </h1>
                        <div className='points_div'>
                            <FontAwesomeIcon icon={faCheck} className='icon_FSoft' />
                            <p>Cloud-based software that streamlines the entire documentation process</p>
                        </div>
                        <div className='points_div'>
                            <FontAwesomeIcon icon={faCheck} className='icon_FSoft' />
                            <p>Say goodbye to outdated paper processes and miscommunication issues</p>
                        </div>
                        <div className='points_div'>
                            <FontAwesomeIcon icon={faCheck} className='icon_FSoft' />
                            <p>Easy to create, manage and share all your logistics documents in one centralized platform</p>
                        </div>
                    </div>
                </div>
                <div className='image_div'>
                    <img src={bg1} alt="" />
                </div>
            </div>
            <div className='part' id='part2_u_cont'>
                <div className='image_div2' >
                    <img src={bg2} alt="" />
                </div>
                <div className='info' id='part2_cont'>
                    <div className='info_cut ' id='part2'>

                        <h1>
                            Save Time & Eliminate Errors
                        </h1>
                        <div className='points_div'>
                            <FontAwesomeIcon icon={faCheck} className='icon_FSoft' />
                            <p>Avoid customs delays and missed shipments by eliminating manual data re-entry and reducing human error with our streamlined process.</p>
                        </div>
                        <div className='points_div'>
                            <FontAwesomeIcon icon={faCheck} className='icon_FSoft' />
                            <p>Enter data once, any updates made will sync across all documents seamlessly.</p>
                        </div>
                        <div className='points_div'>
                            <FontAwesomeIcon icon={faCheck} className='icon_FSoft' />
                            <p>Maintain brand consistency with flexible and correct document designs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Freightnaut_soft


{/* <FontAwesomeIcon icon="fa-solid fa-check" /> */ }