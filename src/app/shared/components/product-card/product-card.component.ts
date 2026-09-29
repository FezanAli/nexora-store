import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'nx-product-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
    <article class="card">
      <a class="visual visual--{{ product().tone }}" [routerLink]="['/product', product().slug]">
        @if (product().badge) { <span class="badge">{{ product().badge }}</span> }
        <span class="device" aria-hidden="true"></span>
        <button class="heart" aria-label="Add to wishlist" type="button">♡</button>
      </a>

      <div class="meta">
        <div>
          <span class="category">{{ product().category }}</span>
          <h3><a [routerLink]="['/product', product().slug]">{{ product().name }}</a></h3>
        </div>
        <span class="rating">★ {{ product().rating }}</span>
      </div>

      <p>{{ product().short }}</p>

      <div class="bottom">
        <div class="price">
          <strong>{{ product().price | currency:'USD':'symbol':'1.0-0' }}</strong>
          @if (product().oldPrice) { <del>{{ product().oldPrice | currency:'USD':'symbol':'1.0-0' }}</del> }
        </div>
        <button class="add" (click)="add.emit(product())" aria-label="Add product to cart">＋</button>
      </div>
    </article>
  `,
  styles: [`
    .card { min-width:0; }
    .visual { height:330px; border-radius:24px; position:relative; overflow:hidden; display:grid; place-items:center; border:1px solid rgba(16,17,19,.06); }
    .visual--violet { background:linear-gradient(145deg,#ded9ff,#8d81ff); }
    .visual--blue { background:linear-gradient(145deg,#d9f4ff,#6bd7ff); }
    .visual--lime { background:linear-gradient(145deg,#efffd2,#c7ff45); }
    .visual--peach { background:linear-gradient(145deg,#ffe6d3,#ffad79); }
    .visual--graphite { background:linear-gradient(145deg,#dfe1e4,#72757b); }
    .device { width:115px; height:190px; background:linear-gradient(160deg,#2e3035,#0f1012); border-radius:28px; box-shadow:0 30px 50px rgba(0,0,0,.22), inset 0 0 0 4px rgba(255,255,255,.15); transform:rotate(9deg); transition:transform .35s ease; }
    .visual:hover .device { transform:rotate(4deg) translateY(-6px) scale(1.03); }
    .device::before { content:''; position:absolute; width:72px; height:72px; border-radius:50%; background:radial-gradient(circle at 40% 40%,#60646d,#111 55%); top:18px; left:20px; }
    .badge { position:absolute; top:16px; left:16px; background:#fff; border-radius:999px; padding:7px 10px; font-size:11px; font-weight:850; z-index:2; }
    .heart { position:absolute; top:14px; right:14px; width:38px; height:38px; border-radius:50%; border:0; background:rgba(255,255,255,.82); font-size:22px; cursor:pointer; }
    .meta { display:flex; justify-content:space-between; gap:14px; align-items:start; margin-top:17px; }
    .category { color:var(--nx-muted); font-size:12px; }
    h3 { margin:3px 0 0; font-size:19px; letter-spacing:-.02em; }
    .rating { font-size:12px; white-space:nowrap; font-weight:750; }
    p { color:var(--nx-muted); font-size:13px; line-height:1.55; margin:10px 0 15px; }
    .bottom { display:flex; justify-content:space-between; align-items:center; }
    .price { display:flex; gap:8px; align-items:baseline; }
    .price strong { font-size:19px; }
    .price del { color:#929397; font-size:13px; }
    .add { width:42px; height:42px; border-radius:50%; border:0; color:#fff; background:var(--nx-ink); cursor:pointer; font-size:21px; transition:transform .18s ease; }
    .add:hover { transform:scale(1.06); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  readonly add = output<Product>();
}
