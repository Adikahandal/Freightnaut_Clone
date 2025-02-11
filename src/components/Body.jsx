import React from 'react'
import './../styles/Body.css'
import bg from './../assets/ship_img.png'

const Body = () => {
    return (
        <>
            <div className='home_b_container'>

                <div className='sub_container'>
                    <div className='head_h1'>
                        <h1 className='LufgaBold head_txt'>
                            Delivering Excellence in Digital Freight Forwarding & Export Operations Software!
                        </h1>
                    </div>
                    <p className='home_para'>
                        One-stop solution for your international trade documentation and logistics operations with Freightnaut, delivering reliable excellence in CHA and freight forwarding, ensuring the safe and timely delivery of your goods.
                    </p>

                    <div className='btn_cont'>
                        <button className='btn_home' id='btn1'>Start free trial</button>
                        <button className='btn_home' id='btn2'>Request Demo</button>
                    </div>
                    <div className='body_img'>
                        <img src={bg} alt="freightship" className='img_ship'/>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Body
