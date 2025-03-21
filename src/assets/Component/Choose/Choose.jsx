import React, { useEffect } from "react";
import food1 from "../../../Gallery/Food1.png"
import food2 from "../../../Gallery/Food2.png"
import food3 from "../../../Gallery/Food3.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Choose.css"
import Food from "../../../Gallery/Food9.png"


export default function Choose() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-out',
            once: true,
        });
    }, []);
    return (
        <section className="p-8 lg:px-24 py-16 relative bg-orange-100 choose">
            <div data-aos="fade-up" className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Heading & Text */}
                <div>
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-orange-600">
                        Why Choose Us?
                    </h2>

                    <p className="my-10 text-lg text-gray-700 font-bold">
                        At <strong>Bangladesh Food Club
                        </strong>, we believe that great food should be affordable, delicious, and nutritious. Here’s why we stand out.We believe that great food should be accessible to everyone. That’s why we offer high-quality meals at budget-friendly prices, ensuring you enjoy delicious dishes without overspending.
                    </p>
                    <div className=' flex justify-center items-center lg:block'>
                        <div className="container relative text-orange-600 border-2 px-5 py-1 border-orange-600 w-max  text-xl md:text-2xl font-medium mb-5 lg:mb-0">
                            <a href=""><button className='button rounded'>Trust Us</button></a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Investment Categories */}
                <div className="grid gap-6">
                    {/* Stocks & Equities */}
                    <div data-aos="fade-up" className="flex items-center gap-6 p-6 bg-orange-100 rounded-xl shadow-md border border-amber-700">
                        <img src={food1} className="w-12 h-12" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Budget-Friendly Prices</h3>
                            <p className="text-gray-700 font-medium">
                                Enjoy mouthwatering meals without breaking the bank. We provide high-quality food at the most competitive rates.
                            </p>
                        </div>
                    </div>

                    {/* Real Estate */}
                    <div data-aos="fade-up" className="flex items-center gap-6 p-6 bg-orange-100 rounded-xl shadow-md border border-amber-700">
                        <img src={food2} className="w-12 h-12" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Healthy & Nutritious</h3>
                            <p className="text-gray-700 font-medium">
                                Our dishes are made with fresh, organic ingredients to ensure you get a meal that is not only tasty but also good for your health.
                            </p>
                        </div>
                    </div>

                    {/* Cryptocurrency */}
                    <div data-aos="fade-up" className="flex items-center gap-6 p-6 bg-orange-100 rounded-xl shadow-md border border-amber-700">
                        <img src={food3} className="w-12 h-12" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Fast & Fresh Service </h3>
                            <p className="text-gray-700 font-medium">
                                We serve your food hot and fresh, whether you dine in, take out, or order for delivery. We follow strict cleanliness and hygiene protocols and sanitized kitchen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}