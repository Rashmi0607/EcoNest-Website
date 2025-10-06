import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Download, Truck, Package } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank you for your order!
        </h1>
        
        <p className="text-lg text-gray-600 mb-2">
          Your order has been confirmed and is being processed.
        </p>
        
        <p className="text-emerald-600 font-medium">
          Order #{orderId}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              What's next?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-emerald-600">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Order Confirmation</p>
                  <p className="text-sm text-gray-600">You'll receive an email confirmation shortly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Processing</p>
                  <p className="text-sm text-gray-600">We'll prepare your eco-friendly items with care</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">3</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Shipping</p>
                  <p className="text-sm text-gray-600">Carbon-neutral delivery in 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Order Details
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date:</span>
                <span className="text-gray-900">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="text-gray-900">Credit Card ****1234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Method:</span>
                <span className="text-gray-900">Standard (3-5 days)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="text-gray-900">
                  {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <CheckCircle className="h-8 w-8 text-emerald-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-emerald-900">
              🌱 Thank you for supporting sustainable fashion!
            </h3>
            <p className="text-emerald-700 mt-1">
              Your purchase helps reduce environmental impact and supports ethical manufacturing practices.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
          <Download className="h-5 w-5 mr-2" />
          Download Invoice
        </button>
        
        <Link
          to="/orders"
          className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Package className="h-5 w-5 mr-2" />
          View Order History
        </Link>
        
        <Link
          to="/shop"
          className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-600 mb-4">
          Need help with your order?
        </p>
        <div className="flex justify-center space-x-6 text-sm">
          <Link to="/contact" className="text-emerald-600 hover:text-emerald-700">
            Contact Support
          </Link>
          <Link to="/shipping" className="text-emerald-600 hover:text-emerald-700">
            Shipping Info
          </Link>
          <Link to="/returns" className="text-emerald-600 hover:text-emerald-700">
            Return Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;