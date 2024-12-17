import React from "react";
import "./Header.scss";
import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <Image
            src={logo}
            alt="sao"
            />
          </div>
          <ul className="navbar__collection">
            <li className="navbar__item">
              <Link href={"/home"} className="navbar__link">
                <span>Home</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href={"/servicee"} className="navbar__link">
                <span>Service</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href={"/company"} className="navbar__link">
                <span>Company</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href={"/career"} className="navbar__link">
                <span>Career</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href={"/blog"} className="navbar__link">
                <span>Blog</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href={"/contact"} className="navbar__link">
                <span>Contact us</span>
              </Link>
            </li>
            <li className="navbar__item">
              <a href="#">
                <p>Clone project</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
