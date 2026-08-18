'use client';

import Link from 'next/link';
import Image from 'next/image';

export interface ResourceItem {
  title: string;
  description: string;
  href: string;
  thumbnail?: string;
  videoId?: string;
  type: 'video' | 'article' | 'podcast' | 'playlist';
  source?: string;
}

function ResourceCard({ item }: { item: ResourceItem }) {
  const thumbSrc = item.videoId
    ? `https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`
    : item.thumbnail || null;

  const typeColors: Record<string, string> = {
    video: 'bg-red-900/60 text-red-300',
    article: 'bg-accent-900/60 text-accent-300',
    podcast: 'bg-purple-900/60 text-purple-300',
    playlist: 'bg-green-900/60 text-green-300',
  };

  const typeLabels: Record<string, string> = {
    video: 'Video',
    article: 'Article',
    podcast: 'Podcast',
    playlist: 'Playlist',
  };

  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-none w-64 md:w-72 relative bg-theme-800/40 backdrop-blur-sm border border-accent-500/15 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-500/15 hover:border-accent-500/40 transition-all duration-400 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-theme-900/60 flex-shrink-0 overflow-hidden">
        {thumbSrc ? (
          <Image
            src={thumbSrc}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-theme-800 to-theme-900">
            <svg className="w-12 h-12 text-accent-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-theme-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-accent-500/90 flex items-center justify-center shadow-lg">
            {item.type === 'video' || item.type === 'playlist' ? (
              <svg className="w-5 h-5 text-theme-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-theme-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          </div>
        </div>
        {/* Type badge */}
        <span className={`absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full backdrop-blur-sm ${typeColors[item.type]}`}>
          {typeLabels[item.type]}
        </span>
      </div>

      {/* Text Content */}
      <div className="p-4 flex flex-col flex-1">
        {item.source && (
          <p className="text-accent-500/70 text-[10px] font-semibold uppercase tracking-widest mb-1">{item.source}</p>
        )}
        <h4 className="font-serif text-bg-cream font-semibold text-sm leading-snug mb-2 group-hover:text-accent-300 transition-colors line-clamp-2">
          {item.title}
        </h4>
        <p className="text-bg-sand/60 text-xs leading-relaxed line-clamp-3 flex-1">
          {item.description}
        </p>
      </div>
    </Link>
  );
}

interface ResourceCarouselProps {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  items: ResourceItem[];
}

export function ResourceCarousel({ title, icon, subtitle, items }: ResourceCarouselProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6 pb-5 border-b border-accent-500/20">
        <div className="text-3xl flex-shrink-0">{icon}</div>
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-bg-cream">{title}</h2>
          {subtitle && <p className="text-bg-sand/50 text-xs uppercase tracking-widest font-medium mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
        {items.map((item, i) => (
          <div key={i} className="snap-start flex-none">
            <ResourceCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
