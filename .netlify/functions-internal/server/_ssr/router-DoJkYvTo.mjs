import { o as __toESM } from "../_runtime.mjs";
import { n as site } from "./site-CdwoZIKX.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as faqs } from "./legal-data-CIVChL0z.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DoJkYvTo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Dar3GcOE.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Adv. Akrity Aishwarya — High Court Advocate | Legal Consultation" },
			{
				name: "description",
				content: "Experienced High Court Advocate offering civil, criminal, writ, family and constitutional legal services. Book a confidential consultation today."
			},
			{
				name: "author",
				content: "Adv. Akrity Aishwarya"
			},
			{
				property: "og:title",
				content: "Adv. Akrity Aishwarya — High Court Advocate"
			},
			{
				property: "og:description",
				content: "Professional legal representation with integrity, dedication and years of courtroom experience."
			},
			{
				property: "og:site_name",
				content: "Adv. Akrity Aishwarya"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [{
			src: "https://cdn.jsdelivr.net/npm/whatsapp@0.0.5-Alpha/build/api/base.min.js",
			async: true
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Attorney",
				name: "Adv. Akrity Aishwarya",
				description: "High Court Advocate providing civil, criminal, writ, family and constitutional legal services.",
				telephone: "+918468859644",
				email: "advocate@email.com",
				areaServed: "IN",
				priceRange: "$$",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Chamber No. 000, High Court Complex",
					addressLocality: "Your City",
					addressRegion: "Your State",
					postalCode: "000000",
					addressCountry: "IN"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$9 = () => import("./testimonials-BSR1sjMD.mjs");
var Route$10 = createFileRoute("/testimonials")({
	head: () => ({
		meta: [
			{ title: "Client Testimonials — What Clients Say" },
			{
				name: "description",
				content: "Read authentic client experiences from those the advocate has represented in civil, criminal, family and constitutional matters."
			},
			{
				property: "og:url",
				content: "/testimonials"
			}
		],
		links: [{
			rel: "canonical",
			href: "/testimonials"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./terms-DHguSU80.mjs");
var Route$9 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms & Conditions" },
			{
				name: "description",
				content: "Terms governing your use of this website."
			},
			{
				property: "og:url",
				content: "/terms"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var BASE_URL = "";
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/practice-areas",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/high-court",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/testimonials",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/blog",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/faq",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/privacy",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/terms",
				changefreq: "yearly",
				priority: "0.3"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$7 = () => import("./privacy-DwemYhHj.mjs");
var Route$7 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy" },
			{
				name: "description",
				content: "How this website collects, uses and protects your information."
			},
			{
				property: "og:url",
				content: "/privacy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./practice-areas-BpQ-JA1z.mjs");
var Route$6 = createFileRoute("/practice-areas")({
	head: () => ({
		meta: [
			{ title: "Practice Areas — Civil, Criminal, Writ, Family & More" },
			{
				name: "description",
				content: "Comprehensive legal services: civil litigation, criminal law, writ petitions, bail, family & divorce, property, cheque bounce, cyber, labour, service, arbitration and more."
			},
			{
				property: "og:title",
				content: "Practice Areas — High Court Advocate"
			},
			{
				property: "og:description",
				content: "Full-spectrum legal representation across 18+ practice areas."
			},
			{
				property: "og:url",
				content: "/practice-areas"
			}
		],
		links: [{
			rel: "canonical",
			href: "/practice-areas"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./high-court-DfQFKavE.mjs");
var Route$5 = createFileRoute("/high-court")({
	head: () => ({
		meta: [
			{ title: "High Court Practice — Writs, Appeals, Bail & Constitutional Law" },
			{
				name: "description",
				content: "Independent High Court practice covering writ petitions, criminal appeals, bail matters, service and constitutional law with rigorous preparation and ethical advocacy."
			},
			{
				property: "og:title",
				content: "High Court Practice"
			},
			{
				property: "og:description",
				content: "Court experience, legal expertise and ethical advocacy at the High Court."
			},
			{
				property: "og:url",
				content: "/high-court"
			}
		],
		links: [{
			rel: "canonical",
			href: "/high-court"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./faq-u94QBpAX.mjs");
var Route$4 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "FAQ — Common Legal Questions Answered" },
			{
				name: "description",
				content: "Answers to common questions about consultations, fees, confidentiality, bail, divorce, writs, PILs, NRI cases and more."
			},
			{
				property: "og:url",
				content: "/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-CUxnPxxB.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Book a Legal Consultation" },
			{
				name: "description",
				content: "Contact the advocate's chamber to book a confidential consultation. Call, WhatsApp, email or use the contact form."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./blog-FTL2hpeg.mjs");
var Route$2 = createFileRoute("/blog")({
	head: () => ({
		meta: [
			{ title: "Legal Blog — Insights, Guides & Case Law" },
			{
				name: "description",
				content: "Practical legal awareness articles on bail, cheque bounce, writs, divorce, property, cybercrime and more — written by a practicing High Court advocate."
			},
			{
				property: "og:url",
				content: "/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-Cm9Y6ghF.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: `About ${site.name} — High Court Advocate` },
			{
				name: "description",
				content: "Learn about the advocate's background, education, courtroom experience, mission and areas of practice at the High Court and subordinate courts."
			},
			{
				property: "og:title",
				content: `About ${site.name}`
			},
			{
				property: "og:description",
				content: "Background, education, experience and legal philosophy of a trusted High Court Advocate."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-CT9hEpdd.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Adv. Akrity Aishwarya — Experienced High Court Advocate" },
			{
				name: "description",
				content: "Trusted High Court Advocate offering civil, criminal, writ, bail, family, property and constitutional legal services. Book a confidential consultation."
			},
			{
				property: "og:title",
				content: "Adv. Akrity Aishwarya — Experienced High Court Advocate"
			},
			{
				property: "og:description",
				content: "Professional legal representation with integrity, dedication and years of courtroom experience."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TestimonialsRoute = Route$10.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$11
});
var TermsRoute = Route$9.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$11
});
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$11
});
var PrivacyRoute = Route$7.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$11
});
var PracticeAreasRoute = Route$6.update({
	id: "/practice-areas",
	path: "/practice-areas",
	getParentRoute: () => Route$11
});
var HighCourtRoute = Route$5.update({
	id: "/high-court",
	path: "/high-court",
	getParentRoute: () => Route$11
});
var FaqRoute = Route$4.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var BlogRoute = Route$2.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute,
	BlogRoute,
	ContactRoute,
	FaqRoute,
	HighCourtRoute,
	PracticeAreasRoute,
	PrivacyRoute,
	SitemapDotxmlRoute,
	TermsRoute,
	TestimonialsRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
