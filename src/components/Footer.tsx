export default function Footer() {
  return (
    <footer className="bg-theme-900 border-t border-accent-500/20 py-16 px-4 relative overflow-hidden">
      {/* Decorative subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-accent-500 rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-3xl font-bold text-bg-cream mb-2 tracking-wide drop-shadow-sm">
          Charisma &amp; Jonathan
        </h2>
        <p className="font-serif text-accent-400 italic mb-8">
          August 22nd, 2026
        </p>

        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-500/30" />
          <span className="text-accent-500 text-sm">✦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-500/30" />
        </div>

        <p className="text-bg-sand/60 text-sm">
          &copy; {new Date().getFullYear()} Charisma and Jonathan Fredrick. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
