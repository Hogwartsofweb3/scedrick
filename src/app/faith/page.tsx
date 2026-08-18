import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ResourceCarousel, type ResourceItem } from '@/components/ResourceCarousel';

export const metadata: Metadata = {
  title: 'Many-Faced Faith | Love and Grace',
  description: 'What does biblical Christianity actually teach? We explore the Prosperity Gospel, abortion, eternal security and more.',
};

const topics = [
  {
    icon: <Image src="https://img.icons8.com/ios-filled/100/d4af37/money-bag.png" alt="Prosperity" width={60} height={60} className="object-contain" />,
    title: 'The Prosperity Gospel',
    question: 'Does God promise every Christian health, wealth and success?',
    answer:
      "The Prosperity Gospel teaches that faith, positive speech and tithing will guarantee God's blessing of health and wealth. But this is a distortion of the biblical Gospel. Jesus promised His followers a cross, not a Cadillac. The Bible is honest about suffering, and calls us to faithfulness regardless of earthly outcomes. True Gospel hope is not in temporal prosperity but in the resurrection and the life to come.",
  },
  {
    icon: <Image src="https://img.icons8.com/ios-filled/100/d4af37/sprout.png" alt="Life" width={60} height={60} className="object-contain" />,
    title: 'Abortion',
    question: 'What does the Christian faith say about the value and dignity of human life?',
    answer:
      "The Christian faith teaches that every human being is made in the image of God (imago Dei) — and that this dignity begins at conception. Unborn life, therefore, is not a mere biological process but a sacred gift. Christians who oppose abortion do so not from political ideology but from a deep conviction about the sanctity of every human life at every stage, from womb to tomb.",
  },
  {
    icon: <Image src="https://img.icons8.com/ios-filled/100/d4af37/shield.png" alt="Security" width={60} height={60} className="object-contain" />,
    title: 'Eternal Security',
    question: 'Is "once saved, always saved" true — no matter what?',
    answer:
      "This is a genuinely contested question among sincere Christians. Those who affirm eternal security argue that salvation is God's work, and He completes what He begins (Philippians 1:6). Others emphasise the need for perseverance and genuine ongoing faith. What most traditions agree on is this: true saving faith produces fruit — it is not a mere intellectual assent but a life-transforming reality. The question of eternal security is best understood not as a license to sin, but as an anchor of assurance for the genuinely faithful.",
  },
];

const prosperityResources: ResourceItem[] = [
  {
    title: 'On The Prosperity Gospel — Ancilla Theologiae',
    description: 'A biblical and theological examination of the prosperity gospel and why it distorts the true Gospel of Christ.',
    href: 'https://ancillatheologiae.substack.com/p/on-the-prosperity-gospel',
    type: 'article',
    source: 'Substack',
    thumbnail: 'https://substackcdn.com/image/fetch/$s_!EMyI!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7cdd2b4f-0a72-4d40-a181-eb28f620c805_1024x1024.jpeg',
  },
  {
    title: 'Prosperity Gospel Critique — Full Playlist',
    description: 'A collection of sermons and teachings evaluating the prosperity gospel biblically from multiple trusted voices.',
    href: 'https://youtube.com/playlist?list=PLmcdWA2cZUfsvguL2Ab9L0MZZwR-tQ5P9',
    type: 'playlist',
    source: 'YouTube',
  },
  {
    title: 'The True Gospel vs. Prosperity Theology | Costi Hinn',
    description: 'Costi Hinn contrasts biblical gospel truth with the distortions of prosperity theology — from the inside.',
    href: 'https://youtu.be/l0Ge98Xbr2w',
    videoId: 'l0Ge98Xbr2w',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: 'The Wickedness of Gospel Distorters | John MacArthur',
    description: 'John MacArthur exposes how distortion of the gospel harms believers and dishonours God.',
    href: 'https://youtu.be/3HMLVFE5suA',
    videoId: '3HMLVFE5suA',
    type: 'video',
    source: 'YouTube',
  },
];

const abortionResources: ResourceItem[] = [
  {
    title: 'How Sacred Is Human Life? | Dr. R.C. Sproul',
    description: 'Dr. R.C. Sproul addresses the sanctity of human life and presents a biblical view of abortion.',
    href: 'https://youtu.be/nW8AwkB0V2M',
    videoId: 'nW8AwkB0V2M',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: 'Abortion and the Campaign for Immorality | John MacArthur',
    description: 'John MacArthur presents a biblical defence of the unborn and the moral imperative of protecting life.',
    href: 'https://youtu.be/Ah5ox0dVnsc',
    videoId: 'Ah5ox0dVnsc',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: 'A Biblical Worldview on Abortion | Voddie Baucham',
    description: 'Dr. Voddie Baucham explains the sanctity of life rooted in the Image of God from Scripture.',
    href: 'https://youtu.be/StUZsxyKrlU',
    videoId: 'StUZsxyKrlU',
    type: 'video',
    source: 'YouTube',
  },
];

const eternalSecurityResources: ResourceItem[] = [
  {
    title: 'Perseverance of the Saints | John Piper',
    description: 'John Piper explains the biblical doctrine of eternal security and the perseverance of the saints.',
    href: 'https://youtu.be/WW5dGx2pry8',
    videoId: 'WW5dGx2pry8',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: 'Our Eternal Security | John Piper',
    description: 'John Piper teaches on Hebrews 3:12–19 and how genuine faith perseveres to eternal life.',
    href: 'https://youtu.be/V1DeAFw96Dg',
    videoId: 'V1DeAFw96Dg',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: 'Eternal Security Is a Community Project | John Piper',
    description: 'How the local church community helps Christians persevere in faith through accountability and love.',
    href: 'https://youtu.be/4Kee2u3sRNQ',
    videoId: '4Kee2u3sRNQ',
    type: 'video',
    source: 'YouTube',
  },
];

export default function FaithPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image src="/hero-image.jpg" alt="Many-Faced Faith" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-theme-900/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-900 via-theme-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-bg-cream mb-4 drop-shadow-lg">Many-Faced Faith?</h1>
          <div className="flex items-center justify-center gap-5 mb-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-accent-500/50" />
            <span className="text-accent-500 text-sm">✦</span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-accent-500/50" />
          </div>
          <p className="font-serif text-accent-400 italic text-lg md:text-xl max-w-xl">
            What Does Biblical Christianity Actually Teach?
          </p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-theme-700 rounded-full blur-[180px] opacity-20 pointer-events-none mix-blend-screen" />

      <div className="relative z-10 py-16 px-4 max-w-3xl mx-auto">
        <p className="text-bg-sand/70 text-center text-sm md:text-base leading-relaxed mb-16">
          Christianity is often represented in many different and sometimes contradictory ways. Here we address some of the questions that divide — with honesty, nuance and biblical grounding.
        </p>

        {/* Topic cards */}
        <div className="space-y-8 mb-16">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-theme-800/30 backdrop-blur-md border border-accent-500/20 rounded-[2rem] p-8 md:p-12 hover:border-accent-500/40 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10">
                <div className="text-5xl md:text-6xl flex-shrink-0 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{topic.icon}</div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-bg-cream mb-3">{topic.title}</h3>
                  <p className="text-accent-400 text-base md:text-lg font-serif italic mb-5 leading-relaxed">{topic.question}</p>
                  <p className="text-bg-sand/70 text-sm md:text-base leading-relaxed">{topic.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Carousels */}
      <div className="relative z-10 pb-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-bg-cream mb-3">Go Deeper</h2>
          <p className="text-bg-sand/60 text-sm">Watch and read more on each topic from trusted voices.</p>
        </div>

        <ResourceCarousel title="The Prosperity Gospel" subtitle="Critiques and biblical alternatives" icon={<Image src="https://img.icons8.com/ios-filled/50/d4af37/money-bag.png" alt="Prosperity" width={24} height={24} />} items={prosperityResources} />
        <ResourceCarousel title="On Abortion" subtitle="The sanctity of human life" icon={<Image src="https://img.icons8.com/ios-filled/50/d4af37/sprout.png" alt="Life" width={24} height={24} />} items={abortionResources} />
        <ResourceCarousel title="On Eternal Security" subtitle="Perseverance of the saints" icon={<Image src="https://img.icons8.com/ios-filled/50/d4af37/shield.png" alt="Security" width={24} height={24} />} items={eternalSecurityResources} />
      </div>

      {/* Go Deeper — Gospel Lens */}
      <div className="relative z-10 py-8 px-4 max-w-3xl mx-auto mb-16">
        <div className="relative bg-theme-800/40 backdrop-blur-md border border-accent-500/20 rounded-3xl p-12 text-center shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="flex justify-center mb-6">
            <Image src="/gospel-lens-logo.png" alt="Gospel Lens" width={60} height={60} className="object-contain" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-bg-cream mb-4">Go Deeper</h3>
          <p className="text-bg-sand/70 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            For deeper engagement with these and other questions of biblical theology and Christian living, visit Gospel Lens.
          </p>
          <Link
            href="https://gospellens.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent-500 text-theme-900 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            Visit Gospel Lens →
          </Link>
        </div>
      </div>

      <div className="pb-24 pt-4 text-center relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-bg-sand/50 hover:text-accent-400 transition-colors">
          <span className="text-lg">←</span> Back to Home
        </Link>
      </div>
    </main>
  );
}
