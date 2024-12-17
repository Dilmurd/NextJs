import React from "react";
import "./Us.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Us() {
  return (
    <main>
      <section className="us">
        <div className="container">
          <div className="us__wrapper">
            <div className="us__text">
              <p className="us__title">CONTACT US</p>
              <p className="us__subtitle">
                Have a Question ? Let’s Get in Touch with us 👋
              </p>
              <p className="us__desc">
                Fill up the Form and ou team will get back to within 24 hrs
              </p>
              <form action="">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter your name"/>
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder="Enter your E-mail"/>
                <label htmlFor="">Subject</label>
                <input type="text" placeholder="Enter your Subject"/>
                <label htmlFor="">Message</label>
                <input type="text" className="mes" placeholder="Type your Message"/>
              </form>
              <button>Send Message</button>
            </div>
            <div className="us__texts">
              <p className="us__titles">Location</p>
              <p className="us__inf">
                DLF Cybercity, Bhubaneswar, India, &52050
              </p>
              <p className="us__titles">Working Hour</p>
              <p className="us__inf">
                Monday To Friday 9:00 AM to 8:00 PM Our Support
                Team is available 24Hrs
              </p>
              <p className="us__titles">Contact Us</p>
              <p className="us__inf">020 7993 2905
              Hello@ether.com</p>
              <div className="us__icons">
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaLinkedin/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Us;
