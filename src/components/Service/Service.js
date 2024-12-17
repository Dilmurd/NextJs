import React from 'react'
import "./Service.scss"

function Service() {
  return (
    <main>
        <section className="service">
            <div className="container">
              <div className="service__wrapper">
                <div className="service__text">
                  <p className='service__title'>Our Services</p>
                  <p className="service__subtitle">We Build Software Solutionthat Solve Clients Business Challenges</p>
                  <p className="service__desc">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
                  <button>Request A Quote</button>
                </div>
                <div className="service__texts">
                  <p className='service__inf'>Technical support</p>
                  <p className='service__inf'>Development</p>
                  <p className='service__inf'>AWS/Azure </p>
                  <p className='service__inf'>Consulting</p>
                  <p className='service__inf '>Information Technology</p>
                </div>
              </div>
            </div>
        </section>
    </main>
  )
}

export default Service