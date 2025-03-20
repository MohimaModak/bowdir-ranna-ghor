import React, { useRef, useEffect, useState } from 'react'
import video from "../../../Gallery/video1.mp4"
import daily from "../../../Gallery/menu.jpeg"
import "./DailyMenu.css"

const menu = {
  Monday: [
    { name: 'Vat + Dim vuna + Vaji + Mach er torkari', image: daily, meal: 'Lunch', price: '150 DKK', Description: '2 bela vat er sathe 2ta torkari' },
    { name: 'Vat + Dim vuna + Vaji + Mach er torkari', image: daily, meal: 'Dinner', price: '100 DKK', Description: '2 bela vat er sathe 2ta torkari' }
  ],
  Tuesday: [
    { name: 'Vat + Murgi + Sobji', image: daily, meal: 'Lunch', price: '120 DKK', Description: '2 bela vat er sathe 2ta torkari' },
    { name: 'Vat + Murgi + Sobji', image: daily, meal: 'Dinner', price: '180 DKK', Description: '2 bela vat er sathe 2ta torkari' }
  ],
  Wednesday: [
    { name: 'Vat + Vaji + Mach er torkari + Dal', image: daily, meal: 'Lunch', price: '100 DKK', Description: '2 bela vat er sathe 2ta torkari' },
    { name: 'Vat + Vaji + Mach er torkari + Dal', image: daily, meal: 'Dinner', price: '220 DKK', Description: '2 bela vat er sathe 2ta torkari' }
  ],
  Thursday: [
    { name: 'Vat + Mach er torkari  ba vuna + Dal', image: daily, meal: 'Lunch', price: '140 DKK', Description: '2 bela vat er sathe 2ta torkari' },
    { name: 'Vat + Mach er torkari  ba vuna + Dal', image: daily, meal: 'Dinner', price: '150 DKK', Description: '2 bela vat er sathe 2ta torkari' }
  ],
  Friday: [
    { name: 'Vat + Mangsho + Sobji', image: daily, meal: 'Lunch', price: '300 DKK', Description: '2 bela vat er sathe 2ta torkari' },
    { name: 'Vat + Mangsho + Sobji', image: daily, meal: 'Dinner', price: '350 DKK', Description: '2 bela vat er sathe 2ta torkari' }
  ],
  Saturday: [
    { name: 'Dim khichuri + Begun vaji', image: daily, meal: 'Lunch', price: '280 DKK', Description: '2 bela vat er sathe 2ta torkari' },
    { name: 'Dim khichuri + Begun vaji', image: daily, meal: 'Dinner', price: '200 DKK', Description: '2 bela vat er sathe 2ta torkari' }
  ],
  Sunday: [
    { name: 'Vat + Vaji + Mach er torkari + Dal', image: daily, meal: 'Lunch', price: '320 DKK', Description: '2 bela vat er sathe 2ta torkari' },
    { name: 'Vat + Vaji + Mach er torkari + Dal', image: daily, meal: 'Dinner', price: '400 DKK', Description: '2 bela vat er sathe 2ta torkari' }
  ]
};

export default function DailyMenu() {
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
    <div className="relative">

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
        <div className='absolute inset-0 flex justify-center items-center px-5 daily'>
          <div className='bg-orange-300 bg-opacity-60 p-8 rounded'>
            <h1 className='text-4xl lg:text-5xl text-orange-50 text text-center special font-bold'>Bangladesh Food Club</h1>
            <h1 className='text-3xl lg:text-4xl text-orange-50 text font-semibold special text-center my-2.5'>Daily Food Menu</h1>
            <div className="flex justify-center items-center">
              <button className="text-xl text-orange-100 bg-orange-500 border dailyButton font-medium rounded py-1.5 px-4 ">Order Now</button>
            </div>
          </div>
        </div>
      </div>


      <div className="py-24 px-10 text-center bg-orange-200">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold daily text-orange-500">Daily Food Menu</h2>
        <div className='dailyButton my-8'> <button className="bg-orange-300 text-slate-800 font-bold text-xl px-10 py-2 w-max h-max rounded" onClick={() => handleSelectDay('All')}>
          All
        </button>
          <div className='flex justify-center items-center'>
            <div className=''>
              <div className="mt-4 grid sm:grid-cols-2 md:grid-3 lg:grid-cols-4 text-center gap-4">
                {Object.keys(menu).map((day) => (
                  <button
                    key={day}
                    className={`text-orange-600 font-bold text-xl px-10 py-2 text-center rounded ${selectedDay === day ? 'bg-orange-300 text-orange-600' : 'bg-orange-300 text-slate-800'}`}
                    onClick={() => handleSelectDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-6 grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 gap-10">
            {(selectedDay === 'All' ? Object.keys(menu).flatMap(day => menu[day]) : menu[selectedDay]).map((item, index) => (
              <div key={index} className="relative bg-orange-300 rounded-md overflow-hidden">
                <img src={item.image} className="rounded-t-md w-full h-60 object-cover" />

                <div className="absolute inset-0 text-slate-800 hover:bg-orange-300 hover:bg-opacity-80 hover:opacity-100 flex flex-col justify-center items-center p-4 text-center transition-all duration-1000 ease-in-out dailyButton">
                  <div className='hover:opacity-100 opacity-0 transition-all duration-1000 ease-in-out'>
                    <h3 className="text-slate-800 font-semibold text-xl">{item.name}</h3>
                    <h3 className="text-slate-800 font-semibold text-base my-1">{item.Description}</h3>
                    <h3 className="text-slate-800 font-semibold text-xl my-1">{item.meal}</h3>
                    <button className="text-lg text-slate-800 bg-orange-400 font-semibold rounded mt-3 py-1.5 px-3">
                      Order Now
                    </button>
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



