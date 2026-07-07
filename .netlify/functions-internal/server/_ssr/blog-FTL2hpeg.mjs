import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { F as Clock, G as ArrowRight, R as Calendar, l as Search } from "../_libs/lucide-react.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as SiteLayout } from "./SiteLayout-YqwQWIGZ.mjs";
import { t as PageHero } from "./PageHero-DDIkZJ99.mjs";
import { t as blogPosts } from "./legal-data-CIVChL0z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-FTL2hpeg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlogPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const categories = (0, import_react.useMemo)(() => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))], []);
	const filtered = blogPosts.filter((p) => (cat === "All" || p.category === cat) && (p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase())));
	const featured = blogPosts[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Legal Blog",
		title: "Legal Awareness & Insights",
		subtitle: "Explaining law in plain language — what your rights are and how the courts work.",
		crumbs: [{ label: "Blog" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-hover text-white p-8 md:p-12 mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block text-[11px] uppercase tracking-[0.2em] font-ui font-semibold text-gold",
						children: "Featured Article"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl md:text-4xl font-bold",
						children: featured.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-white/80 max-w-2xl",
						children: featured.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-4 text-xs text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-3.5 h-3.5" }), featured.date]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }), featured.read]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-2 py-0.5 rounded-full bg-white/15",
								children: featured.category
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full md:max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search articles...",
						className: "w-full pl-10 pr-4 py-3 rounded-full border border-border bg-white text-sm font-ui focus:outline-none focus:border-primary"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 flex-wrap",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: `px-4 py-1.5 rounded-full text-xs font-ui font-semibold border transition-colors ${cat === c ? "bg-primary text-primary-foreground border-primary" : "bg-white text-ink/70 border-border hover:border-primary"}`,
						children: c
					}, c))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
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
					className: "rounded-2xl border border-border bg-white overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-40 bg-gradient-to-br from-primary/15 via-gold/15 to-transparent grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-3 py-1 rounded-full text-[11px] font-ui font-semibold bg-white/70 backdrop-blur text-primary",
							children: p.category
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs text-muted-foreground mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-3.5 h-3.5" }), p.date]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }), p.read]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-ink",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "mt-4 inline-flex items-center gap-1 text-sm font-ui font-semibold text-primary hover:text-hover",
								children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
							})
						]
					})]
				}, p.slug))
			}),
			filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-muted-foreground mt-16",
				children: "No articles match your search."
			})
		]
	})] });
}
//#endregion
export { BlogPage as component };
