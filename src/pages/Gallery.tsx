import { useState } from 'react';
import { X } from 'lucide-react';
import galleryInterior from '@/assets/gallery-interior.jpg';
import galleryChef from '@/assets/gallery-chef.jpg';
import galleryPatio from '@/assets/gallery-patio.jpg';
import dishBurger from '@/assets/dish-burger.jpg';
import dishPasta from '@/assets/dish-pasta.jpg';
import dishSalmon from '@/assets/dish-salmon.jpg';
import dishSalad from '@/assets/dish-salad.jpg';
import dishDessert from '@/assets/dish-dessert.jpg';
import dishWings from '@/assets/dish-wings.jpg';

const galleryImages = [
  { src: galleryInterior, alt: 'Restaurant Interior', category: 'venue' },
  { src: dishBurger, alt: 'Signature Burger', category: 'food' },
  { src: galleryChef, alt: 'Chef in Action', category: 'kitchen' },
  { src: dishPasta, alt: 'Italian Pasta', category: 'food' },
  { src: galleryPatio, alt: 'Outdoor Patio', category: 'venue' },
  { src: dishSalmon, alt: 'Grilled Salmon', category: 'food' },
  { src: dishSalad, alt: 'Fresh Salad', category: 'food' },
  { src: dishDessert, alt: 'Chocolate Dessert', category: 'food' },
  { src: dishWings, alt: 'Buffalo Wings', category: 'food' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Gallery
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2">
            A Visual Feast
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Take a peek inside Homies Restro. From our cozy dining spaces to our mouthwatering 
            dishes, experience the ambiance before you visit.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-background font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
