# Aurelia Fine Jewelry — Luxury E-Commerce Website

A world-class, fully responsive jewelry website designed for the US market.

## Features

- **Premium dark luxury design** with gold accents, elegant serif typography, and high-quality product photography
- **Fully responsive** — mobile, tablet, and desktop
- **Product catalog** with filtering (Rings, Necklaces, Earrings, Bracelets)
- **Product modal** with metal/size options
- **Shopping cart** (persisted in localStorage)
- **Order flow**:
  - 75% deposit to secure the invoice
  - Remaining 25% on pickup or delivery
  - Delivery fees by zone (Local $45 · Regional $95 · National $175 · Express $295)
  - In-store pickup (free) at any of 16 major US cities
- **Payment methods** (no cards): Zelle, Venmo, Cash App, Bank/ACH, Apple/Google Pay, Wire
- **Order submission** generates a ready-to-send message via **WhatsApp** and **Email**
- Store locator with 16 showrooms across America
- Smooth animations, preloader, cart drawer, modals

## How to Use

1. Open `index.html` in any modern browser (or serve the folder with any static server).
2. Browse collections → add pieces to selection.
3. Go to **Order Now**, fill client details, choose pickup or delivery, select payment method.
4. Submit — a confirmation modal appears with buttons to open WhatsApp and Email with the full order summary.

## Customization

| Item | Location |
|------|----------|
| Brand name / logo text | `index.html` + CSS `.logo` |
| WhatsApp number | `js/app.js` → `const phone = '15551234567'` |
| Order email | `index.html` footer + `js/app.js` mailto |
| Products | `js/app.js` → `PRODUCTS` array |
| Store locations | `js/app.js` → `STORES` array |
| Delivery fees | `index.html` delivery zone `<option>` data-fee attributes |
| Deposit percentage | `js/app.js` → `0.75` in `recalculateTotals` and `buildOrderMessage` |

## Tech

Pure HTML, CSS, and vanilla JavaScript. No frameworks or build step required. Images load from Unsplash.

---

© 2026 Aurelia Fine Jewelry (demo brand)
