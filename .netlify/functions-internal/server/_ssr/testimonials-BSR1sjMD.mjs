import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Star } from "../_libs/lucide-react.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as SiteLayout } from "./SiteLayout-YqwQWIGZ.mjs";
import { t as PageHero } from "./PageHero-DDIkZJ99.mjs";
import { i as testimonials } from "./legal-data-CIVChL0z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-BSR1sjMD.js
var import_jsx_runtime = require_jsx_runtime();
function TestimonialsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Testimonials",
		title: "Voices of Trust",
		subtitle: "Honest words from clients we've had the privilege to represent.",
		crumbs: [{ label: "Testimonials" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .05 },
				className: "glass-card rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 text-gold mb-3",
						children: [...Array(t.stars)].map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-current" }, j))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-ink/80 leading-relaxed",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-3 pt-4 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-ui font-semibold",
							children: t.name.charAt(0)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-ui font-semibold text-sm text-ink",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: t.role
						})] })]
					})
				]
			}, t.name))
		})
	})] });
}
//#endregion
export { TestimonialsPage as component };
