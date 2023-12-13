import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Bootstrap5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>jQuery</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>AJAX</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Reactjs, Nextjs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>



        <div className="experience__backend">
        <h3>Backend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Core PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>PHP Frameworks (Laravel, CodeIgneter)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>MVC</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Nextjs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
