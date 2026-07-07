import { o as __toESM } from "../_runtime.mjs";
import { i as waLink, n as site, r as telLink, t as mailLink } from "./site-CdwoZIKX.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { F as Clock, I as CircleCheck, _ as Mail, c as Send, f as Phone, g as MapPin } from "../_libs/lucide-react.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { n as WhatsAppIcon, t as SiteLayout } from "./SiteLayout-YqwQWIGZ.mjs";
import { t as PageHero } from "./PageHero-DDIkZJ99.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CUxnPxxB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		setTimeout(() => setSent(false), 4e3);
		e.target.reset();
	};
	const info = [
		{
			icon: MapPin,
			label: "Office Address",
			value: site.address
		},
		{
			icon: Phone,
			label: "Phone",
			value: site.phoneDisplay,
			href: telLink
		},
		{
			icon: Mail,
			label: "Email",
			value: site.email,
			href: mailLink
		},
		{
			icon: Clock,
			label: "Office Timing",
			value: site.hours
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Get in Touch",
			subtitle: "Confidential, obligation-free — we'll respond promptly and honestly.",
			crumbs: [{ label: "Contact" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 grid lg:grid-cols-3 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-1 space-y-4",
				children: [info.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 rounded-2xl bg-white border border-border flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest font-ui text-muted-foreground",
						children: it.label
					}), it.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: it.href,
						className: "font-ui text-ink hover:text-primary",
						children: it.value
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-ui text-ink text-sm",
						children: it.value
					})] })]
				}, it.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: waLink(),
					target: "_blank",
					rel: "noopener",
					className: "btn-gold w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-4 h-4" }), " Chat on WhatsApp"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				onSubmit,
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "lg:col-span-2 p-8 rounded-2xl bg-white border border-border shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-ink",
						children: "Send a Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Share brief details of your matter — everything is kept confidential."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid sm:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								name: "phone",
								type: "tel",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Subject",
								name: "subject",
								required: true
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs uppercase tracking-widest font-ui text-muted-foreground mb-2",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 5,
							required: true,
							className: "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "btn-primary mt-6",
						children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4" }), " Message Sent"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), " Send Message"] })
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl overflow-hidden border border-border shadow-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: site.mapEmbed,
					title: "Chamber location",
					className: "w-full h-[420px]",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})
		})
	] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "block text-xs uppercase tracking-widest font-ui text-muted-foreground mb-2",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary"
	})] });
}
//#endregion
export { ContactPage as component };
