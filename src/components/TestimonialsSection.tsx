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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Hamare Mehman Kya Kehte Hain
          </h2>
          <p className="text-muted-foreground mt-2">What Our Guests Say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="bg-card">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
