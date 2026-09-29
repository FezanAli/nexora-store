import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `<main class="nx-container page"><span class="nx-kicker">Product detail</span><h1>Product page architecture is ready.</h1><p>The next phase will add gallery, variants, stock state, reviews, comparison, related products and structured SEO data.</p></main>`,
  styles: [`.page{padding:90px 0 140px}h1{font-size:clamp(44px,7vw,88px);letter-spacing:-.06em;line-height:.95;max-width:850px}p{color:var(--nx-muted);font-size:18px;max-width:650px;line-height:1.7}`]
})
export class ProductComponent {}
