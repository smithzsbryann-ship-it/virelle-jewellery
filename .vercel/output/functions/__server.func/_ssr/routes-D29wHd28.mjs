import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shell, c as money, d as useCart, i as STORES, n as PAYMENTS, o as WHATSAPP_E164, r as PIECES, s as ZONES, t as ORDER_EMAIL, u as subtotal } from "./shell-B8sO_qDZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D29wHd28.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reserve() {
	const lines = useCart((s) => s.lines);
	const clear = useCart((s) => s.clear);
	const [mode, setMode] = (0, import_react.useState)("pickup");
	const [zone, setZone] = (0, import_react.useState)(ZONES[0].id);
	const [payment, setPayment] = (0, import_react.useState)(PAYMENTS[0]);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [store, setStore] = (0, import_react.useState)(STORES[0].city);
	const [address, setAddress] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const fee = mode === "delivery" ? ZONES.find((z) => z.id === zone)?.fee ?? 0 : 0;
	const goods = subtotal(lines);
	const total = goods + fee;
	const deposit = Math.round(total * .75);
	const balance = total - deposit;
	const message = (0, import_react.useMemo)(() => {
		const items = lines.map((l, i) => `${i + 1}. ${l.name} (${Object.values(l.options).join(", ")}) x${l.qty} — ${money(l.price * l.qty)}`).join("\n");
		return [
			"SOLENNE ORDER",
			"",
			`Name: ${name}`,
			`Email: ${email}`,
			`Phone: ${phone}`,
			`City: ${city}`,
			"",
			"Pieces",
			items || "(none)",
			"",
			mode === "pickup" ? `Pickup salon: ${store}` : `Delivery: ${ZONES.find((z) => z.id === zone)?.label}`,
			mode === "delivery" ? `Address: ${address}` : "",
			"",
			`Subtotal: ${money(goods)}`,
			`Delivery: ${money(fee)}`,
			`Order total: ${money(total)}`,
			`Deposit due now (75%): ${money(deposit)}`,
			`Balance on receipt (25%): ${money(balance)}`,
			`Payment method: ${payment}`,
			"",
			`Notes: ${notes || "None"}`,
			"",
			"Please confirm and send payment instructions. No card will be charged."
		].filter((line) => line !== void 0).join("\n");
	}, [
		lines,
		name,
		email,
		phone,
		city,
		mode,
		store,
		zone,
		address,
		goods,
		fee,
		total,
		deposit,
		balance,
		payment,
		notes
	]);
	function submit(e) {
		e.preventDefault();
		setError("");
		if (!lines.length) {
			setError("Add a piece before reserving.");
			return;
		}
		if (!name.trim() || !email.trim() || !phone.trim() || !city.trim()) {
			setError("Name, email, phone, and city are required.");
			return;
		}
		if (mode === "delivery" && !address.trim()) {
			setError("Add a delivery address.");
			return;
		}
		const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
		const mail = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent("Solenne order — " + name)}&body=${encodeURIComponent(message)}`;
		setSent({
			wa,
			mail
		});
		window.open(wa, "_blank", "noopener,noreferrer");
	}
	const field = "w-full border border-line bg-ink px-3 py-3 text-sm text-ivory outline-none focus:border-gold";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reserve",
		className: "bg-ink-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Secure the piece"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-3 text-4xl md:text-5xl",
						children: "75% now. The rest when it arrives."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "A deposit reserves the invoice. Pay it by Zelle, Venmo, Cash App, ACH, or wire. The remaining 25% is due at the salon or when the courier hands you the box. We do not take cards on this site."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 space-y-3 border-t border-line pt-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Goods",
								v: money(goods)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Delivery",
								v: money(fee)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Order total",
								v: money(total),
								strong: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Due now · 75%",
								v: money(deposit),
								gold: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "On pickup or delivery",
								v: money(balance)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-2 text-sm text-muted",
						children: [lines.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Your selection is empty." }), lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							l.name,
							" · ",
							Object.values(l.options).join(" · "),
							" × ",
							l.qty
						] }, l.key))]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "space-y-4 border border-line bg-panel p-5 lg:col-span-3 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs tracking-[0.12em] uppercase text-muted",
								children: ["Full name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: `${field} mt-2`,
									value: name,
									onChange: (e) => setName(e.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs tracking-[0.12em] uppercase text-muted",
								children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									className: `${field} mt-2`,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs tracking-[0.12em] uppercase text-muted",
								children: ["Phone / WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: `${field} mt-2`,
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs tracking-[0.12em] uppercase text-muted",
								children: ["City", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: `${field} mt-2`,
									value: city,
									onChange: (e) => setCity(e.target.value),
									required: true
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMode("pickup"),
							className: `border px-4 py-4 text-left ${mode === "pickup" ? "border-gold text-ivory" : "border-line text-muted"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm",
								children: "Salon pickup"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-faint",
								children: "No delivery fee"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMode("delivery"),
							className: `border px-4 py-4 text-left ${mode === "delivery" ? "border-gold text-ivory" : "border-line text-muted"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm",
								children: "Insured delivery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-faint",
								children: "Fee by zone"
							})]
						})]
					}),
					mode === "pickup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs tracking-[0.12em] uppercase text-muted",
						children: ["Preferred salon", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: `${field} mt-2`,
							value: store,
							onChange: (e) => setStore(e.target.value),
							children: STORES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.city,
								children: s.city
							}, s.city))
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs tracking-[0.12em] uppercase text-muted",
						children: ["Delivery zone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: `${field} mt-2`,
							value: zone,
							onChange: (e) => setZone(e.target.value),
							children: ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: z.id,
								children: [
									z.label,
									" — ",
									money(z.fee)
								]
							}, z.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs tracking-[0.12em] uppercase text-muted",
						children: ["Address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: `${field} mt-2`,
							rows: 2,
							value: address,
							onChange: (e) => setAddress(e.target.value)
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-xs tracking-[0.12em] uppercase text-muted",
						children: "How you will send the 75%"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3",
						children: PAYMENTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPayment(p),
							className: `min-h-11 border px-2 py-3 text-xs ${payment === p ? "border-gold text-gold" : "border-line text-muted"}`,
							children: p
						}, p))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs tracking-[0.12em] uppercase text-muted",
						children: ["Engraving or notes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: `${field} mt-2`,
							rows: 2,
							value: notes,
							onChange: (e) => setNotes(e.target.value)
						})]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold-2",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full bg-gold py-4 text-xs tracking-[0.18em] uppercase text-ink",
						children: "Send order on WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-faint",
						children: "We open WhatsApp with the full invoice. An email draft is ready below if you prefer."
					}),
					sent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 border border-gold/40 p-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Order prepared for ",
								name.split(" ")[0],
								". Deposit ",
								money(deposit),
								" via ",
								payment,
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: sent.wa,
								target: "_blank",
								rel: "noreferrer",
								className: "block bg-gold py-3 text-center text-xs tracking-[0.16em] uppercase text-ink",
								children: "Open WhatsApp again"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: sent.mail,
								className: "block border border-gold py-3 text-center text-xs tracking-[0.16em] uppercase text-gold",
								children: "Open email draft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "w-full text-xs text-faint",
								onClick: () => {
									clear();
									setSent(null);
								},
								children: "Clear selection"
							})
						]
					})
				]
			})]
		})
	});
}
function Row({ k, v, strong, gold }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex justify-between ${strong ? "border-t border-line pt-3 text-ivory" : ""} ${gold ? "text-gold" : "text-muted"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: k }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: gold || strong ? "text-gold" : "",
			children: v
		})]
	});
}
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "rings",
		label: "Rings"
	},
	{
		id: "necklaces",
		label: "Necklaces"
	},
	{
		id: "earrings",
		label: "Earrings"
	},
	{
		id: "bracelets",
		label: "Bracelets"
	}
];
function Home() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const list = filter === "all" ? PIECES : PIECES.filter((p) => p.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[88vh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/jewelry/salon.jpg",
					alt: "Solenne salon at night",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "United States · twelve salons"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display mt-4 max-w-3xl text-5xl leading-none md:text-7xl",
							children: ["Jewelry held", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold-2",
								children: " lightly."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm text-ivory/85 md:text-base",
							children: "Diamonds and 18k gold, made to be chosen in person or reserved from anywhere in the country. Seventy-five percent secures the invoice. The rest waits until pickup or delivery."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#collection",
								className: "bg-gold px-6 py-3 text-xs tracking-[0.16em] uppercase text-ink",
								children: "View the collection"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#reserve",
								className: "border border-ivory/40 px-6 py-3 text-xs tracking-[0.16em] uppercase",
								children: "Reserve a piece"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "grid border-y border-line sm:grid-cols-2 lg:grid-cols-4",
			children: [
				["Twelve salons", "From Fifth Avenue to Austin"],
				["75% deposit", "Locks the piece and the invoice"],
				["No cards", "Zelle, Venmo, Cash App, wire"],
				["Insured transit", "Or collect it at the counter"]
			].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-line px-5 py-6 sm:border-r sm:last:border-r-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display text-2xl text-gold",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: d
				})]
			}, t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "collection",
			className: "mx-auto max-w-6xl px-5 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "The floor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mt-2 text-4xl md:text-5xl",
					children: "Current pieces"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(f.id),
						className: `min-h-11 border px-4 text-xs tracking-[0.14em] uppercase ${filter === f.id ? "border-gold text-gold" : "border-line text-muted"}`,
						children: f.label
					}, f.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/piece/$id",
					params: { id: p.id },
					className: "group block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden bg-panel",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.name,
							className: "aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.68rem] tracking-[0.18em] uppercase text-faint",
							children: p.note
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display text-2xl",
							children: p.name
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-gold",
							children: money(p.price)
						})]
					})]
				}, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/jewelry/solitaire.jpg",
				alt: "Solitaire on black stone",
				className: "h-full max-h-[640px] w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center bg-panel px-8 py-16 md:px-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "How an order moves"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 space-y-6",
					children: [
						["Choose", "Metal, size, and any engraving. Add it to your selection."],
						["Deposit 75%", "We send payment details for Zelle, Venmo, Cash App, ACH, or wire. That payment secures the invoice."],
						["Confirm", "You receive the same summary on WhatsApp and by email."],
						["Finish 25%", "Pay the balance when you collect it, or when insured delivery arrives. Fees depend on the zone."]
					].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "display text-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mr-3 text-gold",
							children: ["0", i + 1]
						}), t]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: d
					})] }, t))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "salons",
			className: "mx-auto max-w-6xl px-5 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Visit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mt-2 text-4xl md:text-5xl",
					children: "Salons across the country"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-sm text-muted",
					children: "Private appointments, same-day pickup for secured orders, and the piece in your hand before you leave."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3",
					children: STORES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-ink p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display text-2xl text-gold-2",
								children: s.city
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: s.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs tracking-wide text-faint",
								children: s.hours
							})
						]
					}, s.city))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reserve, {})
	] });
}
//#endregion
export { Home as component };
