import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChefHat, Clock, Heart, Award } from 'lucide-react';
import galleryChef from '@/assets/gallery-chef.jpg';

const features = [
  { icon: ChefHat, title: 'Expert Chefs', description: 'Trained culinary masters' },
  { icon: Clock, title: 'Fresh Daily', description: 'Made from scratch' },
  { icon: Heart, title: 'Made with Love', description: 'Family recipes' },
  { icon: Award, title: 'Award Winning', description: 'Recognized excellence' }
];

export function AboutPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={galleryChef}
              alt="Our Chef in action"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg hidden md:block">
              <p className="text-4xl font-bold">14+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mt-2 mb-6">
              Bringing Homestyle Flavors <br />to Your Table
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded in 2010, Homies Restro started with a simple dream: to bring the warmth 
              and comfort of home-cooked meals to everyone. Our recipes have been passed down 
              through generations, each dish telling a story of love, tradition, and culinary passion.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Today, we continue that legacy with the same dedication, using only the freshest 
              local ingredients and time-honored cooking techniques that made us a neighborhood favorite.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{title}</h4>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
