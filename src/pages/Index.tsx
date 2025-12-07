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
    <>
      {activeOrder && (
        <div className="bg-primary border-b border-primary/80 relative z-50">
          <div className="container mx-auto px-4 py-3">
            <Link 
              to={`/track/${activeOrder.id}`}
              className="flex items-center justify-center gap-3 text-sm hover:opacity-90 transition-opacity"
            >
              <Truck className="w-4 h-4 text-primary-foreground animate-pulse" />
              <span className="text-primary-foreground">
                Your order <span className="font-semibold">#{activeOrder.id}</span> is {activeOrder.status.replace('_', ' ')}
              </span>
              <span className="text-primary-foreground font-medium underline underline-offset-2">Track Order →</span>
            </Link>
          </div>
        </div>
      )}
      <main>
        <HeroSection />
        <FeaturedDishes />
        <AboutPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
};

export default Index;
