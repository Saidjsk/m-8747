import { useEffect, useState } from 'react';
import { useStore, Product } from '../context/StoreContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

// Mock products data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic White Sneakers',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    description: 'Comfortable and stylish sneakers for everyday wear'
  },
  {
    id: '2',
    name: 'Leather Backpack',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    description: 'Durable leather backpack with multiple compartments'
  },
  // Add more mock products as needed
];

export default function Products() {
  const { addToCart } = useStore();
  const [products] = useState<Product[]>(mockProducts);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 pt-20 pb-16">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="bg-accent hover:bg-accent/90"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}