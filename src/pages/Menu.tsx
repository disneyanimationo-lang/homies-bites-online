import { useState } from 'react';
import { menuItems, categories } from '@/data/menuData';
import { MenuCard } from '@/components/MenuCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Hamara Menu
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2">
            Swaadisht Vyanjan
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From aromatic starters to rich curries and sweet mithai, discover authentic 
            Indian dishes crafted with love and traditional recipes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "transition-all",
                activeCategory !== category.id && "bg-card"
              )}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Is category mein koi dish nahi mili.
          </p>
        )}
      </div>
    </main>
  );
};

export default Menu;
