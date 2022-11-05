import React from "react";
import './contact.css'

import zuri from './images/Zuri.Internship_Logo.svg'
import ingressive from './images/I4G.svg'

function Contact (props) {
  return (
    <div className="app">
    <form action="#">
      <div className="container">
        <div className="content">
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind</p>
            <div className="fullname">
              <div>
                <div className="name">
                  <label for="firstname"> First name </label>
                </div>
                <div> 
                  <input type="text" placeholder="Enter your first name" id="firstname" /> 
                </div>
              </div>

              <div>
                <div className="name">
                  <label for="lastname"> Last name </label>
                </div>
                <div> 
                  <input type="text" placeholder="Enter your last name" id="lastname" /> 
                </div>
              </div>
            </div>

            <div>
              <div className="email">
                <label for="email"> Email </label>
              </div>
              <div> 
                <input type="email" placeholder="yourname@email.com" id="email" /> 
              </div>
            </div>

            <div>
              <div className="message">
                <label for="message"> Message </label>
              </div>
              <div> 
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea> 
              </div>
            </div>
            <div className="agreement">
              <input type="checkbox" id="agreement" required="required" />
              <div className="agreemt">
                <label for="agreement">
                You agree to providing your data to Perpetual who may contact you
                </label>
              </div>
            </div>
            
            <div>
              <button
                type="button"
                name="send"
                id="send"
              > Send Message </button>
            </div>
        </div>
      </div>
    </form>

      <footer>
        <hr />
          <div className="footer_container">
                  <img src={zuri} alt="Zuri Logo"/>
                  <h4>HNG Internship 9 Frontend Task</h4>
                  <img src={ingressive} alt="I4G"/>
          </div>
      </footer>
      </div>
  );
};

export default Contact