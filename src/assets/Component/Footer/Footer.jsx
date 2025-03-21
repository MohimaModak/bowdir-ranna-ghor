import React from 'react';
import mailImg from "../../../Gallery/facebook.png"
import phoneImg from "../../../Gallery/whatsapp.png"

export default function Footer() {
  return (
    <footer className="bg-orange-300 text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-amber-700 mb-3">Bd Food
          </h3>
          <p className="text-sm font-medium">
            Trust us. We will make your taste yummy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href='/' className="hover:text-black transition font-medium text-sm">Home</a></li>
            <li><a href='/DailyMenu' className="hover:text-black transition font-medium text-sm">Daily Menu</a></li>
            <li><a href='/WeekendSpecial' className="hover:text-black transition font-medium text-sm">Weekend Special</a></li>
            <li><a href='/Touch' className="hover:text-black transition font-medium text-sm">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <div data-aos="fade-up" className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/1U5rMpn6TL/">  <img src={mailImg} alt="Mail" className="w-8" /></a>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+4571597652">
                <img src={phoneImg} alt="Phone" className="w-8" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-5 font-medium">
        &copy; {new Date().getFullYear()} InvestWise. All Rights Reserved.
      </div>
    </footer>
  );
}