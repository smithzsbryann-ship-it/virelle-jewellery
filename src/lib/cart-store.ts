import { create } from "zustand";

export type CartLine = {
  key: string;
  id: string;
  name: string;
  price: number;
  image: string;
  options: Record<string, string>;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  open: boolean;
  hydrated: boolean;
  setOpen: (open: boolean) => void;
  hydrate: () => void;
  add: (line: Omit<CartLine, "key" | "qty"> & { qty?: number }) => void;
  remove: (key: string) => void;
  clear: () => void;
};

const KEY = "virelle-selection";

function persist(lines: CartLine[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* ignore quota */
  }
}

export const useCart = create<CartState>((set, get) => ({
  lines: [],
  open: false,
  hydrated: false,
  setOpen: (open) => set({ open }),
  hydrate: () => {
    if (get().hydrated) return;
    try {
      const raw = localStorage.getItem(KEY);
      const lines = raw ? (JSON.parse(raw) as CartLine[]) : [];
      set({ lines: Array.isArray(lines) ? lines : [], hydrated: true });
    } catch {
      set({ hydrated: true });
    }
  },
  add: (line) => {
    const key = line.id + "|" + JSON.stringify(line.options);
    const lines = get().lines.slice();
    const found = lines.find((l) => l.key === key);
    if (found) found.qty += line.qty ?? 1;
    else lines.push({ ...line, key, qty: line.qty ?? 1 });
    persist(lines);
    set({ lines, open: false });
  },
  remove: (key) => {
    const lines = get().lines.filter((l) => l.key !== key);
    persist(lines);
    set({ lines });
  },
  clear: () => {
    persist([]);
    set({ lines: [] });
  },
}));

export function subtotal(lines: CartLine[]) {
  return lines.reduce((s, l) => s + l.price * l.qty, 0);
}
