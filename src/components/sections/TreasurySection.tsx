import Image from 'next/image';
import Link from 'next/link';

export default function TreasurySection() {
  return (
    <section className="relative bg-theme-900 py-32 px-4 border-t border-accent-500/10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-theme-700 rounded-full blur-[150px] opacity-30 pointer-events-none mix-blend-screen" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-8">
          {/* Gospel Lens Site */}
          <a
            href="https://gospellens.site"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-theme-800/40 backdrop-blur-sm border border-accent-500/20 rounded-3xl p-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10 hover:border-accent-500/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="mb-6 flex items-center gap-4">
              <Image src="/gospel-lens-logo.png" alt="Gospel Lens" width={52} height={52} className="object-contain flex-shrink-0" />
            </div>
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

          {/* Gospel Lens Substack */}
          <a
            href="https://substack.com/@gospellens"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-theme-800/40 backdrop-blur-sm border border-accent-500/20 rounded-3xl p-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10 hover:border-accent-500/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="mb-6 flex items-center gap-4">
              <Image src="/substack-logo.png" alt="Substack" width={44} height={44} className="object-contain flex-shrink-0" />
            </div>
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

        {/* Playlists Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Saved and In Love Playlist */}
          <a
            href="https://open.spotify.com/search/saved%20and%20in%20love"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-theme-800/40 backdrop-blur-sm border border-accent-500/20 rounded-3xl p-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10 hover:border-accent-500/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="mb-6">
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#1DB954]" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-bg-cream mb-3 group-hover:text-accent-400 transition-colors">
              Saved and In Love
            </h3>
            <p className="text-bg-sand/60 text-sm leading-relaxed mb-8">
              A worship playlist for those who are saved by grace and walking in love — music for the journey of faith and marriage.
            </p>
            <span className="inline-block text-accent-500 text-sm font-bold tracking-wide group-hover:translate-x-2 transition-transform duration-300">
              Open on Spotify →
            </span>
          </a>

          {/* The 12-2 Love Story Playlist */}
          <a
            href="https://open.spotify.com/playlist/2rCR8ORIK1Od4OLjP70y5F"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-theme-800/40 backdrop-blur-sm border border-accent-500/20 rounded-3xl p-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10 hover:border-accent-500/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="mb-6">
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#1DB954]" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-bg-cream mb-3 group-hover:text-accent-400 transition-colors">
              The 12-2 Love Story
            </h3>
            <p className="text-bg-sand/60 text-sm leading-relaxed mb-8">
              Jonathan &amp; Charisma's personal playlist — the soundtrack to their love story.
            </p>
            <span className="inline-block text-accent-500 text-sm font-bold tracking-wide group-hover:translate-x-2 transition-transform duration-300">
              Open on Spotify →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
