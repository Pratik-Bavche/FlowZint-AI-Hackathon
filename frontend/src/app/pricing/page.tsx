"use client";

import React, { useState, useEffect } from 'react';
import { Zap, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInitial, setUserInitial] = useState('U');
  
  // New states for interactions
  const [trialActive, setTrialActive] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(auth);
      if (auth) {
        const email = localStorage.getItem('userEmail');
        if (email) {
          setUserInitial(email.charAt(0).toUpperCase());
        }
        setTrialActive(localStorage.getItem('trialActive') === 'true');
      }
    }
  }, []);

  const handleStartTrial = () => {
    if (!isAuthenticated) {
      window.location.href = '/register';
      return;
    }
    localStorage.setItem('trialActive', 'true');
    setTrialActive(true);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleProPlan = () => {
    if (!isAuthenticated) {
      window.location.href = '/register';
      return;
    }
    setShowPaymentModal(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[80%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      
      {/* Stylish Notification */}
      {showNotification && (
        <div className="fixed top-24 right-6 bg-gradient-to-r from-green-500/90 to-emerald-600/90 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center gap-4 z-[60] animate-[bounce_1s_ease-in-out]">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-lg">Trial Activated!</h4>
            <p className="text-sm text-green-50">Welcome to your 14-day free trial.</p>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#111] border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl relative animate-[scale-up_0.2s_ease-out]">
            <button onClick={() => setShowPaymentModal(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full text-gray-400 transition-colors">
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-2">Upgrade to Pro</h3>
            <p className="text-gray-400 text-sm mb-8">Complete your secure payment of $149/mo.</p>
            
            <form 
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Payment Successful! Welcome to Pro.");
                setShowPaymentModal(false);
              }}
            >
              <div className="bg-[#0a0a0a] border border-white/10 p-4 rounded-xl focus-within:border-blue-500 transition-colors">
                <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block font-medium">Card Number</label>
                <input 
                  type="text" 
                  required 
                  placeholder="0000 0000 0000 0000" 
                  maxLength={19}
                  className="w-full bg-transparent text-gray-200 tracking-widest focus:outline-none placeholder:text-gray-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a0a0a] border border-white/10 p-4 rounded-xl focus-within:border-blue-500 transition-colors">
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block font-medium">Expiry</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="MM/YY" 
                    maxLength={5}
                    className="w-full bg-transparent text-gray-200 focus:outline-none placeholder:text-gray-600"
                  />
                </div>
                <div className="bg-[#0a0a0a] border border-white/10 p-4 rounded-xl focus-within:border-blue-500 transition-colors">
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block font-medium">CVC</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="123" 
                    maxLength={4}
                    className="w-full bg-transparent text-gray-200 tracking-widest focus:outline-none placeholder:text-gray-600"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] flex justify-center items-center gap-2 hover:scale-[1.02]"
              >
                Pay $149 <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">NexusAI</span>
        </Link>
        
        {isAuthenticated ? (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="/pricing" className="text-white transition-colors">Pricing</Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {/* Empty space to keep layout balanced */}
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
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors ml-2 md:ml-4 md:border-l md:border-white/10 md:pl-4"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log In</Link>
              <Link href="/register" className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                Get Started
              </Link>
            </>
          )}
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
          <div className={`bg-[#111] border ${trialActive ? 'border-green-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'border-white/10'} rounded-3xl p-8 flex flex-col hover:border-white/20 transition-all relative`}>
            {trialActive && (
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                Active
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">Perfect for small teams getting started with AI.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-gray-400">/mo</span>
            </div>
            
            {trialActive ? (
              <button disabled className="w-full py-3 px-4 rounded-xl border border-green-500/30 bg-green-500/10 text-center font-medium text-green-400 mb-8 cursor-default flex flex-col items-center justify-center gap-1">
                <span className="flex items-center gap-2"><Check className="w-4 h-4" /> 14-day trial active</span>
                <span className="text-[10px] font-normal opacity-80 uppercase tracking-widest">In Progress</span>
              </button>
            ) : (
              <button onClick={handleStartTrial} className="w-full py-3 px-4 rounded-xl border border-white/10 text-center font-medium hover:bg-white/5 transition-colors mb-8">
                Start 14-day trial
              </button>
            )}

            <div className="flex flex-col gap-4 mt-auto">
              <Feature text="Up to 1,000 AI interactions/mo" />
              <Feature text="Standard AI Assistant" />
              <Feature text="Basic Dashboard Analytics" />
              <Feature text="Email Support" />
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-b from-[#1a1a2e] to-[#111] border border-blue-500/50 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(79,70,229,0.15)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <p className="text-gray-400 text-sm mb-6">Advanced AI capabilities for growing businesses.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$149</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <button onClick={handleProPlan} className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] mb-8 hover:scale-[1.02]">
              Get Started
            </button>
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
            <Link href="/about" className="w-full py-3 px-4 rounded-xl bg-white text-black text-center font-bold hover:bg-gray-200 transition-colors mb-8 shadow-lg hover:scale-[1.02] transform">
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
