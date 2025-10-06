import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Plus,
  Edit,
  Trash2,
  Eye,
  IndianRupee
} from 'lucide-react';
import { products } from '../data/products';

const Admin: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data for admin dashboard
  const stats = [
    {
      icon: IndianRupee,
      title: 'Total Revenue',
      value: '₹5,23,450',
      change: '+12.5%',
      changeType: 'positive' as const
    },
    {
      icon: ShoppingCart,
      title: 'Orders',
      value: '156',
      change: '+8.2%',
      changeType: 'positive' as const
    },
    {
      icon: Users,
      title: 'Customers',
      value: '1,234',
      change: '+15.3%',
      changeType: 'positive' as const
    },
    {
      icon: Package,
      title: 'Products',
      value: products.length.toString(),
      change: '+2.1%',
      changeType: 'positive' as const
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'Raj Patel',
      total: 3799,
      status: 'completed',
      date: '2024-01-20'
    },
    {
      id: 'ORD-002',
      customer: 'Priya Sharma',
      total: 2599,
      status: 'processing',
      date: '2024-01-20'
    },
    {
      id: 'ORD-003',
      customer: 'Arjun Kumar',
      total: 1899,
      status: 'shipped',
      date: '2024-01-19'
    }
  ];

  // Check if user is admin
  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600">You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: TrendingUp },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'orders', name: 'Orders', icon: ShoppingCart },
    { id: 'customers', name: 'Customers', icon: Users }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: 'bg-green-100 text-green-800',
      processing: 'bg-yellow-100 text-yellow-800',
      shipped: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user.name}</p>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 mr-8">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          <p className={`text-sm ${
                            stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stat.change} from last month
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <stat.icon className="h-6 w-6 text-emerald-600" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                  </div>
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-sm text-gray-600 border-b">
                            <th className="pb-3">Order ID</th>
                            <th className="pb-3">Customer</th>
                            <th className="pb-3">Total</th>
                            <th className="pb-3">Status</th>
                            <th className="pb-3">Date</th>
                            <th className="pb-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {recentOrders.map((order) => (
                            <tr key={order.id} className="border-b last:border-b-0">
                              <td className="py-3 font-medium">{order.id}</td>
                              <td className="py-3">{order.customer}</td>
                              <td className="py-3">₹{order.total.toLocaleString()}</td>
                              <td className="py-3">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(order.status)}`}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-3">{new Date(order.date).toLocaleDateString()}</td>
                              <td className="py-3">
                                <button className="text-emerald-600 hover:text-emerald-700 mr-2">
                                  <Eye className="h-4 w-4" />
                                </button>
                                <button className="text-blue-600 hover:text-blue-700">
                                  <Edit className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Products</h2>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span>Add Product</span>
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-sm text-gray-600 border-b">
                            <th className="pb-3">Product</th>
                            <th className="pb-3">Category</th>
                            <th className="pb-3">Price</th>
                            <th className="pb-3">Stock</th>
                            <th className="pb-3">Status</th>
                            <th className="pb-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {products.slice(0, 10).map((product) => (
                            <tr key={product.id} className="border-b last:border-b-0">
                              <td className="py-3">
                                <div className="flex items-center space-x-3">
                                  <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                                  <div>
                                    <div className="font-medium">{product.name}</div>
                                    <div className="text-gray-500">{product.fabric}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3">{product.category}</td>
                              <td className="py-3">₹{product.price.toLocaleString()}</td>
                              <td className="py-3">
                                <span className="text-green-600">In Stock</span>
                              </td>
                              <td className="py-3">
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                  Active
                                </span>
                              </td>
                              <td className="py-3">
                                <div className="flex space-x-2">
                                  <button className="text-emerald-600 hover:text-emerald-700">
                                    <Eye className="h-4 w-4" />
                                  </button>
                                  <button className="text-blue-600 hover:text-blue-700">
                                    <Edit className="h-4 w-4" />
                                  </button>
                                  <button className="text-red-600 hover:text-red-700">
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">All Orders</h2>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="text-center py-12 text-gray-500">
                    <ShoppingCart className="h-12 w-12 mx-auto mb-4" />
                    <p>Order management interface coming soon...</p>
                  </div>
                </div>
              </div>
            )}

            {/* Customers Tab */}
            {activeTab === 'customers' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="text-center py-12 text-gray-500">
                    <Users className="h-12 w-12 mx-auto mb-4" />
                    <p>Customer management interface coming soon...</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;