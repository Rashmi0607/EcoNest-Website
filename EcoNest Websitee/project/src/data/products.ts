export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  fabric: string;
  description: string;
  sustainability: string;
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Cotton Basic Tee',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
      'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg'
    ],
    category: 'T-Shirts',
    fabric: 'Organic Cotton',
    description: 'A comfortable and sustainable basic tee made from 100% organic cotton. Perfect for everyday wear with a relaxed fit.',
    sustainability: 'Made from GOTS certified organic cotton. Uses 91% less water than conventional cotton.',
    colors: ['White', 'Black', 'Gray', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 124,
    isPopular: true
  },
  {
    id: '2',
    name: 'Hemp Denim Jacket',
    price: 3999,
    image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg',
    images: [
      'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg',
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg'
    ],
    category: 'Jackets',
    fabric: 'Hemp',
    description: 'Durable hemp denim jacket with classic styling. Naturally antimicrobial and UV resistant.',
    sustainability: 'Hemp requires no pesticides and improves soil health. Biodegradable and carbon negative.',
    colors: ['Indigo', 'Black', 'Natural'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.6,
    reviews: 89,
    isNew: true
  },
  {
    id: '3',
    name: 'Recycled Polyester Hoodie',
    price: 2499,
    image: 'https://images.pexels.com/photos/7679730/pexels-photo-7679730.jpeg',
    images: [
      'https://images.pexels.com/photos/7679730/pexels-photo-7679730.jpeg',
      'https://images.pexels.com/photos/7679731/pexels-photo-7679731.jpeg'
    ],
    category: 'Hoodies',
    fabric: 'Recycled Polyester',
    description: 'Cozy hoodie made from recycled plastic bottles. Soft, warm, and weather-resistant.',
    sustainability: 'Made from 12 recycled plastic bottles. Diverts waste from oceans and landfills.',
    colors: ['Forest Green', 'Ocean Blue', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.7,
    reviews: 156,
    isPopular: true
  },
  {
    id: '4',
    name: 'Linen Summer Dress',
    price: 3299,
    image: 'https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg',
    images: [
      'https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg',
      'https://images.pexels.com/photos/7679741/pexels-photo-7679741.jpeg'
    ],
    category: 'Dresses',
    fabric: 'Linen',
    description: 'Breathable linen dress perfect for summer. Elegant, comfortable, and naturally temperature regulating.',
    sustainability: 'Linen is made from flax plants that use every part. Fully biodegradable and requires minimal water.',
    colors: ['Natural', 'Sage', 'Terracotta'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 203
  },
  {
    id: '5',
    name: 'Bamboo Fiber Pants',
    price: 2199,
    image: 'https://images.pexels.com/photos/7679750/pexels-photo-7679750.jpeg',
    images: [
      'https://images.pexels.com/photos/7679750/pexels-photo-7679750.jpeg',
      'https://images.pexels.com/photos/7679751/pexels-photo-7679751.jpeg'
    ],
    category: 'Pants',
    fabric: 'Bamboo',
    description: 'Ultra-soft bamboo pants with moisture-wicking properties. Perfect for active lifestyles.',
    sustainability: 'Bamboo grows 3x faster than cotton with no pesticides. Naturally antibacterial.',
    colors: ['Black', 'Olive', 'Khaki'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    rating: 4.5,
    reviews: 98,
    isNew: true
  },
  {
    id: '6',
    name: 'Tencel Lyocell Blouse',
    price: 2799,
    image: 'https://images.pexels.com/photos/7679760/pexels-photo-7679760.jpeg',
    images: [
      'https://images.pexels.com/photos/7679760/pexels-photo-7679760.jpeg',
      'https://images.pexels.com/photos/7679761/pexels-photo-7679761.jpeg'
    ],
    category: 'Blouses',
    fabric: 'Tencel',
    description: 'Elegant Tencel blouse with silk-like feel. Wrinkle-resistant and naturally moisture-managing.',
    sustainability: 'Made from sustainably sourced eucalyptus. Closed-loop production with 99% solvent recovery.',
    colors: ['White', 'Blush', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 145
  },
  {
    id: '7',
    name: 'Organic Cotton Kurta',
    price: 1899,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
      'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg'
    ],
    category: 'T-Shirts',
    fabric: 'Organic Cotton',
    description: 'Traditional kurta made from organic cotton with modern styling. Perfect for casual and semi-formal occasions.',
    sustainability: 'Handwoven organic cotton supporting local artisans and traditional craftsmanship.',
    colors: ['White', 'Cream', 'Light Blue', 'Khaki'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.7,
    reviews: 89,
    isPopular: true
  },
  {
    id: '8',
    name: 'Khadi Cotton Shirt',
    price: 1699,
    originalPrice: 2099,
    image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg',
    images: [
      'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg',
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg'
    ],
    category: 'T-Shirts',
    fabric: 'Khadi Cotton',
    description: 'Handspun khadi cotton shirt that breathes well and gets softer with every wash.',
    sustainability: 'Supports rural employment and traditional spinning methods. Zero carbon footprint production.',
    colors: ['White', 'Blue', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.6,
    reviews: 67
  }
];

export const categories = ['All', 'T-Shirts', 'Jackets', 'Hoodies', 'Dresses', 'Pants', 'Blouses'];
export const fabrics = ['All', 'Organic Cotton', 'Hemp', 'Recycled Polyester', 'Linen', 'Bamboo', 'Tencel', 'Khadi Cotton'];
export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
export const colors = ['White', 'Black', 'Gray', 'Navy', 'Forest Green', 'Ocean Blue', 'Natural', 'Sage'];