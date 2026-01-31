import { Container } from '@/components/ui/container';
import { Layers } from 'lucide-react';

const stats = [
  { value: '98%', label: 'Uptime guarantee' },
  { value: '30min', label: 'Average time saved daily' },
  { value: '2k+', label: 'Active research teams' },
  { value: '24/7', label: 'Support for critical issues' },
];

export function Integrations() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-8 mb-24 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4">
              <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Integration Callout */}
        <div className="relative rounded-3xl bg-indigo-900 px-6 py-20 md:px-12 md:py-24 text-center overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Connect with the tools you love
            </h2>
            <p className="text-indigo-200 text-lg mb-10">
              DeepRes integrates seamlessly with popular tools like Google Drive, Slack, GitHub, and Mendeley.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
               {['Google Drive', 'Mendeley', 'Zotero', 'Slack', 'GitHub', 'Notion'].map((tool) => (
                 <div key={tool} className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="font-medium">{tool}</span>
                 </div>
               ))}
            </div>
          </div>
          
          {/* Background Gradient */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-500 blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-500 blur-3xl opacity-20" />
        </div>
      </Container>
    </section>
  );
}
