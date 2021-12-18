import React from 'react'
import {FaStaylinked,FaLinkedin} from 'react-icons/fa';
import {AiFillFacebook} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {ImWhatsapp} from 'react-icons/im'
import {GoMarkGithub} from 'react-icons/go'
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer_icon">   
               <a href="#" title="instagram"> <FiInstagram/></a>
               <a href="#" title="facebook"> <AiFillFacebook/></a>
               <a href="#" title="github"><GoMarkGithub/></a>
               <a href="#" title="linkedin"> <FaLinkedin/></a>
               <a href="#" title="whatsapp"> <ImWhatsapp/></a>
               <a href="#" title="resume"> <FaStaylinked/></a>
                </div>
                <div className="footer_copy">
                    <h5>Copyright 2021 © अbhi Patil <br/>
                    <span>Created by अbhishek Patil </span></h5>
                </div>
            </div>
        </div>
    )
}

export default Footer
