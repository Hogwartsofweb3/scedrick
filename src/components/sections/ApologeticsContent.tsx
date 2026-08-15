'use client';
import { useState } from 'react';
import Link from 'next/link';

const bigQuestions = [
  {
    q: 'Does God exist?',
    a: 'The existence of God is one of the most important questions anyone can ask. From the cosmological argument to the fine-tuning of the universe, from the moral argument to the argument from consciousness — there are serious, thoughtful reasons to believe in a Creator. We invite you to examine the evidence and follow it where it leads.',
  },
  {
    q: 'Can we know God?',
    a: 'If God exists and created us, it is reasonable to ask whether He has revealed Himself. Christians believe God has spoken through creation, through conscience, and most fully through Jesus Christ and the Scriptures. This is not a blind leap — it is a considered trust based on evidence and testimony.',
  },
  {
    q: 'Is the Bible reliable?',
    a: 'The Bible is the most historically scrutinised document in human history — and it holds up remarkably well. From manuscript evidence to archaeological corroboration to fulfilled prophecy, there are compelling reasons to trust the Biblical text as a reliable historical document.',
  },
  {
    q: 'Did Jesus really rise from the dead?',
    a: "The Resurrection is the cornerstone of the Christian faith. The empty tomb, the post-resurrection appearances, and the radical transformation of the disciples are historical facts that demand an explanation. The bodily resurrection of Jesus remains the most historically compelling explanation for what happened.",
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
    <div
      className={`rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-300 ${
        open ? 'border-accent-500/50 shadow-lg shadow-accent-500/10 bg-theme-800/40' : 'border-accent-500/20 bg-theme-800/20'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-theme-800/40 transition-colors"
      >
        <span className={`font-serif text-lg md:text-xl font-semibold pr-4 transition-colors ${open ? 'text-accent-400' : 'text-bg-cream'}`}>{q}</span>
        <span
          className={`text-accent-500 text-3xl font-light flex-shrink-0 transition-transform duration-500 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 md:px-8 pb-8 border-t border-accent-500/10 pt-6">
          <p className="text-bg-sand/80 leading-relaxed text-sm md:text-base">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ApologeticsContent() {
  return (
    <main className="pt-24 relative overflow-hidden">
      {/* Global Background Glow */}
      <div className="absolute top-[20%] left-[10%] w-[50%] h-[50%] bg-theme-700 rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-accent-500 rounded-full blur-[200px] opacity-10 pointer-events-none mix-blend-screen" />

      {/* Hero header */}
      <div className="py-24 px-4 text-center relative z-10">
        <p className="text-[10px] md:text-xs font-semibold text-accent-500 uppercase tracking-[0.3em] mb-4">
          Section 3 — The Apologetics Corner
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-bg-cream mb-6 drop-shadow-sm">
          Questioning Christianity?
        </h1>
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-500/30" />
          <span className="text-accent-500 text-sm">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-500/30" />
        </div>
        <p className="font-serif text-accent-400 italic text-xl md:text-2xl max-w-xl mx-auto mb-6">
          Atheist? Skeptic? Agnostic? Curious?<br />
          <span className="not-italic font-semibold text-bg-cream mt-2 block">You are welcome here.</span>
        </p>
        <p className="text-bg-sand/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Christianity does not ask us to abandon our minds. Bring your questions, examine the evidence, challenge the claims and consider the case for Christianity. We invite you to consider, and to listen to how people have responded to your questions.
        </p>
      </div>

      {/* Big Questions */}
      <div className="py-16 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-bg-cream mb-3 drop-shadow-sm">
              Big Questions
            </h2>
            <p className="text-bg-sand/50 text-sm uppercase tracking-widest font-semibold">
              Select any question to read a brief response
            </p>
          </div>

          <div className="space-y-4 mb-24">
            {bigQuestions.map((item) => (
              <QuestionCard key={item.q} {...item} />
            ))}
          </div>

          {/* Go Deeper */}
          <div className="relative bg-theme-800/40 backdrop-blur-md border border-accent-500/20 rounded-3xl p-12 text-center shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="text-5xl mb-6 drop-shadow-md">🔭</div>
            <h3 className="font-serif text-3xl font-bold text-bg-cream mb-4">Go Deeper</h3>
            <p className="text-bg-sand/70 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              For more thorough theological and apologetic resources — including essays, recommended readings and further study — visit Gospel Lens.
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
      </div>

      <div className="pb-24 pt-8 text-center relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-bg-sand/50 hover:text-accent-400 transition-colors">
          <span className="text-lg">←</span> Back to Home
        </Link>
      </div>
    </main>
  );
}
