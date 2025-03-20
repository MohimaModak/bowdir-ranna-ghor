import React from 'react'
import phoneImg from "../../../Gallery/whatsapp.png"
import mailImg from "../../../Gallery/facebook.png"
import home from "../../../Gallery/instagram.png"
import "./Touch.css"

export default function Touch() {

  return (
    <div className="w-full bg-orange-300 py-24 px-10 touch">
      <h1 className='text-4xl md:text-4xl lg:text-5xl font-bold text-orange-600 text-center'>Confirm Your Order</h1>
      <h1 className='text-xl md:text-2xl font-bold text-gray-700 text-center my-5'>Enjoy Your Meal. Don't Forget To Share Your Experience</h1>

      <div className=" flex justify-center items-center gap-10">
        <div data-aos="fade-up" className="flex items-center gap-4">
          <a href="tel:+4571597652">
            <img src={phoneImg} alt="Phone" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4">
          <a href="https://www.facebook.com/share/1U5rMpn6TL/">  <img src={mailImg} alt="Mail" className="w-10 h-10 md:w-12 md:h-12" /></a>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-4">
          <a href="https://www.instagram.com/">
            <img src={home} alt="Phone" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
        </div>
      </div>
    </div>
  )
}






















