import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import SectionPreview from '@/components/SectionPreview';
import WordFromYouSection from '@/components/sections/WordFromYouSection';
import TreasurySection from '@/components/sections/TreasurySection';

export const metadata: Metadata = {
  title: 'Love and Grace | Jonathan & Charisma',
  description: 'A curated collection of Christian resources, reflections and invitations — a wedding gift from Jonathan Fredrick & Charisma Standley.',
  openGraph: {
    title: 'Love and Grace | Jonathan & Charisma',
    description: 'A curated collection of Christian resources, reflections and invitations — a wedding gift from Jonathan Fredrick & Charisma Standley.',
    url: 'https://scedrick.vercel.app/',
    siteName: 'Love and Grace',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section Previews — Gems, Apologetics, Faith */}
      <section className="relative bg-theme-900 py-32 px-4 overflow-hidden">
        {/* Background glow for sections */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-theme-700 rounded-full blur-[150px] opacity-20 mix-blend-screen pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] md:text-xs font-semibold text-accent-500 uppercase tracking-[0.3em] mb-4">
              Explore the Gift
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-bg-cream mb-6 drop-shadow-sm">
              There is More Inside
            </h2>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-500/30" />
              <span className="text-accent-500 text-sm">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-500/30" />
            </div>
            <p className="text-bg-sand/70 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
              We&apos;ve put together a collection of resources just for you. Take your time — there&apos;s no rush.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionPreview
              icon="💎"
              tagline="Grow together"
              title="Gems of Love"
              description="Curated podcasts, sermons, articles and books on love, marriage, friendship, faithfulness and the Christian home."
              href="/gems"
            />
            <SectionPreview
              icon="🔍"
              tagline="Questions welcome"
              title="Questioning Christianity?"
              description="Atheist, skeptic, agnostic or simply curious? Bring your biggest questions. Christianity does not ask you to abandon your mind."
              href="/apologetics"
            />
            <SectionPreview
              icon="📖"
              tagline="What does the Bible say?"
              title="Many-Faced Faith"
              description="Christianity is often represented in contradictory ways. Here's what biblical Christianity actually teaches about the questions that divide us."
              href="/faith"
            />
          </div>
        </div>
      </section>

      {/* Section 5 — A Word From You */}
      <WordFromYouSection />

      {/* Section 6 — The Treasury */}
      <TreasurySection />
    </main>
  );
}
