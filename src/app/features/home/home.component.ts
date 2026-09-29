import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TRENDING_PRODUCTS } from '../../core/data/catalog.data';
import { Product } from '../../core/models/product.model';
import { CartStore } from '../../core/state/cart.store';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'nx-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly products = TRENDING_PRODUCTS;
  private readonly cart = inject(CartStore);

  addToCart(product: Product): void {
    this.cart.add(product);
  }
}
