import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Plus, p as Minus } from "../_libs/lucide-react.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as SiteLayout } from "./SiteLayout-YqwQWIGZ.mjs";
import { t as PageHero } from "./PageHero-DDIkZJ99.mjs";
import { n as faqs } from "./legal-data-CIVChL0z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-u94QBpAX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FAQPage() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "FAQ",
		title: "Frequently Asked Questions",
		subtitle: "Clear answers to what most clients ask before engaging legal counsel.",
		crumbs: [{ label: "FAQ" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-16 max-w-3xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: faqs.map((f, i) => {
				const isOpen = open === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-white overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "w-full flex items-center justify-between gap-4 p-5 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-ui font-semibold text-ink",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `shrink-0 grid place-items-center w-8 h-8 rounded-full ${isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`,
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: {
								height: 0,
								opacity: 0
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed",
								children: f.a
							})
						})
					})]
				}, f.q);
			})
		})
	})] });
}
//#endregion
export { FAQPage as component };
