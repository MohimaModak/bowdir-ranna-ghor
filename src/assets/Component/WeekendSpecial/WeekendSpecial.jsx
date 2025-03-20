import React, { useRef, useEffect, useState } from 'react'
import video from "../../../Gallery/video2.mp4"
import dessert from "../../../Gallery/dessert.jpeg"
import "./WeekendSpecial.css"

const dessertMenu = [
  { name: 'Rosogolla', image: dessert, price: '70 DKK' },
  { name: 'Jilapi', image: dessert, price: '60 DKK' },
  { name: 'Lassi', image: dessert, price: '50 DKK' },
  { name: 'Faluda', image: dessert, price: '80 DKK' },
  { name: 'Sahi Tukra', image: dessert, price: '90 DKK' },
  { name: 'Rosogolla', image: dessert, price: '70 DKK' },
  { name: 'Jilapi', image: dessert, price: '60 DKK' },
  { name: 'Lassi', image: dessert, price: '50 DKK' },
  { name: 'Faluda', image: dessert, price: '80 DKK' },
  { name: 'Sahi Tukra', image: dessert, price: '90 DKK' }
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

  return (
    <div className="relative weekend bg-orange-200 ">

      <div className='relative'>
        <div className="relative">
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
        <div className='absolute inset-0 flex justify-center items-center px-5 weekend'>
          <div className='bg-orange-300 bg-opacity-60 p-8 rounded'>
            <h1 className='text-4xl lg:text-5xl text-orange-50 text text-center special font-bold'>Bangladesh Food Club</h1>
            <h1 className='text-3xl lg:text-4xl text-orange-50 text font-semibold special text-center my-2.5'>Weekend Special</h1>
            <div className="flex justify-center items-center">
              <button className="text-xl text-orange-50 text bg-orange-400 weekend font-medium rounded py-2 px-4 ">Order Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='py-24 lg:px-10'>
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold daily text-orange-500">Weekend Special</h2>

      <p className='text-slate-800 text-center mt-4  text-lg font-semibold'>Confirm your order and enjoy your meal. Don't forget to share you experience</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 space-y-14 weekend">
        {dessertMenu.map((dessertItem, index) => (
          <div className="flex justify-center items-center ">
            <div className="shadow-2xl bg-orange-200 rounded-md back h-[250px] w-[220px] hover:pt-10 hover:h-[385px] my-3 lg:my-0 transition-all duration-500">
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
                    <h3 className="text-orange-400 font-semibold text text-3xl show">{dessertItem.name}</h3>
                    <button className="text-lg show text-slate-800 bg-orange-400 font-semibold rounded mt-3 py-1.5 px-3">
                      Order Now
                    </button>
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
