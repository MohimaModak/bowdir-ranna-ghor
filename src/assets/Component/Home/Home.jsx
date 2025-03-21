import React, { useEffect, useState } from 'react'
import food1 from "../../../Gallery/Food1.png"
import food2 from "../../../Gallery/Food2.png"
import food3 from "../../../Gallery/Food3.png"
import food4 from "../../../Gallery/Food4.png"
import food5 from "../../../Gallery/Food5.png"
import food6 from "../../../Gallery/Food6.png"
import food7 from "../../../Gallery/Food7.png"
import food8 from "../../../Gallery/Food8.png"
import food9 from "../../../Gallery/Food9.png"
import food10 from "../../../Gallery/Food10.png"
import food11 from "../../../Gallery/Food11.png"
import Hero from "../../../Gallery/bowdi.png"
import "./Home.css"
import Section2 from '../Section2/Section2'
import Section from '../Section/Section'
import Testimonial from '../Testimonial/Testimonial'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Highlights from '../Highlights/Highlights'


export default function Home() {

   useEffect(() => {
      AOS.init({
          duration: 1500, // Animation duration
          easing: 'ease-out', // Animation easing
          once: true, // Ensure animation runs only once
          delay: 100, // Delay before animation starts
      });
      AOS.refresh(); // Refresh AOS to detect new elements
  }, []);

  return (
    <div>
      <div id='/' className='relative bg-orange-200 all pt-24'>
        <div data-aos="zoom-out" className='relative  h-screen'>
          <div className='relative '>
            <div className='wrapper absolute inset-0  h-screen w-full '>
              <div className='box opacity-10 lg:opacity-30'>
                <div><img src={food1} alt="" srcset="" /></div>
                <div><img src={food2} alt="" srcset="" /></div>
                <div><img src={food3} alt="" srcset="" /></div>
                <div><img src={food4} alt="" srcset="" /></div>
                <div><img src={food5} alt="" srcset="" /></div>
                <div><img src={food6} alt="" srcset="" /></div>
                <div><img src={food7} alt="" srcset="" /></div>
                <div><img src={food8} alt="" srcset="" /></div>
                <div><img src={food9} alt="" srcset="" /></div>
                <div><img src={food10} alt="" srcset="" /></div>
                <div><img src={food11} alt="" srcset="" /></div>
                <div><img src={food1} alt="" srcset="" /></div>
                <div><img src={food2} alt="" srcset="" /></div>
                <div><img src={food3} alt="" srcset="" /></div>
                <div><img src={food4} alt="" srcset="" /></div>
                <div><img src={food5} alt="" srcset="" /></div>
                <div><img src={food6} alt="" srcset="" /></div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='absolute inset-0 flex justify-center items-center h-full md:mt-0 p-8 lg:px-24 py-16 '>
              <div className='flex justify-center items-center '>
                <div className='lg:flex justify-center items-center gap-10 text-center lg:text-left'>
                  <div className='lg:w-2/4 '>
                    <h1 className="text-orange-600 text-7xl lg:text-9xl font-bold food">
                      Bd Food
                    </h1>
                    <h1 className='text-gray-800 text-2xl lg:text-3xl font-bold my-4 hidden lg:block'>Experience the Art <br />of Fine Dining</h1>
                    <h1 className='text-gray-800 text-3xl font-bold my-4 block lg:hidden'>Experience the Art of Fine Dining</h1>
                    <p className='mb-5 text-xl font-medium hidden md:block'>If you are keen to order, just send the amount and leave us the screenshot and the item name. Remember after 9am, orders will be considered for next day.</p>

                    <div className="container relative text-orange-600 text-xl md:text-2xl font-medium ">
                    <a href="/Touch"><button className='btn btn1 rounded'>Order Now</button></a>
                    </div>
                  </div>
                  <div className='flex justify-center items-center mt-5 lg:mt-0'>
                    <img src={Hero} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Section2></Section2>
        {/* <Touch></Touch> */}
        <Section></Section>
        <Highlights></Highlights>
        <Testimonial></Testimonial>
      </div>
    </div>

  )
}



