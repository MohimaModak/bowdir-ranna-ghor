import React, { useState, useEffect } from 'react';
import menu1 from "../../../Gallery/basmati Chal.jpg"
import menu2 from "../../../Gallery/biriyani.jpg"
import menu3 from "../../../Gallery/chickencurry.jpg"
// import menu4 from "../../../Gallery/menu4.jpeg"
// import menu5 from "../../../Gallery/menu5.jpeg"
// import menu6 from "../../../Gallery/menu6.webp"
// import menu7 from "../../../Gallery/menu7.jpeg"
import "./Section.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const foodDetails = [
    { name: "Basmati Chal", price: "10 Dkk", image: menu1 },
    { name: "Biriyani", price: "80 Dkk", image: menu2 },
    { name: "chickencurry", price: "55 Dkk", image: menu3 },
    // { name: "Salad", price: "$5", image: menu4 },
    // { name: "Sushi", price: "$15", image: menu5 },
    // { name: "Steak", price: "$20", image: menu6 },
    // { name: "Tacos", price: "$8", image: menu7 },
];


export default function Section() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodDetails.length);
        }, 7000);

        return () => clearInterval(intervalId);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodDetails.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + foodDetails.length) % foodDetails.length);
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

    return (
        <div className=" p-8 lg:px-24 py-16 relative bg-orange-100 w-full overflow-hidden section">
            <div data-aos="zoom-out" className='lg:flex justify-center items-center gap-5'>
                <div className='text-center lg:text-left lg:w-1/2'>
                    <h1 className='text-4xl md:text-4xl lg:text-5xl font-bold text-orange-600'>Weekend Special                    </h1>
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

                </div>
            </div>
        </div>

    );
}

