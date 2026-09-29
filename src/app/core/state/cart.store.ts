import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartLine {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartStore {
  private readonly _lines = signal<CartLine[]>([]);
  readonly lines = this._lines.asReadonly();
  readonly count = computed(() => this._lines().reduce((sum, line) => sum + line.quantity, 0));
  readonly subtotal = computed(() => this._lines().reduce((sum, line) => sum + line.product.price * line.quantity, 0));

  add(product: Product): void {
    this._lines.update(lines => {
      const existing = lines.find(line => line.product.id === product.id);
      if (existing) {
        return lines.map(line => line.product.id === product.id
          ? { ...line, quantity: line.quantity + 1 }
          : line
        );
      }
      return [...lines, { product, quantity: 1 }];
    });
  }

  remove(productId: number): void {
    this._lines.update(lines => lines.filter(line => line.product.id !== productId));
  }
}
