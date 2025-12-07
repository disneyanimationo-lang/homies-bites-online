import { menuItems } from '@/data/menuData';
import { MenuCard } from '@/components/MenuCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function FeaturedDishes() {
  const popularItems = menuItems.filter(item => item.isPopular).slice(0, 4);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Chef's Picks
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Popular Dishes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover our most loved dishes, carefully crafted with the finest ingredients 
            and served with passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/menu">
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
