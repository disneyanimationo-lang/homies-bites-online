import dishBurger from '@/assets/dish-burger.jpg';
import dishPasta from '@/assets/dish-pasta.jpg';
import dishSalmon from '@/assets/dish-salmon.jpg';
import dishSalad from '@/assets/dish-salad.jpg';
import dishDessert from '@/assets/dish-dessert.jpg';
import dishWings from '@/assets/dish-wings.jpg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'starters' | 'mains' | 'desserts';
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Crispy Buffalo Wings',
    description: 'Golden fried chicken wings tossed in our signature buffalo sauce, served with celery and blue cheese dip',
    price: 12.99,
    image: dishWings,
    category: 'starters',
    isPopular: true
  },
  {
    id: '2',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with grilled chicken, parmesan shavings, croutons, and our house-made Caesar dressing',
    price: 14.99,
    image: dishSalad,
    category: 'starters'
  },
  {
    id: '3',
    name: 'Homies Signature Burger',
    description: 'Juicy Angus beef patty with melted cheddar, crispy bacon, fresh vegetables, and our secret sauce on a brioche bun',
    price: 18.99,
    image: dishBurger,
    category: 'mains',
    isPopular: true
  },
  {
    id: '4',
    name: 'Italian Herb Pasta',
    description: 'Al dente spaghetti with fresh basil, cherry tomatoes, parmesan, and a drizzle of extra virgin olive oil',
    price: 16.99,
    image: dishPasta,
    category: 'mains'
  },
  {
    id: '5',
    name: 'Grilled Atlantic Salmon',
    description: 'Fresh salmon fillet with lemon herb butter, served with roasted seasonal vegetables',
    price: 24.99,
    image: dishSalmon,
    category: 'mains',
    isPopular: true
  },
  {
    id: '6',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream and fresh berries',
    price: 9.99,
    image: dishDessert,
    category: 'desserts',
    isPopular: true
  }
];

export const categories = [
  { id: 'all', name: 'All Dishes' },
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'desserts', name: 'Desserts' }
];
