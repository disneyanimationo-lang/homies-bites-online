import { ChefHat, Leaf, Heart, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import galleryInterior from '@/assets/gallery-interior.jpg';
import galleryChef from '@/assets/gallery-chef.jpg';

const values = [
  { icon: Leaf, title: 'Fresh Ingredients', description: 'We source locally and use only the freshest seasonal produce.' },
  { icon: Heart, title: 'Made with Love', description: 'Every dish is prepared with care and passion for great food.' },
  { icon: Users, title: 'Family Recipes', description: 'Our recipes have been passed down through generations.' },
  { icon: Award, title: 'Award Winning', description: 'Recognized for excellence in dining and hospitality.' },
  { icon: ChefHat, title: 'Expert Chefs', description: 'Our team brings decades of culinary experience.' },
  { icon: Clock, title: 'Quick Service', description: 'Great food doesn\'t have to mean long waits.' }
];

const About = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryInterior})` }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-background mb-4">
            Our Story
          </h1>
          <p className="text-lg text-background/80 max-w-xl mx-auto">
            A passion for food, a commitment to community
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Since 2010
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                From Our Family to Yours
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Homies Restro began as a small family kitchen with a big dream. Our founders, 
                  Maria and Tony Garcia, wanted to share the flavors they grew up with—dishes 
                  that brought comfort, joy, and a sense of belonging.
                </p>
                <p>
                  What started as weekend dinners for friends soon became a local phenomenon. 
                  Word spread about our signature burger, our grandma's pasta recipe, and the 
                  warmth of our hospitality.
                </p>
                <p>
                  Today, we've grown, but our values remain the same. We still use the same 
                  family recipes, source from local farmers, and treat every guest like family. 
                  Because at Homies, you're never just a customer—you're part of our story.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={galleryChef} 
                alt="Our Head Chef" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              What We Believe
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mt-2">
              Our Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="bg-background">
                <CardContent className="p-6">
                  <div className="p-3 bg-accent rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            The Team
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
            Meet the Family
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Behind every great meal is an even greater team. Our passionate crew works tirelessly 
            to bring you the best dining experience, every single day.
          </p>
          <div className="bg-accent rounded-lg p-8 max-w-3xl mx-auto">
            <p className="text-lg text-accent-foreground italic">
              "We don't just cook food—we create memories. Every dish that leaves our kitchen 
              carries a piece of our heart."
            </p>
            <p className="mt-4 font-semibold text-foreground">— Maria Garcia, Founder</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
