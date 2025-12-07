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
  category: 'starters' | 'mains' | 'desserts' | 'breads' | 'beverages';
  isPopular?: boolean;
  isVeg?: boolean;
  spiceLevel?: 'mild' | 'medium' | 'hot';
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: '1',
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese cubes grilled to perfection with bell peppers and onions in tandoor',
    price: 299,
    image: dishWings,
    category: 'starters',
    isPopular: true,
    isVeg: true,
    spiceLevel: 'medium'
  },
  {
    id: '2',
    name: 'Chicken Malai Tikka',
    description: 'Creamy and tender chicken pieces marinated in cheese, cream and mild spices',
    price: 349,
    image: dishSalad,
    category: 'starters',
    isPopular: true,
    spiceLevel: 'mild'
  },
  {
    id: '3',
    name: 'Samosa (2 pcs)',
    description: 'Crispy fried pastry filled with spiced potatoes, peas and aromatic herbs',
    price: 99,
    image: dishWings,
    category: 'starters',
    isVeg: true,
    spiceLevel: 'medium'
  },
  {
    id: '4',
    name: 'Dahi Kebab',
    description: 'Soft hung curd patties stuffed with nuts and raisins, shallow fried golden',
    price: 279,
    image: dishSalad,
    category: 'starters',
    isVeg: true,
    spiceLevel: 'mild'
  },
  {
    id: '5',
    name: 'Mutton Seekh Kebab',
    description: 'Minced mutton mixed with aromatic spices, skewered and grilled in tandoor',
    price: 399,
    image: dishWings,
    category: 'starters',
    isPopular: true,
    spiceLevel: 'hot'
  },
  {
    id: '6',
    name: 'Fish Amritsari',
    description: 'Boneless fish fillets coated in spiced gram flour batter and deep fried',
    price: 379,
    image: dishSalmon,
    category: 'starters',
    spiceLevel: 'medium'
  },
  
  // Main Courses
  {
    id: '7',
    name: 'Butter Chicken',
    description: 'Tender chicken pieces in rich, creamy tomato-butter gravy with kasuri methi',
    price: 399,
    image: dishBurger,
    category: 'mains',
    isPopular: true,
    spiceLevel: 'mild'
  },
  {
    id: '8',
    name: 'Paneer Butter Masala',
    description: 'Soft paneer cubes simmered in velvety tomato-cashew gravy',
    price: 329,
    image: dishPasta,
    category: 'mains',
    isPopular: true,
    isVeg: true,
    spiceLevel: 'mild'
  },
  {
    id: '9',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice layered with spiced chicken, saffron and fried onions',
    price: 349,
    image: dishBurger,
    category: 'mains',
    isPopular: true,
    spiceLevel: 'medium'
  },
  {
    id: '10',
    name: 'Dal Makhani',
    description: 'Black lentils slow-cooked overnight with butter, cream and aromatic spices',
    price: 279,
    image: dishPasta,
    category: 'mains',
    isPopular: true,
    isVeg: true,
    spiceLevel: 'mild'
  },
  {
    id: '11',
    name: 'Mutton Rogan Josh',
    description: 'Kashmiri style tender mutton curry with aromatic spices and yogurt',
    price: 449,
    image: dishBurger,
    category: 'mains',
    isPopular: true,
    spiceLevel: 'hot'
  },
  {
    id: '12',
    name: 'Palak Paneer',
    description: 'Fresh cottage cheese cubes in creamy spinach gravy with garlic and cumin',
    price: 299,
    image: dishPasta,
    category: 'mains',
    isVeg: true,
    spiceLevel: 'mild'
  },
  {
    id: '13',
    name: 'Chicken Tikka Masala',
    description: 'Grilled chicken tikka pieces in spiced onion-tomato masala gravy',
    price: 379,
    image: dishBurger,
    category: 'mains',
    spiceLevel: 'medium'
  },
  {
    id: '14',
    name: 'Veg Hyderabadi Biryani',
    description: 'Aromatic basmati rice cooked with mixed vegetables and Hyderabadi spices',
    price: 299,
    image: dishPasta,
    category: 'mains',
    isVeg: true,
    spiceLevel: 'medium'
  },
  {
    id: '15',
    name: 'Fish Curry (Goan)',
    description: 'Fresh fish cooked in tangy coconut and kokum based Goan curry',
    price: 429,
    image: dishSalmon,
    category: 'mains',
    spiceLevel: 'hot'
  },
  {
    id: '16',
    name: 'Kadhai Paneer',
    description: 'Paneer and bell peppers in spicy kadhai masala with fresh coriander',
    price: 319,
    image: dishPasta,
    category: 'mains',
    isVeg: true,
    spiceLevel: 'hot'
  },
  {
    id: '17',
    name: 'Lamb Keema',
    description: 'Minced lamb cooked with onions, tomatoes, peas and garam masala',
    price: 399,
    image: dishBurger,
    category: 'mains',
    spiceLevel: 'medium'
  },
  {
    id: '18',
    name: 'Chole Bhature',
    description: 'Spicy chickpea curry served with fluffy deep-fried bread',
    price: 249,
    image: dishPasta,
    category: 'mains',
    isVeg: true,
    isPopular: true,
    spiceLevel: 'medium'
  },
  {
    id: '19',
    name: 'Prawn Masala',
    description: 'Juicy prawns cooked in rich onion-tomato masala with coastal spices',
    price: 479,
    image: dishSalmon,
    category: 'mains',
    spiceLevel: 'medium'
  },
  {
    id: '20',
    name: 'Malai Kofta',
    description: 'Fried paneer-potato dumplings in rich creamy cashew gravy',
    price: 329,
    image: dishPasta,
    category: 'mains',
    isVeg: true,
    spiceLevel: 'mild'
  },

  // Breads
  {
    id: '21',
    name: 'Butter Naan',
    description: 'Soft leavened bread baked in tandoor and brushed with butter',
    price: 59,
    image: dishWings,
    category: 'breads',
    isVeg: true
  },
  {
    id: '22',
    name: 'Garlic Naan',
    description: 'Tandoor baked naan topped with fresh garlic and coriander',
    price: 79,
    image: dishWings,
    category: 'breads',
    isVeg: true,
    isPopular: true
  },
  {
    id: '23',
    name: 'Laccha Paratha',
    description: 'Flaky layered whole wheat bread cooked on tawa with ghee',
    price: 69,
    image: dishWings,
    category: 'breads',
    isVeg: true
  },
  {
    id: '24',
    name: 'Stuffed Kulcha',
    description: 'Naan stuffed with spiced potato or paneer filling',
    price: 99,
    image: dishWings,
    category: 'breads',
    isVeg: true
  },

  // Desserts
  {
    id: '25',
    name: 'Gulab Jamun (2 pcs)',
    description: 'Soft khoya balls deep fried and soaked in rose-cardamom sugar syrup',
    price: 129,
    image: dishDessert,
    category: 'desserts',
    isPopular: true,
    isVeg: true
  },
  {
    id: '26',
    name: 'Rasmalai',
    description: 'Soft paneer discs soaked in saffron and cardamom flavored thickened milk',
    price: 149,
    image: dishDessert,
    category: 'desserts',
    isPopular: true,
    isVeg: true
  },
  {
    id: '27',
    name: 'Kulfi Falooda',
    description: 'Traditional Indian ice cream with vermicelli, basil seeds and rose syrup',
    price: 169,
    image: dishDessert,
    category: 'desserts',
    isVeg: true
  },
  {
    id: '28',
    name: 'Gajar Ka Halwa',
    description: 'Warm grated carrot pudding slow-cooked with milk, ghee and nuts',
    price: 139,
    image: dishDessert,
    category: 'desserts',
    isVeg: true
  },
  {
    id: '29',
    name: 'Jalebi with Rabri',
    description: 'Crispy fried spirals soaked in syrup served with thickened sweet milk',
    price: 159,
    image: dishDessert,
    category: 'desserts',
    isVeg: true
  },

  // Beverages
  {
    id: '30',
    name: 'Masala Chai',
    description: 'Traditional Indian spiced tea brewed with ginger, cardamom and cinnamon',
    price: 59,
    image: dishSalad,
    category: 'beverages',
    isVeg: true
  },
  {
    id: '31',
    name: 'Mango Lassi',
    description: 'Creamy yogurt drink blended with fresh mango pulp and cardamom',
    price: 129,
    image: dishSalad,
    category: 'beverages',
    isPopular: true,
    isVeg: true
  }
];

export const categories = [
  { id: 'all', name: 'All Dishes' },
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Course' },
  { id: 'breads', name: 'Breads' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'beverages', name: 'Beverages' }
];
