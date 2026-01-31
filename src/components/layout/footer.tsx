import { Container } from '@/components/ui/container';
import { Layers, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Layers size={20} />
              </div>
              <span className="text-xl font-bold">DeepRes</span>
            </Link>
            <p className="mb-6 max-w-xs text-slate-400">
              The all-in-one workspace for small research teams. Organize files, notes, sheets, and datasets in one place.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#" className="hover:text-white">Features</Link></li>
              <li><Link href="#" className="hover:text-white">Integrations</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#" className="hover:text-white">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white">API</Link></li>
              <li><Link href="#" className="hover:text-white">Community</Link></li>
              <li><Link href="#" className="hover:text-white">Research Tips</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#" className="hover:text-white">About</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© 2026 DeepRes. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
