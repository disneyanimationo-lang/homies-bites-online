import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-4">
              Homies Restro
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Where every meal feels like home. Serving delicious comfort food with love since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/menu" className="text-sm text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Menu
              </Link>
              <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/gallery" className="text-sm text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>123 Food Street, Downtown</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>hello@homiesrestro.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Opening Hours</h4>
            <div className="flex flex-col gap-2 text-sm text-secondary-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon - Thu: 11am - 10pm</span>
              </div>
              <div className="pl-6">
                <span>Fri - Sat: 11am - 11pm</span>
              </div>
              <div className="pl-6">
                <span>Sunday: 10am - 9pm</span>
              </div>
            </div>
            
            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>© 2024 Homies Restro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
