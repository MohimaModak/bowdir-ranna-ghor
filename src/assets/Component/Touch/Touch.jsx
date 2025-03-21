import React from 'react'

export default function Touch() {
  return (
    <div>
      <h1>jhbjhgj</h1>
    </div>
  )
}







// import React, { useEffect } from 'react';
// import mailImg from "../../../Gallery/facebook.png"
// import phoneImg from "../../../Gallery/whatsapp.png"
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import food1 from "../../../Gallery/Food1.png"
// import food2 from "../../../Gallery/Food2.png"
// import food3 from "../../../Gallery/Food3.png"
// import food4 from "../../../Gallery/Food4.png"
// import food5 from "../../../Gallery/Food5.png"
// import food6 from "../../../Gallery/Food6.png"
// import food7 from "../../../Gallery/Food7.png"
// import food8 from "../../../Gallery/Food8.png"
// import food9 from "../../../Gallery/Food9.png"
// import food10 from "../../../Gallery/Food10.png"
// import food11 from "../../../Gallery/Food11.png"

// export default function Touch() {

//   useEffect(() => {
//     AOS.init({
//       duration: 1500,
//       easing: 'ease-out',
//       once: true,
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);


//   return (
//     <div id='/Contact' className="h-full py-40 px-10 bg-orange-200 relative text-slate-800">
//       <div className='relative pointer-events-none'>
//         <div className='wrapper absolute inset-0  h-screen w-full '>
//           <div className='box opacity-0 lg:opacity-10'>
//             <div><img src={food1} alt="" srcset="" /></div>
//             <div><img src={food2} alt="" srcset="" /></div>
//             <div><img src={food3} alt="" srcset="" /></div>
//             <div><img src={food4} alt="" srcset="" /></div>
//             <div><img src={food5} alt="" srcset="" /></div>
//             <div><img src={food6} alt="" srcset="" /></div>
//             <div><img src={food7} alt="" srcset="" /></div>
//             <div><img src={food8} alt="" srcset="" /></div>
//             <div><img src={food9} alt="" srcset="" /></div>
//             <div><img src={food10} alt="" srcset="" /></div>
//             <div><img src={food11} alt="" srcset="" /></div>
//             <div><img src={food1} alt="" srcset="" /></div>
//             <div><img src={food2} alt="" srcset="" /></div>
//             <div><img src={food3} alt="" srcset="" /></div>
//             <div><img src={food4} alt="" srcset="" /></div>
//             <div><img src={food5} alt="" srcset="" /></div>
//             <div><img src={food6} alt="" srcset="" /></div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div data-aos="zoom-out" className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-5">
//             <h2 className='text-4xl md:text-4xl lg:text-5xl font-bold text-orange-600'>
//               Get in Touch With Us
//             </h2>
//             <p className="mt-4 text-xl font-medium">
//               We are here to help with any questions or concerns you may have. Reach out to us, and we’ll respond promptly.
//             </p>
//           </div>

//           <div className="text-center mb-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="text-indigo-600 text-3xl">
//                 </div>
//               </div>

//               <div className="flex flex-col items-center space-y-4 my-5 lg:my-0">
//                 <div className="text-indigo-600 text-3xl">
//                   <i className="fab fa-twitter"></i>
//                 </div>
//                 <h4 className="text-lg lg:text-xl font-medium text-orange-600">Social Media Platforms</h4>
//                 <div data-aos="fade-up" className="space-x-4 flex justify-center items-center">

//                   <div data-aos="fade-up" className="flex items-center gap-4">
//                     <a href="https://www.facebook.com/share/1U5rMpn6TL/">  <img src={mailImg} alt="Mail" className="w-10 h-10 md:w-12 md:h-12" /></a>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <a href="tel:+4571597652">
//                       <img src={phoneImg} alt="Phone" className="w-10 h-10 md:w-12 md:h-12" />
//                     </a>
//                   </div>

//                 </div>
//               </div>


//             </div>
//           </div>

//           <div className="bg-orange-100 text-gray-900 shadow-xl rounded-lg p-12 mx-auto max-w-4xl">
//             <form action="#" method="POST" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="first-name"
//                     id="first-name"
//                     required
//                     className="mt-2 block w-full px-6 py-4 border border-orange-300 bg-orange-100 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-900"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="last-name"
//                     id="last-name"
//                     required
//                     className="mt-2 block w-full px-6 py-4 border border-orange-300 bg-orange-100 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-900"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   required
//                   className="mt-2 block w-full px-6 py-4 border border-orange-300 bg-orange-100 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-900"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                   Your Message
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   rows="6"
//                   required
//                   className="mt-2 block w-full px-6 py-4 border border-orange-300 bg-orange-100 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-900"
//                 ></textarea>
//               </div>

//               <div className="mt-8">
//                 <button
//                   type="submit"
//                   className="w-full py-4 px-6 bg text-white bg-orange-500 font-semibold text-lg rounded-md shadow-lg
//                   focus:ring-4 focus:ring-indigo-300"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }