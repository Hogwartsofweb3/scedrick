import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ResourceCarousel, type ResourceItem } from '@/components/ResourceCarousel';

export const metadata: Metadata = {
  title: 'Gems of Love | Love and Grace',
  description: 'Curated podcasts, sermons, articles and books on love, marriage, friendship and the Christian home.',
};

const listenResources: ResourceItem[] = [
  {
    title: "The 12-2 Love Story — Jonathan & Charisma's Playlist",
    description: "A hand-picked Spotify playlist documenting the love story of Jonathan & Charisma. Music, memories and the soundtrack of their journey.",
    href: 'https://open.spotify.com/playlist/2rCR8ORIK1Od4OLjP70y5F',
    type: 'playlist',
    source: 'Spotify',
  },
];

const watchResources: ResourceItem[] = [
  {
    title: "Marriage in Gospel Focus",
    description: "A Gospel Coalition discussion on viewing marriage through the lens of the gospel.",
    href: 'https://youtu.be/G8hmo0Ji-uo',
    videoId: 'G8hmo0Ji-uo',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Tim & Kathy Keller | The Secret of a Great Marriage",
    description: "Tim and Kathy Keller discuss the biblical foundation and wisdom for a lasting marriage.",
    href: 'https://youtu.be/VRWS44NmOEo',
    videoId: 'VRWS44NmOEo',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Staying Married Is Not About Staying In Love | John Piper",
    description: "John Piper explains how covenant-keeping, not fluctuating emotion, is the heart of marriage.",
    href: 'https://youtu.be/k0fOMT92qBk',
    videoId: 'k0fOMT92qBk',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Marriage Is Meant For Making Disciples | John Piper",
    description: "John Piper explores God's design for marriage in raising disciples of Jesus Christ.",
    href: 'https://youtu.be/IfJnpavzK6U',
    videoId: 'IfJnpavzK6U',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Discipline With The Rod | Ty Brogdon",
    description: "Ty Brogdon discusses biblical principles of parenting and godly discipline in the family.",
    href: 'https://youtu.be/JOGg_bgs9BE',
    videoId: 'JOGg_bgs9BE',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Gems of Love: Biblical Marriage Teaching",
    description: "Biblical teaching and reflection on love and marriage.",
    href: 'https://youtu.be/Bbt6LFfM8ew',
    videoId: 'Bbt6LFfM8ew',
    type: 'video',
    source: 'YouTube',
  },
];

const readResources: ResourceItem[] = [
  {
    title: 'Treasure Your Marriage | Tim Challies',
    description: 'For a godly man to run his life race well, he must make it a priority to treasure his marriage.',
    href: 'https://www.challies.com/run-to-win/treasure-your-marriage/',
    type: 'article',
    source: 'Challies.com',
    thumbnail: 'https://www.challies.com/media/2017/08/run-to-win-4.png',
  },
  {
    title: 'When Love Wanes, the Marriage Covenant Remains',
    description: 'Pastor John Piper discusses how the marriage covenant remains steadfast even when feelings wane.',
    href: 'https://www.desiringgod.org/interviews/when-love-wanes-the-marriage-covenant-remains',
    type: 'article',
    source: 'Desiring God',
  },
  {
    title: 'To Men Who Want to Marry: How to Prepare to Lead Well',
    description: 'Preparation for marriage should begin long before the wedding day by learning to lead and serve.',
    href: 'https://www.desiringgod.org/articles/to-men-who-want-to-marry',
    type: 'article',
    source: 'Desiring God',
  },
  {
    title: 'Elements of a Christ-Centered Marriage',
    description: 'Marriage is hard work demanding 168 hours each week, but it is filled with joy centered in Christ.',
    href: 'https://founders.org/articles/elements-of-a-christ-centered-marriage/',
    type: 'article',
    source: 'Founders Ministries',
    thumbnail: 'https://founders.org/wp-content/uploads/2016/09/marriage.jpg',
  },
  {
    title: 'Marriage, a Calling',
    description: 'An editorial on the lifelong, unbreakable bond of marriage established by God as a calling.',
    href: 'https://www.prca.org/resources/articles/marriage-a-calling',
    type: 'article',
    source: 'PRCA',
  },
  {
    title: 'Go Get Her: To Men Delaying Marriage',
    description: 'Encouragement for young Christian men to take initiative and pursue marriage without delay.',
    href: 'https://www.desiringgod.org/articles/go-get-her',
    type: 'article',
    source: 'Desiring God',
  },
];

export default function GemsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src="/hero-image.jpg"
          alt="Gems of Love"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-theme-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-900 via-theme-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-bg-cream mb-4 drop-shadow-lg">Gems of Love</h1>
          <div className="flex items-center justify-center gap-5 mb-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-accent-500/50" />
            <span className="text-accent-500 text-sm">✦</span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-accent-500/50" />
          </div>
          <p className="text-bg-sand/80 max-w-xl text-sm md:text-base font-serif italic leading-relaxed">
            Seeking to learn, grow and flourish as you pursue a biblical marriage?
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-4">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-theme-700 rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen" />

        <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <p className="text-bg-sand/60 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Here are resources that have helped us think more deeply about love, marriage, friendship, faithfulness and the Christian home.
          </p>

          {/* Listen & Learn */}
          <ResourceCarousel
            title="Listen & Learn"
            subtitle="Marriage podcasts & audio"
            icon={
              <svg className="w-8 h-8 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            }
            items={listenResources}
          />

          {/* Watch & Grow */}
          <ResourceCarousel
            title="Watch & Grow"
            subtitle="Sermons, talks & lectures"
            icon={
              <svg className="w-8 h-8 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            }
            items={watchResources}
          />

          {/* Read & Reflect */}
          <ResourceCarousel
            title="Read & Reflect"
            subtitle="Articles, books & essays"
            icon={
              <svg className="w-8 h-8 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            items={readResources}
          />
        </div>

        <div className="pb-24 pt-4 text-center relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-bg-sand/50 hover:text-accent-400 transition-colors">
            <span className="text-lg">←</span> Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
