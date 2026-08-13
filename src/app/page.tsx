import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden bg-[#FAF9F6]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-[#D4AF37] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-[#D4AF37] opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-2xl w-full flex flex-col items-center text-center z-10 animate-fade-in-up">
        {/* Status Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-[#1A202C]/5 px-4 py-1.5 text-sm font-medium text-[#1A202C] ring-1 ring-inset ring-[#1A202C]/10 backdrop-blur-sm shadow-sm transition-all hover:bg-[#1A202C]/10">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] mr-2 animate-pulse"></span>
            Launching Soon
          </span>
        </div>

        {/* Main Content */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A202C] mb-4">
          A Gift of Faith & Truth
        </h1>
        
        <p className="text-lg md:text-xl text-[#4A5568] font-light mb-10 max-w-xl">
          Curated Christian Resources & Devotionals
        </p>

        {/* Announcement Card */}
        <div className="w-full bg-white rounded-2xl shadow-xl shadow-[#D4AF37]/5 border border-[#E2E8F0]/50 p-8 md:p-12 mb-8 transform transition-transform duration-500 hover:scale-[1.01]">
          <h2 className="font-serif text-2xl font-semibold text-[#1A202C] mb-4">
            Welcome family and friends!
          </h2>
          <p className="text-[#4A5568] leading-relaxed mb-6">
            This resource portal is currently being prepared for Jonathan & his bride's wedding celebration.
          </p>
          <div className="w-16 h-[1px] bg-[#D4AF37]/30 mx-auto mb-6"></div>
          <p className="text-sm text-[#718096] italic">
            Check back soon for curated articles, sermons, and spiritual resources from trusted Christian teachers.
          </p>
        </div>
      </div>
    </main>
  );
}
