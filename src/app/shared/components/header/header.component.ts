import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartStore } from '../../../core/state/cart.store';

@Component({
  selector: 'nx-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="announce">
      <div class="nx-container announce__inner">
        <span>Free express shipping over $150</span>
        <span class="announce__right">30-day returns · Secure checkout</span>
      </div>
    </div>

    <header class="header">
      <div class="nx-container header__row">
        <a routerLink="/" class="brand" aria-label="Nexora home">
          <span class="brand__mark">N</span><span>NEXORA</span>
        </a>

        <label class="search">
          <span class="search__icon">⌕</span>
          <input type="search" placeholder="Search devices, audio, gaming..." aria-label="Search products" />
          <kbd>⌘ K</kbd>
        </label>

        <nav class="actions" aria-label="Utility navigation">
          <a href="#">Account</a>
          <a routerLink="/cart" class="cart">Cart <span>{{ cart.count() }}</span></a>
        </nav>
      </div>

      <div class="nx-container categories">
        <a routerLink="/catalog">Shop all</a>
        <a routerLink="/catalog">Phones</a>
        <a routerLink="/catalog">Laptops</a>
        <a routerLink="/catalog">Audio</a>
        <a routerLink="/catalog">Gaming</a>
        <a routerLink="/catalog">Wearables</a>
        <a routerLink="/catalog">Smart home</a>
        <a href="#smart-finder" class="categories__smart">✦ Smart finder</a>
      </div>
    </header>
  `,
  styles: [`
    .announce { background: #101113; color: #fff; font-size: 12px; }
    .announce__inner { min-height: 34px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
    .announce__right { color: rgba(255,255,255,.65); }
    .header { position: sticky; top:0; z-index:40; background:rgba(244,244,239,.88); backdrop-filter: blur(18px); border-bottom:1px solid var(--nx-line); }
    .header__row { min-height:74px; display:grid; grid-template-columns:auto minmax(280px, 1fr) auto; gap:28px; align-items:center; }
    .brand { display:flex; align-items:center; gap:10px; font-weight:900; letter-spacing:.12em; font-size:14px; }
    .brand__mark { width:32px; height:32px; display:grid; place-items:center; border-radius:10px; background:var(--nx-accent); letter-spacing:0; }
    .search { background:#fff; min-height:44px; border:1px solid var(--nx-line); border-radius:999px; display:flex; align-items:center; padding:0 14px; gap:10px; }
    .search input { width:100%; border:0; outline:0; background:transparent; color:var(--nx-ink); }
    .search input::placeholder { color:#97989b; }
    .search kbd { border:1px solid var(--nx-line); border-radius:7px; padding:3px 7px; color:var(--nx-muted); font-size:11px; }
    .search__icon { font-size:18px; }
    .actions { display:flex; gap:18px; align-items:center; font-size:14px; font-weight:700; }
    .cart { display:flex; align-items:center; gap:7px; }
    .cart span { width:24px; height:24px; display:grid; place-items:center; background:var(--nx-ink); color:#fff; border-radius:50%; font-size:11px; }
    .categories { min-height:44px; display:flex; align-items:center; gap:26px; overflow:auto; white-space:nowrap; font-size:13px; font-weight:700; }
    .categories__smart { margin-left:auto; color:#5348d8; }
    @media (max-width: 820px) {
      .header__row { grid-template-columns:auto 1fr; gap:16px; }
      .search { grid-column:1/-1; grid-row:2; margin-bottom:12px; }
      .actions { justify-content:flex-end; }
      .announce__right { display:none; }
      .categories { gap:20px; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly cart = inject(CartStore);
}
