import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: MapPin, title: 'Address', details: ['42, MG Road, Bandra West', 'Mumbai, Maharashtra 400050'] },
  { icon: Phone, title: 'Phone', details: ['+91 22 2640 1234', '+91 98765 43210'] },
  { icon: Mail, title: 'Email', details: ['namaste@homiesrestro.in', 'orders@homiesrestro.in'] },
  { icon: Clock, title: 'Timings', details: ['Mon-Thu: 11am - 11pm', 'Fri-Sat: 11am - 12am', 'Sun: 10am - 11pm'] }
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
      description: "Dhanyavaad! Hum jaldi aapse sampark karenge.",
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
            Sampark Karein
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Koi sawaal hai? Table book karna hai? Ya feedback dena hai? Hum sunne ke liye taiyaar hain!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Miliye Humse
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
                <p className="text-muted-foreground font-medium">Find Us Here</p>
                <p className="text-sm text-muted-foreground">42, MG Road, Bandra West, Mumbai</p>
                <p className="text-xs text-muted-foreground mt-1">Near Bandra Station (West Exit)</p>
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
                      Aapka Naam
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
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
                        placeholder="rahul@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-1 block">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1 block">
                      Your Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hum aapki kaise madad kar sakte hain?"
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
