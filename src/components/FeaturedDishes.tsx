import { menuItems } from '@/data/menuData';
import { MenuCard } from '@/components/MenuCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function FeaturedDishes() {
  const popularItems = menuItems.filter(item => item.isPopular).slice(0, 4);

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background to-card/30 relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            Chef's Special
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-2">
            Lokpriya Vyanjan
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Discover our most loved dishes, crafted with authentic Indian spices 
            and served with love. Ye dishes sabki favourite hain!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button asChild variant="outline" size="lg" className="group border-primary/30 hover:border-primary hover:bg-primary/5 shadow-lg">
            <Link to="/menu">
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
