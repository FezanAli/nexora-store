export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  badge?: string;
  tone: 'violet' | 'blue' | 'lime' | 'peach' | 'graphite';
  short: string;
}
