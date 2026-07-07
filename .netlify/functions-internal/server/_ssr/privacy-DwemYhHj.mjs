import { n as site } from "./site-CdwoZIKX.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-YqwQWIGZ.mjs";
import { t as PageHero } from "./PageHero-DDIkZJ99.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-DwemYhHj.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Legal",
		title: "Privacy Policy",
		crumbs: [{ label: "Privacy" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-14 max-w-3xl prose-legal",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted-foreground",
				children: ["Last updated: ", (/* @__PURE__ */ new Date()).getFullYear()]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Introduction",
				children: [
					"This Privacy Policy describes how ",
					site.name,
					" (\"we\", \"our\") handles information collected through this website. We are committed to protecting your privacy and maintaining the confidentiality of every visitor and client."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Information We Collect",
				children: "When you use the contact form, WhatsApp or email, we may receive your name, phone number, email address and details of the matter you wish to discuss. This information is used solely to respond to your enquiry."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "No Solicitation",
				children: "The contents of this website are intended for general informational purposes only and do not amount to solicitation of work in any manner. Visiting this website does not create an attorney-client relationship."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Confidentiality",
				children: "Any information shared during a consultation is protected under attorney-client privilege and will not be disclosed except as required by law."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Cookies & Analytics",
				children: "We may use basic analytics tools to understand website usage. No personally identifiable information is sold or shared with third parties for marketing."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Contact",
				children: [
					"For any privacy-related queries, please write to ",
					site.email,
					"."
				]
			})
		]
	})] });
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground leading-relaxed",
			children
		})]
	});
}
//#endregion
export { PrivacyPage as component };
