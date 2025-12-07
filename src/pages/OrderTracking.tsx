import { useParams, useNavigate, Link } from 'react-router-dom';
import { useUser, Order } from '@/context/UserContext';
import { useEffect, useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  ChefHat, 
  Bike, 
  MapPin, 
  Package,
  ArrowLeft,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const statusSteps = [
  { key: 'confirmed', label: 'Order Confirmed', icon: CheckCircle },
  { key: 'preparing', label: 'Preparing', icon: ChefHat },
  { key: 'out_for_delivery', label: 'Out for Delivery', icon: Bike },
  { key: 'delivered', label: 'Delivered', icon: MapPin }
];

const pickupSteps = [
  { key: 'confirmed', label: 'Order Confirmed', icon: CheckCircle },
  { key: 'preparing', label: 'Preparing', icon: ChefHat },
  { key: 'delivered', label: 'Ready for Pickup', icon: Package }
];

const dineInSteps = [
  { key: 'confirmed', label: 'Order Confirmed', icon: CheckCircle },
  { key: 'preparing', label: 'Preparing', icon: ChefHat },
  { key: 'delivered', label: 'Served', icon: CheckCircle }
];

function getEstimatedTime(order: Order): { minutes: number; label: string } {
  const orderTime = new Date(order.createdAt).getTime();
  const now = Date.now();
  const elapsedMinutes = Math.floor((now - orderTime) / 60000);

  const baseTimes = {
    delivery: { pending: 45, confirmed: 40, preparing: 25, out_for_delivery: 10, delivered: 0 },
    pickup: { pending: 30, confirmed: 25, preparing: 15, delivered: 0 },
    dine_in: { pending: 25, confirmed: 20, preparing: 10, delivered: 0 }
  };

  const times = baseTimes[order.orderType] || baseTimes.delivery;
  const baseMinutes = times[order.status as keyof typeof times] || 0;
  
  // Simulate some variance
  const remaining = Math.max(0, baseMinutes - Math.min(elapsedMinutes, 10));

  if (order.status === 'delivered') {
    return { minutes: 0, label: order.orderType === 'dine_in' ? 'Served' : order.orderType === 'pickup' ? 'Ready!' : 'Delivered' };
  }
  if (order.status === 'cancelled') {
    return { minutes: 0, label: 'Cancelled' };
  }
  
  return { 
    minutes: remaining, 
    label: remaining <= 5 ? 'Any moment now!' : `${remaining} mins` 
  };
}

function getProgress(order: Order): number {
  const steps = order.orderType === 'pickup' ? pickupSteps : order.orderType === 'dine_in' ? dineInSteps : statusSteps;
  
  if (order.status === 'pending') return 10;
  if (order.status === 'cancelled') return 0;
  
  const statusMap: Record<string, number> = {
    confirmed: 25,
    preparing: 50,
    out_for_delivery: 75,
    delivered: 100
  };
  
  return statusMap[order.status] || 0;
}

export default function OrderTracking() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { user, isLoggedIn } = useUser();
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth');
      return;
    }
  }, [isLoggedIn, navigate]);

  // Update time every minute for ETA
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(Date.now()), 60000);
    return () => clearInterval(interval);
  }, []);

  const order = user?.orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Order Not Found</h2>
            <p className="text-muted-foreground mb-4">We couldn't find this order.</p>
            <Button asChild>
              <Link to="/profile">View All Orders</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const steps = order.orderType === 'pickup' ? pickupSteps : order.orderType === 'dine_in' ? dineInSteps : statusSteps;
  const eta = getEstimatedTime(order);
  const progress = getProgress(order);

  const getCurrentStepIndex = () => {
    if (order.status === 'pending') return -1;
    return steps.findIndex(s => s.key === order.status);
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/profile">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Profile
            </Link>
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Track Order</h1>
          <p className="text-muted-foreground">Order #{order.id}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Tracking Card */}
          <div className="lg:col-span-2 space-y-6">
            {/* ETA Card */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Estimated Time</p>
                      <p className="text-3xl font-bold text-foreground">{eta.label}</p>
                    </div>
                  </div>
                  {order.status !== 'delivered' && order.status !== 'cancelled' && (
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {order.orderType === 'delivery' ? 'Arriving at' : 
                         order.orderType === 'pickup' ? 'Ready by' : 'Serving at'}
                      </p>
                      <p className="text-lg font-medium text-foreground">
                        {new Date(Date.now() + eta.minutes * 60000).toLocaleTimeString('en-IN', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  )}
                </div>
                <Progress value={progress} className="mt-6 h-2" />
              </CardContent>
            </Card>

            {/* Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isCompleted = currentStepIndex >= index;
                    const isCurrent = currentStepIndex === index;
                    
                    return (
                      <div key={step.key} className="flex items-start gap-4">
                        <div className={`
                          relative flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center
                          ${isCompleted 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'}
                          ${isCurrent ? 'ring-4 ring-primary/20' : ''}
                        `}>
                          <Icon className="h-5 w-5" />
                          {index < steps.length - 1 && (
                            <div className={`
                              absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-8
                              ${isCompleted ? 'bg-primary' : 'bg-muted'}
                            `} />
                          )}
                        </div>
                        <div className="pt-2">
                          <p className={`font-medium ${isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {step.label}
                          </p>
                          {isCurrent && order.status !== 'delivered' && (
                            <p className="text-sm text-primary animate-pulse">In progress...</p>
                          )}
                          {isCompleted && order.status === 'delivered' && index === steps.length - 1 && (
                            <p className="text-sm text-green-600 dark:text-green-400">
                              Completed at {new Date(order.createdAt).toLocaleTimeString('en-IN', { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Details Sidebar */}
          <div className="space-y-6">
            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-foreground">
                        {item.quantity}x {item.name}
                      </span>
                      <span className="text-muted-foreground">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-primary">₹{order.total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery/Pickup Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {order.orderType === 'delivery' ? 'Delivery Address' : 
                   order.orderType === 'pickup' ? 'Pickup Location' : 'Table Info'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {order.orderType === 'delivery' && order.address && (
                  <div className="space-y-2">
                    <p className="font-medium">{order.address.label}</p>
                    <p className="text-sm text-muted-foreground">{order.address.fullAddress}</p>
                    <p className="text-sm text-muted-foreground">{order.address.city} - {order.address.pincode}</p>
                  </div>
                )}
                {order.orderType === 'pickup' && (
                  <div className="space-y-2">
                    <p className="font-medium">Homies Restro</p>
                    <p className="text-sm text-muted-foreground">42, MG Road, Andheri West</p>
                    <p className="text-sm text-muted-foreground">Mumbai - 400053</p>
                  </div>
                )}
                {order.orderType === 'dine_in' && order.tableNumber && (
                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground">Table Number</p>
                    <p className="text-4xl font-bold text-primary">{order.tableNumber}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Need help?</p>
                    <p className="font-medium text-foreground">+91 22 2634 5678</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}