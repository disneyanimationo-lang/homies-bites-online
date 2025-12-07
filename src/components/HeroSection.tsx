import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <UtensilsCrossed className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              स्वागत है • Welcome to Homies
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-background mb-6 leading-tight">
            Authentic Indian <br />
            <span className="text-primary">Flavours & Traditions</span>
          </h1>
          
          <p className="text-lg text-background/80 mb-8 max-w-lg">
            Experience the rich heritage of Indian cuisine. From aromatic biryanis to creamy curries, 
            every dish is crafted with love using traditional recipes passed down through generations.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/menu">
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-background/10 border-background/20 text-background hover:bg-background/20">
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-background/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
