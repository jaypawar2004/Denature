// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { name, email, phone, date, message } = await req.json();

//     const data = await resend.emails.send({
//       from: 'Tigris Smile Website <enquire@tigrissmile.com.au>',
//       to: ['enquire@tigrissmile.com.au'], 
      
//       // FIXED: Node.js standard package specifications ke hisab se reply_to kiya
//       reply_to: email, 
      
//       subject: `New Appointment Booking from ${name}`,
//       html: `
//         <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 12px; background-color: #fff;">
//           <h2 style="color: #5CCBEA; margin-bottom: 20px; border-bottom: 2px solid #E6F7FB; padding-bottom: 10px;">New Appointment Request</h2>
//           <p style="font-size: 16px;"><strong>Patient Name:</strong> ${name}</p>
//           <p style="font-size: 16px;"><strong>Email Address:</strong> ${email}</p>
//           <p style="font-size: 16px;"><strong>Phone Number:</strong> ${phone}</p>
//           <p style="font-size: 16px;"><strong>Preferred Date:</strong> ${date}</p>
//           <div style="margin-top: 15px; padding: 12px; background: #f9fafb; border-radius: 8px;">
//             <strong>Message/Notes:</strong>
//             <p style="color: #555; margin-top: 5px;">${message || 'No additional notes provided.'}</p>
//           </div>
//           <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
//           <p style="font-size: 11px; color: #999; text-align: center;">Sent securely via Tigris Smile Web Portal.</p>
//         </div>
//       `,
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }


import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_68brHhc4_6pZrmRadByxDQ33FNLc8VAUS');

export async function POST(req) {
  try {
    const { name, email, phone, date, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Tigris Smile Website <enquire@tigrissmile.com.au>',
      to: ['enquire@tigrissmile.com.au'], 
      reply_to: email, // Direct user ko reply-back karne ke liye
      subject: `New Appointment Booking from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 12px; background-color: #fff;">
          <h2 style="color: #5CCBEA; margin-bottom: 20px; border-bottom: 2px solid #E6F7FB; padding-bottom: 10px;">New Appointment Request</h2>
          <p style="font-size: 16px;"><strong>Patient Name:</strong> ${name}</p>
          <p style="font-size: 16px;"><strong>Email Address:</strong> ${email}</p>
          <p style="font-size: 16px;"><strong>Phone Number:</strong> ${phone}</p>
          <p style="font-size: 16px;"><strong>Preferred Time/Date:</strong> ${date}</p>
          <div style="margin-top: 15px; padding: 12px; background: #f9fafb; border-radius: 8px;">
            <strong>Message/Notes:</strong>
            <p style="color: #555; margin-top: 5px;">${message || 'No additional notes provided.'}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 11px; color: #999; text-align: center;">Sent securely via Tigris Smile Web Portal.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}