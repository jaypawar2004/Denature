// "use client";
// import React from 'react';

// const ContactFormSection = () => {
//   const schedule = [
//     { day: "Monday", time: "09:00 AM – 05:00 PM" },
//     { day: "Tuesday", time: "09:00 AM – 05:00 PM" },
//     { day: "Wednesday", time: "09:00 AM – 05:00 PM" },
//     { day: "Thursday", time: "09:00 AM – 05:00 PM" },
//     { day: "Friday", time: "09:00 AM – 05:00 PM" },
//     { day: "Saturday", time: "Closed" },
//     { day: "Sunday", time: "Closed" },
//   ];

//   // Input styles for reusability
//   const inputStyles = "w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 outline-none focus:border-[#5CCBEA] focus:ring-4 focus:ring-[#5CCBEA]/10 transition-all placeholder:text-slate-400 shadow-sm";

//   return (
//     <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
//         {/* Left: Form */}
//         <div className="lg:col-span-2 space-y-8">
//           <div>
//             <h2 className="text-4xl font-bold text-slate-900 mb-4 font-sans">Send Us a Message</h2>
//             <p className="text-slate-500">Fill out the form and our team will get back to you shortly</p>
//           </div>

//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <input type="text" placeholder="Full Name" className={inputStyles} />
//               <input type="email" placeholder="Email Address" className={inputStyles} />
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <input type="text" placeholder="Phone Number" className={inputStyles} />
//               <select className={`${inputStyles} appearance-none cursor-pointer`}>
//                 <option value="">Subject</option>
//                 <option value="new">New Dentures</option>
//                 <option value="repair">Denture Repair</option>
//                 <option value="consultation">Consultation</option>
//               </select>
//             </div>

//             <textarea 
//               placeholder="Message" 
//               rows="5" 
//               className={inputStyles}
//             ></textarea>
            
//             <div>
//               <button 
//                 type="button" 
//                 className="bg-[#5CCBEA] text-white px-12 py-4 rounded-full font-bold hover:bg-[#4bb8d8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Right: Schedule Card */}
//         <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-sm h-fit sticky top-24">
//           <h3 className="text-2xl font-bold text-slate-900 mb-8 font-sans">Clinic Hours</h3>
//           <div className="space-y-5">
//             {schedule.map((item, i) => (
//               <div key={i} className="flex justify-between items-center text-sm border-b border-slate-200/50 pb-3 last:border-0 last:pb-0">
//                 <span className="text-slate-500 font-medium">{item.day}</span>
//                 <span className="text-slate-900 font-bold">{item.time}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ContactFormSection;




"use client";
import React, { useState } from 'react';

const ContactFormSection = () => {
  const schedule = [
    { day: "Monday", time: "09:00 AM – 05:00 PM" },
    { day: "Tuesday", time: "09:00 AM – 05:00 PM" },
    { day: "Wednesday", time: "09:00 AM – 05:00 PM" },
    { day: "Thursday", time: "09:00 AM – 05:00 PM" },
    { day: "Friday", time: "09:00 AM – 05:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ];

  // Input styles for reusability
  const inputStyles = "w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 outline-none focus:border-[#5CCBEA] focus:ring-4 focus:ring-[#5CCBEA]/10 transition-all placeholder:text-slate-400 shadow-sm";

  // 1. Form fields ke liye state setup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '', // Select field ka value is 'date' variable me bind hoga (Subject backend me capture karne ke liye)
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: '' });

  // 2. Dynamic Input Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. API Request Handler
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
        setStatus({ success: true, message: 'Message sent successfully! We will get back to you soon. 👍' });
        // Fields reset karne ke liye
        setFormData({ name: '', email: '', phone: '', date: '', message: '' });
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
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left: Form */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-sans">Send Us a Message</h2>
            <p className="text-slate-500">Fill out the form and our team will get back to you shortly</p>
          </div>

          {/* Form tag me onSubmit bind kiya */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name" 
                className={inputStyles} 
              />
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address" 
                className={inputStyles} 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number" 
                className={inputStyles} 
              />
              <select 
                name="date" // Backend integration balance rakhne ke liye date variable mapping di hai
                required
                value={formData.date}
                onChange={handleChange}
                className={`${inputStyles} appearance-none cursor-pointer`}
              >
                <option value="">Subject</option>
                <option value="New Dentures">New Dentures</option>
                <option value="Denture Repair">Denture Repair</option>
                <option value="Consultation">Consultation</option>
              </select>
            </div>

            <textarea 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Message" 
              rows="5" 
              className={inputStyles}
            ></textarea>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button 
                type="submit" // Type change to submit zaroori tha
                disabled={loading}
                className="bg-[#5CCBEA] text-white px-12 py-4 rounded-full font-bold hover:bg-[#4bb8d8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:bg-gray-400 disabled:translate-y-0 disabled:shadow-none"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Message Display Box */}
              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-bold shadow-sm transition-all ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {status.message}
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Right: Schedule Card */}
        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-sm h-fit sticky top-24">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 font-sans">Clinic Hours</h3>
          <div className="space-y-5">
            {schedule.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-slate-200/50 pb-3 last:border-0 last:pb-0">
                <span className="text-slate-500 font-medium">{item.day}</span>
                <span className="text-slate-900 font-bold">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;