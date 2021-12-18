import React from 'react'
import './Contact.css'
import pic from '../profile1.jpeg'
import {BiMailSend} from 'react-icons/bi'

const Contact = () => {
    return (
        
            <div className="contact_page" id="contact">
                <h1>Let's Have a Quick Chat !</h1>
                <div className="main_contact">
                    <div className="contact_form">
                    <h4>I am available for freelance work.
                    <br/> Connect with me 
                    via<span> phone: 01923 088574 </span>  OR  
                     <span> email: admin@example.com </span></h4>
                            <input type="text" placeholder="Your Name *"></input>
                            <input type="email" placeholder="Your Email *"></input>
                            <input type="text" placeholder="Your Contact Number *"></input>
                            <input type="text" placeholder="Write a Query/Subject *"></input>
                            <textarea type="text" placeholder="Your Message *"></textarea>
                            <button>Send <BiMailSend id="send_mail"/></button>
                    </div>
                    <div>
                <img src={pic}></img>
                  </div>
            </div>
           
            
        </div>
    )
}

export default Contact
