import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { subtotal, useCart } from "@/lib/cart-store";
import { money, STORES } from "@/data/catalog";

export function Shell({ children }: { children: ReactNode }) {
  const lines = useCart((s) => s.lines);
  const setOpen = useCart((s) => s.setOpen);
  const hydrate = useCart((s) => s.hydrate);
  const count = lines.reduce((n, l) => n + l.qty, 0);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <div className="min-h-screen bg-ink text-ivory">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="display text-xl tracking-[0.28em] text-gold">
            VIRELLE
          </Link>
          <nav className="hidden items-center gap-8 text-xs tracking-[0.16em] uppercase text-muted md:flex">
            <a href="/#collection">Collection</a>
            <a href="/#salons">Salons</a>
            <a href="/#reserve">Reserve</a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="border border-gold/40 px-4 py-2 text-gold"
            >
              Selection {count > 0 ? `(${count})` : ""}
            </button>
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            <button type="button" onClick={() => setOpen(true)} className="text-xs tracking-[0.14em] uppercase text-gold">
              Bag {count > 0 ? count : ""}
            </button>
            <button type="button" aria-label="Menu" onClick={() => setNav((v) => !v)} className="p-2">
              {nav ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {nav && (
          <div className="flex flex-col gap-4 border-t border-line px-5 py-5 text-sm tracking-[0.14em] uppercase md:hidden">
            <a href="/#collection" onClick={() => setNav(false)}>Collection</a>
            <a href="/#salons" onClick={() => setNav(false)}>Salons</a>
            <a href="/#reserve" onClick={() => setNav(false)}>Reserve</a>
          </div>
        )}
      </header>
      {children}
      <footer className="border-t border-line bg-ink-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <p className="display text-2xl tracking-[0.22em] text-gold">VIRELLE</p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Fine jewelry chosen a piece at a time, or several at once. Larger orders include a gift. Deposit by Zelle, Venmo, Cash App, PayPal, or Apple Cash.
            </p>
          </div>
          <div className="text-sm text-muted">
            <p className="eyebrow mb-3">Orders</p>
            <p>orders@virelle.com</p>
            <p className="mt-1">WhatsApp +1 (212) 555-0148</p>
            <p className="mt-3 text-faint">Mon–Sat, 10am–7pm ET</p>
          </div>
          <div className="text-sm text-muted">
            <p className="eyebrow mb-3">Salons</p>
            <p>{STORES.length} showrooms, coast to coast.</p>
            <a href="/#salons" className="mt-2 inline-block text-gold">
              View cities
            </a>
          </div>
        </div>
      </footer>
      <Drawer />
    </div>
  );
}

function Drawer() {
  const open = useCart((s) => s.open);
  const setOpen = useCart((s) => s.setOpen);
  const lines = useCart((s) => s.lines);
  const remove = useCart((s) => s.remove);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <button type="button" aria-label="Close selection" className="absolute inset-0 bg-ink/70" onClick={() => setOpen(false)} />
      <aside className="absolute top-0 right-0 flex h-full w-full max-w-md flex-col border-l border-line bg-ink-2">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <p className="display text-2xl">Your selection</p>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close">
            <X />
          </button>
        </div>
        <div className="flex-1 overflow-auto px-5">
          {lines.length === 0 && <p className="py-10 text-sm text-muted">Nothing selected yet.</p>}
          {lines.map((l) => (
            <div key={l.key} className="flex gap-4 border-b border-line py-4">
              <img src={l.image} alt="" className="h-20 w-20 object-cover" />
              <div className="min-w-0 flex-1">
                <p className="display text-xl">{l.name}</p>
                <p className="text-xs text-faint">{Object.values(l.options).join(" · ")} × {l.qty}</p>
                <p className="mt-1 text-gold">{money(l.price * l.qty)}</p>
              </div>
              <button type="button" className="text-faint" onClick={() => remove(l.key)} aria-label="Remove">
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
        <div className="border-t border-line p-5">
          <div className="mb-4 flex justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <span className="text-gold">{money(subtotal(lines))}</span>
          </div>
          <a
            href="/#reserve"
            onClick={() => setOpen(false)}
            className="block bg-gold py-3 text-center text-xs tracking-[0.16em] uppercase text-ink"
          >
            Reserve with 75%
          </a>
        </div>
      </aside>
    </div>
  );
}
