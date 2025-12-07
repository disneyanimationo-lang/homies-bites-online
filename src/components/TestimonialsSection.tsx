import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Food Blogger',
    content: 'Homies Restro ka Butter Chicken aur Dal Makhani ekdum authentic hai! Bilkul ghar jaisa swaad. Mumbai mein best Indian food yahi milta hai.',
    rating: 5
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    role: 'Regular Customer',
    content: 'Main 3 saal se yahan aa raha hoon. Biryani ka taste hamesha consistent rehta hai. Staff bhi bahut friendly hai. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Ananya Desai',
    role: 'Zomato Elite',
    content: 'Paneer Tikka aur Garlic Naan ka combination zabardast hai! Family dinners ke liye perfect jagah. Ambiance bhi bahut achha hai.',
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-2">
            Hamare Mehman Kya Kehte Hain
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">What Our Guests Say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-base italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
