import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import galleryPatio from '@/assets/gallery-patio.jpg';

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${galleryPatio})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-primary/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 text-center z-10">
        <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6">
          Order Now • Abhi Order Karein
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-background mb-6 leading-tight">
          Ready to Experience <br className="hidden md:block" />
          <span className="text-primary">Homies?</span>
        </h2>
        <p className="text-xl text-background/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Order online for pickup or delivery, or make a reservation for an unforgettable dining experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            <Link to="/menu">
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/10 border-background/30 text-background hover:bg-background/20 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            <a href="tel:5551234567">
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
