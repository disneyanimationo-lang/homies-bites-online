import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Package, Settings, LogOut, Plus, Pencil, Trash2, Clock, CheckCircle, Truck, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { useUser, Address } from '@/context/UserContext';
import { toast } from '@/hooks/use-toast';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const statusConfig = {
  pending: { label: 'Pending', color: 'bg-yellow-500', icon: Clock },
  confirmed: { label: 'Confirmed', color: 'bg-blue-500', icon: CheckCircle },
  preparing: { label: 'Preparing', color: 'bg-orange-500', icon: ChefHat },
  out_for_delivery: { label: 'Out for Delivery', color: 'bg-purple-500', icon: Truck },
  delivered: { label: 'Delivered', color: 'bg-green-500', icon: CheckCircle },
  cancelled: { label: 'Cancelled', color: 'bg-red-500', icon: Clock }
};

export default function Profile() {
  const { user, isLoggedIn, logout, updateProfile, addAddress, updateAddress, deleteAddress } = useUser();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', phone: '' });
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [addressForm, setAddressForm] = useState({
    label: '',
    fullAddress: '',
    city: '',
    pincode: '',
    phone: '',
    isDefault: false
  });

  if (!isLoggedIn || !user) {
    navigate('/auth');
    return null;
  }

  const handleLogout = () => {
    logout();
    toast({ title: 'Logged out', description: 'You have been logged out successfully.' });
    navigate('/');
  };

  const handleEditProfile = () => {
    setEditForm({ name: user.name, phone: user.phone });
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    updateProfile({ name: editForm.name, phone: editForm.phone });
    setIsEditing(false);
    toast({ title: 'Profile updated', description: 'Your profile has been saved.' });
  };

  const openAddressDialog = (address?: Address) => {
    if (address) {
      setEditingAddress(address);
      setAddressForm({
        label: address.label,
        fullAddress: address.fullAddress,
        city: address.city,
        pincode: address.pincode,
        phone: address.phone,
        isDefault: address.isDefault
      });
    } else {
      setEditingAddress(null);
      setAddressForm({ label: '', fullAddress: '', city: '', pincode: '', phone: user.phone, isDefault: false });
    }
    setIsAddressDialogOpen(true);
  };

  const handleSaveAddress = () => {
    if (editingAddress) {
      updateAddress(editingAddress.id, addressForm);
      toast({ title: 'Address updated' });
    } else {
      addAddress(addressForm);
      toast({ title: 'Address added' });
    }
    setIsAddressDialogOpen(false);
  };

  const handleDeleteAddress = (id: string) => {
    deleteAddress(id);
    toast({ title: 'Address deleted' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Account</h1>
              <p className="text-muted-foreground">Manage your profile, addresses and orders</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="addresses" className="gap-2">
                <MapPin className="h-4 w-4" />
                Addresses
              </TabsTrigger>
              <TabsTrigger value="orders" className="gap-2">
                <Package className="h-4 w-4" />
                Orders
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details</CardDescription>
                    </div>
                    {!isEditing && (
                      <Button variant="outline" size="sm" onClick={handleEditProfile}>
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={editForm.phone}
                            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input value={user.email} disabled className="bg-muted" />
                        <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={handleSaveProfile}>Save Changes</Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                      </div>
                    </>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p className="font-medium">{user.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone Number</p>
                        <p className="font-medium">{user.phone}</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{user.email}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Addresses Tab */}
            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Saved Addresses</CardTitle>
                      <CardDescription>Manage your delivery addresses</CardDescription>
                    </div>
                    <Dialog open={isAddressDialogOpen} onOpenChange={setIsAddressDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm" onClick={() => openAddressDialog()}>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Address
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{editingAddress ? 'Edit Address' : 'Add New Address'}</DialogTitle>
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
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="default"
                              checked={addressForm.isDefault}
                              onCheckedChange={(checked) => setAddressForm({ ...addressForm, isDefault: !!checked })}
                            />
                            <Label htmlFor="default" className="text-sm">Set as default address</Label>
                          </div>
                          <Button onClick={handleSaveAddress} className="w-full">
                            {editingAddress ? 'Update Address' : 'Save Address'}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  {user.addresses.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No addresses saved yet</p>
                    </div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {user.addresses.map((address) => (
                        <div
                          key={address.id}
                          className="p-4 border border-border rounded-lg relative"
                        >
                          {address.isDefault && (
                            <Badge className="absolute -top-2 left-3 text-xs">Default</Badge>
                          )}
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">{address.label}</h4>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openAddressDialog(address)}>
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => handleDeleteAddress(address.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{address.fullAddress}</p>
                          <p className="text-sm text-muted-foreground">{address.city} - {address.pincode}</p>
                          <p className="text-sm text-muted-foreground mt-1">{address.phone}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>Track and view your past orders</CardDescription>
                </CardHeader>
                <CardContent>
                  {user.orders.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No orders yet</p>
                      <Button className="mt-4" onClick={() => navigate('/menu')}>
                        Browse Menu
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {user.orders.map((order) => {
                        const status = statusConfig[order.status];
                        const StatusIcon = status.icon;
                        return (
                          <div key={order.id} className="p-4 border border-border rounded-lg">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                              <div className="flex items-center gap-3">
                                <span className="font-semibold">#{order.id}</span>
                                <Badge variant="secondary" className="capitalize">
                                  {order.orderType.replace('_', ' ')}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className={`h-2 w-2 rounded-full ${status.color}`} />
                                <span className="text-sm font-medium">{status.label}</span>
                              </div>
                            </div>
                            <div className="space-y-1 mb-3">
                              {order.items.map((item, i) => (
                                <div key={i} className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">
                                    {item.quantity}x {item.name}
                                  </span>
                                  <span>₹{(item.price * item.quantity).toFixed(0)}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-between items-center pt-3 border-t border-border">
                              <span className="text-sm text-muted-foreground">
                                {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </span>
                              <div className="flex items-center gap-3">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => navigate(`/track/${order.id}`)}
                                >
                                  Track Order
                                </Button>
                                <span className="font-bold text-primary">₹{order.total.toFixed(0)}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
