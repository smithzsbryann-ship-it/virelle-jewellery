import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, q as notFound, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-qMIRAl9Q.mjs";
import { a as Shell, c as money, d as useCart, l as pieceById } from "./shell-B8sO_qDZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/piece._id-DFaFxd9V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PiecePage() {
	const { id } = Route.useParams();
	if (!pieceById(id)) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieceView, {});
}
function PieceView() {
	const { id } = Route.useParams();
	const piece = pieceById(id);
	const add = useCart((s) => s.add);
	const defaults = (0, import_react.useMemo)(() => {
		const o = {};
		for (const [k, vals] of Object.entries(piece.options)) o[k] = vals[0];
		return o;
	}, [piece]);
	const [options, setOptions] = (0, import_react.useState)(defaults);
	const [added, setAdded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: piece.image,
			alt: piece.name,
			className: "w-full bg-panel object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: piece.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-2 text-5xl",
					children: piece.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xl text-gold",
					children: money(piece.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-sm text-muted",
					children: piece.copy
				}),
				Object.entries(piece.options).map(([key, values]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.14em] uppercase text-faint",
						children: key
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOptions((o) => ({
								...o,
								[key]: v
							})),
							className: `min-h-11 border px-3 text-sm ${options[key] === v ? "border-gold text-gold" : "border-line text-muted"}`,
							children: v
						}, v))
					})]
				}, key)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-8 w-full bg-gold py-4 text-xs tracking-[0.16em] uppercase text-ink sm:w-auto sm:px-10",
					onClick: () => {
						add({
							id: piece.id,
							name: piece.name,
							price: piece.price,
							image: piece.image,
							options
						});
						setAdded(true);
					},
					children: added ? "Added to selection" : "Add to selection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#reserve",
					className: "mt-4 block text-sm text-gold",
					children: "Continue to reserve — 75% deposit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-block text-xs tracking-[0.14em] uppercase text-faint",
					children: "All pieces"
				})
			]
		})]
	}) });
}
//#endregion
export { PiecePage as component };
