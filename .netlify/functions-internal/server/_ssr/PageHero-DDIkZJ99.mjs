import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-DDIkZJ99.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, subtitle, crumbs = [] }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-gradient-to-b from-[color:var(--color-surface)] to-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 opacity-[0.05]",
			style: { backgroundImage: "radial-gradient(circle at 15% 20%, #1E3A8A 0px, transparent 40%), radial-gradient(circle at 85% 80%, #D4AF37 0px, transparent 35%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative py-20 md:py-28 text-center",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-4",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .05 },
					className: "font-display text-4xl md:text-6xl font-bold text-ink",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .1 },
					className: "mt-5 text-muted-foreground max-w-2xl mx-auto",
					children: subtitle
				}),
				crumbs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mt-6 flex justify-center gap-2 text-sm text-muted-foreground font-ui",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-primary",
						children: "Home"
					}), crumbs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3.5 h-3.5" }), c.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: c.to,
							className: "hover:text-primary",
							children: c.label
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: c.label
						})]
					}, i))]
				})
			]
		})]
	});
}
//#endregion
export { PageHero as t };
