import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: MapPin, title: 'Address', details: ['123 Food Street', 'Downtown, City 12345'] },
  { icon: Phone, title: 'Phone', details: ['(555) 123-4567', '(555) 987-6543'] },
  { icon: Mail, title: 'Email', details: ['hello@homiesrestro.com', 'orders@homiesrestro.com'] },
  { icon: Clock, title: 'Hours', details: ['Mon-Thu: 11am - 10pm', 'Fri-Sat: 11am - 11pm', 'Sun: 10am - 9pm'] }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have questions, feedback, or want to make a reservation? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Visit or Reach Out
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, title, details }) => (
                <Card key={title} className="bg-card">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <Icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">{title}</h3>
                        {details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Map View</p>
                <p className="text-sm text-muted-foreground">123 Food Street, Downtown</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card">
              <CardContent className="p-6">
                <h2 className="text-2xl font-serif font-bold text-card-foreground mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1 block">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-1 block">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-1 block">
                        Phone (optional)
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
