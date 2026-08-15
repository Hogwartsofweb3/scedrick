import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Many-Faced Faith | Love and Grace',
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
      "The Christian faith teaches that every human being is made in the image of God (imago Dei) — and that this dignity begins at conception. Unborn life, therefore, is not a mere biological process but a sacred gift. Christians who oppose abortion do so not from political ideology but from a deep conviction about the sanctity of every human life at every stage, from womb to tomb.",
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
    <main className="pt-24 relative overflow-hidden">
      {/* Global Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-theme-700 rounded-full blur-[180px] opacity-20 pointer-events-none mix-blend-screen" />

      {/* Hero header */}
      <div className="py-24 px-4 text-center relative z-10">
        <p className="text-[10px] md:text-xs font-semibold text-accent-500 uppercase tracking-[0.3em] mb-4">
          Section 4
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-bg-cream mb-6 drop-shadow-sm">
          Many-Faced Faith?
        </h1>
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-500/30" />
          <span className="text-accent-500 text-sm">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-500/30" />
        </div>
        <p className="font-serif text-accent-400 italic text-xl md:text-2xl max-w-xl mx-auto mb-6">
          What Does Biblical Christianity Actually Teach?
        </p>
        <p className="text-bg-sand/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Christianity is often represented in many different and sometimes contradictory ways. Here we address some of the questions that divide — with honesty, nuance and biblical grounding.
        </p>
      </div>

      {/* Topic cards */}
      <div className="py-16 px-4 relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 mb-24">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-theme-800/30 backdrop-blur-md border border-accent-500/20 rounded-[2rem] p-8 md:p-12 hover:border-accent-500/40 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10">
                <div className="text-5xl md:text-6xl flex-shrink-0 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{topic.icon}</div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-bg-cream mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-accent-400 text-base md:text-lg font-serif italic mb-5 leading-relaxed">
                    {topic.question}
                  </p>
                  <p className="text-bg-sand/70 text-sm md:text-base leading-relaxed">
                    {topic.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Go Deeper */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-theme-800/40 backdrop-blur-md border border-accent-500/20 rounded-3xl p-12 text-center shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="text-5xl mb-6 drop-shadow-md">🔭</div>
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
      </div>

      <div className="pb-24 pt-8 text-center relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-bg-sand/50 hover:text-accent-400 transition-colors">
          <span className="text-lg">←</span> Back to Home
        </Link>
      </div>
    </main>
  );
}
