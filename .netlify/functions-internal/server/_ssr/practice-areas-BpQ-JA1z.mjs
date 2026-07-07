import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as ArrowRight, R as Calendar } from "../_libs/lucide-react.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as SiteLayout } from "./SiteLayout-YqwQWIGZ.mjs";
import { t as PageHero } from "./PageHero-DDIkZJ99.mjs";
import { r as practiceAreas } from "./legal-data-CIVChL0z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/practice-areas-BpQ-JA1z.js
var import_jsx_runtime = require_jsx_runtime();
function PracticeAreasPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Practice Areas",
		title: "Comprehensive Legal Services",
		subtitle: "Focused expertise across 18+ areas of law — matched with the personal attention every case deserves.",
		crumbs: [{ label: "Practice Areas" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: practiceAreas.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					amount: .15
				},
				transition: { delay: i % 6 * .04 },
				className: "group relative p-6 rounded-2xl border border-border bg-white hover:border-primary/40 hover:shadow-[0_25px_60px_-25px_rgba(30,58,138,0.35)] hover:-translate-y-1 transition-all",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "w-5 h-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg text-ink",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: p.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-4 inline-flex items-center gap-1 text-sm font-ui font-semibold text-primary hover:text-hover",
						children: ["Discuss This Matter ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
					})
				]
			}, p.slug))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "btn-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4" }), " Book a Consultation"]
			})
		})]
	})] });
}
//#endregion
export { PracticeAreasPage as component };
