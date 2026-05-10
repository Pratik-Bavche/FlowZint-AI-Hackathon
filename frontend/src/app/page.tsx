"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BarChart3, Zap, ArrowRight, Bot, Sparkles, Shield, Activity } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Background glowing effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">NexusAI</span>
        </div>
        
        {isAuthenticated ? (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {/* Empty space to keep layout balanced */}
          </div>
        )}
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log In</Link>
          <Link href="/register" className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-48 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Introducing the ultimate Business OS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
        >
          Automate Everything.<br /> Grow Faster.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
          NexusAI combines intelligent customer support, smart lead qualification, and a powerful analytics dashboard into one seamless platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_40px_rgba(79,70,229,0.3)]">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/demo" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium text-lg flex items-center justify-center transition-all">
            Book a Demo
          </Link>
        </motion.div>

        {/* Dashboard Preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 w-full relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 rounded-2xl h-full w-full pointer-events-none" />
          <div className="rounded-xl overflow-hidden border border-white/5 bg-[#111] relative shadow-2xl">
            <img 
              src="/dashboard_preview.png" 
              alt="NexusAI Dashboard Preview" 
              className="w-full h-auto object-cover opacity-90"
            />
          </div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Powered by Advanced AI</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to scale your business operations automatically.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<MessageSquare className="w-6 h-6 text-blue-400" />}
            title="Intelligent Support"
            description="Our conversational AI resolves up to 80% of customer queries instantly, seamlessly handing off complex issues to humans."
          />
          <FeatureCard 
            icon={<BarChart3 className="w-6 h-6 text-purple-400" />}
            title="Predictive Analytics"
            description="Anticipate trends and view real-time performance metrics in a highly interactive dashboard."
          />
          <FeatureCard 
            icon={<Activity className="w-6 h-6 text-emerald-400" />}
            title="Workflow Automation"
            description="Automatically draft emails, generate support tickets, and prioritize leads without manual intervention."
          />
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          {chatOpen ? <ArrowRight className="w-6 h-6 rotate-90" /> : <Bot className="w-6 h-6" />}
        </button>
        
        {/* Chatbot Window */}
        {chatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-[#111] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">NexusAI Assistant</h3>
                <p className="text-xs text-green-400">Online</p>
              </div>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm max-w-[85%]">
                Hi! I'm the NexusAI assistant. How can I help you scale your business today?
              </div>
            </div>

            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type your message..."
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 rounded-full">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
