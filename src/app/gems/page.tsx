import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gems of Love | Love and Grace',
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
    <div className="bg-theme-800/30 backdrop-blur-sm border border-accent-500/20 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300">
      <h4 className="font-serif text-xl font-semibold text-bg-cream mb-3">{title}</h4>
      <p className="text-bg-sand/70 text-sm leading-relaxed mb-6">{description}</p>
      {comingSoon ? (
        <span className="inline-flex items-center gap-2 text-xs font-medium text-accent-500/60 border border-accent-500/20 rounded-full px-4 py-1.5 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
          Coming Soon
        </span>
      ) : (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm text-accent-400 font-bold uppercase tracking-wide hover:text-accent-300 hover:translate-x-1 transition-all"
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
    <main className="pt-24 relative overflow-hidden">
      {/* Global Background Glow */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-theme-700 rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen" />

      {/* Hero header */}
      <div className="py-24 px-4 text-center relative z-10">
        <p className="text-[10px] md:text-xs font-semibold text-accent-500 uppercase tracking-[0.3em] mb-4">Section 2</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-bg-cream mb-6 drop-shadow-sm">Gems of Love</h1>
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-500/30" />
          <span className="text-accent-500 text-sm">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-500/30" />
        </div>
        <p className="text-bg-sand/80 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-serif italic mb-6">
          Seeking to learn, grow and flourish as you pursue a biblical marriage?
        </p>
        <p className="text-bg-sand/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Here are resources that have helped us think more deeply about love, marriage, friendship, faithfulness and the Christian home.
        </p>
      </div>

      {/* Content */}
      <div className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-24">

          {/* Listen & Learn */}
          <div>
            <div className="flex items-center gap-5 mb-10 pb-6 border-b border-accent-500/20">
              <span className="text-4xl md:text-5xl drop-shadow-lg">🎧</span>
              <div>
                <h2 className="font-serif text-3xl font-bold text-bg-cream mb-1">Listen &amp; Learn</h2>
                <p className="text-bg-sand/60 text-sm font-medium tracking-wide uppercase">Marriage podcasts &amp; audio</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listenResources.map((r) => <ResourceCard key={r.title} {...r} />)}
            </div>
          </div>

          {/* Watch & Grow */}
          <div>
            <div className="flex items-center gap-5 mb-10 pb-6 border-b border-accent-500/20">
              <span className="text-4xl md:text-5xl drop-shadow-lg">📺</span>
              <div>
                <h2 className="font-serif text-3xl font-bold text-bg-cream mb-1">Watch &amp; Grow</h2>
                <p className="text-bg-sand/60 text-sm font-medium tracking-wide uppercase">Sermons, talks &amp; lectures</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {watchResources.map((r) => <ResourceCard key={r.title} {...r} />)}
            </div>
          </div>

          {/* Read & Reflect */}
          <div>
            <div className="flex items-center gap-5 mb-10 pb-6 border-b border-accent-500/20">
              <span className="text-4xl md:text-5xl drop-shadow-lg">📖</span>
              <div>
                <h2 className="font-serif text-3xl font-bold text-bg-cream mb-1">Read &amp; Reflect</h2>
                <p className="text-bg-sand/60 text-sm font-medium tracking-wide uppercase">Articles, books &amp; essays</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {readResources.map((r) => <ResourceCard key={r.title} {...r} />)}
            </div>
          </div>

        </div>
      </div>

      <div className="pb-24 pt-8 text-center relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-bg-sand/50 hover:text-accent-400 transition-colors">
          <span className="text-lg">←</span> Back to Home
        </Link>
      </div>
    </main>
  );
}
