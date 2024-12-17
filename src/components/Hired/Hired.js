import React from 'react'
import "./Hired.scss"
import career from "@/assets/career.png"
import Image from 'next/image'



function Hired() {
  return (
    <main>
        <section className="hired">
            <div className="container">
                <div className="hired__wrapper">
                    <div className="hired__text">
                        <p className='hired__title'>CAREER AT FINSWEET</p>
                        <p className='hired__subtitle'>We hired people who are
                        Always Passionate about what they do</p>
                        <p className='hired__desc'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
                    </div>
                    <div className="hired__images">
                        <Image src={career} alt=''/>
                        <p>See Our open positions</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hired