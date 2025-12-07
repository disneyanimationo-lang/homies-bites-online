import { Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { MenuItem } from '@/data/menuData';
import { toast } from '@/hooks/use-toast';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your order.`,
    });
  };

  return (
    <Card className="overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-card border-border/50 hover:border-primary/30">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {item.isPopular && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground shadow-lg z-20">
            <Star className="h-3 w-3 mr-1 fill-current" />
            Popular
          </Badge>
        )}
        <div className="absolute top-3 right-3 z-20">
          <span className="text-lg font-bold text-primary-foreground bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
            ₹{item.price}
          </span>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-semibold text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        <Button 
          onClick={handleAddToCart}
          className="w-full group/btn overflow-hidden relative"
          size="sm"
        >
          <span className="flex items-center justify-center gap-2 group-hover/btn:translate-x-1 transition-transform">
            <Plus className="h-4 w-4" />
            Add to Order
          </span>
        </Button>
      </CardContent>
    </Card>
  );
}
