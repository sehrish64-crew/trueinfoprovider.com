'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  CheckCircle,
  FileText,
  ArrowRight,
  Shield
} from 'lucide-react';

export default function AnalysisSuccessPage() {
  const [reportReady, setReportReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simulate report generation
    const timer = setTimeout(() => {
      setReportReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-emerald-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {/* Success Header */}
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Your AI Health Report is being prepared and will be emailed to you shortly.
          </p>

          {/* Report Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm mb-8"
          >
            {!reportReady ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Generating Your Report</h3>
                  <p className="text-gray-600">This may take a few moments...</p>
                </div>
                <div className="w-full max-w-xs bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-emerald-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Ready!</h3>
                    <p className="text-gray-600">
                      Your full AI Health Report is complete and will be emailed to you within 12 to 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-[2rem] border border-gray-200 bg-white p-6 mb-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s Included in Your Report</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Complete Issue Analysis</p>
                  <p className="text-sm text-gray-600">All detected problems with repair estimates</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Health Score</p>
                  <p className="text-sm text-gray-600">Overall condition assessment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Repair Recommendations</p>
                  <p className="text-sm text-gray-600">Prioritized action items</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Professional Insights</p>
                  <p className="text-sm text-gray-600">Expert analysis and advice</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-4 text-gray-500">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span className="text-sm">Secure • Professional • AI-Powered</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/')}
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-2xl transition-colors hover:bg-gray-800"
              >
                Back to Home
              </button>

              {reportReady && (
                <button
                  onClick={() => router.push('/analysis')}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-2xl transition-colors flex items-center gap-2"
                >
                  Start Another AI Health Analysis
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}