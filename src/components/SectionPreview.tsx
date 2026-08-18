import Link from 'next/link';

interface SectionPreviewProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  tagline: string;
}

export default function SectionPreview({
  title,
  description,
  href,
  icon,
  tagline,
}: SectionPreviewProps) {
  return (
    <Link
      href={href}
      className="group relative block h-full bg-theme-900/50 backdrop-blur-sm border border-accent-500/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-500/10 hover:bg-theme-900/80 hover:border-accent-500/30 overflow-hidden"
    >
      {/* Hover gradient effect inside card */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
        {icon}
      </div>
      <p className="text-[10px] font-semibold text-accent-500 uppercase tracking-[0.2em] mb-2 drop-shadow-sm">
        {tagline}
      </p>
      <h3 className="font-serif text-2xl font-bold text-bg-cream mb-4 group-hover:text-accent-400 transition-colors">
        {title}
      </h3>
      <p className="text-bg-sand/70 text-sm leading-relaxed mb-6 group-hover:text-bg-sand/90 transition-colors">
        {description}
      </p>
      <div className="inline-flex items-center text-sm font-semibold text-accent-400 group-hover:text-accent-300 transition-colors">
        Explore <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}
