import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as Gavel, O as FileSearch, V as BookOpen, m as MessageSquare, s as ShieldCheck, u as Scale, y as Landmark } from "../_libs/lucide-react.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as SiteLayout } from "./SiteLayout-YqwQWIGZ.mjs";
import { t as PageHero } from "./PageHero-DDIkZJ99.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/high-court-DfQFKavE.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		icon: Landmark,
		title: "Court Experience",
		desc: "Regular appearances before the High Court — writs, appeals, revisions and constitutional matters."
	},
	{
		icon: BookOpen,
		title: "Legal Expertise",
		desc: "Deep grounding in constitutional, criminal, service and civil laws with current jurisprudence."
	},
	{
		icon: ShieldCheck,
		title: "Professional Ethics",
		desc: "Strict adherence to Bar Council rules — no false assurances, no compromise on integrity."
	},
	{
		icon: FileSearch,
		title: "Case Preparation",
		desc: "Meticulous research, precedent analysis and drafting of pleadings, synopses and written submissions."
	},
	{
		icon: Gavel,
		title: "Court Representation",
		desc: "Focused, well-structured oral arguments — respectful to the bench, firm on client interest."
	},
	{
		icon: MessageSquare,
		title: "Client Consultation",
		desc: "Regular updates, honest opinions and clear explanations of every procedural step."
	},
	{
		icon: Scale,
		title: "Legal Strategy",
		desc: "Case strategy built around long-term client interests — trial, appeal, review or settlement."
	}
];
function HighCourtPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "High Court Practice",
		title: "Focused, Ethical High Court Advocacy",
		subtitle: "Rigorous preparation, principled representation and respectful courtroom presence.",
		crumbs: [{ label: "High Court Practice" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-w-3xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" }), items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { delay: i * .05 },
				className: "relative pl-20 pb-10 last:pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white border border-border shadow-md grid place-items-center text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "w-6 h-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-6 md:left-8 top-16 bottom-0 w-px bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl text-ink",
						children: it.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground text-sm max-w-xl",
						children: it.desc
					})
				]
			}, it.title))]
		})
	})] });
}
//#endregion
export { HighCourtPage as component };
