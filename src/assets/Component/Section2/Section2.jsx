import React, { useState, useEffect } from 'react';
import menu1 from "../../../Gallery/magnshotorkari.jpg"
import menu2 from "../../../Gallery/macherjhol.webp"
import menu3 from "../../../Gallery/machvuna.jpg"
import menu4 from "../../../Gallery/khichuri.jpg"
// import menu5 from "../../../Gallery/menu5.jpeg"
// import menu6 from "../../../Gallery/menu6.webp"
// import menu7 from "../../../Gallery/menu7.jpeg"
import "./Section2.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const foodDetails = [
    { name: "Vat Magnsho Torkari", price: "40 Dkk", image: menu1 },
    { name: "Macher Jhol", price: "35 Dkk", image: menu2 },
    { name: "Vat Mach vuna", price: "55 DKK", image: menu3 },
    { name: "khichuri", price: "30 Dkk", image: menu4 }
];

export default function Section2() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodDetails.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodDetails.length);
    };

    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration
            easing: 'ease-out', // Animation easing
            once: true, // Ensure animation runs only once
            delay: 100, // Delay before animation starts
        });
        AOS.refresh(); // Refresh AOS to detect new elements
    }, []);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + foodDetails.length) % foodDetails.length);
    };

    return (
        <div className=" p-8 lg:px-24 py-16 relative bg-orange-100 w-full overflow-hidden section">
            <div data-aos="fade-up" className='lg:flex justify-center items-center gap-5'>
                <div className='text-center lg:text-left lg:w-1/2'>
                    <h1 className='text-4xl md:text-4xl lg:text-5xl font-bold text-orange-600'>Daily Menu</h1>
                    <p className='my-5'>If you're looking to place an order, simply click on the 'Order' button and head over to the 'Daily Menu' option. Here, you'll find a wide variety of dishes to choose from, each made with the freshest ingredients. Our menu offers something for everyone, whether you're in the mood for a quick snack or a full meal. You can be sure that every dish is prepared with care and is guaranteed to satisfy your taste buds. So go ahead, place your order, and enjoy a delightful and diverse range of meals delivered right to your door!</p>
                   <div className=' flex justify-center items-center lg:block'><div className="container relative text-orange-600 border-2 px-5 py-1 border-orange-600 w-max  text-xl md:text-2xl font-medium mb-5 lg:mb-0">
                        <a href="/DailyMenu"><button className='button rounded'>Order Now</button></a>
                    </div></div> 
                </div>
                <div className="slider-container relative max-w-3xl mx-auto overflow-hidden">
                    {/* Image with overlay content */}
                    <div className="relative w-full">
                        <img
                            src={foodDetails[currentImageIndex].image}
                            alt={`menu-${currentImageIndex}`}
                            className="w-[600px] h-[400px] object-cover rounded-lg" // Tailwind for image styling
                        />
                        <div className='flex justify-center items-center w-full'>
                            <div className="absolute inset-0 flex justify-center items-center text-center">
                                <div className='bg-green-700 p-4 rounded-sm bg-opacity-60 border'>
                                    <h3 className='text-xl md:text-2xl font-bold text-white text'>{foodDetails[currentImageIndex].name}</h3>
                                    <p className='text-lg md:text-xl my-0.5 text-white text'>{foodDetails[currentImageIndex].price}</p>
                                    <a href="/DailyMenu">
                                        <button
                                            
                                            className="bg-white text-black rounded px-4 py-1.5 cursor-pointer text-base md:text-lg"
                                        >
                                            Order Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Arrow */}
                    {/* <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl p-2 cursor-pointer z-10"
                    >
                        &#10094;
                    </button> */}

                    {/* Right Arrow */}
                    {/* <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl p-2 cursor-pointer z-10"
                    >
                        &#10095;
                    </button> */}
                </div>
            </div>
        </div>

    );
}

