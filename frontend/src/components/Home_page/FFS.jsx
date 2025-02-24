import React from 'react'
import './../../styles/Home_page/FFS.css'
import bg1 from './../../assets/sea_freight.png'
import bg2 from './../../assets/road_transp.png'
import bg3 from './../../assets/warehouse.png'
import bg4 from './../../assets/airplane.png'
import bg5 from './../../assets/custom.png'
import bg6 from './../../assets/insurance.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

const FFS = () => {
    return (
        <div className='ffs_cont'>
            <div className="heading_con">
                <h1 className='ffs_heading'>
                    Freight Forwarding Services!
                </h1>
                <p className='ffs_des'>Manage all your operations in one place.</p>
            </div>
            <div className='grid-container'>
                <div className="grid_area">
                    <div className="card_img">
                        <img src={bg1} alt="card_img" className='img_card' style={{ width: '90%', height: '90%' }} />
                    </div>
                    <h2 className="side_heading">Sea Freight</h2>
                </div>
                <div className="grid_area">
                    <div className="card_img">
                        <img src={bg2} alt="card_img" className='img_card' style={{ width: '80%', height: '80%' }} />
                    </div>
                    <h2 className="side_heading">Road Transportation</h2>
                </div>
                <div className="grid_area">
                    <div className="card_img">
                        <img src={bg3} alt="card_img" className='img_card' style={{ width: '95%', height: '95%' }} />
                    </div>
                    <h2 className="side_heading">CFS/ Warehousing/ Storage</h2>
                </div>
                <div className="grid_area">
                    <div className="card_img">
                        <img src={bg4} alt="card_img" className='img_card' style={{ width: '90%', height: '90' }} />
                    </div>
                    <h2 className="side_heading">Air Freight</h2>
                </div>
                <div className="grid_area">
                    <div className="card_img">
                        <img src={bg5} alt="card_img" className='img_card' style={{ width: '80%', height: '80%' }} />
                    </div>
                    <h2 className="side_heading">Custom Clearance</h2>
                </div>
                <div className="grid_area">
                    <div className="card_img">
                        <img src={bg6} alt="card_img" className='img_card' style={{ width: '100%', height: '80%' }} />
                    </div>
                    <h2 className="side_heading">Insurance Services</h2>
                </div>
            </div>

            <div className="cont_btn_ffs">
                <div className="ffs_sub_cont">
                    <button className='ffs_btn'>Learn More <FontAwesomeIcon icon={faArrowRight} className='ffs_icon'/></button>
                    
                </div>
            </div>

        </div>
    )
}

export default FFS
