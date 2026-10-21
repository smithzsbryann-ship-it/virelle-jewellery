import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PIECES, STORES, money, pieceById, type Category } from "@/data/catalog";
import { Shell } from "@/components/shell";
import { Reserve } from "@/components/reserve";
import { useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/")({
  component: Home,
});

const FILTERS: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "rings", label: "Rings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "earrings", label: "Earrings" },
  { id: "bracelets", label: "Bracelets" },
];

function Home() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [picked, setPicked] = useState<string[]>([]);
  const add = useCart((s) => s.add);
  const list = filter === "all" ? PIECES : PIECES.filter((p) => p.category === filter);

  function toggle(id: string) {
    setPicked((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  }

  function addPicked() {
    for (const id of picked) {
      const piece = pieceById(id);
      if (!piece) continue;
      const options: Record<string, string> = {};
      for (const [key, values] of Object.entries(piece.options)) options[key] = values[0];
      add({ id: piece.id, name: piece.name, price: piece.price, image: piece.image, options });
    }
    setPicked([]);
    document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Shell>
      <section className="relative min-h-[88vh]">
        <img
          src="/jewelry/salon.jpg"
          alt="Virelle salon at night"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
          <p className="eyebrow">United States · twelve salons</p>
          <h1 className="display mt-4 max-w-3xl text-5xl leading-none md:text-7xl">
            Jewelry held
            <span className="italic text-gold-2"> lightly.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm text-ivory/85 md:text-base">
            Diamonds and 18k gold. Tick several pieces and add them together, or open one to choose metal and size. A 75% deposit secures the invoice. Orders from $2,500 include a gift.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collection" className="bg-gold px-6 py-3 text-xs tracking-[0.16em] uppercase text-ink">
              View the collection
            </a>
            <a href="#reserve" className="border border-ivory/40 px-6 py-3 text-xs tracking-[0.16em] uppercase">
              Reserve a piece
            </a>
          </div>
        </div>
      </section>

      <section className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Twelve salons", "From Fifth Avenue to Austin"],
          ["75% deposit", "Locks the piece and the invoice"],
          ["No cards", "Zelle, Venmo, Cash App, PayPal"],
          ["Insured transit", "Or collect it at the counter"],
        ].map(([t, d]) => (
          <div key={t} className="border-line px-5 py-6 sm:border-r sm:last:border-r-0">
            <p className="display text-2xl text-gold">{t}</p>
            <p className="mt-1 text-sm text-muted">{d}</p>
          </div>
        ))}
      </section>

      <section id="collection" className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">The floor</p>
            <h2 className="display mt-2 text-4xl md:text-5xl">Current pieces</h2>
            <p className="mt-2 max-w-md text-sm text-muted">Select more than one, then add them with their first options. Open a piece to change metal or size.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`min-h-11 border px-4 text-xs tracking-[0.14em] uppercase ${
                  filter === f.id ? "border-gold text-gold" : "border-line text-muted"
                }`}
              >
                {f.label}
              </button>
            ))}
            </div>
            <button
              type="button"
              disabled={picked.length === 0}
              onClick={addPicked}
              className="min-h-11 bg-gold px-5 text-xs tracking-[0.14em] uppercase text-ink disabled:opacity-40"
            >
              Add {picked.length || ""} selected
            </button>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.id} className="group">
              <div className="relative overflow-hidden bg-panel">
                <button
                  type="button"
                  aria-pressed={picked.includes(p.id)}
                  onClick={() => toggle(p.id)}
                  className={`absolute top-3 left-3 z-10 min-h-11 border px-3 text-xs tracking-[0.12em] uppercase ${
                    picked.includes(p.id) ? "border-gold bg-gold text-ink" : "border-line bg-ink/80 text-ivory"
                  }`}
                >
                  {picked.includes(p.id) ? "Selected" : "Select"}
                </button>
                <Link to="/piece/$id" params={{ id: p.id }} className="block">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
              </div>
              <Link to="/piece/$id" params={{ id: p.id }} className="mt-4 flex items-baseline justify-between gap-3">
                <div>
                  <p className="text-[0.68rem] tracking-[0.18em] uppercase text-faint">{p.note}</p>
                  <h3 className="display text-2xl">{p.name}</h3>
                </div>
                <p className="text-sm text-gold">{money(p.price)}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-panel px-8 py-16 md:px-16">
          <p className="eyebrow">How an order moves</p>
          <ol className="mt-6 space-y-6">
            {[
              ["Choose", "Tick several pieces, or open one for metal, size, and quantity."],
              ["Deposit 75%", "Pay by Zelle, Venmo, Cash App, PayPal, or Apple Cash. That payment secures the invoice."],
              ["Confirm", "You receive the same summary on WhatsApp and by email."],
              ["Finish 25%", "Pay the balance when you collect it, or when insured delivery arrives. Fees depend on the zone."],
            ].map(([t, d], i) => (
              <li key={t}>
                <p className="display text-2xl">
                  <span className="mr-3 text-gold">0{i + 1}</span>
                  {t}
                </p>
                <p className="mt-1 text-sm text-muted">{d}</p>
              </li>
            ))}
          </ol>
      </section>

      <section id="salons" className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Visit</p>
        <h2 className="display mt-2 text-4xl md:text-5xl">Salons across the country</h2>
        <p className="mt-3 max-w-lg text-sm text-muted">
          Private appointments, same-day pickup for secured orders, and the piece in your hand before you leave.
        </p>
        <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {STORES.map((s) => (
            <article key={s.city} className="bg-ink p-6">
              <h3 className="display text-2xl text-gold-2">{s.city}</h3>
              <p className="mt-2 text-sm text-muted">{s.address}</p>
              <p className="mt-2 text-xs tracking-wide text-faint">{s.hours}</p>
            </article>
          ))}
        </div>
      </section>

      <Reserve />
    </Shell>
  );
}
