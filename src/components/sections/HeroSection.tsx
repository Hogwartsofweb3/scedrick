export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0A1428] via-[#1A2744] to-[#1E3055] flex flex-col items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-16 left-0 w-72 h-72 rounded-full bg-[#D4AF37] opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-0 w-96 h-96 rounded-full bg-[#D4AF37] opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-3xl w-full text-center z-10 animate-fade-in-up">

        {/* Date badge */}
        <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 bg-[#D4AF37]/10 rounded-full px-6 py-2 mb-10">
          <span className="text-[#D4AF37] text-xs">✦</span>
          <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase">
            August 22nd
          </span>
          <span className="text-[#D4AF37] text-xs">✦</span>
        </div>

        {/* Main title */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-3">
          Always and Forever
        </h1>
        <p className="font-serif text-xl text-[#D4AF37] italic mb-10">
          A Beautiful Beginning
        </p>

        {/* Gold divider with cross */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
          <span className="text-[#D4AF37] text-xl">✝</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
        </div>

        {/* Photo placeholder */}
        <div className="flex justify-center mb-10">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-[3px] border-[#D4AF37]/60 shadow-2xl shadow-[#D4AF37]/10 overflow-hidden bg-[#243466] flex items-center justify-center">
            <div className="text-center">
              <p className="font-serif text-[#D4AF37] text-3xl font-bold">J &amp; C</p>
              <p className="text-white/30 text-xs mt-1">Your Photo Here</p>
            </div>
          </div>
        </div>

        {/* Names */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-semibold">
            Jonathan Fredrick
          </h2>
          <p className="text-[#D4AF37] text-2xl my-2 font-serif italic">&amp;</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-semibold">
            Charisma Standley
          </h2>
        </div>

        {/* Intro card */}
        <div className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12 text-left">
          <p className="text-white/75 leading-relaxed text-center italic font-serif text-lg">
            We are so grateful you are here. This small corner of the internet is our gift to you — a curated collection of resources, reflections, and invitations that have shaped how we think about love, faith, and marriage. We hope something here speaks to you.
          </p>
        </div>

        {/* Piper Poem */}
        <div className="text-left border-l-2 border-[#D4AF37]/60 pl-7">
          <p className="text-[#D4AF37] text-[10px] font-semibold uppercase tracking-[0.25em] mb-4">
            The Poem of All Love Poems
          </p>
          <blockquote className="font-serif text-white/80 italic leading-relaxed text-lg md:text-xl space-y-2">
            <p>&ldquo;If I speak in the tongues of men and of angels,</p>
            <p>but have not love,</p>
            <p>I am a noisy gong or a clanging cymbal.</p>
            <p>And if I have prophetic powers, and understand all mysteries</p>
            <p>and all knowledge,</p>
            <p>and if I have all faith, so as to remove mountains,</p>
            <p>but have not love, I am nothing.&rdquo;</p>
          </blockquote>
          <p className="text-[#D4AF37]/80 text-sm mt-5">— 1 Corinthians 13 &nbsp;·&nbsp; <span className="italic">John Piper</span></p>
        </div>

      </div>
    </section>
  );
}
