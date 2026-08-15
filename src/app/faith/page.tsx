import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Many-Faced Faith | A Gift of Faith & Truth',
  description: 'What does biblical Christianity actually teach? We explore the Prosperity Gospel, abortion, eternal security and more.',
};

const topics = [
  {
    icon: '💰',
    title: 'The Prosperity Gospel',
    question: 'Does God promise every Christian health, wealth and success?',
    answer:
      "The Prosperity Gospel teaches that faith, positive speech and tithing will guarantee God's blessing of health and wealth. But this is a distortion of the biblical Gospel. Jesus promised His followers a cross, not a Cadillac. The Bible is honest about suffering, and calls us to faithfulness regardless of earthly outcomes. True Gospel hope is not in temporal prosperity but in the resurrection and the life to come.",
  },
  {
    icon: '🌱',
    title: 'Abortion',
    question: 'What does the Christian faith say about the value and dignity of human life?',
    answer:
      'The Christian faith teaches that every human being is made in the image of God (imago Dei) — and that this dignity begins at conception. Unborn life, therefore, is not a mere biological process but a sacred gift. Christians who oppose abortion do so not from political ideology but from a deep conviction about the sanctity of every human life at every stage, from womb to tomb.',
  },
  {
    icon: '🛡️',
    title: 'Eternal Security',
    question: 'Is "once saved, always saved" true — no matter what?',
    answer:
      "This is a genuinely contested question among sincere Christians. Those who affirm eternal security argue that salvation is God's work, and He completes what He begins (Philippians 1:6). Others emphasise the need for perseverance and genuine ongoing faith. What most traditions agree on is this: true saving faith produces fruit — it is not a mere intellectual assent but a life-transforming reality. The question of eternal security is best understood not as a license to sin, but as an anchor of assurance for the genuinely faithful.",
  },
];

export default function FaithPage() {
  return (
    <main className="pt-16">
      {/* Hero header */}
      <div className="bg-gradient-to-br from-[#0A1428] via-[#1A2744] to-[#1E3055] py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37] opacity-[0.04] blur-3xl rounded-full pointer-events-none" />
        <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-[0.25em] mb-4">
          Section 4
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
          Many-Faced Faith?
        </h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#D4AF37]/30" />
          <span className="text-[#D4AF37] text-sm">✦</span>
          <div className="h-px w-12 bg-[#D4AF37]/30" />
        </div>
        <p className="font-serif text-white/80 italic text-lg max-w-xl mx-auto mb-3">
          What Does Biblical Christianity Actually Teach?
        </p>
        <p className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed">
          Christianity is often represented in many different and sometimes contradictory ways. Here we address some of the questions that divide — with honesty, nuance and biblical grounding.
        </p>
      </div>

      {/* Topic cards */}
      <div className="bg-[#FAF9F6] py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-8 hover:border-[#D4AF37]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="text-4xl flex-shrink-0 mt-1">{topic.icon}</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A2744] mb-1">
                    {topic.title}
                  </h3>
                  <p className="text-[#D4AF37] text-sm font-medium italic mb-4">
                    {topic.question}
                  </p>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{topic.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Go Deeper */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1A2744] rounded-2xl p-10 text-center">
            <div className="text-3xl mb-4">🔭</div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">Go Deeper</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-md mx-auto">
              For deeper engagement with these and other questions of biblical theology and Christian living, visit Gospel Lens.
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
