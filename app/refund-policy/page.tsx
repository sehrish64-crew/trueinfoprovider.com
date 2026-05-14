import React from 'react';

export default function RefundPolicyPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm text-emerald-600 uppercase tracking-[0.2em]">
            Refund Policy
          </p>
          <h1 className="text-4xl font-semibold text-gray-900">
            14-Day Satisfaction Guarantee
          </h1>
          <p className="text-base text-gray-600">
            How refund requests work for digital reports.
          </p>
          <p className="text-sm text-gray-500">Last Updated: January 2026</p>
        </div>

        <section className="prose prose-slate max-w-none text-gray-700">
          <p>
            These Terms and Conditions form a legally binding agreement between you and Allied Timber.
          </p>

          <h2>Definitions</h2>
          <ul>
            <li><strong>Merchant:</strong> UK based payment processor</li>
            <li><strong>Supplier:</strong> Allied Timber</li>
          </ul>

          <h2>Refund Policy</h2>
          <p>
            We offer a 14-day money-back guarantee on all purchases. If you are not satisfied, contact support for a full refund.
          </p>

          <h2>Contact</h2>
          <p>
            Email: info@trueinfoprovider.co.uk
          </p>
        </section>
      </div>
    </main>
  );
}