'use client';
import { useState } from 'react';

type FormType = 'marriage' | 'prayer' | 'apologetics' | null;

export default function WordFromYouSection() {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [submitted, setSubmitted] = useState<FormType>(null);
  
  // NOTE: Replace these with actual Formspree endpoint URLs when ready
  const FORMSPREE_ENDPOINTS = {
    marriage: 'https://formspree.io/f/placeholder1',
    prayer: 'https://formspree.io/f/placeholder2',
    apologetics: 'https://formspree.io/f/placeholder3',
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: FormType) => {
    e.preventDefault();
    // Simulate submission for now
    setTimeout(() => {
      setSubmitted(type);
    }, 1000);
  };

  const renderForm = (type: FormType, title: string, placeholder: string) => {
    if (submitted === type) {
      return (
        <div className="bg-theme-800/50 backdrop-blur-sm border border-accent-500/30 rounded-3xl p-10 text-center animate-fade-in-up">
          <div className="text-4xl mb-4">🕊️</div>
          <h3 className="font-serif text-2xl font-bold text-bg-cream mb-2">Thank you</h3>
          <p className="text-bg-sand/70 text-sm">Your message has been received with love and gratitude.</p>
          <button 
            onClick={() => { setSubmitted(null); setActiveForm(null); }}
            className="mt-8 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors"
          >
            ← Back to options
          </button>
        </div>
      );
    }

    return (
      <form 
        onSubmit={(e) => handleSubmit(e, type)} 
        className="bg-theme-800/40 backdrop-blur-sm border border-accent-500/20 rounded-3xl p-8 md:p-12 animate-fade-in-up text-left shadow-2xl"
      >
        <button 
          type="button"
          onClick={() => setActiveForm(null)}
          className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-6 hover:text-accent-400 transition-colors flex items-center gap-2"
        >
          <span>←</span> Back
        </button>
        <h3 className="font-serif text-3xl font-bold text-bg-cream mb-2 drop-shadow-sm">{title}</h3>
        <p className="text-bg-sand/60 text-sm mb-8">We read every message. Thank you for sharing.</p>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-bg-sand/90 mb-2">Name (Optional)</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full bg-theme-900/50 border border-accent-500/20 rounded-xl px-4 py-3 text-bg-cream placeholder:text-bg-cream/20 focus:outline-none focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/60 transition-all duration-300"
              placeholder="How should we address you?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-bg-sand/90 mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required
              rows={5}
              className="w-full bg-theme-900/50 border border-accent-500/20 rounded-xl px-4 py-3 text-bg-cream placeholder:text-bg-cream/20 focus:outline-none focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/60 transition-all duration-300 resize-none"
              placeholder={placeholder}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-accent-500 hover:bg-accent-400 text-theme-900 font-bold py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-accent-500/20"
          >
            Send Message
          </button>
        </div>
      </form>
    );
  };

  return (
    <section className="relative bg-theme-900 py-32 px-4 overflow-hidden border-t border-accent-500/10">
      <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-accent-500 rounded-full blur-[180px] opacity-10 mix-blend-screen pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-[10px] md:text-xs font-semibold text-accent-500 uppercase tracking-[0.3em] mb-4">
          Section 5
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-bg-cream mb-6 drop-shadow-sm">
          A Word From You
        </h2>
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-500/30" />
          <span className="text-accent-500 text-sm">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-500/30" />
        </div>
        <p className="text-bg-sand/70 max-w-xl mx-auto mb-16 leading-relaxed text-sm md:text-base">
          We would love to hear from you. Whether it is marriage advice, a prayer, or an honest question about faith — our inbox is open.
        </p>

        <div className="max-w-2xl mx-auto">
          {!activeForm && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                onClick={() => setActiveForm('marriage')}
                className="group relative bg-theme-800/40 backdrop-blur-sm border border-accent-500/20 rounded-2xl p-8 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 overflow-hidden text-center"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">💍</div>
                <h3 className="font-serif font-bold text-bg-cream group-hover:text-accent-400 transition-colors">Marriage<br/>Advice</h3>
              </button>
              
              <button 
                onClick={() => setActiveForm('prayer')}
                className="group relative bg-theme-800/40 backdrop-blur-sm border border-accent-500/20 rounded-2xl p-8 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 overflow-hidden text-center"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">🙏</div>
                <h3 className="font-serif font-bold text-bg-cream group-hover:text-accent-400 transition-colors">A Prayer<br/>for Us</h3>
              </button>

              <button 
                onClick={() => setActiveForm('apologetics')}
                className="group relative bg-theme-800/40 backdrop-blur-sm border border-accent-500/20 rounded-2xl p-8 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 overflow-hidden text-center"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">💭</div>
                <h3 className="font-serif font-bold text-bg-cream group-hover:text-accent-400 transition-colors">Apologetics<br/>Question</h3>
              </button>
            </div>
          )}

          {activeForm === 'marriage' && renderForm('marriage', 'Marriage Advice', 'Share a lesson, a warning, or an encouragement...')}
          {activeForm === 'prayer' && renderForm('prayer', 'A Prayer for Us', 'Share a prayer or a blessing for our home...')}
          {activeForm === 'apologetics' && renderForm('apologetics', 'Apologetics Question', 'What questions or doubts do you have about the Christian faith?')}
        </div>
      </div>
    </section>
  );
}
