import { HeroSection } from '@/components/HeroSection';
import { FeaturedDishes } from '@/components/FeaturedDishes';
import { AboutPreview } from '@/components/AboutPreview';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { useUser } from '@/context/UserContext';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

const Index = () => {
  const { user } = useUser();
  
  const activeOrder = user?.orders.find(order => 
    ['pending', 'confirmed', 'preparing', 'out_for_delivery'].includes(order.status)
  );

  return (
    <main>
      {activeOrder && (
        <div className="bg-primary/10 border-b border-primary/20">
          <div className="container mx-auto px-4 py-3">
            <Link 
              to={`/track/${activeOrder.id}`}
              className="flex items-center justify-center gap-3 text-sm hover:opacity-80 transition-opacity"
            >
              <Truck className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-foreground">
                Your order <span className="font-semibold text-primary">#{activeOrder.id}</span> is {activeOrder.status.replace('_', ' ')}
              </span>
              <span className="text-primary font-medium underline underline-offset-2">Track Order →</span>
            </Link>
          </div>
        </div>
      )}
      <HeroSection />
      <FeaturedDishes />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Index;
