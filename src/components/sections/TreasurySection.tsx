export default function TreasurySection() {
  return (
    <section className="relative bg-theme-900 py-32 px-4 border-t border-accent-500/10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-theme-700 rounded-full blur-[150px] opacity-30 pointer-events-none mix-blend-screen" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-[10px] font-semibold text-accent-500 uppercase tracking-[0.3em] mb-4">
          Section 6
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-bg-cream mb-6 drop-shadow-sm">
          The Treasury
        </h2>
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-500/30" />
          <span className="text-accent-500 text-sm">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-500/30" />
        </div>
        <p className="text-bg-sand/70 max-w-xl mx-auto mb-16 leading-relaxed text-lg font-serif italic">
          Resources for the journey of faith — wherever you are on the road.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <a
            href="https://gospellens.site"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-theme-800/40 backdrop-blur-sm border border-accent-500/20 rounded-3xl p-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10 hover:border-accent-500/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="text-4xl mb-6 group-hover:scale-110 transform transition-transform duration-500">🔭</div>
            <h3 className="font-serif text-2xl font-bold text-bg-cream mb-3 group-hover:text-accent-400 transition-colors">
              Gospel Lens
            </h3>
            <p className="text-bg-sand/60 text-sm leading-relaxed mb-8">
              Theological clarity and biblical insight for everyday life. A resource hub for those who want to see all of life through the lens of the Gospel.
            </p>
            <span className="inline-block text-accent-500 text-sm font-bold tracking-wide group-hover:translate-x-2 transition-transform duration-300">
              gospellens.site →
            </span>
          </a>

          <a
            href="https://substack.com/@gospellens"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-theme-800/40 backdrop-blur-sm border border-accent-500/20 rounded-3xl p-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10 hover:border-accent-500/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="text-4xl mb-6 group-hover:scale-110 transform transition-transform duration-500">📬</div>
            <h3 className="font-serif text-2xl font-bold text-bg-cream mb-3 group-hover:text-accent-400 transition-colors">
              Gospel Lens on Substack
            </h3>
            <p className="text-bg-sand/60 text-sm leading-relaxed mb-8">
              Subscribe for essays, reflections and conversations on faith, culture and Scripture — delivered straight to your inbox.
            </p>
            <span className="inline-block text-accent-500 text-sm font-bold tracking-wide group-hover:translate-x-2 transition-transform duration-300">
              substack.com/@gospellens →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
