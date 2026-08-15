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
      className={`rounded-xl overflow-hidden border transition-all duration-300 ${
        open ? 'border-[#D4AF37]/50 shadow-md' : 'border-[#E2E8F0]'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#FAF9F6] transition-colors"
      >
        <span className="font-serif text-lg font-semibold text-[#1A2744] pr-4">{q}</span>
        <span
          className={`text-[#D4AF37] text-2xl font-light flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-6 pb-6 bg-white border-t border-[#E2E8F0]">
          <p className="text-[#4A5568] leading-relaxed pt-5 text-sm">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ApologeticsContent() {
  return (
    <main className="pt-16">
      {/* Hero header */}
      <div className="bg-gradient-to-br from-[#0A1428] via-[#1A2744] to-[#1E3055] py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37] opacity-[0.05] blur-3xl rounded-full pointer-events-none" />
        <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-[0.25em] mb-4">
          Section 3 — The Apologetics Corner
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
          Questioning Christianity?
        </h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#D4AF37]/30" />
          <span className="text-[#D4AF37] text-sm">✦</span>
          <div className="h-px w-12 bg-[#D4AF37]/30" />
        </div>
        <p className="text-white/80 max-w-xl mx-auto text-lg font-serif italic mb-3">
          Atheist? Skeptic? Agnostic? Curious?<br />
          <span className="text-white not-italic font-semibold">You are welcome here.</span>
        </p>
        <p className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed">
          Christianity does not ask us to abandon our minds. Bring your questions, examine the evidence, challenge the claims and consider the case for Christianity. We invite you to consider, and to listen to how people have responded to your questions.
        </p>
      </div>

      {/* Big Questions */}
      <div className="bg-[#FAF9F6] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#1A2744] mb-3 text-center">
            Big Questions
          </h2>
          <p className="text-[#4A5568] text-center text-sm mb-12">
            Select any question to read a brief response.
          </p>

          <div className="space-y-3 mb-16">
            {bigQuestions.map((item) => (
              <QuestionCard key={item.q} {...item} />
            ))}
          </div>

          {/* Go Deeper */}
          <div className="bg-[#1A2744] rounded-2xl p-10 text-center">
            <div className="text-3xl mb-4">🔭</div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">Go Deeper</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-md mx-auto">
              For more thorough theological and apologetic resources — including essays, recommended readings and further study — visit Gospel Lens.
            </p>
            <Link
              href="https://gospellens.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1A2744] px-7 py-3 rounded-full text-sm font-bold hover:bg-[#F0E0A0] transition-colors duration-200"
            >
              Visit Gospel Lens →
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF9F6] pb-16 text-center">
        <Link href="/" className="text-sm text-[#1A2744]/50 hover:text-[#D4AF37] transition-colors">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
