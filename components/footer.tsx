'use client';

import Link from 'next/link';
import { ShieldCheck, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-900 leading-tight">True Info Provider</span>
                <span className="text-[10px] text-emerald-600 font-medium tracking-wider uppercase">AI Vehicle Intelligence</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mt-4">
              AI-powered vehicle health analysis. Get instant, intelligent Full AI Reports with advanced damage detection and condition scoring.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Platform</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/analysis', label: 'Vehicle Health Analysis' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">AI Reports</h3>
            <ul className="space-y-2.5">
              {['Basic Health Scan', 'Advanced Vehicle Health Report', 'Complete AI Health Report', 'Enterprise Solutions'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-500 hover:text-emerald-600 transition-colors cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <Mail className="w-4 h-4 text-emerald-600" />
                info@trueinfoprovider.com
              </li>
             
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <a href="https://wa.me/447555979712" target="_blank" rel="noreferrer noopener" className="hover:text-emerald-600 transition-colors">
                  +44 7555 979712
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-500">
                <MapPin className="w-9 text-emerald-600 mt-0.5" />
                 SIU OFFICES, 4-6 GREATOREX STREET LONDON UNITED KINGDOM E1 5NF
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; 2026 True Info Provider. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:text-gray-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-gray-600 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
