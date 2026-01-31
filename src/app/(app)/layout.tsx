export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white px-4 py-3">
        <div className="mx-auto max-w-7xl">
          <span className="text-xl font-semibold">Research Workspace</span>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl">{children}</main>
    </div>
  );
}
