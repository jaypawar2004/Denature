"use client";
import React, { useState } from 'react';

const BookingForm = () => {
  const inputBase = "w-full p-4 rounded-xl bg-white border border-slate-300 text-slate-900 outline-none focus:border-[#5CCBEA] focus:ring-4 focus:ring-[#5CCBEA]/5 transition-all shadow-sm placeholder:text-slate-400";

  // Form state setup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: 'Morning (9 AM - 12 PM)', // Default selection dropdown ke liye
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: '' });

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Browser ka default refresh rokega
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
        setStatus({ success: true, message: 'Appointment request sent successfully! 👍' });
        // Form fields clear karne ke liye
        setFormData({ name: '', email: '', phone: '', date: 'Morning (9 AM - 12 PM)', message: '' });
      } else {
        setStatus({ success: false, message: result.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Server error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-50/50 rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-xl shadow-slate-100">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-2 font-sans">Book Appointment</h2>
            <div className="h-1.5 w-20 bg-[#5CCBEA] rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className={inputBase} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className={inputBase} 
                />
              </div>
            </div>

            {/* Row 2: Phone and Preferred Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+61 XXX XXX XXX" 
                  className={inputBase} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Preferred Time</label>
                <select 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={inputBase}
                >
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 6 PM)">Evening (4 PM - 5 PM)</option>
                </select>
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
              <textarea 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?" 
                className={inputBase}
              ></textarea>
            </div>

            {/* Submit Button & Response Alert */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <button 
                type="submit"
                disabled={loading}
                className="bg-[#5CCBEA] text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-[#5CCBEA]/20 hover:bg-[#4bb8d8] hover:-translate-y-1 transition-all duration-300 disabled:bg-gray-400 disabled:translate-y-0 disabled:shadow-none"
              >
                {loading ? 'Sending...' : 'Confirm Booking'}
              </button>

              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-bold transition-all ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {status.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

// "use client";
// import React from 'react';
// import { User, Mail, Phone, Clock, MessageSquare } from 'lucide-react';

// const BookingForm = () => {
//   const inputBase = "w-full p-4 rounded-xl bg-white border border-slate-300 text-slate-900 outline-none focus:border-[#5CCBEA] focus:ring-4 focus:ring-[#5CCBEA]/5 transition-all shadow-sm placeholder:text-slate-400";

//   return (
//     <section className="py-20 px-6 bg-white">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-slate-50/50 rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-xl shadow-slate-100">
//           <div className="mb-12">
//             <h2 className="text-4xl font-bold text-slate-900 mb-2 font-sans">Book Appointment</h2>
//             <div className="h-1.5 w-20 bg-[#5CCBEA] rounded-full"></div>
//           </div>

//           <form className="space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
//                 <input type="text" placeholder="John Doe" className={inputBase} />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
//                 <input type="email" placeholder="john@example.com" className={inputBase} />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
//                 <input type="tel" placeholder="+61 XXX XXX XXX" className={inputBase} />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Preferred Time</label>
//                 <select className={inputBase}>
//                   <option>Morning (9 AM - 12 PM)</option>
//                   <option>Afternoon (12 PM - 4 PM)</option>
//                   <option>Evening (4 PM - 6 PM)</option>
//                 </select>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
//               <textarea rows="4" placeholder="How can we help you?" className={inputBase}></textarea>
//             </div>

//             <button className="bg-[#5CCBEA] text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-[#5CCBEA]/20 hover:bg-[#4bb8d8] hover:-translate-y-1 transition-all duration-300">
//               Confirm Booking
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookingForm;



// "use client";
// import React, { useState } from 'react';
// import { User, Mail, Phone, Clock, MessageSquare } from 'lucide-react';

// const BookingForm = () => {
//   const inputBase = "w-full p-4 rounded-xl bg-white border border-slate-300 text-slate-900 outline-none focus:border-[#5CCBEA] focus:ring-4 focus:ring-[#5CCBEA]/5 transition-all shadow-sm placeholder:text-slate-400";

//   // 1. Form state setup kiya
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     date: 'Morning (9 AM - 12 PM)', // Preferred Time ke liye backend logic standard rakhne ke liye date variable use kiya hai
//     message: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState({ success: null, message: '' });

//   // 2. Change handler function
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 3. Form submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus({ success: null, message: '' });

//     try {
//       const response = await fetch('/api/send', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus({ success: true, message: 'Appointment request sent successfully! 👍' });
//         // Form clear karne ke liye
//         setFormData({ name: '', email: '', phone: '', date: 'Morning (9 AM - 12 PM)', message: '' });
//       } else {
//         setStatus({ success: false, message: result.error || 'Something went wrong.' });
//       }
//     } catch (error) {
//       setStatus({ success: false, message: 'Server error. Please try again later.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="py-20 px-6 bg-white">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-slate-50/50 rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-xl shadow-slate-100">
//           <div className="mb-12">
//             <h2 className="text-4xl font-bold text-slate-900 mb-2 font-sans">Book Appointment</h2>
//             <div className="h-1.5 w-20 bg-[#5CCBEA] rounded-full"></div>
//           </div>

//           {/* Form me onSubmit lagaya */}
//           <form onSubmit={handleSubmit} className="space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
//                 <input 
//                   type="text" 
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe" 
//                   className={inputBase} 
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
//                 <input 
//                   type="email" 
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john@example.com" 
//                   className={inputBase} 
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+61 XXX XXX XXX" 
//                   className={inputBase} 
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700 ml-1">Preferred Time</label>
//                 <select 
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   className={inputBase}
//                 >
//                   <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
//                   <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
//                   <option value="Evening (4 PM - 6 PM)">Evening (4 PM - 6 PM)</option>
//                 </select>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
//               <textarea 
//                 rows="4" 
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="How can we help you?" 
//                 className={inputBase}
//               ></textarea>
//             </div>

//             {/* Button disabled logic aur text changes */}
//             <div className="flex flex-col md:flex-row md:items-center gap-4">
//               <button 
//                 type="submit"
//                 disabled={loading}
//                 className="bg-[#5CCBEA] text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-[#5CCBEA]/20 hover:bg-[#4bb8d8] hover:-translate-y-1 transition-all duration-300 disabled:bg-gray-400 disabled:translate-y-0 disabled:shadow-none"
//               >
//                 {loading ? 'Sending...' : 'Confirm Booking'}
//               </button>

//               {/* Status Message Alert */}
//               {status.message && (
//                 <div className={`p-4 rounded-xl text-sm font-bold transition-all ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                   {status.message}
//                 </div>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookingForm;