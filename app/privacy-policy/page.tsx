import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm text-emerald-600 uppercase tracking-[0.2em]">
            Privacy Policy
          </p>

          <h1 className="text-4xl font-semibold text-gray-900">
            How We Protect Your Data
          </h1>

          <p className="text-base text-gray-600">
            A clear summary of what we collect, why we collect it, and how we keep it safe.
          </p>

          <p className="text-sm text-gray-500">Last Updated: 31 March 2026</p>
        </div>

        <section className="prose prose-slate max-w-none text-gray-700">
          <p>
            Allied Timber, operating True Info Provider, is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>

          <h2>Key Points</h2>
          <ul>
            <li>We collect only necessary information to provide services.</li>
            <li>We do not sell your personal information.</li>
          </ul>

          <h2>9. Children&apos;s Privacy Policy</h2>
          <p>
            Our services are not intended for individuals under the age of 18.
            We do not knowingly collect personal information from children.
          </p>

          <h2>6. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have rights such as access, deletion, and correction of data.
          </p>

          <h2>Contact Us</h2>
          <p>
            Allied Timber<br />
            Email: info@trueinfoprovider.co.uk<br />
            Website: https://trueinfoprovider.co.uk
          </p>

          <p>
            This Privacy Policy is effective as of January 1st, 2026.
          </p>
        </section>
      </div>
    </main>
  );
}