import { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

const LaptopDemo = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      {/* Laptop */}
      <div className="relative w-full max-w-2xl">
        <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 shadow-2xl animate-swing">
          {/* Screen */}
          <div className="bg-background rounded-lg overflow-hidden shadow-inner border border-primary/20">
            {/* Browser Bar */}
            <div className="bg-secondary p-3 flex items-center border-b border-primary">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Browser Content */}
            <div className="p-6 h-64 relative">
              <h3 className="text-primary font-semibold mb-4">Foreign Language Website</h3>
              <p className="text-muted-foreground text-sm mb-4">
                This page contains text in a foreign language...
              </p>

              {/* Original Text */}
              <div className={`absolute top-16 left-6 max-w-48 p-3 bg-yellow-500/20 border-l-4 border-yellow-500 rounded transition-all duration-1000 ${
                animationStep === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-xs font-semibold text-yellow-500 mb-1">Original Text:</p>
                <p className="text-xs text-foreground">
                  El aprendizaje de idiomas es fundamental para comprender diferentes culturas y ampliar nuestras perspectivas del mundo.
                </p>
              </div>

              {/* Translated Text */}
              <div className={`absolute top-16 left-6 max-w-48 p-3 bg-primary/20 border-l-4 border-primary rounded transition-all duration-1000 ${
                animationStep === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-xs font-semibold text-primary mb-1">Translated Text:</p>
                <p className="text-xs text-foreground">
                  Language learning is essential to understand different cultures and broaden our world perspectives.
                </p>
              </div>

              {/* AI Prompt */}
              <div className={`absolute bottom-4 right-4 max-w-52 p-3 bg-primary/10 border border-primary/30 rounded-lg transition-all duration-1000 ${
                animationStep === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="flex items-center text-xs text-primary">
                  <Bot className="w-4 h-4 mr-2" />
                  Generate smart notes from this translation?
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Notes Animation */}
        <div className={`absolute -right-8 top-1/2 -translate-y-1/2 w-64 p-4 bg-card rounded-lg shadow-xl border border-primary/20 transition-all duration-1000 ${
          animationStep === 3 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
        }`}>
          <h4 className="text-primary font-semibold mb-3">Smart Notes</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              Language learning is essential
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              Helps understand different cultures
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              Broadens world perspectives
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              Key for global communication
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LaptopDemo;