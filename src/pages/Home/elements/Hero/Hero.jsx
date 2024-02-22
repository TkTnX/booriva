import React from 'react'
import "./_hero.scss"
import imgData from "./data/data-img";


export const Hero = () => {

  return (
    <section className="hero">
        <div className="container">
            <ul className="hero__grid">
          {
            imgData.map((value, index) => {
              return (
                <li key={index} className='hero__item'>

                  <img src={value} alt={index} />
                </li>
              )
            })
          }
            </ul>
        </div>
    </section>
  )
}
