import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
    <section className="section">
      <div className="container">
        <div className="wrapper">
          <div className="box1">
            <h1>FIND CLOTHES <br />THAT MATCHES <br />YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
            <button className='btn'>Shop Now</button>
            <img src="/public/frame.png" alt="" />
          </div>
          <div className="box2">
            <img src="/public/hero-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero