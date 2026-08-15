import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F1B3D] border-t border-[#D4AF37]/20 py-14 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-[#D4AF37] text-2xl mb-5">✝</div>
        <p className="font-serif text-white/90 text-xl font-semibold mb-1">
          Jonathan Fredrick &amp; Charisma Standley
        </p>
        <p className="text-[#D4AF37]/60 text-sm tracking-widest uppercase mb-8">August 22nd</p>

        <div className="flex justify-center gap-8 text-sm text-white/40 mb-8">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <Link href="/gems" className="hover:text-[#D4AF37] transition-colors">Gems of Love</Link>
          <Link href="/apologetics" className="hover:text-[#D4AF37] transition-colors">Apologetics</Link>
          <Link href="/faith" className="hover:text-[#D4AF37] transition-colors">Faith</Link>
        </div>

        <div className="flex justify-center gap-6 text-sm text-white/30 mb-10">
          <Link href="https://gospellens.site" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
            Gospel Lens ↗
          </Link>
          <Link href="https://substack.com/@gospellens" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
            Substack ↗
          </Link>
        </div>

        <p className="text-white/20 text-xs">A gift of faith and truth, with love.</p>
      </div>
    </footer>
  );
}
