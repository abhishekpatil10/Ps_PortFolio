import React from 'react'
import './Header.css';
import {HiMenuAlt3} from 'react-icons/hi'
const Header = () => {
    return (
        <div>
           <div className="header" id="header">
               <h3>अbhi</h3>
               <HiMenuAlt3 id="head_bar" onClick={burgerToggle}/>
               <div className="links" id="link_ul">
                   <a href="#about">About</a>
                   <a href="#service">Service</a>
                   <a href="#portfolio">Portfolio</a>
                   <a href="#uiux">UI/UX</a>
                   <a href="#contact">Contact</a>
                   <a href="#" id="link_resume">Resume</a>
                   
               </div>
           </div>
        </div>
    )
}


function burgerToggle() {
    let linksEl = document.querySelector('#link_ul');
    if (linksEl.style.display === 'grid') {
        linksEl.style.display = 'none';
    } else {
        linksEl.style.display = 'grid';
    }
}

export default Header
