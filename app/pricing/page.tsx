'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, ShieldCheck, AlertCircle } from 'lucide-react';
import { PRICING_PLANS } from '@/lib/mock-data';

const VEHICLE_CATEGORIES = [
  'Sedan',
  'SUV',
  'Truck',
  'Hatchback',
  'Coupe',
  'Convertible',
  'Wagon',
  'Van',
  'Motorcycle',
  'Other',
];

export default function PricingPage() {
  const router = useRouter();
  const [vehicleId, setVehicleId] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [formData, setFormData] = useState({ name: '', email: '', vin: '', category: '' });
  const [status, setStatus] = useState<'idle' | 'saving' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setVehicleId(localStorage.getItem('latestVehicleId'));
    const savedPlan = localStorage.getItem('selectedPlan');
    if (savedPlan) {
      setSelectedPlan(savedPlan);
    }
  }, []);

  const handleStartAnalysis = () => {
    if (selectedPlan) {
      localStorage.setItem('selectedPlan', selectedPlan);
    }
    router.push('/analysis');
  };

  const selectedPlanData = PRICING_PLANS.find((plan) => plan.id === selectedPlan);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    localStorage.setItem('selectedPlan', planId);
    setErrorMessage('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedPlan || !formData.name || !formData.email || !formData.vin || !formData.category) {
      setErrorMessage('Please select a plan and complete all fields.');
      return;
    }

    if (!vehicleId) {
      setErrorMessage('Please start an AI health analysis first so we can attach the report.');
      return;
    }

    setStatus('saving');
    setErrorMessage('');

    try {
      const response = await fetch('/api/request-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: formData.name,
          customerEmail: formData.email,
          selectedPlan,
          vehicleId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error || 'Failed to create request.');
      }

      localStorage.setItem(
        'paymentData',
        JSON.stringify({
          customerName: formData.name,
          customerEmail: formData.email,
          selectedPlan,
          vehicleId,
        }),
      );

      router.push('/checkout');
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Unable to continue to payment.');
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-emerald-50 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-7xl mx-auto py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 mb-5 border border-emerald-200">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Unlock Your Full AI Health Report</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pricing & Checkout</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the right plan for your AI health report, then provide your details to continue to secure payment.
          </p>
          {!vehicleId && (
            <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-emerald-200 bg-white p-6 text-gray-900 shadow-md shadow-emerald-100">
              <p className="font-medium">Choose a plan now and continue from the Health Analysis page.</p>
              <p className="mt-2 text-sm text-gray-600">
                No health analysis data found yet. Pick a pricing plan first, then start the AI health analysis to attach your report.
              </p>
              <button
                onClick={handleStartAnalysis}
                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Start AI Health Analysis
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 md:grid-cols-2">
              {PRICING_PLANS.map((plan, i) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`rounded-3xl border p-6 text-left transition-all ${
                    selectedPlan === plan.id
                      ? 'border-emerald-400 bg-emerald-50 shadow-lg shadow-emerald-200'
                      : 'border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{plan.name}</h2>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                    </div>
                    {selectedPlan === plan.id && (
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <Check className="w-5 h-5" />
                      </span>
                    )}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">£{plan.price}</div>
                  <div className="text-sm text-gray-600">/ report</div>
                </button>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-emerald-700 font-medium">Secure checkout</span>
              </div>
              <p className="text-gray-600">
                Your order is protected and your information is used only to generate the full AI health report.
              </p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">Order summary</p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900">Your Report Purchase</h2>
            </div>

            {selectedPlanData ? (
              <div className="space-y-6">
                <div className="rounded-3xl bg-emerald-50 p-6 border border-emerald-200">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm text-gray-600">Selected plan</p>
                      <p className="text-lg font-semibold text-gray-900">{selectedPlanData.name}</p>
                    </div>
                    <span className="text-2xl font-bold text-emerald-600">£{selectedPlanData.price}</span>
                  </div>
                  <p className="text-sm text-gray-700">{selectedPlanData.description}</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      value={formData.name}
                      onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                      placeholder="Jane Doe"
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      placeholder="jane@example.com"
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">VIN Number</label>
                    <input
                      value={formData.vin}
                      onChange={(event) => setFormData((prev) => ({ ...prev, vin: event.target.value.toUpperCase() }))}
                      placeholder="1HGCM82633A004352"
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Category</label>
                    <select
                      value={formData.category}
                      onChange={(event) => setFormData((prev) => ({ ...prev, category: event.target.value }))}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    >
                      <option value="">Choose a category</option>
                      {VEHICLE_CATEGORIES.map((category) => (
                        <option key={category} value={category} className="bg-white text-gray-900">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}

                  {!vehicleId ? (
                    <button
                      type="button"
                      onClick={handleStartAnalysis}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-500"
                    >
                      Start AI health analysis to unlock this plan
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-500"
                      disabled={status === 'saving'}
                    >
                      {status === 'saving' ? 'Continuing to Checkout...' : 'Continue to Payment'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </form>
              </div>
            ) : (
              <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                <AlertCircle className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
                <p className="text-gray-700">Select a plan to reveal the checkout form.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
