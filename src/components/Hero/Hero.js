import React from 'react'
import "./Hero.scss"
import { FaArrowRightLong } from "react-icons/fa6";
import hero from "@/assets/hero.png"
import Image from 'next/image';

function Hero() {
  return (
    <main>
        <section className='hero'>
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__text">
                        <p className='hero__title'>Transform Your Idea Into Reality with Finsweet</p>
                        <p className='hero__subtitle'>
                        The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.
                        </p>
                        <button>Request Quote</button>                        
                    </div>
                    <div className="hero__img">
                        <Image src={hero} alt=''/>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero