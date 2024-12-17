import React from 'react'
import "./Job.scss"
import Image from 'next/image'


function Job() {
  return (
    <main>
        <section className="job">
            <div className="container">
                <div className="job__wrapper">
                    <div className="job__text">
                        <p className='job__title'>CAREER AT Ether</p>
                        <p className='job__subtitle'>Full Stack Developer</p>
                        <p className='job__desc'>Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
                        <button>Apply Now</button>
                    </div>
                    <div className="job__texts">
                        <p className='job__inf'>Job Description</p>
                        <p className='job__info'>Remote, India , 4 to 5 Years Of Experience</p>
                        <p className='job__info'>Department: Product Engineering</p>
                        <p className='job__info'>Full Time 5 Position Available.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Job