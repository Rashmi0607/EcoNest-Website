import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Heart, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.isPopular || p.isNew).slice(0, 4);

  const features = [
    {
      icon: Leaf,
      title: 'Organic Materials',
      description: 'Made from certified organic cotton and sustainable fibers'
    },
    {
      icon: Recycle,
      title: 'Zero Waste',
      description: 'Circular production with minimal environmental impact'
    },
    {
      icon: Heart,
      title: 'Fair Trade',
      description: 'Supporting fair wages and ethical working conditions'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Premium quality clothes built to last for years'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Sustainable
                  <span className="block text-emerald-600">Fashion</span>
                  <span className="block text-2xl lg:text-3xl font-normal text-gray-600 mt-2">
                    for a Better Tomorrow
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Discover eco-friendly clothing made from organic and recycled materials. 
                  Style that doesn't cost the earth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-200 group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/sustainability"
                  className="inline-flex items-center justify-center px-8 py-4 border border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Carbon Neutral Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-300 rounded-full blur-3xl opacity-20 scale-110"></div>
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainable Fashion"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose EcoNest?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to creating beautiful, sustainable fashion that makes a positive impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6 group-hover:bg-emerald-200 transition-colors duration-200">
                  <feature.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular eco-friendly pieces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Stats */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Together, we're making a difference for our planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-xl opacity-90">Plastic Bottles Recycled</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25K</div>
              <div className="text-xl opacity-90">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl opacity-90">Carbon Neutral</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;