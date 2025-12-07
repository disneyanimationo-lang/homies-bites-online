import { ChefHat, Leaf, Heart, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import galleryInterior from '@/assets/gallery-interior.jpg';
import galleryChef from '@/assets/gallery-chef.jpg';

const values = [
  { icon: Leaf, title: 'Taaza Masale', description: 'We use fresh hand-ground spices sourced from Kerala and Kashmir daily.' },
  { icon: Heart, title: 'Dil Se Bana', description: 'Every dish is prepared with love, just like Maa ke haath ka khana.' },
  { icon: Users, title: 'Daadi-Naani Ki Recipes', description: 'Authentic recipes passed down through four generations.' },
  { icon: Award, title: 'Award Winning', description: 'Best North Indian Restaurant - Times Food Awards 2023.' },
  { icon: ChefHat, title: 'Master Chefs', description: 'Our chefs trained in the royal kitchens of Lucknow and Hyderabad.' },
  { icon: Clock, title: 'Quick Service', description: 'Delicious food served hot and fresh, no long waits.' }
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
            Hamari Kahani
          </h1>
          <p className="text-lg text-background/80 max-w-xl mx-auto">
            A journey of flavours, traditions, and love for Indian cuisine
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Since 1999
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                From Our Family to Yours
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Homies Restro ki shuruat 1999 mein Sharma Parivaar ne ki thi. Humare founders, 
                  Shri Ramesh Sharma aur Shrimati Sunita Sharma, apni Daadi-Naani ki recipes ko 
                  duniya ke saath share karna chahte the.
                </p>
                <p>
                  What started as a small dhaba in Bandra has now become Mumbai's beloved destination 
                  for authentic North Indian cuisine. Our signature Butter Chicken, Dal Makhani, and 
                  Biryani have earned us loyal customers across generations.
                </p>
                <p>
                  Aaj bhi hum wohi purane tarike se khana banate hain - hand-ground masalon ke saath, 
                  tandoor mein, aur sabse important - dil se! Kyunki humare yahan, aap sirf customer 
                  nahi, parivar hain.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={galleryChef} 
                alt="Chef Ramesh preparing authentic Indian cuisine" 
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
              Hamare Values
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mt-2">
              What We Believe In
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
            Hamari Team
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
            Meet the Homies Family
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Behind every delicious meal is our passionate team. From our head chef to our servers, 
            everyone works with dedication to give you the best dining experience.
          </p>
          <div className="bg-accent rounded-lg p-8 max-w-3xl mx-auto">
            <p className="text-lg text-accent-foreground italic">
              "Hum sirf khana nahi banate—hum yaadein banate hain. Har dish mein humara pyaar 
              aur parampara jhalkti hai. Aapka har visit humari khushi hai."
            </p>
            <p className="mt-4 font-semibold text-foreground">— Sunita Sharma, Founder</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
