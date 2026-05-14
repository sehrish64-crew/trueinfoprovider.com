'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Shield,
  CheckCircle,
  Loader2,
  ArrowLeft,
  Lock,
  AlertCircle
} from 'lucide-react';
import { PRICING_PLANS } from '@/lib/mock-data';

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const router = useRouter();
  // const searchParams = useSearchParams();

  // Get payment details from URL params or localStorage
  const [paymentData, setPaymentData] = useState<{
    customerName: string;
    customerEmail: string;
    selectedPlan: string;
    vehicleId: string;
  } | null>(null);

  useEffect(() => {
    // Try to get payment data from localStorage (set during form submission)
    const storedData = localStorage.getItem('paymentData');
    if (storedData) {
      setPaymentData(JSON.parse(storedData));
    }
  }, []);

  const selectedPlan = paymentData ? PRICING_PLANS.find(p => p.id === paymentData.selectedPlan) : null;

  const handlePayment = async () => {
    if (!paymentData) return;

    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Update payment status
      const response = await fetch('/api/payments/update-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vehicleId: paymentData.vehicleId,
          status: 'Completed'
        }),
      });

      if (!response.ok) {
        throw new Error('Payment update failed');
      }

      setPaymentComplete(true);

      // Clear stored data
      localStorage.removeItem('paymentData');

      // Redirect to success page after a delay
      setTimeout(() => {
        router.push('/analysis/success');
      }, 2000);

    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  if (!paymentData) {
    return (
      <div className="min-h-screen pt-24 bg-emerald-50 flex items-center justify-center px-4">
        <div className="w-full max-w-xl rounded-[2rem] border border-gray-200 bg-white p-10 shadow-xl shadow-emerald-100">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Data Not Found</h1>
            <p className="text-gray-600 mb-6">Please complete the analysis request form first.</p>
            <button
              onClick={() => router.push('/analysis')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-2xl transition-colors"
            >
              Go to Analysis
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen pt-24 bg-emerald-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg rounded-[2rem] border border-gray-200 bg-white p-10 shadow-xl shadow-emerald-100 text-center"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-600 mb-6">
            Your AI Health Report is being generated.
          </p>
          <p className="text-gray-500">Redirecting to your report...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-emerald-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-4 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Payment</h1>
          <p className="text-xl text-gray-600">Secure checkout for your AI Health Report</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

            {selectedPlan && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-3xl border border-gray-200 bg-emerald-50">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{selectedPlan.name}</h3>
                    <p className="text-sm text-gray-600">{selectedPlan.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-emerald-600">£{selectedPlan.price}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-900 font-medium">Total</span>
                    <span className="text-2xl font-bold text-emerald-600">£{selectedPlan.price}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 p-4 rounded-3xl border border-emerald-200 bg-emerald-50">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-emerald-700 font-medium">Secure Payment</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Your payment information is encrypted and secure.
              </p>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>

            <div className="space-y-6">
              {/* Customer Info */}
              <div className="p-4 rounded-3xl border border-gray-200 bg-emerald-50">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Customer Information</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-900">{paymentData.customerName}</p>
                  <p className="text-gray-600">{paymentData.customerEmail}</p>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-3xl bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      defaultChecked
                      className="w-4 h-4 text-emerald-600 bg-white border-gray-300 focus:ring-emerald-500"
                    />
                    <CreditCard className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-900 font-medium">Credit/Debit Card</span>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Pay Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-gray-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Pay £{selectedPlan?.price} Now
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By completing this purchase, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}