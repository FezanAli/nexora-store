# NEXORA — Angular 22 E-commerce Starter

A premium, large-scale electronics e-commerce frontend foundation built for modern Angular.

## 1) Create the Angular app

```bash
npx @angular/cli@22 new nexora-store --routing --style=scss --standalone --ssr
cd nexora-store
```

When the CLI asks about optional AI tooling, choose your preference. Then replace the generated `src/app` folder and `src/styles.scss` with the files from this starter.

## 2) Run it

```bash
npm install
npm start
```

Open the local URL printed by Angular CLI.

## Architecture used

- Standalone components
- Lazy-loaded feature routes
- Angular Signals for cart state
- Built-in `@for` / `@if` control flow
- SCSS design tokens + responsive layout
- SSR-ready public storefront architecture
- Domain-oriented folders so catalog, product, checkout, auth, orders and admin can grow independently

## Phase 1 included

- Premium storefront shell
- Sticky header + category navigation
- Homepage hero
- Category cards
- Trending products
- Smart shopping assistant teaser
- Deal section
- Trust/value section
- Product-card component
- Signal-based cart store
- Catalog / product / cart route placeholders

## Next build phases

1. Real catalog + faceted filters
2. Product detail page with variants / media gallery / reviews
3. Cart drawer + persistent cart
4. Authentication + customer account
5. Checkout + payment abstraction
6. Wishlist + compare + recently viewed
7. Search suggestions + typo tolerance
8. Admin dashboard + inventory + orders
9. API layer + caching + error handling
10. SSR / SEO / analytics / tests / accessibility
