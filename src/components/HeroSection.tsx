import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-restaurant.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Indian-inspired gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/80 to-primary/60" />
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          {/* Decorative element */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              स्वागत है • Welcome to Homies
            </span>
            <Sparkles className="h-5 w-5 text-accent" />
            <div className="h-px w-12 bg-accent" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Authentic Indian <br />
            <span className="text-accent drop-shadow-lg">Flavours & Traditions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-lg leading-relaxed">
            Experience the rich heritage of Indian cuisine. From aromatic biryanis to creamy curries, 
            every dish is crafted with love using traditional recipes passed down through generations.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/menu">
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 bg-primary-foreground/10 border-2 border-accent/50 text-primary-foreground hover:bg-accent hover:text-secondary hover:border-accent transition-all duration-300">
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">25+</p>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wide">Years Legacy</p>
            </div>
            <div className="h-8 w-px bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">100+</p>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wide">Dishes</p>
            </div>
            <div className="h-8 w-px bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">4.9★</p>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wide">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
