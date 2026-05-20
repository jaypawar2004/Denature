import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Tigris Smile Denture Clinic',
  description: 'Privacy Policy and data protection terms for Tigris Smile Denture Clinic, operating under Australian Privacy Principles.',
};

const PrivacyPolicy = () => {
  const sections = [
    { id: "collect", title: "1. What Information We Collect" },
    { id: "how-collect", title: "2. How We Collect Information" },
    { id: "why-collect", title: "3. Why We Collect Your Information" },
    { id: "disclosure", title: "4. Disclosure of Your Information" },
    { id: "website", title: "5. Website, Cookies and Online Bookings" },
    { id: "security", title: "6. Storage and Security" },
    { id: "overseas", title: "7. Overseas Disclosure" },
    { id: "access", title: "8. Access and Correction" },
    { id: "retention", title: "9. Retention of Records" },
    { id: "complaints", title: "10. Complaints" },
    { id: "changes", title: "11. Changes to This Policy" },
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen text-slate-800 font-sans">
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-[#5CCBEA] to-[#4bb8d8] text-white py-16 sm:py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-white/90 text-sm sm:text-base font-medium max-w-xl mx-auto bg-white/10 py-2 px-4 rounded-full backdrop-blur-sm inline-block">
            Effective Date: 04 May 2026
          </p>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Left Sidebar: Quick Navigation Links (Sticky for Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Table of Contents</h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm font-semibold text-slate-600 hover:text-[#5CCBEA] hover:bg-slate-50 px-3 py-2.5 rounded-xl transition-all duration-200"
                  >
                    {section.title.split('. ')[1]}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Column: Main Privacy Content */}
          <div className="col-span-1 lg:col-span-3 bg-white border border-slate-200 rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-12 shadow-xl shadow-slate-100">
            
            {/* Introductory Statement */}
            <div className="prose prose-slate max-w-none mb-10 pb-8 border-b border-slate-100">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
                At Tigris Smile Denture Clinic (“we”, “our”, “us”), we are committed to protecting your privacy and handling your personal and health information in accordance with applicable Australian privacy laws, including the <span className="text-slate-900 font-bold">Privacy Act 1988 (Cth)</span>, the <span className="text-slate-900 font-bold">Australian Privacy Principles (APPs)</span>, and relevant Queensland health record obligations.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-500 mt-3">
                This Privacy Policy explains how we collect, use, disclose, store, and manage your personal information.
              </p>
            </div>

            {/* Privacy Sections Content */}
            <div className="space-y-12">
              
              {/* Section 1 */}
              <section id="collect" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 1. What Information We Collect
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">We may collect personal and health information including:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5 list-disc text-slate-600 font-medium">
                  <li>Full name & Date of birth</li>
                  <li>Address, Phone number & Email address</li>
                  <li>Medicare and Health fund details</li>
                  <li>Medical and dental history & Treatment records</li>
                  <li>Denture prescriptions and clinical notes</li>
                  <li>Photographs, scans, impressions, and diagnostic records</li>
                  <li>Payment and billing information</li>
                  <li>Emergency contact details</li>
                </ul>
                <div className="mt-4 p-4 bg-amber-50/50 border border-amber-100 text-amber-800 text-sm font-semibold rounded-2xl">
                  ⚠️ Note: Health information is considered sensitive information under Australian privacy law and is handled with additional protections.
                </div>
              </section>

              {/* Section 2 */}
              <section id="how-collect" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 2. How We Collect Information
                </h2>
                <p className="text-slate-600 leading-relaxed mb-3">We collect information directly from you when you:</p>
                <ul className="space-y-1.5 pl-5 list-disc text-slate-600 mb-4">
                  <li>Book an appointment or attend consultations</li>
                  <li>Complete forms or contact our clinic</li>
                  <li>Make payments or submit enquiries through our website</li>
                  <li>Communicate by phone, SMS, or email</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mb-3">We may also collect information from:</p>
                <ul className="space-y-1.5 pl-5 list-disc text-slate-600">
                  <li>Referring dentists, dental specialists, and healthcare providers</li>
                  <li>Health funds</li>
                  <li>Family members or carers (with your consent or where authorised)</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="why-collect" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 3. Why We Collect Your Information
                </h2>
                <p className="text-slate-600 leading-relaxed mb-3">We collect and use your information to:</p>
                <ul className="space-y-2 pl-5 list-disc text-slate-600">
                  <li>Provide denture and oral healthcare services</li>
                  <li>Maintain accurate patient records & Arrange appointments/recalls</li>
                  <li>Communicate with you regarding treatment</li>
                  <li>Process payments and health fund claims</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Improve our services and clinic operations</li>
                </ul>
                <p className="text-slate-500 text-sm mt-3 italic">We only collect information reasonably necessary for our functions and services.</p>
              </section>

              {/* Section 4 */}
              <section id="disclosure" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 4. Disclosure of Your Information
                </h2>
                <p className="text-slate-600 leading-relaxed mb-3">We may disclose your information to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5 list-disc text-slate-600 mb-4">
                  <li>Dentists and healthcare providers involved in treatment</li>
                  <li>Dental laboratories & health funds</li>
                  <li>Medicare & payment processors</li>
                  <li>IT and practice management service providers</li>
                  <li>Regulatory authorities where legally required</li>
                </ul>
                <p className="text-slate-900 font-bold mb-2">We will not sell your personal information.</p>
                <p className="text-slate-600 leading-relaxed mb-2">We will only disclose health information where:</p>
                <ul className="space-y-1 pl-5 list-disc text-slate-600">
                  <li>you have consented;</li>
                  <li>disclosure is required or authorised by law; or</li>
                  <li>disclosure is necessary for your treatment or healthcare management.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="website" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 5. Website, Cookies and Online Bookings
                </h2>
                <p className="text-slate-600 leading-relaxed mb-3">Our website may collect limited information such as:</p>
                <ul className="space-y-1.5 pl-5 list-disc text-slate-600 mb-4">
                  <li>IP address & Browser type</li>
                  <li>Website usage data</li>
                  <li>Cookies and analytics information</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  This information helps improve website performance and user experience. If you use online booking systems or contact forms, your information may be stored securely by third-party providers on our behalf.
                </p>
              </section>

              {/* Section 6 */}
              <section id="security" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 6. Storage and Security
                </h2>
                <p className="text-slate-600 leading-relaxed mb-3">We take reasonable steps to protect your information from misuse, interference, loss, unauthorised access, modification, or disclosure. Security measures may include:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5 list-disc text-slate-600">
                  <li>password-protected systems</li>
                  <li>secure cloud software</li>
                  <li>restricted staff access</li>
                  <li>locked filing systems</li>
                  <li>antivirus and cybersecurity protections</li>
                </ul>
                <p className="text-slate-500 text-xs mt-3">Where third-party service providers are used, we require them to maintain appropriate privacy and security standards.</p>
              </section>

              {/* Section 7 */}
              <section id="overseas" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 7. Overseas Disclosure
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Some electronic systems or cloud providers may store data outside Australia. Where overseas disclosure occurs, we take reasonable steps to ensure providers comply with Australian privacy obligations.
                </p>
              </section>

              {/* Section 8 */}
              <section id="access" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 8. Access and Correction
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You may request access to your personal information or request corrections if information is inaccurate or incomplete. Requests should be made in writing to:
                </p>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-sm space-y-1 text-slate-700 font-semibold shadow-inner">
                  <p className="text-[#5CCBEA] font-bold text-base">Privacy Officer</p>
                  <p>Tigris Smile Denture Clinic</p>
                  <p>Email: <a href="mailto:enquire@tigrissmile.com.au" className="text-slate-900 underline hover:text-[#5CCBEA]">enquire@tigrissmile.com.au</a></p>
                  <p>Phone: (07) 2111 9970</p>
                </div>
                <p className="text-slate-500 text-xs mt-3">We may require identity verification before releasing records. In limited circumstances permitted by law, access may be refused.</p>
              </section>

              {/* Section 9 */}
              <section id="retention" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 9. Retention of Records
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We retain patient records in accordance with applicable legal and professional requirements. When records are no longer required, they are securely destroyed or permanently de-identified.
                </p>
              </section>

              {/* Section 10 */}
              <section id="complaints" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 10. Complaints
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you believe your privacy has been breached, please contact us first so we can investigate your concerns. Privacy complaints can be submitted to:
                </p>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-sm space-y-1 text-slate-700 font-semibold shadow-inner mb-4">
                  <p className="text-[#5CCBEA] font-bold text-base">Privacy Officer</p>
                  <p>Tigris Smile Denture Clinic</p>
                  <p>Email: <a href="mailto:enquire@tigrissmile.com.au" className="text-slate-900 underline hover:text-[#5CCBEA]">enquire@tigrissmile.com.au</a></p>
                  <p>Phone: (07) 2111 9970</p>
                </div>
                <p className="text-slate-600 leading-relaxed mb-2">If you are not satisfied with our response, you may contact:</p>
                <ul className="space-y-1 pl-5 list-disc text-slate-600 font-medium">
                  <li>Office of the Australian Information Commissioner (OAIC)</li>
                  <li>Queensland Office of the Information Commissioner</li>
                </ul>
              </section>

              {/* Section 11 */}
              <section id="changes" className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5CCBEA]"></span> 11. Changes to This Policy
                </h2>
                <p className="text-slate-600 leading-relaxed mb-2">
                  We may update this Privacy Policy from time to time. The latest version will always be available:
                </p>
                <ul className="space-y-1 pl-5 list-disc text-slate-600">
                  <li>at our clinic reception; and/or</li>
                  <li>on our website.</li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;