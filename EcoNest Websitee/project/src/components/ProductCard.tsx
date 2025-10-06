import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0], // Default to first available size
      color: product.colors[0], // Default to first available color
      fabric: product.fabric
    });
  };

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600">({product.reviews})</span>
      </div>
    );
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-lg">
        {/* Image */}
        <div className="relative overflow-hidden bg-gray-100 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {product.isNew && (
              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                New
              </span>
            )}
            {product.isPopular && (
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Popular
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-gray-50">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>

          {/* Quick Add */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 p-2 bg-emerald-600 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-emerald-700"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Fabric Badge */}
          <div className="mb-2">
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full">
              {product.fabric}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mb-2">
            {renderRating(product.rating)}
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Colors */}
          <div className="flex items-center space-x-1 mt-2">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border-2 border-gray-200"
                style={{ 
                  backgroundColor: color.toLowerCase() === 'white' ? '#fff' : 
                                 color.toLowerCase() === 'black' ? '#000' :
                                 color.toLowerCase() === 'gray' ? '#6b7280' :
                                 color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                 color.toLowerCase() === 'forest green' ? '#16a34a' :
                                 color.toLowerCase() === 'ocean blue' ? '#0ea5e9' :
                                 color.toLowerCase() === 'natural' ? '#f3f4f6' :
                                 color.toLowerCase() === 'sage' ? '#84cc16' :
                                 '#9ca3af'
                }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500 ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;