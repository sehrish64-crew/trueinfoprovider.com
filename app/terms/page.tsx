import React from 'react';

export default function TermsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm text-emerald-600 uppercase tracking-[0.2em]">
            Terms &amp; Conditions
          </p>

          <h1 className="text-4xl font-semibold text-gray-900">
            Terms &amp; Conditions for True Info Provider
          </h1>

          <p className="text-base text-gray-600">
            The rules that govern your access to our vehicle history and analysis services.
          </p>

          <p className="text-sm text-gray-500">Last Updated: March 31st, 2026</p>
        </div>

        <section className="prose prose-slate max-w-none text-gray-700">
          <p>
            Welcome to True Info Provider, operated by Allied Timber. By accessing and using our website and services, you agree to these terms and conditions.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>By using True Info Provider, you agree to these Terms and Conditions.</p>

          <h2>2. About Allied Timber</h2>
          <p>
            Allied Timber provides vehicle history reports and VIN check services.
          </p>

          <h2>4. User Responsibilities</h2>
          <ul>
            <li>Provide accurate information</li>
            <li>Use services legally</li>
            <li>Do not resell reports without permission</li>
          </ul>

          <h2>5. Report Accuracy Disclaimer</h2>
          <p>
            Data is collected from multiple sources and may not always be fully accurate.
          </p>

          <h2>18. Contact Information</h2>
          <p>
            Allied Timber<br />
            Email: info@trueinfoprovider.co.uk<br />
            Website: https://trueinfoprovider.co.uk
          </p>
        </section>
      </div>
    </main>
  );
}