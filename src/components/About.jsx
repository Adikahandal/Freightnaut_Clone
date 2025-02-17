import React from 'react'
import './../styles/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import bg from './../assets/logo_img.png'

const About = () => {
  return (
    <div className='about_container'>
      <div className='about_button_div'>
        <p className='about_button'>About Us</p>
      </div>

      {/* contents */}

      <div className='about_content_cont'>
        <div className='abt_content1'>
          <div className="heading_cont">
            <img src={bg} alt="logo" />
            <h1 className="heading_abt">Freightnaut</h1>
          </div>
          <div className='_para_container'>
            <p>
              At Freightnaut, we provide world-class logistics solutions to simplify global trade. Our expertise includes air and sea freight, customs clearance, project cargo, warehousing, intermodal transport, distribution, and insurance, ensuring seamless supply chain services.
            </p>
            <p>
              As trusted partners, we add value at every step, with a commitment to professionalism, flexibility, and a client-first approach. We design tailored logistics solutions to meet your specific needs, ensuring efficient and effective operations.
            </p>
          </div>
        </div>
        <div className='abt_content2'>
          <h3 className='abt_heading2'>Our services include:</h3>
          <div className="include_cont">
            <div className='content2_part1'>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className='include_div'>
                  <p className="include">Competitive Ocean Freight Rates</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className='include_div'>
                  <p className="include">Custom Clearance</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className='include_div'>
                  <p className="include">Rail Transportation</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className="include_div">
                  <p className="include">Ship Chartering Service</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className="include_div">
                  <p className="include">Project Cargo Logistics</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className='include_div'>
                  <p className="include">LCL Consolidation</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className='include_div'>
                  <p className="include">Coastal Shipping Service</p>
                </div>
              </div>
            </div>
            <div className='content2_part2'>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className="include_div">
                  <p className="include">Competitive Air Freight Rates</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className='include_div'>
                  <p className="include">Road Transportation</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className="include_div">
                  <p className="include">Warehousing</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className="include_div">
                  <p className="include">Ship Broking Service</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className='include_div'>
                  <p className="include">Door-to-Door Service</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className='include_div'>
                  <p className="include">Buyers Consolidation</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='about_icon'/>
                <div className='include_div'>
                  <p className="include">Value-Added Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default About
