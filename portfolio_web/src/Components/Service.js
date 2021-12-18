import React from 'react'
import './Service.css'
import {MdMobileScreenShare} from 'react-icons/md'
import {FaDesktop,FaDigitalOcean} from 'react-icons/fa'
import {BiCast} from 'react-icons/bi'
import {BsFillPeopleFill} from 'react-icons/bs'
import {SiAutodesk} from 'react-icons/si'
const Service = () => {
    return (
        <div>
            <div className="service" id="service">
            <h1>What Services I Offer</h1>
            <h3>You only live once, but if you do it right, once is enough.</h3>
            <div className="service_card">
            <div className="service_card_one">
                    <BiCast id="service_icon"/>
                    <h4>Desktop Application</h4>
                    <h5>You only live once, but if you do it right, once is enough.</h5>
                </div>
                
                <div className="service_card_one">
                    <MdMobileScreenShare id="service_icon"/>
                    <h4>Application Development</h4>
                    <h5>You only live once, but if you do it right, once is enough.</h5>
                </div>
                <div className="service_card_one">
                    <FaDesktop id="service_icon"/>
                    <h4>Website Development</h4>
                    <h5>You only live once, but if you do it right, once is enough.</h5>
                </div>
                <div className="service_card_one">
                    <FaDigitalOcean id="service_icon"/>
                    <h4>Digital Marketing</h4>
                    <h5>You only live once, but if you do it right, once is enough.</h5>
                </div>
                <div className="service_card_one">
                    <BsFillPeopleFill id="service_icon"/>
                    <h4>Business Stratagy</h4>
                    <h5>You only live once, but if you do it right, once is enough.</h5>
                </div>
                
                <div className="service_card_one">
                    <SiAutodesk id="service_icon"/>
                    <h4>UI/UX Designing</h4>
                    <h5>You only live once, but if you do it right, once is enough.</h5>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Service
