import React, { useRef, useEffect, useState } from 'react'
import video from "../../../Gallery/video2.mp4"
import basmati from "../../../Gallery/basmati Chal.jpg"
import biriyani from "../../../Gallery/biriyani.jpg"
import khichuri from "../../../Gallery/khichuri.jpg"
import roast from "../../../Gallery/roast.jpg"
import spicy from "../../../Gallery/spicy.jpg"
import chinigura from "../../../Gallery/chinigura.jpg"
import "./WeekendSpecial.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


const dessertMenu = [
  { name: 'Plain Polao (Chinigura chal)', image: basmati, price: '50 DKK' },
  { name: 'Plain Polao (Basmati Chal)', image: chinigura, price: '35 DKK' },
  { name: 'Spicy chicken', image: spicy, price: '45 DKK' },
  { name: 'Chicken Roast', image: roast, price: '55 DKK' },
  { name: 'Basmati khichuri', image: khichuri, price: '40 DKK' },
  { name: 'Chinigura chal khichuri', image: khichuri, price: '55 DKK' },
  { name: 'Chicken Biriyani', image: biriyani, price: '85 DKK' }
];


export default function WeekendSpecial() {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isPlaying) {
            videoRef.current.play();
            setIsPlaying(true);
          } else if (!entry.isIntersecting && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.5, // 50% of the video needs to be in view to start playing
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);


  useEffect(() => {
      AOS.init({
        duration: 1500,
        easing: 'ease-out',
        once: true,
        delay: 100,
      });
      AOS.refresh();
    }, []);





  return (
    <div id='/WeekendSpecial' className="relative weekend bg-orange-200 ">

      <div className='relative'>
        <div data-aos="zoom-out" className="relative">
          <video
            ref={videoRef}
            src={video}
            className="w-full h-[680px]"
            muted
            loop
            preload="auto"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div data-aos="zoom-out" className='absolute inset-0 flex justify-center items-center px-5 weekend'>
          <div className='bg-orange-300 bg-opacity-60 p-8 rounded'>
            <h1 className='text-4xl lg:text-5xl text-orange-50 text text-center special font-bold'>Bangladesh Food Club</h1>
            <h1 className='text-3xl lg:text-4xl text-orange-50 text font-semibold special text-center my-2.5'>Weekend Special</h1>
            <div className="flex justify-center items-center">
              <a href="/Touch" > <button className="text-xl text-orange-50 text bg-orange-400
               weekend font-medium rounded py-2 px-4 ">Order Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='p-8 lg:px-24 py-20'>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold daily text-orange-500">Weekend Special</h2>

        <p className='text-slate-800 text-center mt-4  text-lg font-semibold'>Confirm your order and enjoy your meal. Don't forget to share you experience</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 space-y-14 weekend">
          {dessertMenu.map((dessertItem, index) => (
            <div className="flex justify-center items-center ">
              <div className="shadow-2xl bg-orange-200 rounded-md back h-[250px] w-[230px] hover:pt-10 hover:h-[400px] my-3 lg:my-0 transition-all duration-500">
                <div key={dessertItem.country} className=''>
                  <div className="flex justify-center items-center">
                    <img
                      src={dessertItem.image}
                      className=" rounded-full w-[200px] h-[200px] p-1.5 transition-transform transform hover:scale-105 image shadow-2xl"
                      alt={dessertItem.image}
                    />
                  </div>
                  <div className=" text-center">
                    <p className="text-slate-800 font-semibold text-xl my-2">{dessertItem.price}</p>
                    <h3 className="text-orange-500 font-semibold  text-xl show">{dessertItem.name}</h3>
                    <a href="/Touch" ><button className="text-lg show text-slate-800 bg-orange-500 font-semibold rounded mt-3 py-1.5 px-3">
                      Order Now
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>


          ))}
        </div>
      </div>
    </div>
  )
}
