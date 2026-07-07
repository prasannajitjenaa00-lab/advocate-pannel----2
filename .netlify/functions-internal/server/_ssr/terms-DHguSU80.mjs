import { n as site } from "./site-CdwoZIKX.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-YqwQWIGZ.mjs";
import { t as PageHero } from "./PageHero-DDIkZJ99.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-DHguSU80.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Legal",
		title: "Terms & Conditions",
		crumbs: [{ label: "Terms" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-14 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted-foreground",
				children: ["Last updated: ", (/* @__PURE__ */ new Date()).getFullYear()]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Bar Council of India Disclaimer",
				children: [
					"As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. By continuing to use this website, you acknowledge that you are seeking information about ",
					site.name,
					" for your own information and use."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "No Attorney-Client Relationship",
				children: "Nothing on this website constitutes legal advice or creates an attorney-client relationship. For advice on any specific matter, please schedule a consultation."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Accuracy of Information",
				children: "While every effort is made to ensure the accuracy of information on this website, no warranty is given as to its correctness or completeness."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Intellectual Property",
				children: [
					"All content, design and material on this website is the intellectual property of ",
					site.name,
					" and may not be reproduced without prior written consent."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Jurisdiction",
				children: "Any disputes arising from the use of this website shall be governed by the laws of India and subject to the exclusive jurisdiction of the local courts."
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
export { TermsPage as component };
