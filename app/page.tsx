'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Scan, FileText, Wrench, TrendingUp, Upload, Cpu, Eye, Lock, ArrowRight, Car, Activity, ChartBar as BarChart3, Brain, ShieldCheck, Users, ThumbsUp, Clock, CircleCheck as CheckCircle2, Zap } from 'lucide-react';

const FEATURES = [
  { icon: Scan, title: 'AI Damage Detection', desc: 'Advanced neural networks detect scratches, dents, rust, and structural issues with 95%+ accuracy' },
  { icon: BarChart3, title: 'Health Condition Scoring', desc: 'Comprehensive 0-100 condition score based on AI analysis of multiple parameters' },
  { icon: FileText, title: 'Full AI Report Generation', desc: 'Instant generation of detailed AI-powered health reports with actionable insights' },
  { icon: Activity, title: 'Real-time AI Analysis', desc: 'Watch AI perform real-time health analysis with live issue detection and progressive reporting' },
  { icon: Wrench, title: 'Repair Cost Estimation', desc: 'AI-calculated repair estimates in GBP for every detected issue with confidence scoring' },
  { icon: TrendingUp, title: 'Risk Prediction', desc: 'Predictive AI models assess future risk factors and maintenance requirements' },
];

const STEPS = [
  { num: '01', icon: Upload, title: 'Upload Images for Health Analysis', desc: 'Upload 6 views for health analysis - front, rear, left, right, interior, and engine bay' },
  { num: '02', icon: Cpu, title: 'AI Health Analysis', desc: 'Our AI engine performs real-time health analysis, detecting damages and assessing condition' },
  { num: '03', icon: Eye, title: 'Preview AI Health Analysis', desc: 'View initial AI detections with severity ratings and confidence scores' },
  { num: '04', icon: Lock, title: 'Unlock Full AI Report', desc: 'Access the complete AI Health Report with all insights and recommendations' },
];

const TRUST_STATS = [
  { icon: ThumbsUp, value: '99%', label: 'Customer Satisfaction' },
  { icon: Car, value: '150+', label: 'Cars Inspected Weekly' },
  { icon: Users, value: '5,000+', label: 'Trusted Customers' },
  { icon: Clock, value: '2min', label: 'Average Analysis Time' },
];

const FLOATING_LABELS = [
  { text: 'Front Bumper Scratch', severity: 'Medium', x: '10%', y: '25%' },
  { text: 'Tire Wear Detected', severity: 'High', x: '75%', y: '20%' },
  { text: 'Paint Condition: Good', severity: 'Low', x: '65%', y: '70%' },
  { text: 'Engine Bay: Clean', severity: 'Low', x: '15%', y: '72%' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#ECFDF5]">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d1fae5,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#a7f3d0,transparent_40%)]" />

        {/* Blur Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-emerald-100 shadow-sm mb-6">
                <Brain className="w-4 h-4 text-emerald-600" />

                <span className="text-sm text-emerald-700 font-semibold">
                  AI Health Analysis
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.05] mb-6">

                Smart AI-Powered <br />

                <span className="bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
                  AI Health Analysis
                </span>

                <br />

                & Damage Detection

              </h1>

              {/* Paragraph */}
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
                Instantly perform AI health analysis using advanced AI technology.
                Detect scratches, dents, paint issues, structural risks,
                and maintenance concerns with intelligent real-time analysis.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-10">

                <Link
                  href="/analysis"
                  className="group w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold transition-all shadow-[0_10px_30px_rgba(16,185,129,0.25)] flex items-center justify-center gap-2"
                >
                  Start AI Health Analysis

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/90 backdrop-blur-md border border-emerald-100 text-gray-700 font-semibold hover:bg-white transition-all shadow-sm text-center"
                >
                  View Pricing
                </Link>

              </div>

              {/* Bottom Points */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm text-gray-600">

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>No signup required</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>AI results in under 2 min</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Advanced neural scanning</span>
                </div>

              </div>

            </motion.div>

            {/* RIGHT SIDE */}
            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >

              {/* Main Card */}
              <div className="relative rounded-[32px] border border-emerald-100 bg-white/70 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_rgba(16,185,129,0.12)]">

                {/* Top Bar */}
                <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-5">

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-100 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

                    <span className="text-xs font-semibold text-gray-700">
                      AI Scan Active
                    </span>
                  </div>

                  <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 shadow-sm">
                    LIVE ANALYSIS
                  </div>

                </div>

                {/* IMAGE AREA */}
                <div className="relative aspect-[4/3] overflow-hidden">

                  {/* HD CAR IMAGE */}
                  <Image
                    src="/ai-2.jfif"
                    alt="AI health analysis"
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  {/* AI GLOW */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)]" />

                  {/* SCAN LINE */}
                  <motion.div
                    className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.8)]"

                    animate={{
                      top: ['10%', '90%', '10%'],
                    }}

                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* DETECTION LABELS */}
                  {[
                    {
                      top: '14%',
                      left: '8%',
                      text: 'Scratch Detected',
                      color: 'bg-red-500',
                    },
                    {
                      top: '24%',
                      right: '6%',
                      text: 'Dent Analysis',
                      color: 'bg-yellow-500',
                    },
                    {
                      bottom: '18%',
                      left: '6%',
                      text: 'Paint Quality Good',
                      color: 'bg-emerald-500',
                    },
                    {
                      bottom: '12%',
                      right: '8%',
                      text: 'Engine Status Stable',
                      color: 'bg-cyan-500',
                    },
                  ].map((label, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                      }}
                      className={`absolute ${i > 1 ? 'hidden sm:flex' : 'flex'} px-3 sm:px-4 py-2 rounded-2xl ${label.color}/90 backdrop-blur-md shadow-2xl text-[11px] sm:text-xs font-semibold text-white border border-white/20`}
                      style={{
                        top: label.top,
                        left: label.left,
                        right: label.right,
                        bottom: label.bottom,
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Zap className="w-3 h-3" />
                        {label.text}
                      </div>
                    </motion.div>
                  ))}

                  {/* AI FOCUS POINTS */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute top-[35%] left-[28%] w-5 h-5 rounded-full border-2 border-red-400 shadow-[0_0_20px_rgba(248,113,113,0.8)]"
                  />

                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="absolute bottom-[30%] right-[24%] w-5 h-5 rounded-full border-2 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]"
                  />

                </div>

                {/* BOTTOM STATS */}
                <div className="relative bg-white/80 backdrop-blur-md border-t border-emerald-100 p-6">

                  <div className="grid grid-cols-3 gap-4">

                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">
                        96%
                      </div>

                      <div className="text-xs text-gray-500 mt-1">
                        Detection Accuracy
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">
                        2m
                      </div>

                      <div className="text-xs text-gray-500 mt-1">
                        Scan Duration
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        AI
                      </div>

                      <div className="text-xs text-gray-500 mt-1">
                        Neural Engine
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>



      {/* Trust Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <stat.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* AI Intelligence Section */}
      <section className="py-20 lg:py-28 bg-[#ECFDF5] relative overflow-hidden">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d1fae5,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#a7f3d0,transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-200 mb-6">
                <Brain className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-emerald-700 font-semibold">
                  Neural AI Intelligence
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Advanced Deep Learning <br />
                <span className="text-emerald-600">
                  Health Analysis AI
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                Our AI engine uses neural networks and computer vision
                algorithms trained on millions of health analysis datasets
                to identify hidden damages, structural risks, paint issues,
                and repair estimations in real-time.
              </p>

              {/* Progress Stats */}
              <div className="space-y-6">

                {[
                  ['Damage Detection Accuracy', '96%'],
                  ['AI Confidence Score', '98%'],
                  ['Repair Prediction Accuracy', '93%'],
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 text-sm font-medium">
                        {item[0]}
                      </span>

                      <span className="text-emerald-600 text-sm font-bold">
                        {item[1]}
                      </span>
                    </div>

                    <div className="h-2.5 rounded-full bg-emerald-100 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item[1] }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.2,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              {/* Main Card */}
              <div className="relative rounded-3xl border border-emerald-100 bg-white/70 backdrop-blur-xl p-8 overflow-hidden shadow-[0_10px_60px_rgba(16,185,129,0.08)]">

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" />

                {/* AI Circle */}
                <div className="relative flex items-center justify-center h-[400px]">

                  {/* Outer Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute w-72 h-72 rounded-full border border-emerald-200"
                  />

                  {/* Middle Ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute w-56 h-56 rounded-full border border-cyan-300 border-dashed"
                  />

                  {/* Core */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="relative w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.35)]"
                  >
                    <Brain className="w-16 h-16 text-white" />
                  </motion.div>

                  {/* Floating Cards */}
                  {[
                    { top: '8%', left: '10%', text: 'Scratch Detected' },
                    { top: '18%', right: '8%', text: 'Rust Risk 12%' },
                    { bottom: '15%', left: '5%', text: 'AI Scan Active' },
                    { bottom: '10%', right: '10%', text: 'Engine Healthy' },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                      }}
                      className="absolute px-4 py-2 rounded-xl bg-white/90 border border-emerald-100 shadow-lg backdrop-blur-md text-sm text-emerald-700 font-medium"
                      style={card}
                    >
                      {card.text}
                    </motion.div>
                  ))}

                </div>

                {/* Bottom Status */}
                <div className="relative mt-4 flex items-center justify-between border-t border-emerald-100 pt-5">

                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

                    <span className="text-gray-600 text-sm font-medium">
                      Neural AI Processing
                    </span>
                  </div>

                  <span className="text-cyan-600 font-mono text-sm font-semibold">
                    STATUS: ONLINE
                  </span>

                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Intelligent <span className="gradient-text">AI Features</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Powered by advanced neural networks trained on millions of imagery samples for health analysis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 card-shine">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-[#ECFDF5] relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d1fae5,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#a7f3d0,transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-emerald-100 backdrop-blur-md mb-5">
              <Cpu className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                AI Workflow Process
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It <span className="text-emerald-600">Works</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Just 4 intelligent steps to perform AI health analysis using advanced vision models
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

            {/* Connecting Line (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200" />

            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >

                {/* Card */}
                <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-lg">
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition">
                    <step.icon className="w-6 h-6 text-emerald-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-100/0 to-emerald-100/0 group-hover:from-emerald-100/40 group-hover:to-transparent transition-all duration-500" />

                </div>

                {/* Arrow connector */}
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-emerald-300" />
                  </div>
                )}

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#ECFDF5]">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#fff,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-emerald-100 backdrop-blur-md mb-6">
                <Brain className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">
                  AI Health Analysis System
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Real-Time AI Health
                <span className="text-emerald-600"> Analysis</span>
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Advanced AI system continuously performs health analysis, detects damages,
                assesses condition, and generates intelligent insights in real time.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch gap-4">

                <Link
                  href="/analysis"
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition shadow-lg text-center"
                >
                  Start Scan
                </Link>

                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition text-center"
                >
                  View Pricing
                </Link>

              </div>

              {/* small stats */}
              <div className="mt-8 flex gap-6 text-sm text-gray-600">
                <div>⚡ 2 min processing</div>
                <div>🎯 96% accuracy</div>
                <div>🔒 Secure AI system</div>
              </div>

            </motion.div>

            {/* RIGHT VIDEO SECTION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >

              {/* Video Card */}
              <div className="relative rounded-3xl overflow-hidden border border-emerald-100 shadow-2xl">

                <Image
                  src="/ai.jfif"
                  alt="AI health analysis"
                  width={600}
                  height={420}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* AI Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 text-emerald-700 text-xs font-semibold backdrop-blur-md">
                  LIVE AI SCANNING
                </div>

                {/* Animated Scan Line */}
                <motion.div
                  className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                  animate={{ top: ["10%", "90%", "10%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                />

              </div>

              {/* Floating Info Cards */}
              <div className="absolute -top-6 -left-6 px-4 py-2 bg-white/80 backdrop-blur-md border border-emerald-100 rounded-xl shadow-md text-xs text-emerald-700 animate-bounce">
                Detecting Damage...
              </div>

              <div className="absolute bottom-6 -right-6 px-4 py-2 bg-white/80 backdrop-blur-md border border-emerald-100 rounded-xl shadow-md text-xs text-emerald-700 animate-bounce">
                AI Processing Active
              </div>

            </motion.div>

          </div>

        </div>
      </section>
      <section className="py-24 lg:py-32 bg-[#ECFDF5] relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d1fae5,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#a7f3d0,transparent_50%)]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-emerald-100 backdrop-blur-md mb-5">
              <Cpu className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                AI Processing Pipeline
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              How AI <span className="text-emerald-600">Thinks</span>
            </h2>

            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Every image goes through a deep neural decision flow before generating health analysis results.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-emerald-200 pl-6 md:ml-6">

            {[
              {
                title: "Image Ingestion",
                desc: "Uploaded images are converted into AI-readable tensors for health analysis",
              },
              {
                title: "Feature Extraction",
                desc: "AI detects edges, textures, scratches & structural patterns",
              },
              {
                title: "Damage Classification",
                desc: "Neural network identifies severity: low, medium, high",
              },
              {
                title: "Prediction Engine",
                desc: "Future risk, repair cost & maintenance prediction generated",
              },
            ].map((step, i) => (
              <div key={i} className="mb-10 pl-6 md:ml-6 relative">

                {/* Dot */}
                <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] animate-pulse" />

                {/* Card */}
                <div className="p-6 rounded-2xl bg-white/70 border border-emerald-100 backdrop-blur-md shadow-sm hover:shadow-lg transition-all">

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                      Step {i + 1}
                    </span>

                    <div className="h-[1px] flex-1 bg-emerald-100" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {step.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom highlight */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/70 border border-emerald-100 backdrop-blur-md">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-gray-700 font-medium">
                Fully automated AI decision system — no manual input required
              </span>
            </div>
          </div>

        </div>
      </section>




      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for AI Health Analysis?
            </h2>
            <p className="text-emerald-100 mb-8 max-w-xl mx-auto leading-relaxed">
              Get your AI-powered health analysis in under 2 minutes. No signup required for basic scanning.
            </p>
            <Link
              href="/analysis"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-700 font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:bg-emerald-50"
            >
              <Car className="w-5 h-5" />
              Start AI Health Analysis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
