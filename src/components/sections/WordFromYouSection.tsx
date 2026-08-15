'use client';
import { useState } from 'react';

type FormType = 'blessing' | 'question' | 'counsel';

interface ContactCardProps {
  icon: string;
  title: string;
  description: string;
  formType: FormType;
  placeholder: string;
  showEmail?: boolean;
}

function ContactCard({ icon, title, description, formType, placeholder, showEmail = false }: ContactCardProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace FORM_ID_PLACEHOLDER with your actual Formspree form ID
    try {
      const res = await fetch('https://formspree.io/f/FORM_ID_PLACEHOLDER', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, type: formType }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // show a gentle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-8 hover:shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-serif text-xl font-bold text-[#1A2744] mb-2">{title}</h3>
      <p className="text-[#4A5568] text-sm leading-relaxed mb-7">{description}</p>

      {submitted ? (
        <div className="text-center py-8 flex-1 flex flex-col items-center justify-center">
          <div className="text-4xl mb-3">🙏</div>
          <p className="font-serif text-[#1A2744] font-semibold text-lg">Thank you!</p>
          <p className="text-[#4A5568] text-sm mt-1">Your message has been received.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-1">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#1A2744] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
          />
          {showEmail && (
            <input
              type="email"
              placeholder="Your email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#1A2744] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
            />
          )}
          <textarea
            placeholder={placeholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#1A2744] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-1 bg-[#1A2744] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#D4AF37] hover:text-[#1A2744] transition-colors duration-300 disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send Message →'}
          </button>
        </form>
      )}
    </div>
  );
}

export default function WordFromYouSection() {
  return (
    <section id="message" className="bg-[#FAF9F6] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-[0.25em] mb-3">
            Section 5
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A2744] mb-4">
            A Word From You
          </h2>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-[#D4AF37]/30" />
            <span className="text-[#D4AF37] text-sm">✦</span>
            <div className="h-px w-12 bg-[#D4AF37]/30" />
          </div>
          <p className="text-[#4A5568] max-w-lg mx-auto leading-relaxed">
            We&apos;d love to hear from you. Leave a blessing, ask a question, or simply reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            icon="💌"
            title="Say Something"
            description="Leave a message, blessing or prayer for Jonathan and Charisma on their special day."
            formType="blessing"
            placeholder="Write a blessing, prayer or message for the couple..."
          />
          <ContactCard
            icon="❓"
            title="Ask Us"
            description="Is there something you&apos;ve been thinking about? A question about faith, Christianity, marriage or life?"
            formType="question"
            placeholder="What's your question? Don't hold back..."
            showEmail
          />
          <ContactCard
            icon="🤝"
            title="Need Someone to Talk To?"
            description="If you're looking for Christian counsel, encouragement or someone to talk to, reach out to us."
            formType="counsel"
            placeholder="Share what you're going through — we're listening..."
            showEmail
          />
        </div>
      </div>
    </section>
  );
}
