const poem = `If you now aim your wife to bless,
Then love her more and love her less.

If in the coming years, by some
Strange providence of God, you come
To have the riches of this age,
And, painless, stride across the stage
Beside your wife, be sure in health
To love her, love her more than wealth.

And if your life is woven in
A hundred friendships, and you spin
A festal fabric out of all
Your sweet affections, great and small,
Be sure, no matter how it rends,
To love her, love her more than friends.

And if there comes a point when you
Are tired, and pity whispers, “Do
Yourself a favor. Come, be free;
Embrace the comforts here with me.”
Know this! Your wife surpasses these:
So love her, love her, more than ease.

And when your marriage bed is pure,
And there is not the slightest lure
Of lust for any but your wife,
And all is ecstasy in life,
A secret all of this protects:
Go love her, love her, more than sex.

And if your taste becomes refined,
And you are moved by what the mind
Of man can make, and dazzled by
His craft, remember that the “why”
Of all this work is in the heart;
So love her, love her more than art.

And if your own should someday be
The craft that critics all agree
Is worthy of a great esteem,
And sales exceed your wildest dream,
Beware the dangers of a name.
And love her, love her more than fame.

And if, to your surprise, not mine,
God calls you by some strange design
To risk your life for some great cause,
Let neither fear nor love give pause,
And when you face the gate of death,
Then love her, love her more than breath.

Yes, love her, love her, more than life;
O, love the woman called your wife.
Go love her as your earthly best.

Beyond this venture not. But, lest
Your love become a fool’s facade,
Be sure to love her less than God.

It is not wise or kind to call
An idol by sweet names, and fall,
As in humility, before
A likeness of your God. Adore
Above your best beloved on earth
The God alone who gives her worth.
And she will know in second place
That your great love is also grace,
And that your high affections now
Are flowing freely from a vow
Beneath these promises, first made
To you by God. Nor will they fade
For being rooted by the stream
Of Heaven’s Joy, which you esteem
And cherish more than breath and life,
That you may give it to your wife.

The greatest gift you give your wife
Is loving God above her life.
And thus I bid you now to bless:
Go love her more by loving less.

Written by John Piper
For Karsten Luke Piper
At His Wedding to
Rochelle Ann Orvis
May 29, 1995`;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-theme-900 overflow-hidden flex flex-col items-center justify-center pt-32 pb-20 px-4">
      {/* Background elegant gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-theme-700 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-accent-500 rounded-full blur-[150px] opacity-15 mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-theme-800 rounded-full blur-[120px] opacity-60 mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* Intro Tag */}
        <div className="opacity-0 animate-fade-in-up">
          <p className="text-[10px] md:text-xs font-semibold text-accent-500 uppercase tracking-[0.3em] mb-6">
            Love and Grace
          </p>
        </div>

        {/* Couple's Names */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-bg-cream mb-6 opacity-0 animate-fade-in-up delay-100 leading-tight drop-shadow-sm">
          Jonathan <span className="text-accent-500 font-light">&amp;</span> <br className="md:hidden" />
          <span className="italic text-accent-400">Charisma</span>
        </h1>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-6 mb-8 opacity-0 animate-fade-in-up delay-200">
          <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-accent-500/50" />
          <span className="text-accent-500 text-xl">✤</span>
          <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-accent-500/50" />
        </div>

        {/* Date */}
        <p className="text-lg md:text-2xl text-bg-sand font-serif italic mb-16 opacity-0 animate-fade-in-up delay-300">
          August 22nd, 2026
        </p>

        {/* The Poem Container */}
        <div className="mt-12 w-full max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-500 relative group">
          {/* Decorative glass border blur */}
          <div className="absolute -inset-1 bg-gradient-to-b from-accent-500/20 to-theme-700/20 rounded-[2rem] blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-theme-900/40 backdrop-blur-xl border border-accent-500/20 rounded-[2rem] p-8 md:p-14 shadow-2xl">
            <div className="flex justify-center mb-6">
              <span className="text-accent-500 text-2xl opacity-50">❝</span>
            </div>
            
            <h2 className="font-serif text-2xl md:text-3xl text-accent-400 mb-8 font-semibold tracking-wide">
              Love Her More and Love Her Less
            </h2>
            
            <div className="h-[450px] overflow-y-auto poem-scroll pr-4 text-center md:text-left">
              <div className="space-y-6 text-bg-sand/90 font-serif leading-relaxed text-sm md:text-lg whitespace-pre-wrap">
                {poem}
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <span className="text-accent-500 text-2xl opacity-50">❞</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
