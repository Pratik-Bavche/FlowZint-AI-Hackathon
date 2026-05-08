"use client";

import React from 'react';
import { Zap, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[80%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">NexusAI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          <Link href="/pricing" className="text-white transition-colors">Pricing</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log In</Link>
          <Link href="/register" className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-32 px-6 z-10 pb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Start for free, then scale as your business grows. All plans include our core AI assistant features.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Starter Plan */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">Perfect for small teams getting started with AI.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <Link href="/register" className="w-full py-3 px-4 rounded-xl border border-white/10 text-center font-medium hover:bg-white/5 transition-colors mb-8">
              Start 14-day trial
            </Link>
            <div className="flex flex-col gap-4 mt-auto">
              <Feature text="Up to 1,000 AI interactions/mo" />
              <Feature text="Standard AI Assistant" />
              <Feature text="Basic Dashboard Analytics" />
              <Feature text="Email Support" />
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-b from-[#1a1a2e] to-[#111] border border-blue-500/50 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(79,70,229,0.15)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <p className="text-gray-400 text-sm mb-6">Advanced AI capabilities for growing businesses.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$149</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <Link href="/register" className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg mb-8">
              Get Started
            </Link>
            <div className="flex flex-col gap-4 mt-auto">
              <Feature text="Up to 10,000 AI interactions/mo" />
              <Feature text="Advanced Contextual AI" />
              <Feature text="Predictive Analytics Dashboard" />
              <Feature text="Automated Workflow Triggers" />
              <Feature text="Priority Support" />
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-6">Custom limits and tailored AI solutions for scale.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <Link href="/demo" className="w-full py-3 px-4 rounded-xl bg-white text-black text-center font-medium hover:bg-gray-200 transition-colors mb-8">
              Contact Sales
            </Link>
            <div className="flex flex-col gap-4 mt-auto">
              <Feature text="Unlimited AI interactions" />
              <Feature text="Custom AI Model Fine-tuning" />
              <Feature text="Dedicated Account Manager" />
              <Feature text="SLA Guarantees" />
              <Feature text="SSO & Advanced Security" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
        <Check className="w-3 h-3 text-blue-400" />
      </div>
      <span className="text-sm text-gray-300">{text}</span>
    </div>
  );
}
