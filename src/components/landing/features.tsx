import { Container } from '@/components/ui/container';
import { Zap, BarChart3, TrendingUp, Share2, FileText, Download } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-slate-50 px-3 py-1 text-sm font-medium text-indigo-600 mb-6 shadow-sm">
            <Zap size={14} className="fill-indigo-600" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Everything you need for <br />
            world-class research
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
             Stop switching between ten different apps. DeepRes brings your research workflow into one cohesive platform.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-6 lg:grid-cols-2">
          
          {/* Feature 1: Research Activity */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-slate-50 p-8 lg:p-12 hover:bg-slate-100 transition-colors">
            <div className="relative z-10 mb-10">
               <h3 className="text-3xl font-semibold text-gray-900 mb-2">Research Activity</h3>
               <p className="text-gray-500">Track your team's contributions and paper progress in real-time.</p>
            </div>
            {/* Mockup */}
            <div className="relative rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
               <p className="font-semibold text-gray-900 mb-4">Weekly Contributions</p>
               <div className="flex items-end justify-between gap-2 h-48">
                  {[35, 60, 45, 75, 50, 80, 65, 90, 55, 70, 40].map((h, i) => (
                    <div key={i} className="w-full bg-indigo-100 rounded-t-md relative group-hover:bg-indigo-200 transition-colors">
                       <div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-md transition-all duration-1000" style={{ height: `${h}%` }} />
                    </div>
                  ))}
               </div>
               <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium font-mono">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
               </div>
            </div>
          </div>

          {/* Feature 2: Citation Analytics */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-slate-50 p-8 lg:p-12 hover:bg-slate-100 transition-colors">
             <div className="relative z-10 mb-10">
               <h3 className="text-3xl font-semibold text-gray-900 mb-2">Impact Analytics</h3>
               <p className="text-gray-500">Visualize your citation growth and scholarly impact instantly.</p>
             </div>
             {/* Mockup */}
             <div className="relative rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
               <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Total Citations</p>
                    <p className="text-4xl font-bold text-gray-900">842</p>
                  </div>
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                     <TrendingUp size={20} />
                  </div>
               </div>
                
               <div className="relative h-40 w-full">
                  {/* Simplistic Line Chart Representation */}
                  <svg className="h-full w-full overflow-visible" preserveAspectRatio="none">
                     <path d="M0,150 C50,150 100,100 150,110 C200,120 250,50 300,60 C350,70 400,20 450,10" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
                     <path d="M0,150 C50,150 100,100 150,110 C200,120 250,50 300,60 C350,70 400,20 450,10 V160 H0 Z" fill="url(#gradient)" opacity="0.1" />
                     <defs>
                       <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" stopColor="#6366f1" />
                         <stop offset="100%" stopColor="#ffffff" />
                       </linearGradient>
                     </defs>
                  </svg>
                  {/* Floating Tooltip */}
                  <div className="absolute top-[10%] left-[60%] bg-gray-900 text-white text-xs py-1 px-3 rounded-lg shadow-xl translate-x-4">
                     +12 this week
                  </div>
               </div>
             </div>
          </div>

          {/* Feature 3: Telegram Import (Smaller) */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-slate-50 p-8 hover:bg-slate-100 transition-colors">
            <div className="mb-6">
               <h3 className="text-2xl font-semibold text-gray-900 mb-2">Telegram Import</h3>
               <p className="text-gray-500 text-sm">Forward papers directly to your workspace.</p>
            </div>
             {/* Mockup */}
            <div className="relative rounded-2xl bg-white p-4 shadow-sm border border-slate-100 max-w-sm">
               <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-sky-500 flex items-center justify-center text-white shrink-0">
                     <SendIcon />
                  </div>
                  <div className="bg-sky-50 rounded-2xl rounded-tl-none p-3 text-sm text-gray-800 w-full">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-sky-700">Saved Messages</span>
                     </div>
                     <div className="bg-white rounded-lg p-2 border border-sky-100 flex items-center gap-2 mb-1">
                        <FileText size={16} className="text-red-500" />
                        <span className="truncate text-xs font-medium">attention_is_all_you_need.pdf</span>
                     </div>
                     <p className="text-xs text-sky-600 mt-1">✓ Saved to /Papers</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Feature 4: Easy Export (Smaller) */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-slate-50 p-8 hover:bg-slate-100 transition-colors">
            <div className="mb-6">
               <h3 className="text-2xl font-semibold text-gray-900 mb-2">One-Click Export</h3>
               <p className="text-gray-500 text-sm">Generate formatted citations instantly.</p>
            </div>
             {/* Mockup */}
             <div className="relative rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
               <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                  <span className="text-sm font-medium text-gray-500">Format</span>
                  <span className="text-sm font-bold text-indigo-600">BibTeX</span>
               </div>
               <div className="bg-slate-50 rounded-lg p-3 font-mono text-xs text-slate-600 mb-4 overflow-hidden">
                  @article{vaswani2017,<br/>
                  title={Attention is All You Need},<br/>
                  author={Vaswani, Ashish},<br/>
                  year={2017}
               </div>
               <button className="w-full bg-indigo-600 text-white rounded-lg py-2 text-sm font-medium flex items-center justify-center gap-2">
                  <Download size={16} />
                  Copy to Clipboard
               </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

function SendIcon() {
   return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <line x1="22" y1="2" x2="11" y2="13"></line>
         <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
   )
}

