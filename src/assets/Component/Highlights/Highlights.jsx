import React from 'react'
import hightligh1 from "../../../Gallery/Sahi tukra.jpg";
import hightligh2 from "../../../Gallery/Rosogolla.webp";
import hightligh3 from "../../../Gallery/Jilapi.jpg";
import hightligh4 from "../../../Gallery/lassi.jpg";
import hightligh5 from "../../../Gallery/Faluda.jpg";
import hightligh6 from "../../../Gallery/basmati Chal.jpg"
import hightligh7 from "../../../Gallery/dimvuna.jpg"
import hightligh8 from "../../../Gallery/chickencurry.jpg"
import hightligh9 from "../../../Gallery/fishcurry.jpg"
import hightligh10 from "../../../Gallery/machvuna.jpg"
import hightligh11 from "../../../Gallery/magnshotorkari.jpg"
import hightligh12 from "../../../Gallery/khichuri.jpg"
import hightligh13 from "../../../Gallery/macherjhol.webp"
import "./Highlights.css"

import Food from "../../../Gallery/Food8.png"

export default function Highlights() {
    const menuItems = [
        { image: hightligh1, title: "Pasta", price: "$45" },
        { image: hightligh2, title: "Spaghetti", price: "$40" },
        { image: hightligh3, title: "Burger", price: "$99" },
        { image: hightligh4, title: "Chicken", price: "$105" },
        { image: hightligh5, title: "Fruit", price: "$25" },
        { image: hightligh6, title: "Rice", price: "$25" },
        { image: hightligh7, title: "Rice", price: "$25" },
        { image: hightligh8, title: "Rice", price: "$25" },
        { image: hightligh9, title: "Rice", price: "$25" },
        { image: hightligh10, title: "Rice", price: "$25" },
        { image: hightligh11, title: "Rice", price: "$25" },
        { image: hightligh12, title: "Rice", price: "$25" },
        { image: hightligh13, title: "Rice", price: "$25" },
    ];

    return (
        <div className=" p-8 lg:px-24 py-16 relative bg-orange-100 high">
            <div>
                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-orange-600 pb-16 hidden md:block"><span className='flex justify-center items-center'><strong><img src={Food} className='w-14 md:w-16 lg:w-28' /></strong> <span>ur Signature Dishes</span></span> </h1>
                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-orange-600  pb-16 block md:hidden">Our Signature Dishes</h1>
            </div>
            <div className="flex justify-center items-center text-center font-semibold">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-md border-4 border-dashed border-orange-300 "
                        >
                            <div className="p-2">
                                <img
                                    src={item.image}
                                    className="w-full h-full lg:h-52 rounded-md  block"
                                    alt="Menu Item"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-amber-700 to-transparent backdrop-blur-sm text-orange-50 rounded-md  text-center p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                                    <div className='flex justify-center items-center h-full'>
                                        <div>
                                            <h1 className="text-3xl">{item.title}</h1>
                                            <h1 className="my-2.5 text-xl">Price: {item.price}</h1>
                                            <div>
                                                <a href="/Touch"> <button className="bg-orange-300 rounded-full px-4 py-1.5 text-sm w-max text-gray-700">Order Now</button></a> 
                                            </div>
                                        </div>
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