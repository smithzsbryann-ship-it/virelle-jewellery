import { useMemo, useState } from "react";
import { giftsFor, ORDER_EMAIL, PAYMENTS, STORES, WHATSAPP_E164, money } from "@/data/catalog";
import { CITIES, STATE_NAMES, courierFee } from "@/data/places";
import { subtotal, useCart } from "@/lib/cart-store";

export function Reserve() {
  const lines = useCart((s) => s.lines);
  const clear = useCart((s) => s.clear);
  const [mode, setMode] = useState<"pickup" | "delivery">("pickup");
  const [stateCode, setStateCode] = useState("");
  const [payment, setPayment] = useState<string>(PAYMENTS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [store, setStore] = useState(STORES[0].city);
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState<{ wa: string; mail: string } | null>(null);
  const [error, setError] = useState("");

  const fee = mode === "delivery" ? courierFee(stateCode) : 0;
  const goods = subtotal(lines);
  const total = goods + fee;
  const deposit = Math.round(total * 0.75);
  const balance = total - deposit;
  const gifts = giftsFor(goods);

  const message = useMemo(() => {
    const items = lines
      .map(
        (l, i) =>
          `${i + 1}. ${l.name} (${Object.values(l.options).join(", ")}) x${l.qty} — ${money(l.price * l.qty)}`,
      )
      .join("\n");
    return [
      "VIRELLE ORDER",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `City: ${city}`,
      "",
      "Pieces",
      items || "(none)",
      "",
      gifts.length ? "Accompanying gifts" : "Accompanying gifts: none yet",
      gifts.length ? gifts.map((g) => `- ${g.name} (orders from ${money(g.min)})`).join("\n") : "",
      "",
      mode === "pickup"
        ? `Pickup salon: ${store}`
        : `Courier to ${city}, ${STATE_NAMES[stateCode] ?? stateCode} — ${money(fee)}`,
      mode === "delivery" ? `Street address: ${address}` : "",
      "",
      `Goods: ${money(goods)}`,
      `Courier: ${money(fee)}`,
      `Order total (goods + courier): ${money(total)}`,
      `Deposit due now (75%): ${money(deposit)}`,
      `Balance on receipt (25%): ${money(balance)}`,
      `Payment method: ${payment}`,
      "",
      `Notes: ${notes || "None"}`,
      "",
      "Please confirm and send payment instructions. No card will be charged.",
    ]
      .filter((line) => line !== undefined)
      .join("\n");
  }, [lines, name, email, phone, city, mode, store, stateCode, address, goods, fee, total, deposit, balance, payment, notes, gifts]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!lines.length) {
      setError("Add a piece before reserving.");
      return;
    }
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Name, email, and phone are required.");
      return;
    }
    if (mode === "delivery") {
      const cities = CITIES[stateCode] ?? [];
      if (!stateCode || !cities.includes(city)) {
        setError("Choose a state and a city from the list.");
        return;
      }
      if (address.trim().length < 6) {
        setError("Enter a street address for the courier.");
        return;
      }
    }
    const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
    const mail = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent("Virelle order — " + name)}&body=${encodeURIComponent(message)}`;
    setSent({ wa, mail });
    window.open(wa, "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full border border-line bg-ink px-3 py-3 text-sm text-ivory outline-none focus:border-gold";

  return (
    <section id="reserve" className="bg-ink-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow">Secure the piece</p>
          <h2 className="display mt-3 text-4xl md:text-5xl">75% now. The rest when it arrives.</h2>
          <p className="mt-4 text-sm text-muted">
            A deposit reserves every piece in the selection. Pay it by Zelle, Venmo, Cash App, PayPal, or Apple Cash. The remaining 25% is due at the salon or with the courier. No cards.
          </p>
          <dl className="mt-8 space-y-3 border-t border-line pt-6 text-sm">
            <Row k="Goods" v={money(goods)} />
            <Row k="Courier" v={money(fee)} />
            <Row k="Total" v={money(total)} strong />
            <Row k="Due now · 75%" v={money(deposit)} gold />
            <Row k="On pickup or delivery" v={money(balance)} />
          </dl>
          <div className="mt-6 border-t border-line pt-4 text-sm">
            <p className="eyebrow">With this order</p>
            {gifts.length === 0 && (
              <p className="mt-2 text-muted">Gifts begin at {money(2500)}. Add another piece to reach the first.</p>
            )}
            <ul className="mt-2 space-y-1 text-ivory">
              {gifts.map((g) => (
                <li key={g.name}>{g.name}</li>
              ))}
            </ul>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {lines.length === 0 && <li>Your selection is empty.</li>}
            {lines.map((l) => (
              <li key={l.key}>
                {l.name} · {Object.values(l.options).join(" · ")} × {l.qty}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} className="space-y-4 border border-line bg-panel p-5 lg:col-span-3 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs tracking-[0.12em] uppercase text-muted">
              Full name
              <input className={`${field} mt-2`} value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label className="block text-xs tracking-[0.12em] uppercase text-muted">
              Email
              <input type="email" className={`${field} mt-2`} value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label className="block text-xs tracking-[0.12em] uppercase text-muted">
              Phone / WhatsApp
              <input className={`${field} mt-2`} value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setMode("pickup")}
              className={`border px-4 py-4 text-left ${mode === "pickup" ? "border-gold text-ivory" : "border-line text-muted"}`}
            >
              <span className="block text-sm">Salon pickup</span>
              <span className="text-xs text-faint">No delivery fee</span>
            </button>
            <button
              type="button"
              onClick={() => setMode("delivery")}
              className={`border px-4 py-4 text-left ${mode === "delivery" ? "border-gold text-ivory" : "border-line text-muted"}`}
            >
              <span className="block text-sm">Insured courier</span>
              <span className="text-xs text-faint">Fee added to the total</span>
            </button>
          </div>

          {mode === "pickup" ? (
            <label className="block text-xs tracking-[0.12em] uppercase text-muted">
              Preferred salon
              <select className={`${field} mt-2`} value={store} onChange={(e) => setStore(e.target.value)}>
                {STORES.map((s) => (
                  <option key={s.city} value={s.city}>
                    {s.city}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <>
              <label className="block text-xs tracking-[0.12em] uppercase text-muted">
                State
                <select
                  className={`${field} mt-2`}
                  value={stateCode}
                  onChange={(e) => {
                    setStateCode(e.target.value);
                    setCity("");
                  }}
                  required
                >
                  <option value="">Select a state</option>
                  {Object.entries(STATE_NAMES).map(([code, label]) => (
                    <option key={code} value={code}>
                      {label} — courier {money(courierFee(code))}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-xs tracking-[0.12em] uppercase text-muted">
                City
                <select
                  className={`${field} mt-2`}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  disabled={!stateCode}
                >
                  <option value="">Select a city</option>
                  {(CITIES[stateCode] ?? []).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-xs tracking-[0.12em] uppercase text-muted">
                Street address
                <input className={`${field} mt-2`} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street, apt, ZIP" required />
              </label>
            </>
          )}

          <fieldset>
            <legend className="text-xs tracking-[0.12em] uppercase text-muted">How you will send the 75%</legend>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {PAYMENTS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPayment(p)}
                  className={`min-h-11 border px-2 py-3 text-xs ${payment === p ? "border-gold text-gold" : "border-line text-muted"}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="block text-xs tracking-[0.12em] uppercase text-muted">
            Engraving or notes
            <textarea className={`${field} mt-2`} rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>

          {error && <p className="text-sm text-gold-2">{error}</p>}

          <button type="submit" className="w-full bg-gold py-4 text-xs tracking-[0.18em] uppercase text-ink">
            Send order on WhatsApp
          </button>
          <p className="text-center text-xs text-faint">
            We open WhatsApp with the full invoice. An email draft is ready below if you prefer.
          </p>

          {sent && (
            <div className="space-y-3 border border-gold/40 p-4 text-sm">
              <p>Order prepared for {name.split(" ")[0]}. Deposit {money(deposit)} via {payment}.</p>
              <a href={sent.wa} target="_blank" rel="noreferrer" className="block bg-gold py-3 text-center text-xs tracking-[0.16em] uppercase text-ink">
                Open WhatsApp again
              </a>
              <a href={sent.mail} className="block border border-gold py-3 text-center text-xs tracking-[0.16em] uppercase text-gold">
                Open email draft
              </a>
              <button type="button" className="w-full text-xs text-faint" onClick={() => { clear(); setSent(null); }}>
                Clear selection
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Row({ k, v, strong, gold }: { k: string; v: string; strong?: boolean; gold?: boolean }) {
  return (
    <div className={`flex justify-between ${strong ? "border-t border-line pt-3 text-ivory" : ""} ${gold ? "text-gold" : "text-muted"}`}>
      <dt>{k}</dt>
      <dd className={gold || strong ? "text-gold" : ""}>{v}</dd>
    </div>
  );
}
