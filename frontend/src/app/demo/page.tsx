"use client";

import React from 'react';
import { Zap, Calendar, ArrowRight, Video, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="w-full z-50 bg-transparent px-6 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">NexusAI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 z-10">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Info */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-sm text-blue-400 self-start border border-blue-500/20">
              <Video className="w-4 h-4" />
              <span>Live 1-on-1 Demo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              See NexusAI in action
            </h1>
            <p className="text-gray-400 text-lg">
              Book a 30-minute personalized walkthrough with our product experts. Learn how NexusAI can automate your workflows and improve customer satisfaction.
            </p>
            
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Customized Setup</h3>
                  <p className="text-sm text-gray-400">We'll configure the AI to match your specific business needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Q&A Session</h3>
                  <p className="text-sm text-gray-400">Get all your technical and pricing questions answered directly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Mockup */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
            
            <h3 className="text-xl font-bold mb-6">Schedule your demo</h3>
            
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-300">Work Email</label>
                <input type="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="you@company.com" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-300">Company Size</label>
                <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white appearance-none">
                  <option value="">Select size...</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201+">201+ employees</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 mb-2">
                <label className="text-sm font-medium text-gray-300">Preferred Date (Optional)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="w-4 h-4 text-gray-500" />
                  </div>
                  <input type="date" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors text-gray-300" />
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl py-3 font-medium text-sm transition-all shadow-[0_0_20px_rgba(79,70,229,0.2)]">
                Confirm Request
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
