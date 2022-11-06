import React from "react";
import './index.css';
// importing from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

import logo from './images/Default.svg'
import share from './images/share_default.svg'
import slack from './images/slack.svg'
import gh from './images/Social icon.svg'
import zuri from './images/Zuri.Internship_Logo.svg'
import ingressive from './images/I4G.svg'
import avatar from './images/Avatar.png'

const Home = () => {
  return (
    <div className="App">
      <section className="main w-full mx-auto max-w-3xl">
        <div className="relative">
          <div className="profile flex flex-col justify-center items-center gap-y-4 relative">
            <img src={logo} alt="Profile" id="profile__img" />
            <img
              src={share}
              alt="Share"
              id="avatar_share"
              className="absolute right-0 top-10 hidden sm:block"
            />
            <img
              src={avatar}
              alt="Profile"
              id="profile__img"
              className="absolute right-0 top-10 sm:hidden"
            />
            <div id="twitter">
              <h3> Ogo Meninwa </h3>
            </div>
            <div id="slack" className="hidden">
              <h3> Perpetual Meninwa </h3>
            </div>
          </div>

          <div className="link flex flex-col gap-y-4 mx-auto w-full ">
            <a
              href="https://twitter.com/pominpirational"
              rel="noopener noreferrer"
              target="_blank"
              id="twitter_link"
              className="bg-gray-200 text-center py-4 mt-3 rounded-lg hover:bg-gray-300"
            >
              Twitter Link
            </a>
            <a
              href="https://training.zuri.team/"
              rel="noopener noreferrer"
              target="_blank"
              id="btn__zuri"
              className="bg-gray-200 text-center py-4 mt-3 rounded-lg hover:bg-gray-300"
            >
              Zuri Team
            </a>
            <a
              href="http://books.zuri.team"
              rel="noopener noreferrer"
              target="_blank"
              id="books"
              className="bg-gray-200 text-center py-4 mt-3 rounded-lg hover:bg-gray-300"
            >
              Zuri Books
            </a>
            <a
              href="http://books.zuri.team/python-for-beginners?ref_id=Perpetual Meninwa"
              rel="noopener noreferrer"
              target="_blank"
              id="book__python"
              className="bg-gray-200 text-center py-4 mt-3 rounded-lg hover:bg-gray-300"
            >
              Python Books
            </a>
            <a
              href="https://background.zuri.team"
              rel="noopener noreferrer"
              target="_blank"
              id="pitch"
              className="bg-gray-200 text-center py-4 mt-3 rounded-lg hover:bg-gray-300"
            >
              Background Check for Coders
            </a>
            <a
              href="https://books.zuri.team/design-rules"
              rel="noopener noreferrer"
              target="_blank"
              id="book_design"
              className="bg-gray-200 text-center py-4 mt-3 rounded-lg font-Inter hover:bg-gray-300"
            >
              Design Books
            </a>
            
            <Link to="contact" id="btn_submit" rel="noopener noreferrer"
              target="_blank" className="bg-gray-200 text-center py-4 mt-3 rounded-lg font-Inter hover:bg-gray-300">
              Contact Me</Link>

          </div>
        </div>
      </section>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-x-6 mt-8">
              <img src={slack} alt="slack" />
              <img src={gh} alt="github" />
            </div>
          </div>
        </div>

      <footer class="zuri">
        <div class="container">
          <div className="flex flex-col gap-y-5 items-start sm:flex-row sm:justify-center sm:items-center gap-x-20 my-10">
            <img src={zuri} alt="Zuri Logo" />
            <h4>HNG Internship 9 Frontend Task</h4>
            <img src={ingressive} alt="I4G" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
