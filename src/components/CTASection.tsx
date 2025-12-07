import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import galleryPatio from '@/assets/gallery-patio.jpg';

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${galleryPatio})` }}
      >
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-background mb-6">
          Ready to Experience <span className="text-primary">Homies?</span>
        </h2>
        <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
          Order online for pickup or delivery, or make a reservation for an unforgettable dining experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/menu">
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-background/10 border-background/20 text-background hover:bg-background/20">
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
