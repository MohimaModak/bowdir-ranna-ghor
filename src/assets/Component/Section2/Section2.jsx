import React, { useState, useEffect } from 'react';
import menu1 from "../../../Gallery/menu1.jpeg"
import menu2 from "../../../Gallery/menu2.webp"
import menu3 from "../../../Gallery/menu3.jpeg"
import menu4 from "../../../Gallery/menu4.jpeg"
import menu5 from "../../../Gallery/menu5.jpeg"
import menu6 from "../../../Gallery/menu6.webp"
import menu7 from "../../../Gallery/menu7.jpeg"
import "./Section2.css"

const foodDetails = [
    { name: "Pizza", price: "$10", image: menu1 },
    { name: "Burger", price: "$7", image: menu2 },
    { name: "Pasta", price: "$12", image: menu3 },
    { name: "Salad", price: "$5", image: menu4 },
    { name: "Sushi", price: "$15", image: menu5 },
    { name: "Steak", price: "$20", image: menu6 },
    { name: "Tacos", price: "$8", image: menu7 },
  ];

export default function Section2() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodDetails.length);
        }, 2000); 

        return () => clearInterval(intervalId); 
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodDetails.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + foodDetails.length) % foodDetails.length);
    };

    return (
        <div className=" py-24 px-10 relative bg-orange-200 w-full overflow-hidden section">
            <div className='lg:flex justify-center items-center gap-5'>
                <div className='text-center lg:text-left lg:w-1/2'>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-orange-600'>Menu</h1>
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic. Illo saepe ratione natus mollitia voluptas sint a dolorem deleniti minima esse ab consequuntur, debitis ut? Eum debitis ratione atque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus illum tenetur blanditiis quos reiciendis dolorum dolore magnam eius, ipsam numquam. Totam quibusdam perspiciatis animi natus ad inventore sequi pariatur labore!</p>
                    <div className="container relative text-orange-600 border-2 px-5 py-1 border-orange-600 w-max  text-xl md:text-2xl font-medium mb-5 lg:mb-0">
                     <a href=""><button className='button rounded'>Order Now</button></a> 
                    </div>
                </div>
                <div className="slider-container relative max-w-3xl mx-auto overflow-hidden">
                    {/* Image with overlay content */}
                    <div className="relative w-full">
                        <img
                            src={foodDetails[currentImageIndex].image}
                            alt={`menu-${currentImageIndex}`}
                            className="w-full h-[400px] object-cover rounded-lg" // Tailwind for image styling
                        />
                        <div className='flex justify-center items-center w-full'>
                            {/* <div className="absolute bottom-5 left-5 text-white bg-orange-300 border bg-opacity-50 w-max p-4 rounded-lg text-center w-[calc(100%-40px)]"> */}
                            <div className="absolute inset-0 flex justify-center items-center text-center">
                                <div className='bg-green-700 p-4 rounded-sm bg-opacity-60 border'>
                                    <h3 className='text-xl md:text-2xl font-bold text-white text'>{foodDetails[currentImageIndex].name}</h3>
                                    <p className='text-lg md:text-xl my-0.5 text-white text'>{foodDetails[currentImageIndex].price}</p>
                                    <a href="">
                                        <button
                                            onClick={() => alert("Order Now functionality will be added later!")}
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
                    <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl p-2 cursor-pointer z-10"
                    >
                        &#10094;
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl p-2 cursor-pointer z-10"
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </div>

    );
}

