import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, CheckCircle } from 'lucide-react';

const Orders: React.FC = () => {
  // Mock order data
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 3799,
      items: [
        {
          name: 'Organic Cotton Basic Tee',
          image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
          quantity: 2,
          size: 'M',
          color: 'White'
        }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-20',
      status: 'shipping',
      total: 2599,
      items: [
        {
          name: 'Hemp Denim Jacket',
          image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg',
          quantity: 1,
          size: 'L',
          color: 'Indigo'
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'shipping':
        return <Truck className="h-5 w-5 text-blue-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'shipping':
        return 'In Transit';
      case 'processing':
        return 'Processing';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Orders</h1>
        <p className="text-gray-600 mt-2">Track and manage your orders</p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
          <p className="text-gray-600 mb-8">Start shopping to see your orders here!</p>
          <Link
            to="/shop"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Order #{order.id}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span className="text-sm font-medium">
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">
                        ₹{order.total.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 py-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-grow">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">
                          Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 flex justify-between items-center">
                  <div className="flex space-x-4">
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                      View Details
                    </button>
                    {order.status === 'delivered' && (
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                        Reorder
                      </button>
                    )}
                    {order.status === 'shipping' && (
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                        Track Package
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;