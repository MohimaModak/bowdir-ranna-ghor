import React from "react";
import { Link } from "react-scroll";
import mailImg from "../../../Gallery/facebook.png"
import phoneImg from "../../../Gallery/whatsapp.png"

export default function Footer() {
  return (
    <footer className="bg text-slate-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
         
          <div>
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">Quick Links</h3>
            <Link to="/" className="text-xl font-medium p-4 block">
            Home
          </Link>
          </div>

          
     
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex flex-col gap-4">
            <div data-aos="fade-up" className="flex items-center gap-4">
                    <a href="https://www.facebook.com/share/1U5rMpn6TL/">  <img src={mailImg} alt="Mail" className="w-10 h-10 md:w-12 md:h-12" /></a>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="tel:+4571597652">
                      <img src={phoneImg} alt="Phone" className="w-10 h-10 md:w-12 md:h-12" />
                    </a>
                  </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <hr className="border-gray-700 mb-4" />
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}