import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {FaViber} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yim6wbw', 'template_lqkeblu', form.current, 'CxFVCtNpQDgES-1vF')
        e.target.reset()
      };

  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className="container contact__container">
         <div className="contact__options">
             <article className='contact__option'>
                 <MdOutlineEmail className='.contact__option-icon'/>
                 <h4>Email</h4>
                 <h5>rslwow79@gmail.com</h5>
                 <a href="mailto:rslwow79@gmail.com">Send a message</a>
             </article>

             <article className='contact__option'>
                 <FaViber className='.contact__option-icon'/>
                 <h4>Viber</h4>
                 <h5>+380967959909</h5>
                 <a href="viber://chat?number=380967959909">Send a message</a>
             </article>

             <article className='contact__option'>
                 <BsWhatsapp className='.contact__option-icon'/>
                 <h4>WhatsUp</h4>
                 <h5>+380967959909</h5>
                 <a href="https://api.whatsapp.com/send?phone=380967959909">Send a message</a>
             </article>
         </div>
         <form ref={form} onSubmit={sendEmail}>
             <input type="text" name='name' placeholder='Your Full Name' required />
             <input type="email" name='email' placeholder='Your Email' required />
             <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
             <button type='submit' className='btn btn-primary'>Send Message</button>
         </form>
     </div>
    
    </section>
  )
}

export default Contact
