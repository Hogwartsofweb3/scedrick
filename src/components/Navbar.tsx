'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full ${
        scrolled 
          ? 'bg-theme-900/80 backdrop-blur-xl border border-accent-500/20 shadow-2xl py-3 px-6 md:px-10' 
          : 'bg-transparent border-transparent py-5 px-4 md:px-8'
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-bg-cream tracking-widest hover:text-accent-400 transition-colors drop-shadow-sm">
          J<span className="text-accent-500 font-light mx-1">&amp;</span>C
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/gems" className={`text-sm font-medium tracking-wide transition-colors ${isActive('/gems') ? 'text-accent-400' : 'text-bg-sand hover:text-accent-400'}`}>Gems of Love</Link>
          <Link href="/apologetics" className={`text-sm font-medium tracking-wide transition-colors ${isActive('/apologetics') ? 'text-accent-400' : 'text-bg-sand hover:text-accent-400'}`}>Apologetics</Link>
          <Link href="/faith" className={`text-sm font-medium tracking-wide transition-colors ${isActive('/faith') ? 'text-accent-400' : 'text-bg-sand hover:text-accent-400'}`}>Faith</Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-bg-cream p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full mt-4 transition-all duration-500 origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="bg-theme-900/95 backdrop-blur-2xl border border-accent-500/20 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl items-center text-center">
          <Link href="/gems" className={`text-xl font-serif tracking-wide ${isActive('/gems') ? 'text-accent-400' : 'text-bg-cream hover:text-accent-400'}`} onClick={() => setMobileMenuOpen(false)}>Gems of Love</Link>
          <Link href="/apologetics" className={`text-xl font-serif tracking-wide ${isActive('/apologetics') ? 'text-accent-400' : 'text-bg-cream hover:text-accent-400'}`} onClick={() => setMobileMenuOpen(false)}>Apologetics</Link>
          <Link href="/faith" className={`text-xl font-serif tracking-wide ${isActive('/faith') ? 'text-accent-400' : 'text-bg-cream hover:text-accent-400'}`} onClick={() => setMobileMenuOpen(false)}>Faith</Link>
        </div>
      </div>
    </header>
  );
}
