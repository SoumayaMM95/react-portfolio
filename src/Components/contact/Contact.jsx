import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  // ======= email code start  ===========================
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
//service_id, template_id from the template
// public_key==user_id ==> integration-> api
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    e.target.reset()
      
  };
  // ======= email code end  ============================

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option_icon'/>
            {/* <h5>Email</h5> */}
            <h5>something@gmail.com</h5>
            <a href="mailto:something@gmail.com" target='_blank' rel="noreferrer">Send an email</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className='contact__option_icon'/>
            {/* <h4>LinkedIn</h4> */}
            <h5>LinkedIn Usermane</h5>
            <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option_icon'/>
            {/* <h4>Whatsapp</h4> */}
            <h5>+Phone number</h5>
            <a href="https://wa.me/+971000000000" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        {/* to activate the form:
        - go to emailjs.com, create an account(login if you already have one)
        - create a new service (in this case we are going to create a gmail service and connect the email that we want to receive the messages to the service)
        - create an email template
        ##{{{name of the input in the form}}}##
            {{{name}}}
            {{{email}}}
            {{{message}}}


        - Link the template to the website:
            *install emailjs dependencies(npm install emailjs-com --save)
            *import { useRef } from 'react' and import emailjs from 'emailjs-com'
            *Add the email code above

         */}

          
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact