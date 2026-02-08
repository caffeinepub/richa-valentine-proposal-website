import { useState } from 'react';
import { Heart, Sparkles, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type ProposalState = 'initial' | 'accepted' | 'declined';

function App() {
  const [state, setState] = useState<ProposalState>('initial');

  const handleAccept = () => {
    setState('accepted');
  };

  const handleDecline = () => {
    setState('declined');
  };

  const handleReset = () => {
    setState('initial');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
        }}
      />
      
      {/* Overlay for better readability */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-50/80 via-pink-50/70 to-amber-50/80 dark:from-rose-950/80 dark:via-pink-950/70 dark:to-amber-950/80" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {state === 'initial' && (
            <Card className="proposal-card backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 shadow-2xl border-rose-200/50 dark:border-rose-800/50">
              <CardContent className="p-8 md:p-12 text-center space-y-8">
                {/* Heart Seal */}
                <div className="flex justify-center">
                  <img 
                    src="/assets/generated/heart-seal.dim_256x256.png" 
                    alt="Heart seal"
                    className="w-24 h-24 md:w-32 md:h-32 animate-float"
                  />
                </div>

                {/* Main Message */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-serif font-bold text-rose-600 dark:text-rose-400 tracking-tight">
                    Dear Richa,
                  </h1>
                  <div className="space-y-3 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p className="font-light">
                      Tumi ki amai valobaso?
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button
                    onClick={handleAccept}
                    size="lg"
                    className="w-full sm:w-auto text-lg px-8 py-6 bg-rose-500 hover:bg-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Accept
                  </Button>
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-lg px-8 py-6 border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                  >
                    Yes, you will
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {state === 'accepted' && (
            <Card className="proposal-card backdrop-blur-sm bg-white/95 dark:bg-slate-900/95 shadow-2xl border-rose-300/50 dark:border-rose-700/50 animate-scale-in">
              <CardContent className="p-8 md:p-12 text-center space-y-8 relative overflow-hidden">
                {/* Floating Hearts Animation */}
                <div className="hearts-container">
                  {[...Array(12)].map((_, i) => (
                    <Heart
                      key={i}
                      className="floating-heart text-rose-400"
                      style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Success Message */}
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-center">
                    <Sparkles className="w-20 h-20 text-rose-500 animate-pulse" />
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-serif font-bold text-rose-600 dark:text-rose-400 tracking-tight">
                    Yes! 💕
                  </h1>
                  
                  <div className="space-y-3 text-lg md:text-2xl text-slate-700 dark:text-slate-300">
                    <p className="font-medium">
                      Sabbassss
                    </p>
                    <p className="font-light text-base md:text-lg">
                      Extra valobasa for you
                    </p>
                  </div>

                  <div className="pt-6">
                    <img 
                      src="/assets/generated/heart-seal.dim_256x256.png" 
                      alt="Heart seal"
                      className="w-32 h-32 mx-auto animate-bounce-slow"
                    />
                  </div>

                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="lg"
                    className="mt-8 border-2 border-rose-300 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Change my answer
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {state === 'declined' && (
            <Card className="proposal-card backdrop-blur-sm bg-white/95 dark:bg-slate-900/95 shadow-2xl border-rose-300/50 dark:border-rose-700/50 animate-fade-in">
              <CardContent className="p-8 md:p-12 text-center space-y-8">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                      <span className="text-4xl">😏</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-serif font-bold text-rose-600 dark:text-rose-400 tracking-tight">
                    Kno Valo vabe  Accept kora jai na?
                  </h1>
                  
                  <div className="space-y-3 text-lg md:text-xl text-slate-700 dark:text-slate-300">
                    <p className="font-medium">
                      OOO achhha erom bpr?
                    </p>
                    <p className="font-light text-base md:text-lg">
                       Akhon Khil khil kore hasssa?
                    </p>
                    <p className="font-light text-base italic text-rose-600 dark:text-rose-400">
                      Chup chap bol" YES""
                    </p>
                  </div>

                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="lg"
                    className="mt-8 border-2 border-rose-300 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 text-rose-700 dark:text-rose-300"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Change my answer
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        <p>
          © 2026. Built with <Heart className="inline h-4 w-4 text-rose-500 fill-rose-500" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rose-600 dark:text-rose-400 hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
