import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart, ChevronLeft, ChevronRight, Truck, Shield, Recycle } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/shop" className="text-emerald-600 hover:text-emerald-700">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      fabric: product.fabric
    });

    // Show success message or redirect to cart
  };

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-emerald-600">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-emerald-600">Shop</Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedImage(prev => 
                    prev === 0 ? product.images.length - 1 : prev - 1
                  )}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setSelectedImage(prev => 
                    prev === product.images.length - 1 ? 0 : prev + 1
                  )}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-emerald-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="mb-2">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full">
                {product.fabric}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            {renderRating(product.rating)}
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Color: {selectedColor && <span className="font-normal">{selectedColor}</span>}
            </h3>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? 'border-emerald-600 scale-110'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
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
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Size: {selectedSize && <span className="font-normal">{selectedSize}</span>}
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md transition-colors ${
                    selectedSize === size
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              >
                -
              </button>
              <span className="text-lg font-medium w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-emerald-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            
            <button className="w-full bg-white border border-gray-200 text-gray-900 py-4 px-8 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Add to Wishlist</span>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t">
            <div className="text-center">
              <Truck className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">Free Shipping</div>
              <div className="text-xs text-gray-600">Orders over ₹2000</div>
            </div>
            <div className="text-center">
              <Shield className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">2 Year Warranty</div>
              <div className="text-xs text-gray-600">Quality guarantee</div>
            </div>
            <div className="text-center">
              <Recycle className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">Eco-Friendly</div>
              <div className="text-xs text-gray-600">Sustainable materials</div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['description', 'sustainability', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700">{product.description}</p>
            </div>
          )}

          {activeTab === 'sustainability' && (
            <div className="prose max-w-none">
              <p className="text-gray-700">{product.sustainability}</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Customer Reviews</h3>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Write a Review
                </button>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl font-bold">{product.rating}</div>
                  <div>
                    {renderRating(product.rating)}
                    <div className="text-sm text-gray-600">{product.reviews} reviews</div>
                  </div>
                </div>
              </div>

              <div className="text-center text-gray-500 py-8">
                Reviews coming soon...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;