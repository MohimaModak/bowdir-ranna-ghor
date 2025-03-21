import { useRef, useEffect, useState } from 'react';
import video from "../../../Gallery/video3.mp4";
import Sahitukra from "../../../Gallery/Sahi tukra.jpg";
import Rosogolla from "../../../Gallery/Rosogolla.webp";
import Jilapi from "../../../Gallery/Jilapi.jpg";
import lassi from "../../../Gallery/lassi.jpg";
import Faluda from "../../../Gallery/Faluda.jpg";
import "./Dessert.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Food from "../../../Gallery/food12.png"


const menu = {
  Monday: [
    { name: 'Rosogolla', image: Rosogolla, price: '150 DKK' },

  ],
  Tuesday: [
    { name: 'Jilapi', image: Jilapi, price: '120 DKK' },
  ],
  Wednesday: [
    { name: 'Lassi', image: lassi, price: '100 DKK' },
  ],
  Thursday: [
    { name: 'Faluda', image: Faluda, price: '140 DKK' },
  ],
  Friday: [
    { name: 'Sahi tukra', image: Sahitukra, price: '300 DKK' },
  ]
};

export default function Dessert() {
  const [selectedDay, setSelectedDay] = useState('All');

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };
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
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

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
    <div id='/Dessert' className="relative">

      <div className='relative'>
        <div data-aos="fade-up" className="relative">
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
        <div className='absolute inset-0 flex justify-center items-center px-5 daily'>
          <div className='bg-orange-300 bg-opacity-60 p-8 rounded'>
            <h1 className='text-4xl lg:text-5xl text-orange-50 text text-center special font-bold'>Bangladesh Food Club</h1>
            <h1 className='text-3xl lg:text-4xl text-orange-50 text font-semibold special text-center my-2.5'>Dessert Menu</h1>
            <div className="flex justify-center items-center">
              <a href="/Touch" ><button className="text-xl text-orange-100 bg-orange-500 border dailyButton font-medium rounded py-1.5 px-4 ">Order Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div data-aos="fade-up" className="p-8 lg:px-24 py-20 text-center bg-orange-200">





         <div data-aos="fade-up" className='flex justify-center items-center'>  
                <span> <img src={Food} className='w-16' /></span> 
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold daily text-orange-500">Dessert Menu</h2><span> <img src={Food} className='w-16' />
                </span>
               </div>


        <div className="flex justify-center items-center">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10">
            {(selectedDay === 'All' ? Object.keys(menu).flatMap(day => menu[day]) : menu[selectedDay]).map((item, index) => (
              <div key={index} className="relative bg-orange-300 rounded-md overflow-hidden">
                <img src={item.image} className="rounded-t-md w-full h-60 object-cover" />

                <div className="absolute inset-0 text-slate-800 hover:bg-orange-300 hover:bg-opacity-80 hover:opacity-100 flex flex-col justify-center items-center p-4 text-center transition-all duration-1000 ease-in-out dailyButton">
                  <div className='hover:opacity-100 opacity-0 transition-all duration-1000 ease-in-out'>
                    <h3 className="text-slate-800 font-semibold text-xl">{item.name}</h3>
                    <h3 className="text-slate-800 font-semibold text-base my-1">{item.Description}</h3>
                    <h3 className="text-slate-800 font-semibold text-xl my-1">{item.meal}</h3>
                    <a href="/Touch" > <button className="text-lg text-slate-800 bg-orange-400 font-semibold rounded mt-3 py-1.5 px-3">
                      Order Now
                    </button>
                    </a>
                  </div>
                </div>
                <p className="text-slate-800 font-semibold text-xl my-2">Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



