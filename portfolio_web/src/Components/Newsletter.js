import React from 'react'
import { BiMailSend } from 'react-icons/bi';
import './Newsletter.css';
const Resume = () => {
    return (
        <div>
            <div className="resume">
          <h1>Newsletter</h1>
          <div className="newsletter">
          <input type="text" placeholder="email.."></input>
          <button>Subscribe <BiMailSend id="send_mail"/></button>
          </div>
          </div>  
        </div>
    )
}

export default Resume
