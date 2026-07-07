import { i as waLink, n as site, r as telLink } from "./site-CdwoZIKX.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as HeartHandshake, E as Gavel, F as Clock, G as ArrowRight, I as CircleCheck, R as Calendar, U as Award, V as BookOpen, a as Star, f as Phone, n as Users, s as ShieldCheck, u as Scale, y as Landmark } from "../_libs/lucide-react.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { n as WhatsAppIcon, t as SiteLayout } from "./SiteLayout-YqwQWIGZ.mjs";
import { i as testimonials, r as practiceAreas } from "./legal-data-CIVChL0z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CT9hEpdd.js
var import_jsx_runtime = require_jsx_runtime();
var stats = [
	{
		icon: Landmark,
		label: "High Court Practice"
	},
	{
		icon: Gavel,
		label: "Civil & Criminal Matters"
	},
	{
		icon: HeartHandshake,
		label: "Client-Focused Services"
	},
	{
		icon: ShieldCheck,
		label: "Professional Consultation"
	}
];
var whyChoose = [
	{
		icon: Award,
		title: "Experienced Representation",
		desc: "Years of active courtroom practice at the High Court and subordinate courts."
	},
	{
		icon: ShieldCheck,
		title: "Transparent Advice",
		desc: "Honest opinions, realistic timelines and clear fee structures — no false promises."
	},
	{
		icon: Users,
		title: "Confidential Consultation",
		desc: "Every discussion is protected under strict attorney-client privilege."
	},
	{
		icon: HeartHandshake,
		title: "Personal Attention",
		desc: "Every matter is handled personally, not passed down through associates."
	},
	{
		icon: Clock,
		title: "Quick Response",
		desc: "Prompt replies via call, WhatsApp and email — including urgent bail matters."
	},
	{
		icon: Scale,
		title: "Professional Ethics",
		desc: "Strict adherence to Bar Council rules and highest ethical standards."
	},
	{
		icon: BookOpen,
		title: "Strong Legal Strategy",
		desc: "Well-researched, precedent-driven case preparation and courtroom argument."
	},
	{
		icon: CircleCheck,
		title: "Affordable Consultation",
		desc: "Reasonable, transparent fees to make quality legal advice accessible."
	}
];
var processSteps = [
	{
		title: "Book Consultation",
		desc: "Reach out via phone, WhatsApp or the contact form."
	},
	{
		title: "Discuss Your Case",
		desc: "Share facts and documents in a confidential meeting."
	},
	{
		title: "Legal Opinion",
		desc: "Receive an honest assessment of merits and options."
	},
	{
		title: "Case Preparation",
		desc: "Detailed drafting, research and evidence review."
	},
	{
		title: "Court Representation",
		desc: "Focused, well-prepared arguments before the court."
	},
	{
		title: "Resolution",
		desc: "Judgment, settlement or successful closure of your matter."
	}
];
function FloatingIcon({ Icon, className, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { y: 0 },
		animate: { y: [
			0,
			-16,
			0
		] },
		transition: {
			duration: 6,
			repeat: Infinity,
			delay,
			ease: "easeInOut"
		},
		className: `absolute pointer-events-none ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "w-full h-full text-primary/10",
			strokeWidth: 1.2
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-to-b from-[color:var(--color-surface)] via-white to-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 opacity-[0.05]",
					style: { backgroundImage: "radial-gradient(circle at 10% 20%, #1E3A8A 0px, transparent 40%), radial-gradient(circle at 90% 80%, #D4AF37 0px, transparent 35%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingIcon, {
					Icon: Scale,
					className: "top-20 left-8 w-28 h-28 hidden md:block"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingIcon, {
					Icon: BookOpen,
					className: "top-40 right-16 w-24 h-24 hidden md:block",
					delay: 1.5
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingIcon, {
					Icon: Landmark,
					className: "bottom-24 left-24 w-32 h-32 hidden lg:block",
					delay: 2.5
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingIcon, {
					Icon: Gavel,
					className: "bottom-16 right-10 w-24 h-24 hidden md:block",
					delay: .8
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x relative pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-2 gap-14 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-[color:var(--color-gold-foreground)] text-xs font-ui font-semibold uppercase tracking-[0.18em]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "w-3.5 h-3.5 text-gold" }),
								" ",
								site.role
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .1 },
							className: "mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-ink",
							children: [
								"Experienced ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "High Court"
								}),
								" Advocate"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .2 },
							className: "mt-6 text-lg text-muted-foreground max-w-xl",
							children: "Professional legal representation with integrity, dedication, transparency and years of courtroom experience — for individuals, families and businesses."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .3 },
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "btn-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4" }), " Book Consultation"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waLink(),
									target: "_blank",
									rel: "noopener",
									className: "btn-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-4 h-4" }), " WhatsApp Now"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: telLink,
									className: "btn-outline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" }), " Call Now"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: "hidden",
							animate: "visible",
							variants: { visible: { transition: {
								staggerChildren: .1,
								delayChildren: .4
							} } },
							className: "mt-10 grid grid-cols-2 gap-3 max-w-lg",
							children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: {
									hidden: {
										opacity: 0,
										y: 10
									},
									visible: {
										opacity: 1,
										y: 0
									}
								},
								className: "flex items-center gap-3 p-3 rounded-xl glass-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid place-items-center w-9 h-9 rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "w-4 h-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-ui font-medium text-ink",
									children: s.label
								})]
							}, s.label))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .96
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: { delay: .2 },
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-gold/20 to-transparent blur-2xl" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative rounded-[2rem] overflow-hidden border border-border shadow-2xl aspect-[4/5] bg-gradient-to-br from-[color:var(--color-surface)] to-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/advokate.png",
										alt: site.name,
										className: "w-full h-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 flex items-center gap-3 shadow-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex -space-x-2",
										children: [
											1,
											2,
											3
										].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gold border-2 border-white" }, i))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-ui font-semibold text-ink",
										children: "Trusted by clients"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-1 text-gold",
										children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3 h-3 fill-current" }, i))
									})] })]
								})
							]
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-3",
							children: "Practice Areas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl md:text-5xl font-bold text-ink",
							children: "Comprehensive Legal Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Full-spectrum representation across civil, criminal, constitutional and commercial matters."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: practiceAreas.slice(0, 9).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							amount: .2
						},
						transition: { delay: i * .04 },
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
								to: "/practice-areas",
								className: "mt-4 inline-flex items-center gap-1 text-sm font-ui font-semibold text-primary hover:text-hover",
								children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
							})
						]
					}, p.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/practice-areas",
						className: "btn-outline",
						children: ["View All Practice Areas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[color:var(--color-surface)] py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-3",
						children: "Why Clients Choose"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-5xl font-bold text-ink",
						children: "Trusted, Ethical, Effective"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: whyChoose.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .04 },
						className: "p-6 rounded-2xl bg-white border border-border hover:-translate-y-1 hover:shadow-xl transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-11 h-11 rounded-xl bg-gold/15 text-[color:var(--color-gold)] grid place-items-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-ink",
								children: w.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: w.desc
							})
						]
					}, w.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-3",
					children: "Consultation Process"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-5xl font-bold text-ink",
					children: "How We Work Together"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative grid gap-6 md:grid-cols-3 lg:grid-cols-6",
				children: processSteps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .06 },
					className: "relative p-5 rounded-2xl border border-border bg-white text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-ui font-bold shadow-lg",
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-base text-ink",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: s.desc
						})
					]
				}, s.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[color:var(--color-surface)] py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.28em] text-gold font-ui font-semibold mb-3",
						children: "Client Testimonials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-5xl font-bold text-ink",
						children: "Words From Those We've Served"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: testimonials.slice(0, 6).map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -top-16 -right-16 w-72 h-72 rounded-full bg-gold/25 blur-3xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-hover/40 blur-3xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl md:text-5xl font-bold",
								children: "Ready to Discuss Your Case?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-white/80 max-w-2xl mx-auto",
								children: "Confidential, obligation-free consultation. Speak directly with the advocate."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "btn-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4" }), " Book Consultation"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waLink(),
									target: "_blank",
									rel: "noopener",
									className: "btn-outline !border-white/40 !text-white hover:!bg-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "w-4 h-4" }), " WhatsApp Now"]
								})]
							})
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
