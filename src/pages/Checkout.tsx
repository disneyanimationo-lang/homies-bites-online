import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Store, UtensilsCrossed, MapPin, Clock, CreditCard, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCart } from '@/context/CartContext';
import { useUser, Address } from '@/context/UserContext';
import { toast } from '@/hooks/use-toast';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

type OrderType = 'delivery' | 'pickup' | 'dine_in';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const { user, isLoggedIn, addAddress, addOrder } = useUser();
  const navigate = useNavigate();

  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    user?.addresses.find(a => a.isDefault)?.id || user?.addresses[0]?.id || ''
  );
  const [tableNumber, setTableNumber] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [addressForm, setAddressForm] = useState({
    label: '',
    fullAddress: '',
    city: '',
    pincode: '',
    phone: user?.phone || '',
    isDefault: false
  });

  const deliveryFee = orderType === 'delivery' ? 49 : 0;
  const tax = totalPrice * 0.05;
  const grandTotal = totalPrice + deliveryFee + tax;

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  if (!isLoggedIn) {
    navigate('/auth');
    return null;
  }

  const handleSaveAddress = () => {
    addAddress(addressForm);
    setIsAddressDialogOpen(false);
    toast({ title: 'Address added' });
  };

  const handlePlaceOrder = async () => {
    if (orderType === 'delivery' && !selectedAddressId) {
      toast({ title: 'Please select a delivery address', variant: 'destructive' });
      return;
    }
    if (orderType === 'dine_in' && !tableNumber) {
      toast({ title: 'Please enter table number', variant: 'destructive' });
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const selectedAddress = user?.addresses.find(a => a.id === selectedAddressId);

    const orderId = addOrder({
      items: items.map(i => ({ name: i.name, quantity: i.quantity, price: i.price })),
      total: grandTotal,
      status: 'confirmed',
      orderType,
      address: orderType === 'delivery' ? selectedAddress : undefined,
      tableNumber: orderType === 'dine_in' ? parseInt(tableNumber) : undefined,
      scheduledTime: scheduledTime || undefined
    });

    clearCart();
    setIsProcessing(false);

    navigate('/order-success', { state: { orderId } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {/* Order Type Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Order Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={orderType}
                    onValueChange={(v) => setOrderType(v as OrderType)}
                    className="grid grid-cols-3 gap-4"
                  >
                    <Label
                      htmlFor="delivery"
                      className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${
                        orderType === 'delivery' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="delivery" id="delivery" className="sr-only" />
                      <Truck className={`h-6 w-6 mb-2 ${orderType === 'delivery' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={`text-sm font-medium ${orderType === 'delivery' ? 'text-primary' : ''}`}>Delivery</span>
                    </Label>
                    <Label
                      htmlFor="pickup"
                      className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${
                        orderType === 'pickup' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="pickup" id="pickup" className="sr-only" />
                      <Store className={`h-6 w-6 mb-2 ${orderType === 'pickup' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={`text-sm font-medium ${orderType === 'pickup' ? 'text-primary' : ''}`}>Pickup</span>
                    </Label>
                    <Label
                      htmlFor="dine_in"
                      className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${
                        orderType === 'dine_in' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="dine_in" id="dine_in" className="sr-only" />
                      <UtensilsCrossed className={`h-6 w-6 mb-2 ${orderType === 'dine_in' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={`text-sm font-medium ${orderType === 'dine_in' ? 'text-primary' : ''}`}>Dine-in</span>
                    </Label>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              {orderType === 'delivery' && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Delivery Address</CardTitle>
                      <Dialog open={isAddressDialogOpen} onOpenChange={setIsAddressDialogOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            Add New
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add New Address</DialogTitle>
                            <DialogDescription>Enter your delivery address details</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label>Label</Label>
                              <Input
                                placeholder="Home, Office, etc."
                                value={addressForm.label}
                                onChange={(e) => setAddressForm({ ...addressForm, label: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Full Address</Label>
                              <Input
                                placeholder="House no., Street, Landmark"
                                value={addressForm.fullAddress}
                                onChange={(e) => setAddressForm({ ...addressForm, fullAddress: e.target.value })}
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label>City</Label>
                                <Input
                                  placeholder="Mumbai"
                                  value={addressForm.city}
                                  onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>Pincode</Label>
                                <Input
                                  placeholder="400001"
                                  value={addressForm.pincode}
                                  onChange={(e) => setAddressForm({ ...addressForm, pincode: e.target.value })}
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label>Phone Number</Label>
                              <Input
                                placeholder="+91 9876543210"
                                value={addressForm.phone}
                                onChange={(e) => setAddressForm({ ...addressForm, phone: e.target.value })}
                              />
                            </div>
                            <Button onClick={handleSaveAddress} className="w-full">
                              Save Address
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {user?.addresses.length === 0 ? (
                      <div className="text-center py-6 text-muted-foreground">
                        <MapPin className="h-10 w-10 mx-auto mb-3 opacity-50" />
                        <p>No saved addresses. Add one to continue.</p>
                      </div>
                    ) : (
                      <RadioGroup value={selectedAddressId} onValueChange={setSelectedAddressId} className="space-y-3">
                        {user?.addresses.map((address) => (
                          <Label
                            key={address.id}
                            htmlFor={address.id}
                            className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                              selectedAddressId === address.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">{address.label}</span>
                                {address.isDefault && (
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Default</span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{address.fullAddress}</p>
                              <p className="text-sm text-muted-foreground">{address.city} - {address.pincode}</p>
                            </div>
                          </Label>
                        ))}
                      </RadioGroup>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Pickup Info */}
              {orderType === 'pickup' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pickup Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Homies Restro</p>
                          <p className="text-sm text-muted-foreground">42, MG Road, Bandra West</p>
                          <p className="text-sm text-muted-foreground">Mumbai - 400050</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <Label htmlFor="pickup-time">Preferred Pickup Time (Optional)</Label>
                      <Input
                        id="pickup-time"
                        type="time"
                        value={scheduledTime}
                        onChange={(e) => setScheduledTime(e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Dine-in Info */}
              {orderType === 'dine_in' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Table Reservation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="table">Table Number *</Label>
                      <Input
                        id="table"
                        type="number"
                        placeholder="Enter your table number"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        min={1}
                        max={50}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dine-time">Preferred Time (Optional)</Label>
                      <Input
                        id="dine-time"
                        type="time"
                        value={scheduledTime}
                        onChange={(e) => setScheduledTime(e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Payment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 border border-primary rounded-lg bg-primary/5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Cash on Delivery / Pay at Counter</p>
                      <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                    </div>
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.quantity}x {item.name}
                        </span>
                        <span>₹{(item.price * item.quantity).toFixed(0)}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{totalPrice.toFixed(0)}</span>
                    </div>
                    {orderType === 'delivery' && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery Fee</span>
                        <span>₹{deliveryFee}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">GST (5%)</span>
                      <span>₹{tax.toFixed(0)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">₹{grandTotal.toFixed(0)}</span>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handlePlaceOrder}
                    disabled={isProcessing || (orderType === 'delivery' && !selectedAddressId) || (orderType === 'dine_in' && !tableNumber)}
                  >
                    {isProcessing ? 'Processing...' : `Place Order • ₹${grandTotal.toFixed(0)}`}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
