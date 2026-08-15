import Link from 'next/link';

interface SectionPreviewProps {
  icon: string;
  tagline: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  accentColor?: string;
}

export default function SectionPreview({
  icon,
  tagline,
  title,
  description,
  href,
  ctaLabel = 'Explore →',
}: SectionPreviewProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-8 flex flex-col hover:shadow-xl hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1">
      <div className="text-4xl mb-5">{icon}</div>
      <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-[0.2em] mb-2">
        {tagline}
      </p>
      <h3 className="font-serif text-2xl font-bold text-[#1A2744] mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-[#4A5568] text-sm leading-relaxed flex-1 mb-7">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-semibold text-[#D4AF37] group-hover:gap-2 gap-1 transition-all duration-200"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
