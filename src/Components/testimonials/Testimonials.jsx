import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.png'
import AVATAR2 from '../../assets/avatar2.png'
import AVATAR3 from '../../assets/avatar3.png'
import AVATAR4 from '../../assets/avatar4.png'


// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATAR1,
    name: 'Client Name',
    review: 'This was such a pleasure to follow. You explain a lot of the HTML and general structure of the code. Learned a lot about CSS conventions and styling as well. I followed the entire tutorial, and now I am excited to learn more and build upon this and make it my own. Thank you for the amazing tutorial!'
  },
  {
    avatar: AVATAR2,
    name: 'Client Name',
    review: 'This was such a pleasure to follow. You explain a lot of the HTML and general structure of the code. Learned a lot about CSS conventions and styling as well. I followed the entire tutorial, and now I am excited to learn more and build upon this and make it my own. Thank you for the amazing tutorial!'
  },
  {
    avatar: AVATAR3,
    name: 'Client Name',
    review: 'This was such a pleasure to follow. You explain a lot of the HTML and general structure of the code. Learned a lot about CSS conventions and styling as well. I followed the entire tutorial, and now I am excited to learn more and build upon this and make it my own. Thank you for the amazing tutorial!'
  },
  {
    avatar: AVATAR4,
    name: 'Client Name',
    review: 'This was such a pleasure to follow. You explain a lot of the HTML and general structure of the code. Learned a lot about CSS conventions and styling as well. I followed the entire tutorial, and now I am excited to learn more and build upon this and make it my own. Thank you for the amazing tutorial!'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5></h5>
      <h2></h2>
      <Swiper className="container testimonials__container"  
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, Index) =>{
            return(
              <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials