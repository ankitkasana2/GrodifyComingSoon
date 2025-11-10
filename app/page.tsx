"use client"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background with soft gradient and glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-700/20 rounded-full blur-3xl -z-10" />

      {/* Main Content Container */}
      <div className="max-w-2xl w-full flex flex-col items-center justify-center flex-1 text-center space-y-8">
        {/* Logo */}
        <div className="mb-4 animate-fade-in">
          <img src="/grodify-logo.png" alt="Grodify Logo" className="h-24 w-auto mx-auto object-contain" />
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight">
            We're working on something amazing.
          </h1>
          <p className="text-2xl md:text-3xl font-light text-slate-300 text-balance">
            Grodify 2.0 returns this December.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        {/* Contact Information */}
        <div className="space-y-6 pt-4">
          <p className="text-slate-300 font-light text-lg">
            For inquiries or flyer orders, contact us on WhatsApp or email.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* WhatsApp */}
            <a
              href="https://wa.me/my number my WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-slate-700 text-slate-200 hover:border-red-500 hover:text-white hover:bg-red-500/5 transition-all duration-300 group"
            >
              <span className="text-xl">📞</span>
              <span className="font-medium">WhatsApp</span>
            </a>

            {/* Email */}
            <a
              href="mailto:admin@grodify.com"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-slate-700 text-slate-200 hover:border-red-500 hover:text-white hover:bg-red-500/5 transition-all duration-300 group"
            >
              <span className="text-xl">✉️</span>
              <span className="font-medium">admin@grodify.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 border-t border-slate-800/50 mt-12">
        <p className="text-slate-500 text-sm font-light">Grodify © 2025 — All rights reserved.</p>
      </footer>

      {/* Subtle animation for fade-in */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
