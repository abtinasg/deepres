import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-32 bg-white">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 mb-6">
              <Star size={14} className="fill-indigo-600" />
              <span>Unlock your research potential</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 lg:text-6xl">
              Manage your <br />
              <span className="text-indigo-600">research</span> in <br />
              one place
            </h1>
            
            <p className="mb-8 text-lg text-gray-600 lg:text-xl max-w-lg">
              Empower your research journey. Take charge of your files, notes, and datasets. 
              Simplify collaboration for small research teams.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full gap-2">
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-900">1,000+ Researchers</p>
                <div className="flex text-yellow-500">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                  <span className="ml-1 text-gray-500 font-medium">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual (Mockup) */}
          <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
            <div className="relative z-10 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-gray-900/5">
              <div className="rounded-xl bg-slate-50 p-6">
                {/* Mockup Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Project Alpha</h3>
                    <p className="text-sm text-gray-500">Updated 2m ago</p>
                  </div>
                  <div className="flex gap-2">
                     <span className="h-2 w-2 rounded-full bg-red-400" />
                     <span className="h-2 w-2 rounded-full bg-amber-400" />
                     <span className="h-2 w-2 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Mockup Content - Charts/Stats */}
                <div className="grid gap-4 sm:grid-cols-2">
                   <div className="rounded-lg bg-white p-4 shadow-sm">
                      <p className="text-sm font-medium text-gray-500 mb-1">Total Citations</p>
                      <p className="text-2xl font-bold text-indigo-600">1,248</p>
                      <div className="mt-4 flex items-end gap-1 h-16">
                         {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                           <div key={i} className="flex-1 rounded-t bg-indigo-100" style={{ height: `${h}%` }} />
                         ))}
                      </div>
                   </div>
                   <div className="rounded-lg bg-white p-4 shadow-sm">
                      <p className="text-sm font-medium text-gray-500 mb-1">Active Collaborators</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                      <div className="mt-4 flex -space-x-2">
                        {[1,2,3].map(i => <div key={i} className="h-8 w-8 rounded-full border border-white bg-slate-200" />)}
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-slate-100 text-xs font-medium text-gray-500">+9</div>
                      </div>
                   </div>
                </div>

                {/* Mockup List */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold">W</div>
                      <div>
                         <p className="text-sm font-medium text-gray-900">Literature Review.docx</p>
                         <p className="text-xs text-gray-500">Edited by Sarah</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Done</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded bg-green-100 flex items-center justify-center text-green-600 font-bold">X</div>
                      <div>
                         <p className="text-sm font-medium text-gray-900">Data Analysis.xlsx</p>
                         <p className="text-xs text-gray-500">Edited by Mike</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">In Progress</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-indigo-50 blur-3xl mix-blend-multiply opacity-70" />
            <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-blue-50 blur-3xl mix-blend-multiply opacity-70" />
          </div>
        </div>
      </Container>
    </section>
  );
}
