import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Address {
  id: string;
  label: string;
  fullAddress: string;
  city: string;
  pincode: string;
  phone: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  orderType: 'delivery' | 'pickup' | 'dine_in';
  address?: Address;
  tableNumber?: number;
  scheduledTime?: string;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
  orders: Order[];
}

interface UserContextType {
  user: UserProfile | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string, phone: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, address: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  addOrder: (order: Omit<Order, 'id' | 'createdAt'>) => string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock user data
const MOCK_USERS: { email: string; password: string; profile: UserProfile }[] = [
  {
    email: 'demo@homies.com',
    password: 'demo123',
    profile: {
      id: '1',
      name: 'Rahul Sharma',
      email: 'demo@homies.com',
      phone: '+91 9876543210',
      addresses: [
        {
          id: 'addr1',
          label: 'Home',
          fullAddress: '42, Sunrise Apartments, MG Road',
          city: 'Mumbai',
          pincode: '400001',
          phone: '+91 9876543210',
          isDefault: true
        },
        {
          id: 'addr2',
          label: 'Office',
          fullAddress: 'WeWork, BKC Complex, Bandra',
          city: 'Mumbai',
          pincode: '400051',
          phone: '+91 9876543210',
          isDefault: false
        }
      ],
      orders: [
        {
          id: 'ORD001',
          items: [
            { name: 'Butter Chicken', quantity: 1, price: 399 },
            { name: 'Garlic Naan', quantity: 2, price: 79 },
            { name: 'Mango Lassi', quantity: 2, price: 129 }
          ],
          total: 815,
          status: 'delivered',
          orderType: 'delivery',
          createdAt: '2024-01-15T18:30:00Z'
        },
        {
          id: 'ORD002',
          items: [
            { name: 'Paneer Tikka', quantity: 1, price: 299 },
            { name: 'Dal Makhani', quantity: 1, price: 279 },
            { name: 'Butter Naan', quantity: 3, price: 59 }
          ],
          total: 755,
          status: 'preparing',
          orderType: 'pickup',
          createdAt: new Date().toISOString()
        }
      ]
    }
  }
];

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('homies_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const saveUser = (userData: UserProfile | null) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('homies_user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('homies_user');
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const mockUser = MOCK_USERS.find(u => u.email === email && u.password === password);
    if (mockUser) {
      saveUser(mockUser.profile);
      return true;
    }
    
    // Check localStorage for registered users
    const registeredUsers = JSON.parse(localStorage.getItem('homies_registered_users') || '[]');
    const registeredUser = registeredUsers.find((u: any) => u.email === email && u.password === password);
    if (registeredUser) {
      saveUser(registeredUser.profile);
      return true;
    }
    
    return false;
  };

  const signup = async (name: string, email: string, password: string, phone: string): Promise<boolean> => {
    const registeredUsers = JSON.parse(localStorage.getItem('homies_registered_users') || '[]');
    
    if (registeredUsers.some((u: any) => u.email === email) || MOCK_USERS.some(u => u.email === email)) {
      return false;
    }

    const newUser = {
      email,
      password,
      profile: {
        id: Date.now().toString(),
        name,
        email,
        phone,
        addresses: [],
        orders: []
      }
    };

    registeredUsers.push(newUser);
    localStorage.setItem('homies_registered_users', JSON.stringify(registeredUsers));
    saveUser(newUser.profile);
    return true;
  };

  const logout = () => {
    saveUser(null);
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    if (user) {
      const updated = { ...user, ...data };
      saveUser(updated);
    }
  };

  const addAddress = (address: Omit<Address, 'id'>) => {
    if (user) {
      const newAddress = { ...address, id: Date.now().toString() };
      const addresses = address.isDefault 
        ? user.addresses.map(a => ({ ...a, isDefault: false })).concat(newAddress)
        : [...user.addresses, newAddress];
      saveUser({ ...user, addresses });
    }
  };

  const updateAddress = (id: string, address: Partial<Address>) => {
    if (user) {
      let addresses = user.addresses.map(a => 
        a.id === id ? { ...a, ...address } : a
      );
      if (address.isDefault) {
        addresses = addresses.map(a => ({ ...a, isDefault: a.id === id }));
      }
      saveUser({ ...user, addresses });
    }
  };

  const deleteAddress = (id: string) => {
    if (user) {
      saveUser({ ...user, addresses: user.addresses.filter(a => a.id !== id) });
    }
  };

  const addOrder = (order: Omit<Order, 'id' | 'createdAt'>): string => {
    const orderId = 'ORD' + Date.now().toString().slice(-6);
    const newOrder: Order = {
      ...order,
      id: orderId,
      createdAt: new Date().toISOString()
    };
    
    if (user) {
      saveUser({ ...user, orders: [newOrder, ...user.orders] });
    }
    
    return orderId;
  };

  return (
    <UserContext.Provider value={{
      user,
      isLoggedIn: !!user,
      login,
      signup,
      logout,
      updateProfile,
      addAddress,
      updateAddress,
      deleteAddress,
      addOrder
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
