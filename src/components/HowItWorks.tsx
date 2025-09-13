import { useEffect, useRef, useState } from 'react';
import { MousePointer, RotateCcw, FileText, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.step');
            steps.forEach((step, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      icon: MousePointer,
      title: 'Select Text',
      description: 'Highlight any text on a webpage that you want to translate',
      color: 'from-primary to-accent',
    },
    {
      number: 2,
      icon: RotateCcw,
      title: 'Click Translate',
      description: 'Use the LangAudi extension to instantly translate the text',
      color: 'from-accent to-primary',
    },
    {
      number: 3,
      icon: FileText,
      title: 'Get Smart Notes',
      description: 'Automatically generate notes from the translated content',
      color: 'from-primary to-accent',
    },
    {
      number: 4,
      icon: Sparkles,
      title: 'AI Prompts',
      description: 'Receive intelligent suggestions for better note organization',
      color: 'from-accent to-primary',
    },
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            How LangAudi Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our extension makes it incredibly easy to translate, note-take, and listen to content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`step group text-center relative ${
                visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Step Number & Icon */}
              <div className="relative mb-8">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl font-bold text-background shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} bg-opacity-20 flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 transform -translate-y-1/2 z-10">
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;