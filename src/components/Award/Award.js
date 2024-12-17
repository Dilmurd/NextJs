import React from 'react'
import "./Award.scss"
import award from "@/assets/award.png"
import award2 from "@/assets/award2.png"
import award3 from "@/assets/award3.png"
import Image from 'next/image'
import shape from "@/assets/Shape.png"
import shapes from "@/assets/Shapes.png"


function Award() {
  return (
    <main>
        <section className="award">
            <div className="container">
                <div className="award__wrapper">
                    <div className="award__text">
                        <div className='award__shapes'>
                        <Image src={shape} alt='' className='img'/>
                        <Image src={shapes} alt=''/>
                        </div>
                        <p className='award__title'>Company</p>
                        <p className="award__subtitle">Award-winning Company seen and used by millions around the world.</p>
                        <p className="award__desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
                    </div>
                    <div className="award__imgs">
                        <Image src={award} alt=''/>
                        <Image src={award2} alt=''/>
                        <Image src={award3} alt=''/>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Award