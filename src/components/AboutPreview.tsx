import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChefHat, Clock, Heart, Award } from 'lucide-react';
import galleryChef from '@/assets/gallery-chef.jpg';

const features = [
  { icon: ChefHat, title: 'Master Chefs', description: 'Trained in authentic Indian cuisine' },
  { icon: Clock, title: 'Taaza Ingredients', description: 'Fresh spices daily' },
  { icon: Heart, title: 'Dil Se Bana', description: 'Made with love' },
  { icon: Award, title: 'Award Winning', description: 'Best Indian restaurant 2023' }
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-card via-card to-accent/20 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={galleryChef}
              alt="Our Chef preparing Indian delicacies"
              className="w-full rounded-2xl shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 rounded-2xl hidden md:block shadow-xl z-20">
              <p className="text-5xl font-bold">25+</p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              Hamari Kahani • Our Story
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-card-foreground mt-2 mb-8 leading-tight">
              Bringing Authentic Indian <br />Flavours to Your Table
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Founded in 1999, Homies Restro started with a simple dream: to bring the authentic 
              taste of India to every plate. Our recipes have been passed down from our grandmothers' 
              kitchens in Lucknow and Punjab, each dish telling a story of tradition and love.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
              From the bustling streets of Delhi to the royal kitchens of Hyderabad, we bring you 
              the finest culinary traditions. Our chefs use hand-ground masalas and fresh ingredients 
              sourced from local mandis to create dishes that transport you to the heart of India.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors group/feature">
                  <div className="p-3 bg-gradient-to-br from-primary to-primary/70 rounded-xl shadow-lg group-hover/feature:scale-110 transition-transform">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{title}</h4>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
