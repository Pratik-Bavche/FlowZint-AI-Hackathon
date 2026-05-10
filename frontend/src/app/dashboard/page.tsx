"use client";

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Ticket, Zap, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const data = [
  { name: 'Mon', interactions: 400, resolved: 240 },
  { name: 'Tue', interactions: 300, resolved: 139 },
  { name: 'Wed', interactions: 200, resolved: 980 },
  { name: 'Thu', interactions: 278, resolved: 390 },
  { name: 'Fri', interactions: 189, resolved: 480 },
  { name: 'Sat', interactions: 239, resolved: 380 },
  { name: 'Sun', interactions: 349, resolved: 430 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Assume true initially to prevent flicker
  const [userInitial, setUserInitial] = useState('U');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('isAuthenticated');
      if (!auth) {
        setIsAuthenticated(false);
        router.push('/login');
      } else {
        const email = localStorage.getItem('userEmail');
        if (email) {
          setUserInitial(email.charAt(0).toUpperCase());
        }
      }
    }
  }, [router]);

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-[#0a0a0a]" />; // Loading state while redirecting
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">NexusAI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/dashboard" className="text-white transition-colors">Dashboard</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 hidden md:flex">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white shadow-lg">
              {userInitial}
            </div>
          </div>
          <button 
            onClick={() => {
              localStorage.removeItem('isAuthenticated');
              router.push('/');
            }}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors ml-2 md:ml-4 md:border-l md:border-white/10 md:pl-4"
          >
            Log Out
          </button>
        </div>
      </nav>

      <div className="flex-1 flex pt-20 h-screen">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 p-6 hidden md:flex flex-col gap-8 overflow-y-auto">
          <nav className="flex flex-col gap-2">
            <NavItem active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<BarChart className="w-5 h-5" />} label="Overview" />
            <NavItem active={activeTab === 'customers'} onClick={() => setActiveTab('customers')} icon={<Users className="w-5 h-5" />} label="Customers" />
            <NavItem active={activeTab === 'tickets'} onClick={() => setActiveTab('tickets')} icon={<Ticket className="w-5 h-5" />} label="Tickets" />
            <NavItem active={activeTab === 'automations'} onClick={() => setActiveTab('automations')} icon={<Zap className="w-5 h-5" />} label="Automations" />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'overview' && (
            <>
              <header className="flex justify-between items-center mb-10">
                <div>
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                  <p className="text-gray-400 text-sm mt-1">Welcome back, Admin. Here's your AI summary.</p>
                </div>

              </header>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Interactions" value="12,450" change="+14%" icon={<Users className="w-5 h-5 text-blue-400" />} />
                <StatCard title="AI Resolution Rate" value="84%" change="+2%" icon={<Zap className="w-5 h-5 text-purple-400" />} />
                <StatCard title="Open Tickets" value="32" change="-5%" icon={<Ticket className="w-5 h-5 text-emerald-400" />} />
              </div>

              {/* Chart Section */}
              <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-6">Interaction Analytics</h2>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="name" stroke="#666" tick={{ fill: '#666' }} axisLine={false} tickLine={false} />
                      <YAxis stroke="#666" tick={{ fill: '#666' }} axisLine={false} tickLine={false} />
                      <Tooltip 
                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        contentStyle={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      />
                      <Bar dataKey="interactions" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Total Interactions" />
                      <Bar dataKey="resolved" fill="#9333ea" radius={[4, 4, 0, 0]} name="AI Resolved" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          )}

          {activeTab === 'customers' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Customer Database</h1>
              <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-400">
                    <thead className="text-xs text-gray-300 uppercase bg-white/5">
                      <tr>
                        <th className="px-6 py-3 rounded-tl-lg">Name</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3 rounded-tr-lg">Last Interaction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">Alice Johnson</td>
                        <td className="px-6 py-4">alice@example.com</td>
                        <td className="px-6 py-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Active</span></td>
                        <td className="px-6 py-4">2 hours ago</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">Bob Smith</td>
                        <td className="px-6 py-4">bob@acmecorp.com</td>
                        <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Lead</span></td>
                        <td className="px-6 py-4">1 day ago</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">Charlie Davis</td>
                        <td className="px-6 py-4">charlie@startup.io</td>
                        <td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Churn Risk</span></td>
                        <td className="px-6 py-4">5 days ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tickets' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Support Tickets</h1>
              <div className="flex flex-col gap-4">
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">Login issues after recent update</h3>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs">High Priority</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">User reported being unable to login via SSO. AI has collected diagnostic logs.</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-medium transition-colors text-white">View Details</button>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium transition-colors text-white">Assign to me</button>
                  </div>
                </div>
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">Billing inquiry</h3>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Medium Priority</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Customer asking about upgrading to Enterprise tier. AI drafted a response pending review.</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-medium transition-colors text-white">Review AI Draft</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'automations' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">AI Automations</h1>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#111] border border-blue-500/50 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] pointer-events-none"></div>
                  <h3 className="font-semibold text-lg mb-2">Auto-Ticket Classification</h3>
                  <p className="text-gray-400 text-sm mb-4">AI automatically reads incoming emails and classifies them by department and priority.</p>
                  <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                    <span className="text-blue-400 text-sm font-medium">1,245 processed today</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Active</span>
                  </div>
                </div>
                <div className="bg-[#111] border border-purple-500/50 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[50px] pointer-events-none"></div>
                  <h3 className="font-semibold text-lg mb-2">Smart Lead Follow-up</h3>
                  <p className="text-gray-400 text-sm mb-4">AI drafts and sends personalized follow-up emails 24 hours after a demo is booked.</p>
                  <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                    <span className="text-purple-400 text-sm font-medium">89 emails queued</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${active ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}

function StatCard({ title, value, change, icon }: { title: string, value: string, change: string, icon: React.ReactNode }) {
  const isPositive = change.startsWith('+');
  return (
    <div className="p-6 rounded-2xl bg-[#111] border border-white/10 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
          <ArrowUpRight className="w-3 h-3" />
          {change}
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-1">{title}</p>
        <p className="text-3xl font-bold tracking-tight">{value}</p>
      </div>
    </div>
  );
}
