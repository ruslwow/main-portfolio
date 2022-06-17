import React from 'react'
import "./experience.css"


const Experience = () => {
  return (
    <section id='experience'>
            <div className="experience__tittle"> <h2>My Developer Skills</h2></div>
      <div className="container__experience">
          <div className="card">
              <div className="box">
                  <div>
                      <div className="percent">
                          <svg className='card__svg'>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle> 
                          </svg>
                          <div className="number">
                              <h2>99<span>%</span></h2>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card__text">HTML</div>
          </div>

          <div className="card">
              <div className="box">
                  <div>
                      <div className="percent">
                          <svg className='card__svg'>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle> 
                          </svg>
                          <div className="number">
                              <h2>97<span>%</span></h2>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card__text">CSS</div>
          </div>

          <div className="card">
              <div className="box">
                  <div>
                      <div className="percent">
                          <svg className='card__svg'>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle> 
                          </svg>
                          <div className="number">
                              <h2>79<span>%</span></h2>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card__text">JavaScript</div>
          </div>

          <div className="card">
              <div className="box">
                  <div>
                      <div className="percent">
                          <svg className='card__svg'>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle> 
                          </svg>
                          <div className="number">
                              <h2>67<span>%</span></h2>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card__text">REACT</div>
          </div>
        
         
          
          </div>     
    </section>
  )
}

export default Experience
