import { useEffect, useRef, useState } from 'react';
import { ArrowLeftRight, StickyNote, Volume2, Bot } from 'lucide-react';

const Features = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
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

  const features = [
    {
      icon: ArrowLeftRight,
      title: 'Instant Translation',
      description: 'Translate text on any webpage with a simple click. Supports over 100 languages with high accuracy.',
      color: 'from-primary to-accent',
    },
    {
      icon: StickyNote,
      title: 'Smart Notes',
      description: 'Automatically generate concise notes from translated text. Capture key points and important information.',
      color: 'from-accent to-primary',
    },
    {
      icon: Volume2,
      title: 'Text-to-Speech',
      description: 'Listen to translations read aloud in natural sounding voices. Perfect for learning pronunciation.',
      color: 'from-primary to-accent',
    },
    {
      icon: Bot,
      title: 'AI-Powered Prompts',
      description: 'Get intelligent suggestions for note-taking and content summarization with our AI technology.',
      color: 'from-accent to-primary',
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            LangAudi offers everything you need to understand and work with content in any language
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card group p-8 rounded-2xl glass border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-background" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;