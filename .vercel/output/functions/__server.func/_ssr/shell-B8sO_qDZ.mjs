import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-B8sO_qDZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_E164 = "12125550148";
var ORDER_EMAIL = "orders@solennejewelry.com";
var PIECES = [
	{
		id: "solitaire",
		name: "Solenne Solitaire",
		category: "rings",
		price: 4850,
		image: "/jewelry/solitaire.jpg",
		note: "Signature",
		copy: "A 1.20ct round brilliant in 18k champagne gold. Quiet, exact, made to be worn every day.",
		options: {
			Metal: [
				"18k Champagne Gold",
				"18k White Gold",
				"Platinum"
			],
			Size: [
				"5",
				"5.5",
				"6",
				"6.5",
				"7",
				"7.5",
				"8",
				"8.5"
			]
		}
	},
	{
		id: "halo",
		name: "Halo Rose",
		category: "rings",
		price: 6200,
		image: "/jewelry/halo.jpg",
		note: "New",
		copy: "A 1.00ct center with a micro-pavé halo in 18k rose gold. Warm light, close to the hand.",
		options: {
			Metal: [
				"18k Rose Gold",
				"18k White Gold",
				"Platinum"
			],
			Size: [
				"5",
				"5.5",
				"6",
				"6.5",
				"7",
				"7.5",
				"8"
			]
		}
	},
	{
		id: "triad",
		name: "Triad",
		category: "rings",
		price: 3950,
		image: "/jewelry/three-stone.jpg",
		note: "Atelier",
		copy: "Three-stone geometry in platinum. A cushion center with tapered sides, set for permanence.",
		options: {
			Metal: ["Platinum", "18k White Gold"],
			Size: [
				"5",
				"6",
				"6.5",
				"7",
				"7.5",
				"8"
			]
		}
	},
	{
		id: "lumen",
		name: "Lumen Pendant",
		category: "necklaces",
		price: 2450,
		image: "/jewelry/pendant.jpg",
		note: "Everyday",
		copy: "A pear diamond on an adjustable 18k chain. One stone, nothing extra.",
		options: {
			Metal: [
				"18k Yellow Gold",
				"18k White Gold",
				"18k Rose Gold"
			],
			Length: [
				"16\"",
				"18\"",
				"20\""
			]
		}
	},
	{
		id: "station",
		name: "Station Layer",
		category: "necklaces",
		price: 1890,
		image: "/jewelry/layer.jpg",
		note: "Layering",
		copy: "Fine gold chains with graduated diamond stations. Wear one, or both.",
		options: {
			Metal: ["18k Yellow Gold", "18k White Gold"],
			Length: ["16\"", "18\""]
		}
	},
	{
		id: "studs",
		name: "Classic Studs",
		category: "earrings",
		price: 3200,
		image: "/jewelry/studs.jpg",
		note: "Essential",
		copy: "1.00ct total weight round brilliants in a four-prong setting. The pair you never take off.",
		options: {
			Metal: [
				"18k White Gold",
				"18k Yellow Gold",
				"Platinum"
			],
			Weight: [
				"0.50ct tw",
				"1.00ct tw",
				"1.50ct tw"
			]
		}
	},
	{
		id: "hoops",
		name: "Sculpted Hoops",
		category: "earrings",
		price: 1650,
		image: "/jewelry/hoops.jpg",
		note: "Day",
		copy: "Brushed 18k hoops with a fine line of diamonds along the outer edge.",
		options: {
			Metal: [
				"18k Yellow Gold",
				"18k Rose Gold",
				"18k White Gold"
			],
			Diameter: [
				"20mm",
				"25mm",
				"30mm"
			]
		}
	},
	{
		id: "tennis",
		name: "Line Bracelet",
		category: "bracelets",
		price: 5400,
		image: "/jewelry/tennis.jpg",
		note: "Icon",
		copy: "3.00ct total of round diamonds in flexible 18k white gold. Box clasp with a safety.",
		options: {
			Metal: ["18k White Gold", "Platinum"],
			Length: [
				"6.5\"",
				"7\"",
				"7.5\""
			]
		}
	},
	{
		id: "cuff",
		name: "Open Cuff",
		category: "bracelets",
		price: 2750,
		image: "/jewelry/cuff.jpg",
		note: "Sculptural",
		copy: "A solid gold cuff with a quiet constellation of diamonds. Adjusts to the wrist.",
		options: {
			Metal: ["18k Yellow Gold", "18k Rose Gold"],
			Fit: [
				"Small",
				"Medium",
				"Large"
			]
		}
	}
];
var STORES = [
	{
		city: "New York",
		address: "725 Fifth Avenue, New York, NY",
		hours: "Mon–Sat 10–7"
	},
	{
		city: "Los Angeles",
		address: "9570 Wilshire Blvd, Beverly Hills, CA",
		hours: "Mon–Sat 10–7"
	},
	{
		city: "Chicago",
		address: "900 N Michigan Ave, Chicago, IL",
		hours: "Mon–Sat 10–7"
	},
	{
		city: "Miami",
		address: "9700 Collins Ave, Bal Harbour, FL",
		hours: "Mon–Sat 10–8"
	},
	{
		city: "Dallas",
		address: "8687 N Central Expy, Dallas, TX",
		hours: "Mon–Sat 10–7"
	},
	{
		city: "Houston",
		address: "5015 Westheimer Rd, Houston, TX",
		hours: "Mon–Sat 10–7"
	},
	{
		city: "San Francisco",
		address: "150 Post Street, San Francisco, CA",
		hours: "Mon–Sat 10–6"
	},
	{
		city: "Boston",
		address: "100 Huntington Ave, Boston, MA",
		hours: "Mon–Sat 10–7"
	},
	{
		city: "Atlanta",
		address: "3393 Peachtree Rd NE, Atlanta, GA",
		hours: "Mon–Sat 10–7"
	},
	{
		city: "Washington",
		address: "5300 Wisconsin Ave NW, Washington, DC",
		hours: "Mon–Sat 10–7"
	},
	{
		city: "Seattle",
		address: "600 Pine Street, Seattle, WA",
		hours: "Mon–Sat 10–7"
	},
	{
		city: "Austin",
		address: "2901 S Capital of Texas Hwy, Austin, TX",
		hours: "Mon–Sat 10–7"
	}
];
var ZONES = [
	{
		id: "local",
		label: "Local — within 30 miles of a salon",
		fee: 45
	},
	{
		id: "regional",
		label: "Regional — same state",
		fee: 95
	},
	{
		id: "national",
		label: "National — contiguous United States",
		fee: 175
	},
	{
		id: "express",
		label: "Express overnight",
		fee: 295
	}
];
var PAYMENTS = [
	"Zelle",
	"Venmo",
	"Cash App",
	"Bank transfer (ACH)",
	"Apple Pay or Google Pay link",
	"Wire"
];
function money(n) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(n);
}
function pieceById(id) {
	return PIECES.find((p) => p.id === id);
}
var KEY = "solenne-selection";
function persist(lines) {
	try {
		localStorage.setItem(KEY, JSON.stringify(lines));
	} catch {}
}
var useCart = create((set, get) => ({
	lines: [],
	open: false,
	hydrated: false,
	setOpen: (open) => set({ open }),
	hydrate: () => {
		if (get().hydrated) return;
		try {
			const raw = localStorage.getItem(KEY);
			const lines = raw ? JSON.parse(raw) : [];
			set({
				lines: Array.isArray(lines) ? lines : [],
				hydrated: true
			});
		} catch {
			set({ hydrated: true });
		}
	},
	add: (line) => {
		const key = line.id + "|" + JSON.stringify(line.options);
		const lines = get().lines.slice();
		const found = lines.find((l) => l.key === key);
		if (found) found.qty += line.qty ?? 1;
		else lines.push({
			...line,
			key,
			qty: line.qty ?? 1
		});
		persist(lines);
		set({
			lines,
			open: true
		});
	},
	remove: (key) => {
		const lines = get().lines.filter((l) => l.key !== key);
		persist(lines);
		set({ lines });
	},
	clear: () => {
		persist([]);
		set({ lines: [] });
	}
}));
function subtotal(lines) {
	return lines.reduce((s, l) => s + l.price * l.qty, 0);
}
function Shell({ children }) {
	const lines = useCart((s) => s.lines);
	const setOpen = useCart((s) => s.setOpen);
	const hydrate = useCart((s) => s.hydrate);
	const count = lines.reduce((n, l) => n + l.qty, 0);
	const [nav, setNav] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ink text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line/80 bg-ink/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "display text-xl tracking-[0.28em] text-gold",
							children: "SOLENNE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-xs tracking-[0.16em] uppercase text-muted md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#collection",
									children: "Collection"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#salons",
									children: "Salons"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#reserve",
									children: "Reserve"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setOpen(true),
									className: "border border-gold/40 px-4 py-2 text-gold",
									children: ["Selection ", count > 0 ? `(${count})` : ""]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 md:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpen(true),
								className: "text-xs tracking-[0.14em] uppercase text-gold",
								children: ["Bag ", count > 0 ? count : ""]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Menu",
								onClick: () => setNav((v) => !v),
								className: "p-2",
								children: nav ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
							})]
						})
					]
				}), nav && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 border-t border-line px-5 py-5 text-sm tracking-[0.14em] uppercase md:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#collection",
							onClick: () => setNav(false),
							children: "Collection"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#salons",
							onClick: () => setNav(false),
							children: "Salons"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#reserve",
							onClick: () => setNav(false),
							children: "Reserve"
						})
					]
				})]
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line bg-ink-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display text-2xl tracking-[0.22em] text-gold",
							children: "SOLENNE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xs text-sm text-muted",
							children: "Fine jewelry for the American client. Salons in twelve cities. Deposit by Zelle, Venmo, or Cash App — never a card form."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-3",
									children: "Orders"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "orders@solennejewelry.com" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1",
									children: "WhatsApp +1 (212) 555-0148"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-faint",
									children: "Mon–Sat, 10am–7pm ET"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-3",
									children: "Salons"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [STORES.length, " showrooms, coast to coast."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#salons",
									className: "mt-2 inline-block text-gold",
									children: "View cities"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer, {})
		]
	});
}
function Drawer() {
	const open = useCart((s) => s.open);
	const setOpen = useCart((s) => s.setOpen);
	const lines = useCart((s) => s.lines);
	const remove = useCart((s) => s.remove);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close selection",
			className: "absolute inset-0 bg-ink/70",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "absolute top-0 right-0 flex h-full w-full max-w-md flex-col border-l border-line bg-ink-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-line px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-2xl",
						children: "Your selection"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-auto px-5",
					children: [lines.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-10 text-sm text-muted",
						children: "Nothing selected yet."
					}), lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 border-b border-line py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: l.image,
								alt: "",
								className: "h-20 w-20 object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "display text-xl",
										children: l.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-faint",
										children: [
											Object.values(l.options).join(" · "),
											" × ",
											l.qty
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-gold",
										children: money(l.price * l.qty)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-faint",
								onClick: () => remove(l.key),
								"aria-label": "Remove",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
							})
						]
					}, l.key))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "Subtotal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: money(subtotal(lines))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#reserve",
						onClick: () => setOpen(false),
						className: "block bg-gold py-3 text-center text-xs tracking-[0.16em] uppercase text-ink",
						children: "Reserve with 75%"
					})]
				})
			]
		})]
	});
}
//#endregion
export { Shell as a, money as c, useCart as d, STORES as i, pieceById as l, PAYMENTS as n, WHATSAPP_E164 as o, PIECES as r, ZONES as s, ORDER_EMAIL as t, subtotal as u };
