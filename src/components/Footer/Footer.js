import React from 'react'
import "./Footer.scss"
import logo from "@/assets/footer.png"
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <Image src={logo} alt='salom'/>
                    <span>©2021 Finsweet</span>
                </div>
                <div className="footer__icons">
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer