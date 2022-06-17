import React from 'react'
import "./about.css"
import ME_CV from "../../my_img/cv_img_en.jpg"


const About = () => {

  return (
    <section id='about'>
     <div className="container__about">
       <div className="about__text">
         <h2 className='about__paragraf'>Hello, briefly about me.</h2>
       <p>Hi, my name is Ruslan, i am 30 years old, I live in Ukraine, Lviv.
        I want to realize myself in the field of information technology, namely in web development.
        My main skills are teamwork, creativity, sociability,  strong organizational skills, ability to solve problems and tasks.
        I can in working under pressure and adapting to new situations and challenges.
        I also have experience in personnel management and management positions.</p>

       </div>
        <img className='my_cv_img' src={ME_CV} alt="my_cv" />
     </div>
    </section>
  )
}

export default About
