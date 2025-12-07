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
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-card">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.isPopular && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            <Star className="h-3 w-3 mr-1" />
            Popular
          </Badge>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-card-foreground">{item.name}</h3>
          <span className="text-lg font-bold text-primary">₹{item.price}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>
        <Button 
          onClick={handleAddToCart}
          className="w-full"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Order
        </Button>
      </CardContent>
    </Card>
  );
}
