import { o as __toESM } from "../_runtime.mjs";
import { i as waLink, n as site, r as telLink, t as mailLink } from "./site-CdwoZIKX.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Clock, M as Facebook, R as Calendar, W as ArrowUp, _ as Mail, f as Phone, g as MapPin, h as Menu, r as Twitter, t as X, u as Scale, v as Linkedin, x as Instagram } from "../_libs/lucide-react.mjs";
import { n as motion, r as AnimatePresence, t as useScroll } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-YqwQWIGZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "https://cdn.jsdelivr.net/npm/super-tiny-icons@latest/images/svg/whatsapp.svg",
		alt: "WhatsApp",
		className
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/practice-areas",
		label: "Practice Areas"
	},
	{
		to: "/high-court",
		label: "High Court"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_-15px_rgba(30,58,138,0.25)]" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-6 lg:px-10 flex items-center justify-between py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 group shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base sm:text-lg font-bold text-ink whitespace-nowrap",
							children: site.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.18em] text-gold font-ui font-semibold",
							children: site.role
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-sm font-ui font-medium text-ink/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:after:w-full",
						activeProps: { className: "text-primary after:w-full" },
						activeOptions: { exact: l.to === "/" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink(),
						target: "_blank",
						rel: "noopener",
						className: "btn-outline !py-2 !px-4 text-sm !border-[color:var(--color-gold)] !text-[color:var(--color-gold)] hover:!bg-[color:var(--color-gold)] hover:!text-[color:var(--color-gold-foreground)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-4 h-4" }), " WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "btn-primary !py-2 !px-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4" }), " Book Consultation"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((v) => !v),
					className: "lg:hidden grid place-items-center w-10 h-10 rounded-full border border-border text-ink",
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-5 h-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -10
			},
			className: "lg:hidden bg-white border-t border-border shadow-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-4 flex flex-col gap-1",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "py-3 px-2 rounded-lg text-ink font-ui hover:bg-surface",
					activeProps: { className: "text-primary bg-surface" },
					activeOptions: { exact: l.to === "/" },
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink(),
						target: "_blank",
						rel: "noopener",
						className: "btn-gold w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-4 h-4" }), " WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "btn-primary w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4" }), " Book Consultation"]
					})]
				})]
			})
		}) })]
	});
}
var quickLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Advocate"
	},
	{
		to: "/practice-areas",
		label: "Practice Areas"
	},
	{
		to: "/high-court",
		label: "High Court Practice"
	},
	{
		to: "/blog",
		label: "Legal Blog"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var practice = [
	"Civil Litigation",
	"Criminal Law",
	"Writ Petitions",
	"Bail Matters",
	"Family Law",
	"Property Disputes",
	"Cheque Bounce",
	"Consumer Court"
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative bg-[color:var(--color-ink)] text-white/80 pt-20 pb-6 mt-24 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 opacity-[0.06]",
				style: { backgroundImage: "radial-gradient(circle at 20% 20%, #D4AF37 0px, transparent 40%), radial-gradient(circle at 80% 60%, #2563EB 0px, transparent 40%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative grid gap-10 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center w-10 h-10 rounded-full bg-gold text-[color:var(--color-gold-foreground)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "w-5 h-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-col leading-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base sm:text-lg font-bold text-white whitespace-nowrap",
									children: site.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-[0.18em] text-gold font-semibold",
									children: site.role
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-white/70",
							children: "Professional legal representation with integrity, dedication and transparency. Trusted counsel for civil, criminal and constitutional matters."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 mt-5",
							children: [
								{
									Icon: Facebook,
									href: site.social.facebook
								},
								{
									Icon: Linkedin,
									href: site.social.linkedin
								},
								{
									Icon: Instagram,
									href: site.social.instagram
								},
								{
									Icon: Twitter,
									href: site.social.twitter
								}
							].map(({ Icon, href }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: "_blank",
								rel: "noopener",
								className: "grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-[color:var(--color-gold-foreground)] transition-colors",
								"aria-label": "Social link",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4" })
							}, i))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display text-lg mb-4",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: quickLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "hover:text-gold transition-colors",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display text-lg mb-4",
						children: "Practice Areas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: practice.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/practice-areas",
							className: "hover:text-gold transition-colors",
							children: p
						}) }, p))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display text-lg mb-4",
						children: "Get in Touch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 mt-0.5 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.address })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 mt-0.5 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: telLink,
									className: "hover:text-gold",
									children: site.phoneDisplay
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 mt-0.5 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: mailLink,
									className: "hover:text-gold",
									children: site.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4 mt-0.5 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.hours })]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-gold",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "hover:text-gold",
							children: "Terms & Conditions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "smooth"
							}),
							className: "grid place-items-center w-9 h-9 rounded-full bg-gold text-[color:var(--color-gold-foreground)] hover:brightness-110",
							"aria-label": "Back to top",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "w-4 h-4" })
						})
					]
				})]
			})
		]
	});
}
function FloatingActions() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onS = () => setShow(window.scrollY > 400);
		window.addEventListener("scroll", onS, { passive: true });
		return () => window.removeEventListener("scroll", onS);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: waLink(),
			target: "_blank",
			rel: "noopener",
			className: "fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl group",
			"aria-label": "WhatsApp",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping [animation-delay:0.5s]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-[#25D366] transition-transform duration-300 group-hover:scale-110 shadow-lg" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110" })
			]
		}),
		show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => window.scrollTo({
				top: 0,
				behavior: "smooth"
			}),
			className: "hidden md:grid fixed bottom-24 right-6 z-40 place-items-center w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-hover",
			"aria-label": "Back to top",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "w-4 h-4" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur-md border-t border-border shadow-[0_-8px_30px_-15px_rgba(30,58,138,0.25)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-1 p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: telLink,
						className: "flex flex-col items-center gap-1 py-2 rounded-xl bg-surface text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-ui font-semibold",
							children: "Call"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink(),
						target: "_blank",
						rel: "noopener",
						className: "flex flex-col items-center gap-1 py-2 rounded-xl text-white",
						style: { background: "#25D366" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-ui font-semibold",
							children: "WhatsApp"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "flex flex-col items-center gap-1 py-2 rounded-xl bg-primary text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-ui font-semibold",
							children: "Book"
						})]
					})
				]
			})
		})
	] });
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX: scrollYProgress },
		className: "fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-gradient-to-r from-primary via-gold to-hover" })
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground pb-20 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-24",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
		]
	});
}
//#endregion
export { WhatsAppIcon as n, SiteLayout as t };
