import React, { useRef, useEffect, useState } from 'react'
import video from "../../../Gallery/video1.mp4"
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
import "./DailyMenu.css"

export default function DailyMenu() {
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
    <section className=" relative pt-0 lg:pt-20">
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
      <div className='absolute inset-0 flex justify-center items-center px-5'>
        <div className='bg-orange-300 bg-opacity-60 p-8 rounded'>
          <h1 className='text-5xl lg:text-6xl daily text-orange-100 text-center font-semibold'>Bangladesh Food Club</h1>
          <h1 className='text-3xl lg:text-4xl daily text-orange-100 font-semibold text-center my-2.5'>Daily Food Menu</h1>
          <div className="flex justify-center items-center">
                <button className="text-xl text-orange-100 bg-orange-500 border dailyButton font-medium rounded py-1.5 px-4 ">Order Now</button>
              </div>
        </div>
      </div>
      </div>

      <div>
        Daywise Menu
      </div>

    </section>
  )
}















