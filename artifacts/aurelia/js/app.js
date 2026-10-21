/* ============================================
   AURELIA — Application Logic
   ============================================ */

const PRODUCTS = [
  {
    id: 'r1',
    name: 'Eternal Solitaire',
    category: 'rings',
    price: 4850,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    badge: 'Bestseller',
    description: 'A classic 1.2ct round brilliant diamond set in 18k white gold. Timeless elegance with exceptional fire and brilliance. Ideal for engagements or milestone celebrations.',
    options: {
      metal: ['18k White Gold', '18k Yellow Gold', 'Platinum'],
      size: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9']
    }
  },
  {
    id: 'r2',
    name: 'Halo Radiance',
    category: 'rings',
    price: 6200,
    image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80',
    badge: 'New',
    description: '1.0ct center diamond surrounded by a delicate halo of micro-pavé. Crafted in 18k rose gold for a warm, romantic glow.',
    options: {
      metal: ['18k Rose Gold', '18k White Gold', 'Platinum'],
      size: ['5', '5.5', '6', '6.5', '7', '7.5', '8']
    }
  },
  {
    id: 'r3',
    name: 'Vintage Crown',
    category: 'rings',
    price: 3950,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    description: 'Art-deco inspired three-stone ring featuring a cushion-cut center with tapered baguettes. Platinum setting.',
    options: {
      metal: ['Platinum', '18k White Gold'],
      size: ['5', '6', '6.5', '7', '7.5', '8']
    }
  },
  {
    id: 'n1',
    name: 'Lumina Pendant',
    category: 'necklaces',
    price: 2450,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    badge: 'Bestseller',
    description: '0.75ct pear-shaped diamond suspended on an adjustable 16–18" 18k gold chain. Effortless everyday luxury.',
    options: {
      metal: ['18k Yellow Gold', '18k White Gold', '18k Rose Gold'],
      length: ['16"', '18"', '20"']
    }
  },
  {
    id: 'n2',
    name: 'Celestial Layer',
    category: 'necklaces',
    price: 1890,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    description: 'Delicate layered chain necklace with graduated diamond stations. Perfect alone or stacked.',
    options: {
      metal: ['18k Yellow Gold', '18k White Gold'],
      length: ['16"', '18"']
    }
  },
  {
    id: 'n3',
    name: 'Tennis Necklace',
    category: 'necklaces',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    badge: 'Iconic',
    description: 'Full circle of round brilliant diamonds totaling 5.0ct in 18k white gold. A true statement of enduring style.',
    options: {
      metal: ['18k White Gold', 'Platinum'],
      length: ['16"', '17"', '18"']
    }
  },
  {
    id: 'e1',
    name: 'Classic Diamond Studs',
    category: 'earrings',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    badge: 'Essential',
    description: '1.0ct tw round brilliant diamond studs in a secure four-prong setting. Available in three precious metals.',
    options: {
      metal: ['18k White Gold', '18k Yellow Gold', 'Platinum'],
      carat: ['0.50ct tw', '1.00ct tw', '1.50ct tw']
    }
  },
  {
    id: 'e2',
    name: 'Sculpted Hoops',
    category: 'earrings',
    price: 1650,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    description: 'Modern 25mm hoops with a soft brushed finish and subtle diamond accents along the outer edge.',
    options: {
      metal: ['18k Yellow Gold', '18k Rose Gold', '18k White Gold'],
      size: ['20mm', '25mm', '30mm']
    }
  },
  {
    id: 'e3',
    name: 'Drop Cascade',
    category: 'earrings',
    price: 4100,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    description: 'Cascading diamond drops that catch the light with every movement. Elegant for evening or special occasions.',
    options: {
      metal: ['18k White Gold', 'Platinum'],
      length: ['Short', 'Medium']
    }
  },
  {
    id: 'b1',
    name: 'Tennis Bracelet',
    category: 'bracelets',
    price: 5400,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    badge: 'Bestseller',
    description: '3.0ct tw round diamonds set in a flexible 18k white gold bracelet. Secure box clasp with safety.',
    options: {
      metal: ['18k White Gold', '18k Yellow Gold', 'Platinum'],
      length: ['6.5"', '7"', '7.5"']
    }
  },
  {
    id: 'b2',
    name: 'Cuff Étoile',
    category: 'bracelets',
    price: 2750,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    description: 'Open cuff bracelet with a constellation of diamonds. Adjustable fit, bold yet refined.',
    options: {
      metal: ['18k Yellow Gold', '18k Rose Gold'],
      size: ['Small', 'Medium', 'Large']
    }
  },
  {
    id: 'b3',
    name: 'Chain Link Bracelet',
    category: 'bracelets',
    price: 1290,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    description: 'Substantial yet comfortable paperclip-inspired links in solid 18k gold. A modern everyday essential.',
    options: {
      metal: ['18k Yellow Gold', '18k White Gold', '18k Rose Gold'],
      length: ['6.5"', '7"', '7.5"']
    }
  }
];

const STORES = [
  { city: 'New York', address: '725 Fifth Avenue, New York, NY 10022', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Los Angeles', address: '9570 Wilshire Blvd, Beverly Hills, CA 90212', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Chicago', address: '900 N Michigan Ave, Chicago, IL 60611', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Miami', address: '9700 Collins Ave, Bal Harbour, FL 33154', hours: 'Mon–Sat 10–8 · Sun 12–6' },
  { city: 'Dallas', address: '8687 N Central Expy, Dallas, TX 75225', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Houston', address: '5015 Westheimer Rd, Houston, TX 77056', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'San Francisco', address: '150 Post St, San Francisco, CA 94108', hours: 'Mon–Sat 10–6 · Sun 12–5' },
  { city: 'Boston', address: '100 Huntington Ave, Boston, MA 02116', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Atlanta', address: '3393 Peachtree Rd NE, Atlanta, GA 30326', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Washington DC', address: '5300 Wisconsin Ave NW, Washington, DC 20015', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Seattle', address: '600 Pine St, Seattle, WA 98101', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Las Vegas', address: '3500 Las Vegas Blvd S, Las Vegas, NV 89109', hours: 'Daily 10–9' },
  { city: 'Phoenix', address: '2502 E Camelback Rd, Phoenix, AZ 85016', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Denver', address: '3000 E 1st Ave, Denver, CO 80206', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Austin', address: '2901 S Capital of Texas Hwy, Austin, TX 78746', hours: 'Mon–Sat 10–7 · Sun 12–5' },
  { city: 'Philadelphia', address: '160 N 3rd St, Philadelphia, PA 19106', hours: 'Mon–Sat 10–6 · Sun 12–5' }
];

// State
let cart = JSON.parse(localStorage.getItem('aurelia_cart') || '[]');
let currentFilter = 'all';
let selectedOptions = {};

// DOM refs
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  // Preloader
  setTimeout(() => $('#preloader')?.classList.add('done'), 1400);

  renderProducts();
  renderLocations();
  populateStoreSelect();
  updateCartUI();
  bindEvents();
});

// ---------- Products ----------
function renderProducts(filter = 'all') {
  const grid = $('#productGrid');
  if (!grid) return;
  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = list.map(p => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-info">
        <p class="product-cat">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">${formatPrice(p.price)}</p>
        <div class="product-actions">
          <button class="btn btn-outline view-btn" data-id="${p.id}">View</button>
          <button class="btn btn-primary quick-add" data-id="${p.id}">Add</button>
        </div>
      </div>
    </article>
  `).join('');
}

function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  selectedOptions = {};
  const firstOpts = {};
  Object.keys(p.options || {}).forEach(k => {
    firstOpts[k] = p.options[k][0];
    selectedOptions[k] = p.options[k][0];
  });

  const body = $('#modalBody');
  body.innerHTML = `
    <div class="modal-img">
      <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="modal-details">
      <p class="product-cat">${p.category}</p>
      <h2>${p.name}</h2>
      <p class="modal-price">${formatPrice(p.price)}</p>
      <p class="modal-desc">${p.description}</p>
      ${Object.entries(p.options || {}).map(([key, values]) => `
        <div class="modal-options">
          <label>${key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <div class="option-pills" data-option="${key}">
            ${values.map((v, i) => `
              <button type="button" class="option-pill ${i === 0 ? 'selected' : ''}" data-value="${v}">${v}</button>
            `).join('')}
          </div>
        </div>
      `).join('')}
      <button class="btn btn-primary modal-add" data-id="${p.id}">Add to Selection</button>
    </div>
  `;
  $('#modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ---------- Cart ----------
function addToCart(id, options = {}) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const opts = Object.keys(options).length ? options : getDefaultOptions(p);
  const key = id + '|' + JSON.stringify(opts);
  const existing = cart.find(c => c.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      id,
      name: p.name,
      price: p.price,
      image: p.image,
      options: opts,
      qty: 1
    });
  }
  saveCart();
  updateCartUI();
  // subtle feedback
  const btn = document.querySelector(`[data-id="${id}"].quick-add, .modal-add[data-id="${id}"]`);
  if (btn) {
    const original = btn.textContent;
    btn.textContent = 'Added ✓';
    setTimeout(() => { btn.textContent = original; }, 1200);
  }
}

function getDefaultOptions(p) {
  const opts = {};
  Object.keys(p.options || {}).forEach(k => opts[k] = p.options[k][0]);
  return opts;
}

function removeFromCart(key) {
  cart = cart.filter(c => c.key !== key);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('aurelia_cart', JSON.stringify(cart));
}

function cartSubtotal() {
  return cart.reduce((s, c) => s + c.price * c.qty, 0);
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const countEl = $('#cartCount');
  if (countEl) countEl.textContent = count;

  // Drawer
  const drawer = $('#drawerItems');
  if (drawer) {
    if (!cart.length) {
      drawer.innerHTML = '<p class="empty-cart">Your selection is empty.</p>';
    } else {
      drawer.innerHTML = cart.map(c => `
        <div class="cart-item">
          <img class="cart-item-img" src="${c.image}" alt="${c.name}" />
          <div class="cart-item-info">
            <div class="cart-item-name">${c.name}</div>
            <div class="cart-item-meta">${formatOptions(c.options)} × ${c.qty}</div>
            <div class="cart-item-price">${formatPrice(c.price * c.qty)}</div>
          </div>
          <button class="cart-item-remove" data-key="${c.key}" aria-label="Remove">×</button>
        </div>
      `).join('');
    }
  }
  const drawerSub = $('#drawerSubtotal');
  if (drawerSub) drawerSub.textContent = formatPrice(cartSubtotal());

  // Order page cart
  const cartItems = $('#cartItems');
  const cartTotals = $('#cartTotals');
  if (cartItems) {
    if (!cart.length) {
      cartItems.innerHTML = '<p class="empty-cart">Your selection is empty. Explore collections above.</p>';
      if (cartTotals) cartTotals.style.display = 'none';
    } else {
      cartItems.innerHTML = cart.map(c => `
        <div class="cart-item">
          <img class="cart-item-img" src="${c.image}" alt="${c.name}" />
          <div class="cart-item-info">
            <div class="cart-item-name">${c.name}</div>
            <div class="cart-item-meta">${formatOptions(c.options)} × ${c.qty}</div>
            <div class="cart-item-price">${formatPrice(c.price * c.qty)}</div>
          </div>
          <button class="cart-item-remove" data-key="${c.key}" aria-label="Remove">×</button>
        </div>
      `).join('');
      if (cartTotals) cartTotals.style.display = 'block';
      recalculateTotals();
    }
  }
}

function formatOptions(opts) {
  return Object.entries(opts || {}).map(([k, v]) => v).join(' · ');
}

function formatPrice(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

// ---------- Totals & Delivery ----------
function getDeliveryFee() {
  const fulfillment = document.querySelector('input[name="fulfillment"]:checked')?.value;
  if (fulfillment !== 'delivery') return 0;
  const zone = $('#deliveryZone');
  const selected = zone?.options[zone.selectedIndex];
  return selected ? Number(selected.dataset.fee || 0) : 0;
}

function recalculateTotals() {
  const sub = cartSubtotal();
  const fee = getDeliveryFee();
  const total = sub + fee;
  const deposit = Math.round(total * 0.75);
  const balance = total - deposit;

  const set = (id, val) => { const el = $(id); if (el) el.textContent = formatPrice(val); };
  set('#subtotal', sub);
  set('#deliveryFee', fee);
  set('#orderTotal', total);
  set('#depositDue', deposit);
  set('#balanceDue', balance);
}

// ---------- Locations ----------
function renderLocations() {
  const grid = $('#locationsGrid');
  if (!grid) return;
  grid.innerHTML = STORES.map(s => `
    <div class="location-card">
      <div class="location-city">${s.city}</div>
      <div class="location-address">${s.address}</div>
      <div class="location-hours">${s.hours}</div>
    </div>
  `).join('');
}

function populateStoreSelect() {
  const sel = $('#storeSelect');
  if (!sel) return;
  sel.innerHTML = '<option value="">Select a store…</option>' +
    STORES.map(s => `<option value="${s.city}">${s.city} — ${s.address.split(',')[0]}</option>`).join('');
}

// ---------- Order Submission ----------
function buildOrderMessage(formData) {
  const sub = cartSubtotal();
  const fee = getDeliveryFee();
  const total = sub + fee;
  const deposit = Math.round(total * 0.75);
  const balance = total - deposit;

  let items = cart.map((c, i) =>
    `${i + 1}. ${c.name} (${formatOptions(c.options)}) ×${c.qty} — ${formatPrice(c.price * c.qty)}`
  ).join('\n');

  const fulfillment = formData.get('fulfillment');
  const store = formData.get('storeSelect') || '—';
  const zone = formData.get('deliveryZone') || '—';
  const address = formData.get('address') || '—';

  return `*AURELIA ORDER REQUEST*
━━━━━━━━━━━━━━━━━━━━

*Client*
Name: ${formData.get('fullName')}
Email: ${formData.get('email')}
Phone/WhatsApp: ${formData.get('phone')}
City: ${formData.get('city')}

*Items*
${items}

*Fulfillment*
Method: ${fulfillment === 'pickup' ? 'In-Store Pickup' : 'Insured Delivery'}
${fulfillment === 'pickup' ? `Preferred Store: ${store}` : `Zone: ${zone}\nAddress: ${address}`}

*Payment*
Preferred Method: ${formData.get('payment')}
Subtotal: ${formatPrice(sub)}
Delivery Fee: ${formatPrice(fee)}
Order Total: ${formatPrice(total)}
*Deposit Due Now (75%): ${formatPrice(deposit)}*
Balance on Pickup/Delivery (25%): ${formatPrice(balance)}

*Notes*
${formData.get('notes') || 'None'}

━━━━━━━━━━━━━━━━━━━━
Please confirm availability and send payment instructions for ${formData.get('payment')}.
Thank you — Aurelia Fine Jewelry`;
}

function handleOrderSubmit(e) {
  e.preventDefault();
  if (!cart.length) {
    alert('Please add at least one piece to your selection before submitting.');
    return;
  }
  const form = e.target;
  const formData = new FormData(form);
  const fulfillment = formData.get('fulfillment');
  if (fulfillment === 'pickup' && !formData.get('storeSelect')) {
    alert('Please select a preferred store for pickup.');
    return;
  }
  if (fulfillment === 'delivery' && !formData.get('deliveryZone')) {
    alert('Please select a delivery zone.');
    return;
  }

  const message = buildOrderMessage(formData);
  const phone = '15551234567'; // Replace with real business WhatsApp number
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const emailSubject = encodeURIComponent('Aurelia Order Request — ' + formData.get('fullName'));
  const emailBody = encodeURIComponent(message.replace(/\*/g, ''));
  const mailto = `mailto:orders@aureliajewelry.com?subject=${emailSubject}&body=${emailBody}`;

  // Show success modal
  $('#whatsappLink').href = waUrl;
  $('#emailLink').href = mailto;
  $('#successMessage').textContent =
    `Thank you, ${formData.get('fullName').split(' ')[0]}. Your order summary is ready. Open WhatsApp or Email to send it to our team. We will reply with payment details for ${formData.get('payment')}.`;
  $('#successOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Optional: clear cart after successful intent
  // cart = []; saveCart(); updateCartUI();
}

// ---------- Events ----------
function bindEvents() {
  // Header scroll
  window.addEventListener('scroll', () => {
    $('#header')?.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Mobile menu
  $('#menuToggle')?.addEventListener('click', () => {
    $('#navLinks')?.classList.toggle('open');
  });
  $$('.nav-links a').forEach(a => a.addEventListener('click', () => {
    $('#navLinks')?.classList.remove('open');
  }));

  // Filters
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProducts(currentFilter);
    });
  });

  // Collection cards filter
  $$('.collection-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const f = card.dataset.filter;
      $$('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === f);
      });
      currentFilter = f;
      renderProducts(f);
      document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Product grid clicks (delegation)
  $('#productGrid')?.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('.view-btn');
    const addBtn = e.target.closest('.quick-add');
    const card = e.target.closest('.product-card');
    if (viewBtn) {
      openProductModal(viewBtn.dataset.id);
    } else if (addBtn) {
      addToCart(addBtn.dataset.id);
    } else if (card && !e.target.closest('button')) {
      openProductModal(card.dataset.id);
    }
  });

  // Modal option pills & add
  $('#modalBody')?.addEventListener('click', (e) => {
    const pill = e.target.closest('.option-pill');
    if (pill) {
      const group = pill.closest('.option-pills');
      group.querySelectorAll('.option-pill').forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      selectedOptions[group.dataset.option] = pill.dataset.value;
    }
    const addBtn = e.target.closest('.modal-add');
    if (addBtn) {
      addToCart(addBtn.dataset.id, { ...selectedOptions });
      closeModal();
    }
  });

  $('#modalClose')?.addEventListener('click', closeModal);
  $('#modalOverlay')?.addEventListener('click', (e) => {
    if (e.target === $('#modalOverlay')) closeModal();
  });

  // Cart drawer
  $('#cartBtn')?.addEventListener('click', openCart);
  $('#closeCart')?.addEventListener('click', closeCart);
  $('#cartOverlay')?.addEventListener('click', closeCart);
  $('#goToOrder')?.addEventListener('click', () => {
    closeCart();
  });

  // Remove from cart (delegation)
  document.addEventListener('click', (e) => {
    const rm = e.target.closest('.cart-item-remove');
    if (rm) removeFromCart(rm.dataset.key);
  });

  // Fulfillment toggle
  $$('input[name="fulfillment"]').forEach(r => {
    r.addEventListener('change', () => {
      const isDelivery = r.value === 'delivery' && r.checked;
      $('#storeSelectGroup').style.display = isDelivery ? 'none' : 'block';
      $('#deliveryZoneGroup').style.display = isDelivery ? 'block' : 'none';
      recalculateTotals();
    });
  });
  $('#deliveryZone')?.addEventListener('change', recalculateTotals);

  // Order form
  $('#orderForm')?.addEventListener('submit', handleOrderSubmit);

  // Success modal
  $('#closeSuccess')?.addEventListener('click', () => {
    $('#successOverlay').classList.remove('open');
    document.body.style.overflow = '';
  });
  $('#successOverlay')?.addEventListener('click', (e) => {
    if (e.target === $('#successOverlay')) {
      $('#successOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

function openCart() {
  $('#cartDrawer')?.classList.add('open');
  $('#cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $('#cartDrawer')?.classList.remove('open');
  $('#cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}
function closeModal() {
  $('#modalOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}
