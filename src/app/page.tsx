import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import SectionPreview from '@/components/SectionPreview';
import WordFromYouSection from '@/components/sections/WordFromYouSection';
import TreasurySection from '@/components/sections/TreasurySection';

export const metadata: Metadata = {
  title: 'A Gift of Faith & Truth | Jonathan & Charisma',
  description: 'A curated collection of Christian resources, reflections and invitations — a wedding gift from Jonathan Fredrick & Charisma Standley.',
  openGraph: {
    title: 'A Gift of Faith & Truth | Jonathan & Charisma',
    description: 'A curated collection of Christian resources, reflections and invitations — a wedding gift from Jonathan Fredrick & Charisma Standley.',
    url: 'https://scedrick.vercel.app/',
    siteName: 'A Gift of Faith & Truth',
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
      <section className="bg-[#FAF9F6] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-[0.25em] mb-3">
              Explore the Gift
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A2744] mb-4">
              There is More Inside
            </h2>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-[#D4AF37]/30" />
              <span className="text-[#D4AF37] text-sm">✦</span>
              <div className="h-px w-12 bg-[#D4AF37]/30" />
            </div>
            <p className="text-[#4A5568] max-w-lg mx-auto leading-relaxed">
              We&apos;ve put together a collection of resources just for you. Take your time — there&apos;s no rush.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
