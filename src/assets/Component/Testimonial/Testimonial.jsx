import React, { useEffect } from 'react';
import client1 from "../../../Gallery/client1.jpeg"
import client2 from "../../../Gallery/client2.webp"
import emoji from "../../../Gallery/emoji.png"
import yummy from "../../../Gallery/yummy.png"
import "./Testimonial.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimonial() {

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
    <div id='/Testimonial' className="p-8 lg:px-24 py-16 relative bg-orange-200 testimonal">
     <div data-aos="zoom-out">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-4xl md:text-4xl lg:text-5xl font-bold text-orange-600">Our Testimonials</p>
        <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-slate-800 ">What Our Clients Say</h2>
      </div>
      <div className="flex justify-center mt-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
        <div className="bg-orange-100 p-6 shadow-lg rounded-lg max-w-sm">
          <h3 className="text-lg font-semibold">The Best Meal I've Had in Ages!</h3>
          <p className="mt-2">
            "I can't even begin to describe how delicious the food was. From the fresh ingredients to the perfect seasoning, every bite was a taste of heaven!  <span className='flex gap-2'><span>I'll definitely be ordering again."</span> <span><img src={yummy} className='w-5'/></span></span>
          </p>
          <div className="flex items-center mt-4">
            <img src={client1} alt="User" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold">Md Arafat Zaman</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 p-6 shadow-lg rounded-lg max-w-sm">
          <h3 className="text-lg font-semibold">Incredible Service and Amazing Flavors!</h3>
         <p className="mt-2">
            "Not only was the food amazing, but the service was exceptional. The delivery was prompt, and everything was packaged so beautifully. <span className='flex gap-2'><span>I’m so impressed!"</span> <span><img src={emoji} className='w-5'/></span></span>
          </p>
          <div className="flex items-center mt-4">
            <img src={client2} alt="User" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold">Porag Modak</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 p-6 shadow-lg rounded-lg max-w-sm">
          <h3 className="text-lg font-semibold">Great for Every Occasion</h3>
          <p className="mt-2">
            "Whether it's a family gathering or a casual lunch, this place never disappoints. The variety of options ensures that everyone can find something they love."  <span className='flex gap-2'><span>I’m so satisfied!"</span> <span><img src={yummy} className='w-5'/></span></span>
          </p>
          <div className="flex items-center mt-4">
            <img src={client2} alt="User" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold">Drabin Paul</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 p-6 shadow-lg rounded-lg max-w-sm">
          <h3 className="text-lg font-semibold">Fresh, Tasty, and Affordable</h3>
          <p className="mt-2">
            "I was so impressed with the freshness of the ingredients. Plus, the prices are fantastic for the quality you get.  <span className='flex gap-2'><span>I’ll be coming back for sure!" </span> <span><img src={emoji} className='w-5'/></span></span>
          </p>
          <div className="flex items-center mt-4">
            <img src={client2} alt="User" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold">Mitali Paul</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}