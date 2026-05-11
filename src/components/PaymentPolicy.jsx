import React from 'react';
import { ShieldCheck, Receipt, Calendar, CheckCircle } from 'lucide-react';

const PolicySection = ({ title, icon, children }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    </div>
    <div className="pl-12">
      {children}
    </div>
  </div>
);

const PaymentPolicy = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b border-slate-100 pb-8 mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Payment Plan Policy</h1>
          <p className="text-slate-500 leading-relaxed">
            At Tigris Smile, we want to make high-quality denture care accessible. 
            Our payment plans are designed to help you manage costs while receiving the care you need.
          </p>
        </div>

        {/* 1. Eligibility */}
        <PolicySection title="Eligibility" icon={<ShieldCheck className="w-6 h-6" />}>
          <ul className="list-disc space-y-2 text-slate-600">
            <li>Payment plans are available for approved treatments only.</li>
            <li>A valid ID and contact details may be required before approval.</li>
            <li>Treatment may not begin until the required deposit is received.</li>
          </ul>
        </PolicySection>

        {/* 2. Deposit */}
        <PolicySection title="Deposit" icon={<Receipt className="w-6 h-6" />}>
          <p className="text-slate-600 mb-2">
            A <strong>non-refundable deposit</strong> is required to begin laboratory work. 
            This ensures that the custom artistry and materials for your appliances are secured.
          </p>
          <p className="text-slate-600 italic text-sm bg-slate-50 p-3 rounded">
            * The specific deposit amount will be advised during your initial consultation.
          </p>
        </PolicySection>

        {/* 3. Payment Schedule */}
        <PolicySection title="Payment Schedule" icon={<Calendar className="w-6 h-6" />}>
          <ul className="list-disc space-y-2 text-slate-600">
            <li>Remaining balance must be paid according to the agreed payment schedule.</li>
            <li>Payments are due on the agreed dates regardless of appointment attendance.</li>
            <li>Missed or late payments may result in treatment delays.</li>
          </ul>
        </PolicySection>

        {/* 4. Completion & Refunds */}
        <PolicySection title="Final Completion & Refunds" icon={<CheckCircle className="w-6 h-6" />}>
          <div className="space-y-4">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> Full payment must be completed before final delivery of dentures or appliances. 
                Any outstanding balance must be cleared prior to collection.
              </p>
            </div>
            <p className="text-slate-600">
              Payments made toward completed clinical or laboratory work are non-refundable. 
              Refund requests will be assessed strictly according to <strong>Australian Consumer Law</strong>.
            </p>
          </div>
        </PolicySection>

        {/* Acceptance Box */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h4 className="text-lg font-semibold mb-2">Policy Acceptance</h4>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            By proceeding with treatment under a payment plan at Tigris Smile, 
            the client acknowledges and agrees to these terms and conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentPolicy;