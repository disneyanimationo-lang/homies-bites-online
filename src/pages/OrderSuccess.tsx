import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId;

  if (!orderId) {
    navigate('/');
    return null;
  }

  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Order Placed!</h1>
          <p className="text-muted-foreground">Thank you for your order. We're preparing your delicious food.</p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Package className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">Order #{orderId}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              You'll receive updates about your order status. You can also track it from your profile.
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild>
            <Link to={`/track/${orderId}`}>
              Track Order
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
