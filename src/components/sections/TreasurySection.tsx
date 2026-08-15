import Link from 'next/link';

export default function TreasurySection() {
  return (
    <section className="bg-[#1A2744] py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-[0.25em] mb-3">
          Section 6
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          The Treasury
        </h2>
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-12 bg-[#D4AF37]/30" />
          <span className="text-[#D4AF37] text-sm">✦</span>
          <div className="h-px w-12 bg-[#D4AF37]/30" />
        </div>
        <p className="text-white/50 max-w-xl mx-auto mb-14 leading-relaxed">
          Resources for the journey of faith — wherever you are on the road.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          <Link
            href="https://gospellens.site"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/[0.05] border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/[0.09] hover:border-[#D4AF37]/50 transition-all duration-300"
          >
            <div className="text-4xl mb-5">🔭</div>
            <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
              Gospel Lens
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Theological clarity and biblical insight for everyday life. A resource hub for those who want to see all of life through the lens of the Gospel.
            </p>
            <span className="text-[#D4AF37] text-sm font-medium">gospellens.site →</span>
          </Link>

          <Link
            href="https://substack.com/@gospellens"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/[0.05] border border-[#D4AF37]/20 rounded-2xl p-8 hover:bg-white/[0.09] hover:border-[#D4AF37]/50 transition-all duration-300"
          >
            <div className="text-4xl mb-5">📬</div>
            <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
              Gospel Lens on Substack
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Subscribe for essays, reflections and conversations on faith, culture and Scripture — delivered straight to your inbox.
            </p>
            <span className="text-[#D4AF37] text-sm font-medium">substack.com/@gospellens →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
