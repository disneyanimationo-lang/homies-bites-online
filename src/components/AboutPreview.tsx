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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={galleryChef}
              alt="Our Chef preparing Indian delicacies"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg hidden md:block">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Hamari Kahani • Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mt-2 mb-6">
              Bringing Authentic Indian <br />Flavours to Your Table
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded in 1999, Homies Restro started with a simple dream: to bring the authentic 
              taste of India to every plate. Our recipes have been passed down from our grandmothers' 
              kitchens in Lucknow and Punjab, each dish telling a story of tradition and love.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From the bustling streets of Delhi to the royal kitchens of Hyderabad, we bring you 
              the finest culinary traditions. Our chefs use hand-ground masalas and fresh ingredients 
              sourced from local mandis to create dishes that transport you to the heart of India.
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
