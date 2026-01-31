import { Container } from '@/components/ui/container';
import { FileText, Database, Table, Share2, Send, Shield, Zap, RefreshCw } from 'lucide-react';

const features = [
  {
    title: 'Smart Documentation',
    description: 'Create and organize team notes with ease. Collaborative editing in real-time.',
    icon: FileText,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Lightweight Sheets',
    description: 'Simple spreadsheets designed for research data. No complex formulas needed.',
    icon: Table,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Dataset Management',
    description: 'Store and version your datasets securely. Preview CSVs and JSONs instantly.',
    icon: Database,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Quick Sharing',
    description: 'Share files via a simple link or QR code. Control access permissions effortlessly.',
    icon: Share2,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Telegram Import',
    description: 'Forward files directly from Telegram to your workspace. Never lose a paper again.',
    icon: Send,
    color: 'bg-sky-100 text-sky-600',
  },
  {
    title: 'Secure & Private',
    description: 'Your research data is encrypted and safe. You own your data completely.',
    icon: Shield,
    color: 'bg-slate-100 text-slate-600',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1 text-sm font-medium text-indigo-600 mb-6 shadow-sm">
            <Zap size={14} className="fill-indigo-600" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Everything your research team needs
          </h2>
          <p className="text-lg text-gray-600">
            Stop switching between ten different apps. DeepRes brings your research workflow into one cohesive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-12 w-12 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
