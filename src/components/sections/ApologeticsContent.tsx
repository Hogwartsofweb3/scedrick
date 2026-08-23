'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ResourceCarousel, type ResourceItem } from '@/components/ResourceCarousel';

const bigQuestions = [
  {
    q: 'Does God exist?',
    a: 'Yes. The existence of God is one of the most important questions anyone can ask. From the cosmological argument to the fine-tuning of the universe, from the moral argument to the argument from consciousness — there are serious, thoughtful reasons to believe in a Creator. We invite you to examine the evidence and follow it where it leads.',
  },
  {
    q: 'Can we know God?',
    a: 'Yes. If God exists and created us, it is reasonable to ask whether He has revealed Himself. Christians believe God has spoken through creation, through conscience, and most fully through Jesus Christ and the Scriptures. This is not a blind leap — it is a considered trust based on evidence and testimony.',
  },
  {
    q: 'Is the Bible reliable?',
    a: 'Yes. The Bible is the most historically scrutinised document in human history — and it holds up remarkably well. From manuscript evidence to archaeological corroboration to fulfilled prophecy, there are compelling reasons to trust the Biblical text as a reliable historical document.',
  },
  {
    q: 'Did Jesus really rise from the dead?',
    a: 'Yes. The Resurrection is the cornerstone of the Christian faith. The empty tomb, the post-resurrection appearances, and the radical transformation of the disciples are historical facts that demand an explanation. The bodily resurrection of Jesus remains the most historically compelling explanation for what happened.',
  },
  {
    q: 'Why does God allow suffering?',
    a: "This may be the most emotionally powerful objection to Christianity. Christians don't pretend it has an easy answer. But the Christian worldview takes suffering seriously — it does not explain it away but enters into it. Jesus himself suffered. The cross is God's answer to suffering, not an escape from it.",
  },
  {
    q: 'Are miracles possible?',
    a: 'If God exists and created the natural order, there is no logical reason He cannot act within it. The real question is not whether miracles are scientifically verifiable in a lab — it is whether a God who can work miracles exists. Once that question is seriously considered, miracles follow naturally.',
  },
  {
    q: 'Is Christianity the only way?',
    a: 'Jesus said "I am the way, the truth and the life." This is an exclusive claim — and Christianity has never pretended otherwise. But it is not an arrogant claim. It is an invitation. Come, examine the evidence, consider who Jesus claimed to be, and decide for yourself what to make of Him.',
  },
];

function QuestionCard({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-300 ${open ? 'border-accent-500/50 shadow-lg shadow-accent-500/10 bg-theme-800/40' : 'border-accent-500/20 bg-theme-800/20'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-theme-800/40 transition-colors"
      >
        <span className={`font-serif text-lg md:text-xl font-semibold pr-4 transition-colors ${open ? 'text-accent-400' : 'text-bg-cream'}`}>{q}</span>
        <span className={`text-accent-500 text-3xl font-light flex-shrink-0 transition-transform duration-500 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 md:px-8 pb-8 border-t border-accent-500/10 pt-6">
          <p className="text-bg-sand/80 leading-relaxed text-sm md:text-base">{a}</p>
        </div>
      </div>
    </div>
  );
}

const godExistsResources: ResourceItem[] = [
  {
    title: 'Why God Must Exist, According to Logic | William Lane Craig',
    description: 'William Lane Craig presents philosophical and logical arguments for the existence of God.',
    href: 'https://youtu.be/Zr4_X-7hlmo',
    videoId: 'Zr4_X-7hlmo',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: 'The God Who Is | Timothy Keller',
    description: 'Timothy Keller examines Romans 1 on what can be known about God\'s reality and existence.',
    href: 'https://youtu.be/Gz96tnIPGBI',
    videoId: 'Gz96tnIPGBI',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: 'God: Fact or Fiction? | John Lennox at UNC',
    description: 'Mathematician John Lennox addresses whether science and reason point toward a Creator.',
    href: 'https://youtu.be/d0xyapiZ2pM',
    videoId: 'd0xyapiZ2pM',
    type: 'video',
    source: 'YouTube',
  },
];

const knowGodResources: ResourceItem[] = [
  {
    title: 'How Can We Know God? | John Piper',
    description: 'John Piper explains how God reveals Himself through Christ, Scripture, and creation.',
    href: 'https://www.desiringgod.org/interviews/how-can-we-know-god',
    type: 'article',
    source: 'Desiring God',
  },
  {
    title: 'Knowing God | Timothy Keller — Gospel in Life Podcast',
    description: 'Timothy Keller explores Romans 1:16-21 to answer how we can know whether God exists.',
    href: 'https://podcast.gospelinlife.com/e/knowing-god-1754661922/',
    type: 'podcast',
    source: 'Gospel in Life',
    thumbnail: 'https://d2bwo9zemjwxh5.cloudfront.net/image-logo/816279/Podcast_Image_Black_Background_1500x15009d817_1200x628.jpg?s=96aa1ccb1450d0164e70f699dcaeb6a5&e=jpg',
  },
];

const bibleResources: ResourceItem[] = [
  {
    title: 'Wesley Huff | The Historical Reliability of the Bible',
    description: 'Wesley Huff presents historical and manuscript evidence for the reliability of the Bible.',
    href: 'https://youtu.be/pkSoTR_vhmg',
    videoId: 'pkSoTR_vhmg',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: 'The Reliability of the New Testament | Daniel Wallace',
    description: 'Dr. Daniel Wallace examines New Testament textual criticism and manuscript accuracy.',
    href: 'https://youtu.be/tgU66nFgkCE',
    videoId: 'tgU66nFgkCE',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: 'How Did We Get The Bible? | Michael Kruger',
    description: 'Dr. Michael Kruger explains the canonical history and formation of the New Testament.',
    href: 'https://youtu.be/vPUBjRxDQXo',
    videoId: 'vPUBjRxDQXo',
    type: 'video',
    source: 'YouTube',
  },
];

const resurrectionResources: ResourceItem[] = [
  {
    title: 'The Resurrection of Jesus | Reasonable Faith',
    description: 'Examines historical grounds for Jesus\' resurrection, the empty tomb, and post-resurrection appearances.',
    href: 'https://www.reasonablefaith.org/writings/popular-writings/jesus-resurrection/the-resurrection-of-jesus',
    type: 'article',
    source: 'Reasonable Faith',
  },
  {
    title: 'Lee Strobel – The Case for Christ: Evidence for the Resurrection',
    description: 'Lee Strobel presents the historical investigation and evidence for the resurrection of Jesus.',
    href: 'https://youtu.be/rDgu3jXeCTM',
    videoId: 'rDgu3jXeCTM',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: 'Evidence for the Resurrection | Dr. Frank Turek',
    description: 'Dr. Frank Turek shares historical and logical arguments supporting the resurrection of Christ.',
    href: 'https://youtu.be/sD4IFp9w5rY',
    videoId: 'sD4IFp9w5rY',
    type: 'video',
    source: 'YouTube',
  },
];

const sufferingResources: ResourceItem[] = [
  {
    title: "C.S. Lewis and Answers to the Problem of Pain",
    description: "Insights from C.S. Lewis on navigating suffering, pain, and the goodness of God.",
    href: 'https://dailycitizen.focusonthefamily.com/c-s-lewis-and-answers-to-the-problem-of-pain/',
    type: 'article',
    source: 'Focus on the Family',
  },
  {
    title: "With all this suffering, how could there be a God? | Tim Keller",
    description: "Tim Keller offers a thoughtful Christian response to the problem of evil and suffering.",
    href: 'https://youtu.be/dkn5lfutSrY',
    videoId: 'dkn5lfutSrY',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "The Loud Absence: Where is God in Suffering? | John Lennox",
    description: "John Lennox addresses suffering and the search for meaning at Harvard Medical School.",
    href: 'https://youtu.be/MPm6Y-pANYI',
    videoId: 'MPm6Y-pANYI',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Why Suffering? | Ravi Zacharias",
    description: "Ravi Zacharias explores why a powerful and loving God allows human pain and suffering.",
    href: 'https://youtu.be/e_PP3-ZY3_4',
    videoId: 'e_PP3-ZY3_4',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Answering the Problem of Evil and Suffering | Sean McDowell",
    description: "Sean McDowell provides clear apologetic answers to objections regarding evil and suffering.",
    href: 'https://youtu.be/jtdCr3Pxg4w',
    videoId: 'jtdCr3Pxg4w',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "If God Is Good, Why Do I Suffer? | R.C. Sproul",
    description: "Dr. R.C. Sproul explains the sovereignty of God and purpose of suffering in believers' lives.",
    href: 'https://youtu.be/g6UgMDx9rJY',
    videoId: 'g6UgMDx9rJY',
    type: 'video',
    source: 'YouTube',
  },
];

const miraclesResources: ResourceItem[] = [
  {
    title: "Do Miracles Really Happen? | Christian Apologetics",
    description: "An exploration of historical and philosophical evidence for miracles and divine action.",
    href: 'https://youtu.be/SzSUVq0aeSI',
    videoId: 'SzSUVq0aeSI',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Are Miracles Possible? | John Lennox Explains",
    description: "John Lennox discusses the laws of nature, David Hume's objections, and miracles.",
    href: 'https://youtu.be/z6BArYcwXB0',
    videoId: 'z6BArYcwXB0',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Alvin Plantinga on Divine Action — Biola University",
    description: "Alvin Plantinga explores how we should understand the possibility of God's action in the world.",
    href: 'https://cct.biola.edu/divine-action/',
    type: 'article',
    source: 'Biola University',
  },
  {
    title: "Lee Strobel: The Case for Miracles",
    description: "Lee Strobel shares documented accounts and arguments demonstrating the validity of miracles.",
    href: 'https://youtu.be/y3VSIWHZtOI',
    videoId: 'y3VSIWHZtOI',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Are Miracles Possible? | Dr. Frank Turek",
    description: "Dr. Frank Turek tackles scientific and philosophical questions regarding miracles.",
    href: 'https://youtu.be/hIX66kiBtuI',
    videoId: 'hIX66kiBtuI',
    type: 'video',
    source: 'YouTube',
  },
];

const jesusOnlyWayResources: ResourceItem[] = [
  {
    title: "One Way or Many? | Timothy Keller",
    description: "Timothy Keller examines Jesus' claim in John 14:6 as the exclusive way to God.",
    href: 'https://gospelinlife.com/sermon/one-way-or-many/',
    type: 'podcast',
    source: 'Gospel in Life',
  },
  {
    title: "Lee Strobel: Jesus is the Only Way to God",
    description: "Lee Strobel addresses religious pluralism and explains why Jesus is the only way to God.",
    href: 'https://youtu.be/VRgb57DStO8',
    videoId: 'VRgb57DStO8',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Christ the Only Way | R.C. Sproul",
    description: "R.C. Sproul explains the uniqueness of Christ's person and work for salvation.",
    href: 'https://youtu.be/OGo9Y1SeOtU',
    videoId: 'OGo9Y1SeOtU',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "The Only Way to Heaven | John MacArthur",
    description: "Dr. John MacArthur preaches on the exclusivity of the Gospel and the narrow gate to life.",
    href: 'https://youtu.be/9yEI5H9vuFs',
    videoId: '9yEI5H9vuFs',
    type: 'video',
    source: 'YouTube',
  },
  {
    title: "Is Jesus the Only Way to God? | Apologetics",
    description: "Biblical examination of Christian exclusivity and the uniqueness of salvation in Christ alone.",
    href: 'https://youtu.be/dcb5SXl4ncs',
    videoId: 'dcb5SXl4ncs',
    type: 'video',
    source: 'YouTube',
  },
];

export default function ApologeticsContent() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[16rem] md:min-h-[20rem] pb-8">
        <div className="absolute inset-0 overflow-hidden rounded-none">
          <Image src="/hero-image.jpg" alt="Questioning Christianity" fill priority className="object-cover object-top" />
          <div className="absolute inset-0 bg-theme-900/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-theme-900 via-theme-900/40 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center pt-28 pb-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-bg-cream mb-4 drop-shadow-lg">Questioning Christianity?</h1>
          <div className="flex items-center justify-center gap-5 mb-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-accent-500/50" />
            <span className="text-accent-500 text-sm">✦</span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-accent-500/50" />
          </div>
          <p className="text-accent-400 font-serif italic text-lg md:text-xl max-w-xl">
            Atheist? Skeptic? Agnostic? Curious? <span className="not-italic font-semibold text-bg-cream">You are welcome here.</span>
          </p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-[20%] left-[10%] w-[50%] h-[50%] bg-theme-700 rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-accent-500 rounded-full blur-[200px] opacity-10 pointer-events-none mix-blend-screen" />

      <div className="relative z-10 py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <p className="text-bg-sand/70 text-center text-sm md:text-base leading-relaxed mb-16 max-w-2xl mx-auto">
          Christianity does not ask us to abandon our minds. Bring your questions, examine the evidence, challenge the claims and consider the case for Christianity.
        </p>

        {/* Big Questions Accordion */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-bg-cream mb-3">Big Questions</h2>
            <p className="text-bg-sand/50 text-sm uppercase tracking-widest font-semibold">Select any question to read a brief response</p>
          </div>
          <div className="space-y-4">
            {bigQuestions.map((item) => (
              <QuestionCard key={item.q} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Resource Carousels — full width for scrolling */}
      <div className="relative z-10 py-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-bg-cream mb-3">Go Deeper</h2>
          <p className="text-bg-sand/60 text-sm">Explore responses to each question from theologians, philosophers and apologists.</p>
        </div>

        <ResourceCarousel title="Does God Exist?" subtitle="Cosmological, teleological & moral arguments" icon={<svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>} items={godExistsResources} />
        <ResourceCarousel title="Can We Know God?" subtitle="Revelation, Scripture & personal knowledge" icon={<svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>} items={knowGodResources} />
        <ResourceCarousel title="Is the Bible Reliable?" subtitle="Manuscript evidence, archaeology & prophecy" icon={<svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>} items={bibleResources} />
        <ResourceCarousel title="Did Jesus Rise From the Dead?" subtitle="Historical evidence for the Resurrection" icon={<svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v6m0 0v12m0-12h6M12 9H6" /></svg>} items={resurrectionResources} />
        <ResourceCarousel title="Why Does God Allow Suffering?" subtitle="The problem of evil — honest engagement" icon={<svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>} items={sufferingResources} />
        <ResourceCarousel title="Are Miracles Possible?" subtitle="Science, philosophy & divine action" icon={<svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} items={miraclesResources} />
        <ResourceCarousel title="Is Jesus the Only Way?" subtitle="The exclusive claims of Christ" icon={<svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>} items={jesusOnlyWayResources} />

        <div className="pb-24 pt-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-bg-sand/50 hover:text-accent-400 transition-colors">
            <span className="text-lg">←</span> Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
