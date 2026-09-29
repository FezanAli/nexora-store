import { Product } from '../models/product.model';

export const TRENDING_PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'aero-x1-phone',
    name: 'Aero X1',
    category: 'Smartphones',
    price: 1099,
    oldPrice: 1199,
    rating: 4.9,
    badge: 'New',
    tone: 'violet',
    short: 'Titanium body · 48MP · all-day battery'
  },
  {
    id: 2,
    slug: 'pulse-max-headphones',
    name: 'Pulse Max',
    category: 'Audio',
    price: 349,
    rating: 4.8,
    badge: 'Bestseller',
    tone: 'graphite',
    short: 'Adaptive ANC · spatial audio · 40h battery'
  },
  {
    id: 3,
    slug: 'framebook-pro-14',
    name: 'FrameBook Pro 14',
    category: 'Laptops',
    price: 1599,
    rating: 4.7,
    tone: 'blue',
    short: 'OLED 120Hz · 32GB memory · 1TB SSD'
  },
  {
    id: 4,
    slug: 'arc-watch-s2',
    name: 'Arc Watch S2',
    category: 'Wearables',
    price: 429,
    oldPrice: 479,
    rating: 4.8,
    badge: 'Deal',
    tone: 'lime',
    short: 'Dual-band GPS · health insights · 5-day battery'
  }
];
