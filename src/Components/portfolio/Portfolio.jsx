import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/bastah2png.png'
import IMG2 from '../../assets/RSApp.png'
import IMG3 from '../../assets/Web-Template.png'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'BASTAH961',
    github: 'https://github.com/SoumayaMM95/bastah961',
    demo: 'https://bastah961.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Real Estate App',
    github: 'https://github.com',
    demo: 'https://exhilarated-road-652065.framer.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://fearless-remember-648852.framer.app/'
  },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item_img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item_links">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio