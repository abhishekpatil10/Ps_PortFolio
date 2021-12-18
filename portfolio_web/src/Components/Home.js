import React, { Profiler } from 'react'
// import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import './Home.css'
import pic from '../profile.jpeg'
import {MdOutlineWork} from 'react-icons/md'
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {
   

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

    return (
        <div className="home_page">
            <div>
                <h4>WELCOME TO MY WORLD</h4>
       <h1>Hello, I am अbhishek</h1>
        <div className="contact">
        <h1>
        {' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Web Developer', 'UI/UX Designer', 'Content Writer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
                  </div>
                  <h3>based in INDIA.</h3>
                  <h5><a href="#">Hire Me</a> <MdOutlineWork id="home_hire"/></h5>
                  </div>
                  <div>
                      {/* <img src="https://folio-gatsby-live.netlify.app/static/portrait-1-4db518f05f5503adba2bdd0803e1352e.png"></img> */}
                      <img src={pic}></img>
                  </div>
                  
                  </div>
    );

    }
        
export default Home



// #191919  #101010;