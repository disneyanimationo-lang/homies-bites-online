import { HeroSection } from '@/components/HeroSection';
import { FeaturedDishes } from '@/components/FeaturedDishes';
import { AboutPreview } from '@/components/AboutPreview';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedDishes />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Index;
