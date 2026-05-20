"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // 1. Form fields, loading aur status states setup kiya
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: 'Hero Section Quick Lead', // Phone input nahi hai isliye backend safety ke liye custom message string mapping
    date: '', // Input type="date" ki value yahan save hogi
    message: 'Morning', // Select value default setting ('Morning') se match rakhne ke liye takki data clean capture ho
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: '' });

  // 2. Input handler logic
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Resend Route Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: null, message: '' });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ success: true, message: 'Appointment Requested! 👍' });
        // Fields reset
        setFormData({
          name: '',
          email: '',
          phone: 'Hero Section Quick Lead',
          date: '',
          message: 'Morning',
        });
      } else {
        setStatus({ success: false, message: result.error || 'Failed' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Server Error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* <Navbar /> */}
      
      <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20 md:mt-24">
        
        {/* LEFT SIDE: Heading and Paragraph (Mobile par #1) */}
        <div className="space-y-6 lg:space-y-10 order-1">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0f172a] leading-tight text-center md:text-start">
              Welcome to <br /> Tigris Smile
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0 text-center md:text-start">
              Delivering quality, reliability, and innovation from the heart of Brisbane, Queensland.
            </p>
          </div>

          {/* Image Section: (Mobile par #2) */}
          <div className="block lg:hidden relative h-[300px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/home-page-img.jpeg"
              alt="Professional Dental Service"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Form Section: (Mobile par #3) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto md:mx-0">
            <h3 className="text-xl font-bold text-[#0f172a] mb-6">Book Appointment Today</h3>
            
            {/* Form me onSubmit attach kiya */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name" 
                className="w-full px-4 py-3 text-slate-900 bg-[#f1f5f9] rounded-lg outline-none focus:ring-2 ring-[#a7f3d0]"
              />
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address" 
                className="w-full px-4 py-3 text-slate-900 bg-[#f1f5f9] rounded-lg outline-none focus:ring-2 ring-[#a7f3d0]"
              />
              <div className="relative">
                <input 
                  type="date" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f1f5f9] rounded-lg outline-none text-gray-500"
                />
              </div>
              <select 
                name="message" // Select data matching to backend standard message block
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#f1f5f9] rounded-lg outline-none text-gray-500 appearance-none cursor-pointer"
              >
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
              </select>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-[#5ECBE8] text-white px-8 py-3 rounded-full font-bold hover:bg-[#4bb8d8] transition-all disabled:bg-gray-400"
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>

                {/* Submit status response handler */}
                {status.message && (
                  <span className={`text-sm font-bold ${status.success ? 'text-green-600' : 'text-red-500'}`}>
                    {status.message}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE (Only for Desktop): Image & Description (Mobile par Hidden) */}
        <div className="hidden lg:flex flex-col space-y-8 lg:pt-10 order-2"> 
          <div className="space-y-6">
            <p className="text-gray-500 text-lg leading-relaxed">
              At Tigris Smile, we are committed to providing professional solutions 
              tailored to meet the needs of our clients. With a focus on excellence, 
              we deliver services that are efficient and results-driven.
            </p>
            <Link href={'/bookingform'} className="inline-block border-2 border-[#5ECBE8] text-[#1C5954] px-6 py-2 rounded-full font-semibold hover:bg-[#5ECBE8] transition-all">
              Book Your Appointment Today
            </Link>
          </div>

          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/home-page-img.jpeg"
              alt="Professional Dental Service"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </section>
    </main>
  );
}

// import Image from 'next/image';
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#f8fafc]">
//       {/* <Navbar /> */}
      
//       <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20 md:mt-24">
        
//         {/* LEFT SIDE: Heading and Paragraph (Mobile par #1) */}
//         <div className="space-y-6 lg:space-y-10 order-1">
//           <div className="space-y-4">
//             <h1 className="text-5xl md:text-6xl font-bold text-[#0f172a] leading-tight text-center md:text-start">
//               Welcome to <br /> Tigris Smile
//             </h1>
//             <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0 text-center md:text-start">
//               Delivering quality, reliability, and innovation from the heart of Brisbane, Queensland.
//             </p>
//           </div>

//           {/* Image Section: (Mobile par #2) */}
//           {/* Ye div sirf mobile par dikhega (lg:hidden) */}
//           <div className="block lg:hidden relative h-[300px] w-full rounded-3xl overflow-hidden shadow-2xl">
//             <Image 
//               src="/images/home-page-img.jpeg"
//               alt="Professional Dental Service"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Form Section: (Mobile par #3) */}
//           <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto md:mx-0">
//             <h3 className="text-xl font-bold text-[#0f172a] mb-6">Book Appointment Today</h3>
//             <form className="space-y-4">
//               <input 
//                 type="text" 
//                 placeholder="Full Name" 
//                 className="w-full px-4 py-3 text-zinc-500 bg-[#f1f5f9] rounded-lg outline-none focus:ring-2 ring-[#a7f3d0]"
//               />
//               <input 
//                 type="email" 
//                 placeholder="Email Address" 
//                 className="w-full px-4 py-3 text-zinc-500 bg-[#f1f5f9] rounded-lg outline-none focus:ring-2 ring-[#a7f3d0]"
//               />
//               <div className="relative">
//                 <input 
//                   type="date" 
//                   className="w-full px-4 py-3 bg-[#f1f5f9] rounded-lg outline-none text-gray-500"
//                 />
//               </div>
//               <select className="w-full px-4 py-3 bg-[#f1f5f9] rounded-lg outline-none text-gray-500 appearance-none">
//                 <option>Choose Time</option>
//                 <option>Morning</option>
//                 <option>Afternoon</option>
//               </select>
//               <button className="w-full md:w-auto bg-[#5ECBE8] text-white px-8 py-3 rounded-full font-bold mt-4 hover:bg-[#abe8f9] transition-all">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* RIGHT SIDE (Only for Desktop): Image & Description (Mobile par Hidden) */}
//         <div className="hidden lg:flex flex-col space-y-8 lg:pt-10 order-2"> 
//           <div className="space-y-6">
//             <p className="text-gray-500 text-lg leading-relaxed">
//               At Tigris Smile, we are committed to providing professional solutions 
//               tailored to meet the needs of our clients. With a focus on excellence, 
//               we deliver services that are efficient and results-driven.
//             </p>
//             <Link href={'/bookingform'} className="border-2 border-[#5ECBE8] text-[#1C5954] px-6 py-2 rounded-full font-semibold hover:bg-[#5ECBE8] transition-all">
//               Book Your Appointment Today
//             </Link>
//           </div>

//           <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
//             <Image 
//               src="/images/home-page-img.jpeg"
//               alt="Professional Dental Service"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//       </section>
//     </main>
//   );
// }