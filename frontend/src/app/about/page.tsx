"use client";

import React, { useState, useEffect } from 'react';
import { Zap, Users, Globe, Award, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInitial, setUserInitial] = useState('U');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(auth);
      if (auth) {
        const email = localStorage.getItem('userEmail');
        if (email) {
          setUserInitial(email.charAt(0).toUpperCase());
        }
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">NexusAI</span>
        </Link>
        
        {isAuthenticated ? (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/dashboard" className="hover:text-white transition-colors cursor-pointer">Dashboard</Link>
            <Link href="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</Link>
          </div>
        )}

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-3 hidden md:flex">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                  {userInitial}
                </div>
              </div>
              <button 
                onClick={() => {
                  localStorage.removeItem('isAuthenticated');
                  window.location.href = '/';
                }}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors ml-2 md:ml-4 md:border-l md:border-white/10 md:pl-4 cursor-pointer"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">Log In</Link>
              <Link href="/register" className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                Get Started
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-32 px-6 z-10 pb-24">
        <div className="text-center mb-20 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Our Mission</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We are building the intelligence layer for modern businesses. NexusAI empowers teams to automate customer interactions and scale their operations instantly.
          </p>
        </div>

        {/* Story Section */}
        <div className="w-full max-w-5xl bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 mb-20 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] pointer-events-none rounded-full"></div>
          <h2 className="text-3xl font-bold mb-6">The Story of NexusAI</h2>
          <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed">
            <p>
              Founded in 2026, NexusAI started with a simple observation: businesses spend countless hours managing repetitive customer queries, leaving little time for deep, meaningful interactions. 
            </p>
            <p>
              Our team of AI researchers and product designers set out to create a platform that feels like magic—an intelligent OS that reads, understands, and acts on customer needs automatically, while seamlessly looping in humans when it matters most.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-20">
          <div className="bg-[#111] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-white/20 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-4xl font-bold mb-2">10M+</h3>
            <p className="text-gray-400 text-sm">Interactions automated daily</p>
          </div>
          <div className="bg-[#111] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-white/20 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-4xl font-bold mb-2">120+</h3>
            <p className="text-gray-400 text-sm">Countries served globally</p>
          </div>
          <div className="bg-[#111] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-white/20 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-4xl font-bold mb-2">99.9%</h3>
            <p className="text-gray-400 text-sm">Uptime SLA guarantee</p>
          </div>
        </div>

        {/* Contact Sales Section */}
        <div id="contact" className="w-full max-w-4xl bg-gradient-to-b from-[#1a1a2e] to-[#111] border border-blue-500/50 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(79,70,229,0.15)] flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Ready to scale?</h2>
            <p className="text-gray-400 mb-8">
              Reach out to our sales team to discover how NexusAI can transform your customer support and lead generation workflows.
            </p>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" /> sales@nexusai.example.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" /> +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400" /> 100 Innovation Drive, San Francisco, CA
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! Our sales team will contact you shortly."); }}>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Work Email</label>
                <input type="email" placeholder="you@company.com" required className="w-full bg-[#111] border border-white/10 rounded-xl py-2 px-4 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Message</label>
                <textarea placeholder="How can we help?" rows={3} required className="w-full bg-[#111] border border-white/10 rounded-xl py-2 px-4 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] flex justify-center items-center gap-2 cursor-pointer hover:scale-[1.02]">
                Contact Sales <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
