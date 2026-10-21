import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { pieceById, money } from "@/data/catalog";
import { Shell } from "@/components/shell";
import { useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/piece/$id")({
  component: PiecePage,
  notFoundComponent: () => (
    <Shell>
      <div className="mx-auto max-w-3xl px-5 py-24">
        <p className="display text-4xl">This piece is not on the floor.</p>
        <Link to="/" className="mt-6 inline-block text-gold">
          Back to the collection
        </Link>
      </div>
    </Shell>
  ),
});

function PiecePage() {
  const { id } = Route.useParams();
  const piece = pieceById(id);
  if (!piece) throw notFound();
  return <PieceView />;
}

function PieceView() {
  const { id } = Route.useParams();
  const piece = pieceById(id)!;
  const add = useCart((s) => s.add);
  const navigate = useNavigate();
  const defaults = useMemo(() => {
    const o: Record<string, string> = {};
    for (const [k, vals] of Object.entries(piece.options)) o[k] = vals[0];
    return o;
  }, [piece]);
  const [options, setOptions] = useState(defaults);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <Shell>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2">
        <img src={piece.image} alt={piece.name} className="w-full bg-panel object-cover" />
        <div className="lg:pt-6">
          <p className="eyebrow">{piece.category}</p>
          <h1 className="display mt-2 text-5xl">{piece.name}</h1>
          <p className="mt-3 text-xl text-gold">{money(piece.price)}</p>
          <p className="mt-5 max-w-md text-sm text-muted">{piece.copy}</p>
          {Object.entries(piece.options).map(([key, values]) => (
            <div key={key} className="mt-6">
              <p className="text-xs tracking-[0.14em] uppercase text-faint">{key}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {values.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setOptions((o) => ({ ...o, [key]: v }))}
                    className={`min-h-11 border px-3 text-sm ${
                      options[key] === v ? "border-gold text-gold" : "border-line text-muted"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-8 flex items-center gap-3">
            <button type="button" className="min-h-11 min-w-11 border border-line" onClick={() => { setQty((q) => Math.max(1, q - 1)); setAdded(false); }} aria-label="Fewer">
              −
            </button>
            <span className="min-w-8 text-center">{qty}</span>
            <button type="button" className="min-h-11 min-w-11 border border-line" onClick={() => { setQty((q) => Math.min(6, q + 1)); setAdded(false); }} aria-label="More">
              +
            </button>
          </div>
          <button
            type="button"
            className="mt-4 w-full bg-gold py-4 text-xs tracking-[0.16em] uppercase text-ink sm:w-auto sm:px-10"
            onClick={() => {
              add({
                id: piece.id,
                name: piece.name,
                price: piece.price,
                image: piece.image,
                options,
                qty,
              });
              setAdded(true);
              void navigate({ to: "/", hash: "reserve" });
            }}
          >
            {added ? `Added ${qty}` : `Add ${qty} to selection`}
          </button>
          <a href="/#reserve" className="mt-4 block text-sm text-gold">
            Continue to reserve — 75% deposit
          </a>
          <Link to="/" className="mt-6 inline-block text-xs tracking-[0.14em] uppercase text-faint">
            All pieces
          </Link>
        </div>
      </div>
    </Shell>
  );
}
