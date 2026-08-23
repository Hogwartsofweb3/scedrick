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
      <div className="relative w-full min-h-[16rem] md:min-h-[20rem] pb-8">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-image.jpg"
            alt="Gems of Love"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-theme-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-theme-900 via-theme-900/40 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center pt-28 pb-10 text-center px-4">
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
              <Image src="https://img.icons8.com/ios-filled/50/d4af37/headphones.png" alt="Listen" width={32} height={32} className="drop-shadow-sm" />
            }
            items={listenResources}
          />

          {/* Watch & Grow */}
          <ResourceCarousel
            title="Watch & Grow"
            subtitle="Sermons, talks & lectures"
            icon={
              <Image src="https://img.icons8.com/ios-filled/50/d4af37/youtube-play.png" alt="Watch" width={32} height={32} className="drop-shadow-sm" />
            }
            items={watchResources}
          />

          {/* Read & Reflect */}
          <ResourceCarousel
            title="Read & Reflect"
            subtitle="Articles, books & essays"
            icon={
              <Image src="https://img.icons8.com/ios-filled/50/d4af37/book.png" alt="Read" width={32} height={32} className="drop-shadow-sm" />
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
