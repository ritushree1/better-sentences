import { Button } from '@/components/ui/button';
import { Download, Chrome, Globe } from 'lucide-react';
import LaptopDemo from './LaptopDemo';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const browserButtons = [
    { name: 'Chrome', icon: Chrome },
    { name: 'Firefox', icon: Globe },
    { name: 'Edge', icon: Chrome }, // Using Chrome icon for Edge as well
  ];

  return (
    <section 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80"></div>
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/12 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 animate-float"></div>
        <div className="absolute top-1/3 right-1/12 w-24 h-24 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/6 w-20 h-20 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-28 h-28 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Hero Content */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-down">
            <span className="gradient-text">Translate</span>, Note-Take,{' '}
            <span className="gradient-text">and Listen</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in-up">
            LangAudi is the ultimate browser extension that translates text, creates smart notes from translations, and reads content aloud. Enhance your browsing experience today!
          </p>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" className="text-xl shadow-2xl">
              <Download className="mr-2 h-6 w-6" />
              Download Now
            </Button>

            <div className="flex flex-wrap gap-4">
              {browserButtons.map((browser) => (
                <Button
                  key={browser.name}
                  variant="browser"
                  size="lg"
                  className="min-w-[120px]"
                >
                  <browser.icon className="mr-2 h-5 w-5" />
                  {browser.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image/Demo */}
        <div className="animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
          <LaptopDemo />
        </div>
      </div>
    </section>
  );
};

export default Hero;