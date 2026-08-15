import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gems of Love | A Gift of Faith & Truth',
  description: 'Curated podcasts, sermons, articles and books on love, marriage, friendship and the Christian home.',
};

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  label: string;
  comingSoon?: boolean;
}

function ResourceCard({ title, description, href, label, comingSoon = false }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-300">
      <h4 className="font-serif text-lg font-semibold text-[#1A2744] mb-2">{title}</h4>
      <p className="text-[#4A5568] text-sm leading-relaxed mb-5">{description}</p>
      {comingSoon ? (
        <span className="inline-flex items-center gap-1.5 text-xs text-[#A0AEC0] border border-[#E2E8F0] rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          Coming Soon
        </span>
      ) : (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#D4AF37] font-semibold hover:underline"
        >
          {label} →
        </Link>
      )}
    </div>
  );
}

const listenResources: ResourceCardProps[] = [
  {
    title: "Jonathan's Curated Playlist",
    description: 'A hand-picked Spotify playlist of sermons, talks and audio resources on love, marriage and the Christian life.',
    href: '#',
    label: 'Open Playlist',
    comingSoon: true,
  },
];

const watchResources: ResourceCardProps[] = [
  {
    title: 'Marriage & Family — Recommended Talks',
    description: 'Sermons, lectures and conversations from trusted voices on biblical marriage, covenant love and family.',
    href: '#',
    label: 'Watch Now',
    comingSoon: true,
  },
];

const readResources: ResourceCardProps[] = [
  {
    title: 'Articles & Essays on Christian Marriage',
    description: 'Thoughtful writing on love, faithfulness, friendship in marriage and the theology of the Christian home.',
    href: '#',
    label: 'Read Now',
    comingSoon: true,
  },
  {
    title: 'Gospel Lens — Marriage & Relationships',
    description: 'Essays and reflections on marriage and relationships through the lens of the Gospel.',
    href: 'https://gospellens.site',
    label: 'Visit Gospel Lens',
  },
];

export default function GemsPage() {
  return (
    <main className="pt-16">
      {/* Hero header */}
      <div className="bg-gradient-to-br from-[#0A1428] via-[#1A2744] to-[#1E3055] py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37] opacity-[0.05] blur-3xl rounded-full pointer-events-none" />
        <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-[0.25em] mb-4">Section 2</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">Gems of Love</h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#D4AF37]/30" />
          <span className="text-[#D4AF37] text-sm">✦</span>
          <div className="h-px w-12 bg-[#D4AF37]/30" />
        </div>
        <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
          Seeking to learn, grow and flourish as you pursue a biblical marriage?<br />
          Here are resources that have helped us think more deeply about love, marriage, friendship, faithfulness and the Christian home.
        </p>
      </div>

      {/* Content */}
      <div className="bg-[#FAF9F6] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Listen & Learn */}
          <div>
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#E2E8F0]">
              <span className="text-4xl">🎧</span>
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#1A2744]">Listen &amp; Learn</h2>
                <p className="text-[#4A5568] text-sm">Marriage podcasts and audio resources</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {listenResources.map((r) => <ResourceCard key={r.title} {...r} />)}
            </div>
          </div>

          {/* Watch & Grow */}
          <div>
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#E2E8F0]">
              <span className="text-4xl">📺</span>
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#1A2744]">Watch &amp; Grow</h2>
                <p className="text-[#4A5568] text-sm">YouTube sermons, talks and lectures</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {watchResources.map((r) => <ResourceCard key={r.title} {...r} />)}
            </div>
          </div>

          {/* Read & Reflect */}
          <div>
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#E2E8F0]">
              <span className="text-4xl">📖</span>
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#1A2744]">Read &amp; Reflect</h2>
                <p className="text-[#4A5568] text-sm">Articles, books and essays on Christian marriage</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {readResources.map((r) => <ResourceCard key={r.title} {...r} />)}
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#FAF9F6] pb-16 text-center">
        <Link href="/" className="text-sm text-[#1A2744]/50 hover:text-[#D4AF37] transition-colors">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
