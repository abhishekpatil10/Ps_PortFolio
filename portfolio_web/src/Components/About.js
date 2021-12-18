import React from 'react'
import './About.css'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


const About = () => {
    return (
        <div className="about" id="about">
            <h1>About Me</h1>
            <h4 id="about_quote"> You only live once, but if you do it right, once is enough.</h4>
            <div className="about_one">
                <img src="https://i.pinimg.com/originals/37/c9/f5/37c9f5492e8219c5f91e2b3c28b74c92.png"></img>
                <div>
                    <h4>Since beginning my journey nearly 2 years ago, 
                        I've done remote work for agencies and collaborated with talented people to 
                        create digital content for both business and consumer use. I'm quietly confident, naturally curious, and perpetually
                        working on improving my chops one problem at a time.</h4>
                </div>
            </div>
            <div className="about_two">
            <div className="about_two_head">
            <Tabs defaultActiveKey="1" onChange={callback} id="about_main_tab">
              
              <TabPane tab="Qualification Details" key="1" id="qualification">
              <div class="timeline">
    <ul>
      <li>
        <div class="content">
          <h3>MSC CS</h3><br/>
          <h5>NG ACHARYA & DK MARATHE COLLEGE , CHEMBUR</h5>
          <p>Pursuing</p>
        </div>
        <div class="time">
          <h4>September 2021</h4>
        </div>
      </li>
      
      <li>
        <div class="content">
        <h3>BSC CS</h3><br/>
          <h5>NG ACHARYA & DK MARATHE COLLEGE , CHEMBUR</h5>
          <p>71.80 %</p>
           </div>
        <div class="time">
          <h4>November 2020</h4>
        </div>
      </li>
      
      
      <li>
        <div class="content">
        <h3>HSC</h3><br/>
          <h5>NG ACHARYA & DK MARATHE COLLEGE , CHEMBUR</h5>
          <p>53.54 %</p>
           </div>
        <div class="time">
          <h4>March 2017</h4>
        </div>
      </li>

      
      <li>
        <div class="content">
        <h3>SSC</h3><br/>
          <h5>SKP High School , KURLA </h5>
          <p>68.60 %</p>
           </div>
        <div class="time">
          <h4>March 2015</h4>
        </div>
      </li>
      
      <div style={{clear:'both'}}></div>
    </ul>
  </div>
              </TabPane>
              <TabPane tab="Main Skills" key="2" id="qualification">
              <div class="timeline">
    <ul>
      <li>
        <div class="content">
          <h3>User experience design - UX</h3><br/>
          <h5>
            Delight the user and make it work.</h5>
          <p>ADOBE XD , FIGMA</p>
        </div>
        {/* <div class="time">
          <h4>September 2021</h4>
        </div> */}
      </li>
      
      <li>
        <div class="content">
        <h3> WEB & User interface design - UI
        </h3><br/>
          <h5>Websites, web experiences, ...</h5>
          <p>ADOBE XD , FIGMA</p>
           </div>
        {/* <div class="time">
          <h4>November 2020</h4>
        </div> */}
      </li>
      <li>
        <div class="content">
        <h3> WEB Development
        </h3><br/>
          <h5>Websites,Web Apps.</h5>
          <p>Web Technologies</p>
           </div>
        {/* <div class="time">
          <h4>November 2020</h4>
        </div> */}
      </li>
      
      <li>
        <div class="content">
        <h3>Graphic Designing</h3><br/>
          <h5>Banners,Business cards,logo,.. </h5>
          <p>CANVA</p>
           </div>
        {/* <div class="time">
          <h4>March 2015</h4>
        </div> */}
      </li>
      
      <div style={{clear:'both'}}></div>
    </ul>
  </div>
              </TabPane>
              <TabPane tab="Experience" key="3" id="qualification">
              <div class="timeline">
    <ul>
      
      <li>
        <div class="content">
          <h3>WEB DESIGNER & DEVELOPER</h3><br/>
          <h5>BHN OFFSHORE SERVICES PVT LTD , VASHI</h5>
          <p>MARCH 2021 - SEPTEMBER 2021</p>
        </div>
      </li>
      
      <li>
        <div class="content">
          <h3>WEB DESIGNER & DEVELOPER</h3><br/>
          <h5>THE BABY CARE FOUNDATION , DOMBIVALI</h5>
          <p>SEPTEMBER 2021 - PRESENT</p>
        </div>
      </li>
      
      <div style={{clear:'both'}}></div>
    </ul>
  </div>
              </TabPane>
              <TabPane tab="Certifications" key="4" id="qualification">
              <div class="timeline">
    <ul>
      <li>
        <div class="content">
          <h3>PYTHON FLASK</h3><br/>
          <h5>FOSSLIPY</h5>
          <p>completed</p>
        </div>
        {/* <div class="time">
          <h4>September 2021</h4>
        </div> */}
      </li>
      <li>
        <div class="content">
          <h3>DRUPAL</h3><br/>
          <h5>FOSSLIPY</h5>
          <p>completed</p>
        </div>
        {/* <div class="time">
          <h4>September 2021</h4>
        </div> */}
      </li>
      
      <li>
        <div class="content">
          <h3>AMAZON AWS</h3><br/>
          <h5>JETKING</h5>
          <p>completed</p>
        </div>
        {/* <div class="time">
          <h4>September 2021</h4>
        </div> */}
      </li>
      
     
      
      
     
      
      <div style={{clear:'both'}}></div>
    </ul>
  </div>
              </TabPane>
              <TabPane tab="Awards" key="5" id="qualification">
               <h5>Coming soon</h5>
              </TabPane>
              </Tabs>  
              </div>
               
            </div>
        </div>
    )
}

export default About
