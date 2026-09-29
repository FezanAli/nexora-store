import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'NEXORA — Premium Technology'
  },
  {
    path: 'catalog',
    loadComponent: () => import('./features/catalog/catalog.component').then(m => m.CatalogComponent),
    title: 'Shop — NEXORA'
  },
  {
    path: 'product/:slug',
    loadComponent: () => import('./features/product/product.component').then(m => m.ProductComponent),
    title: 'Product — NEXORA'
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent),
    title: 'Cart — NEXORA'
  },
  { path: '**', redirectTo: '' }
];
