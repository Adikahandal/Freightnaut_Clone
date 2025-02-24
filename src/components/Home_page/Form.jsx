import React from 'react'
import './../../styles/Home_page/Form.css'

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
];


const Form = () => {
    return (
        <div id='form' className='cont_form'>
            <div className='form_start'>
                <h1>Request for Quote</h1>
                <p>Just fill in a few details and we will get in touch as soon as possible.</p>
                <div className='form_cont'>
                    <form action="#">

                        <input type="text" placeholder='Name' className='input_class' required/>

                        <input type="tel" placeholder='Phone Number' className='input_class' required/>

                        <input type="email" placeholder='Email' className='input_class' required/>

                        <select name="Services" className='select_class' required>
                            <option value="selectService" selected>
                                Select Service
                            </option>
                            <option value="oceanFreight">
                                Ocean Freight
                            </option>
                            <option value="airFreight">
                                Air Freight
                            </option>
                            <option value="customClearance">
                                Custom Clearance
                            </option>
                            <option value="transportation">
                                Transportation
                            </option>
                            <option value="warehousing">
                                Warehousing
                            </option>
                            <option value="logistics">
                                Logistics
                            </option>
                            <option value="multimodalTransport">
                                Multimodal Transport
                            </option>
                            <option value="shipBroking">
                                Ship Broking
                            </option>
                            <option value="chartering">
                                Chartering
                            </option>
                            <option value="agencyCooperation">
                                Agency Cooperation
                            </option>
                            <option value="otherServices">
                                Other Services
                            </option>
                        </select>


                        <select className='select_class'>
                            <option value="Country_of_Loading">
                                Country Of Loading
                            </option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>


                        <select className='select_class' >
                            <option value="Country_of_Destination">
                                Country Of Destination
                            </option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>

                        <textarea name="Message" id="Message" placeholder='Message' 
                        rows={4} resize className='input_class' />


                        <button type='submit'className='form_btn'>Submit Request</button>

                    </form>
                </div>
            </div >
        </div >
    )
}

export default Form
