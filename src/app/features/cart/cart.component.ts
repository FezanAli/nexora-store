import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartStore } from '../../core/state/cart.store';

@Component({
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <main class="nx-container cart-page">
      <span class="nx-kicker">Your cart</span>
      <div class="title-row"><h1>Cart</h1><span>{{ cart.count() }} item(s)</span></div>
      @if (cart.lines().length === 0) {
        <div class="empty"><strong>Your cart is empty.</strong><p>Add a product from the homepage to see the Signal-based cart state in action.</p></div>
      } @else {
        <div class="layout">
          <div class="lines">
            @for (line of cart.lines(); track line.product.id) {
              <article><div class="thumb"></div><div><small>{{ line.product.category }}</small><h3>{{ line.product.name }}</h3><p>Qty {{ line.quantity }}</p></div><strong>{{ line.product.price * line.quantity | currency:'USD':'symbol':'1.0-0' }}</strong><button (click)="cart.remove(line.product.id)">Remove</button></article>
            }
          </div>
          <aside><span>Subtotal</span><strong>{{ cart.subtotal() | currency:'USD':'symbol':'1.0-0' }}</strong><button class="nx-btn nx-btn--accent">Continue to checkout</button></aside>
        </div>
      }
    </main>
  `,
  styles: [`
    .cart-page{padding:70px 0 120px}.title-row{display:flex;align-items:end;justify-content:space-between;border-bottom:1px solid var(--nx-line);padding-bottom:20px}.title-row h1{margin:10px 0 0;font-size:70px;letter-spacing:-.06em}.title-row span{color:var(--nx-muted)}.empty{background:#fff;border:1px solid var(--nx-line);border-radius:24px;padding:50px;margin-top:28px}.empty strong{font-size:24px}.empty p{color:var(--nx-muted)}.layout{display:grid;grid-template-columns:1fr 330px;gap:28px;margin-top:30px}.lines{display:flex;flex-direction:column;gap:12px}.lines article{display:grid;grid-template-columns:110px 1fr auto auto;gap:20px;align-items:center;background:#fff;padding:16px;border-radius:20px;border:1px solid var(--nx-line)}.thumb{width:110px;height:100px;border-radius:16px;background:linear-gradient(145deg,#dcd7ff,#796dff)}article small,article p{color:var(--nx-muted)}article h3{margin:4px 0}article p{margin:0;font-size:13px}article button{border:0;background:transparent;text-decoration:underline;cursor:pointer;color:var(--nx-muted)}aside{align-self:start;position:sticky;top:130px;background:#111;color:#fff;border-radius:24px;padding:26px;display:flex;flex-direction:column;gap:12px}aside>span{color:#9b9da2}aside>strong{font-size:38px;margin-bottom:10px}@media(max-width:800px){.layout{grid-template-columns:1fr}.lines article{grid-template-columns:80px 1fr}.thumb{width:80px;height:80px}.lines article>strong,.lines article>button{grid-column:2}.title-row h1{font-size:54px}}
  `]
})
export class CartComponent { readonly cart = inject(CartStore); }
