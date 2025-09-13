import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 animate-float blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-accent/5 to-primary/5 animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Enhance Your <span className="gradient-text">Browsing Experience</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Download LangAudi today and break down language barriers with our powerful translation and note-taking tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="text-xl shadow-2xl min-w-[200px]">
              <Download className="mr-2 h-6 w-6" />
              Download Now
            </Button>
            
            <Button variant="glass" size="xl" className="text-xl min-w-[200px]">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Trusted by over <span className="text-primary font-semibold">50,000+</span> users worldwide
            </p>
            <div className="flex justify-center space-x-8 text-muted-foreground">
              <span>★★★★★ Chrome Store</span>
              <span>★★★★★ Firefox Add-ons</span>
              <span>★★★★★ Edge Extensions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;