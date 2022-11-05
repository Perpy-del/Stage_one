import React from "react";

import zuri from './images/Zuri.Internship_Logo.svg'
import ingressive from './images/I4G.svg'

function Contact () {
  return (
    <div>
    <form action="#">
      <div class="container">
        <div class="content">
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind</p>
            <div class="fullname">
              <div>
                <div class="name">
                  <label for="firstname"> First name </label>
                </div>
                <div> 
                  <input type="text" placeholder="Enter your first name" id="firstname" /> 
                </div>
              </div>

              <div>
                <div class="name">
                  <label for="lastname"> Last name </label>
                </div>
                <div> 
                  <input type="text" placeholder="Enter your last name" id="lastname" /> 
                </div>
              </div>
            </div>

            <div>
              <div class="email">
                <label for="email"> Email </label>
              </div>
              <div> 
                <input type="email" placeholder="yourname@email.com" id="email" /> 
              </div>
            </div>

            <div>
              <div class="message">
                <label for="message"> Message </label>
              </div>
              <div> 
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea> 
              </div>
            </div>
            <div class="agreement">
              <input type="checkbox" id="agreement" />
              <div class="agreemt">
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
          <div class="footer_container">
                  <img src={zuri} alt="Zuri Logo"/>
                  <h4>HNG Internship 9 Frontend Task</h4>
                  <img src={ingressive} alt="I4G"/>
          </div>
      </footer>
      </div>
  );
};

export default Contact