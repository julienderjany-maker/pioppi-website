"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

/* ─── Icons (brand icons removed from lucide-react) ────────────────── */

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

/* ─── Data ──────────────────────────────────────────────────────────── */

const navLinks = ["About", "Menu", "Gallery", "Nutrition", "Community", "Contact"];

const WHATSAPP_URL = "https://wa.me/243900004445";
const PHONE_DISPLAY = "+243 900 004 445";

const fireflies = [
  { left: "8%",  top: "28%", delay: "0s",   dur: "8s"   },
  { left: "16%", top: "62%", delay: "1.4s", dur: "9s"   },
  { left: "24%", top: "20%", delay: "2.8s", dur: "7s"   },
  { left: "37%", top: "74%", delay: "0.8s", dur: "10s"  },
  { left: "52%", top: "16%", delay: "2.2s", dur: "8s"   },
  { left: "64%", top: "70%", delay: "3.6s", dur: "9s"   },
  { left: "76%", top: "26%", delay: "1.1s", dur: "7.5s" },
  { left: "85%", top: "58%", delay: "2.6s", dur: "8.5s" },
  { left: "92%", top: "34%", delay: "0.4s", dur: "9.5s" },
  { left: "44%", top: "42%", delay: "4s",   dur: "11s"  },
];

const tickerItems = [
  "Fresh Ingredients",
  "Artisan Bakery",
  "Matcha Bar",
  "Wellness Events",
  "Balanced Meals",
  "Community Space",
  "Gombe · Kinshasa",
];

const menuItems = [
  {
    num: "01",
    title: "All-Day Breakfast",
    desc: "Fresh toast, eggs, chia pudding, almond oatmeal and avocado dishes.",
    img: "/images/menu-breakfast.jpg",
    alt: "Avocado toast topped with two soft eggs and cherry tomatoes",
  },
  {
    num: "02",
    title: "Salads & Bowls",
    desc: "Colorful bowls, fresh vegetables, grains, proteins and homemade dressings.",
    img: "/images/menu-salads.jpg",
    alt: "Grilled prawns over mixed greens with baby gem lettuce and mango salsa",
  },
  {
    num: "03",
    title: "Healthy Mains",
    desc: "Balanced warm meals with chicken, beef, fish, vegetables and signature sauces.",
    img: "/images/menu-mains.jpg",
    alt: "Seared salmon fillet with saffron rice and lemon",
  },
  {
    num: "04",
    title: "Matcha & Coffee",
    desc: "Signature lattes, matcha drinks, infusions and wellness beverages.",
    img: "/images/menu-drinks.jpg",
    alt: "Passion fruit and mango cooler with fresh mint on a marble counter",
  },
];

/* Signature dishes — names, descriptions and nutrition from the real menu. */
const signatureDishes = [
  {
    name: "Fattouch Pioppi",
    note: "Tomato, cucumber, avocado, orange, iceberg and radish with a citrus vinaigrette.",
    tag: "356 kcal · 6g protein",
    img: "/images/sig-2.jpg",
    alt: "Fattouch Pioppi — avocado, orange, cucumber and radish salad on a green ceramic plate",
  },
  {
    name: "Poulet Grillé",
    note: "Herb chicken with roasted potatoes and grilled tomatoes.",
    tag: "720 kcal · 52g protein",
    img: "/images/sig-1.jpg",
    alt: "Poulet Grillé — sliced herb chicken over a green herb sauce with roasted potatoes and vine tomatoes",
  },
  {
    name: "Poisson Grillé",
    note: "Fish fillet, sauce vierge, spinach and white-bean ragout.",
    tag: "620 kcal · 48g protein",
    img: "/images/sig-3.jpg",
    alt: "Poisson Grillé — grilled fish fillet with spinach, bean ragout and a lemon wedge",
  },
  {
    name: "Filet de Bœuf",
    note: "200 g fillet with carrot purée, grilled vegetables and house jus.",
    tag: "730 kcal · 55g protein",
    img: "/images/sig-4.jpg",
    alt: "Filet de Bœuf — beef fillet with carrot purée flowers, grilled vegetables and house jus",
  },
];

const galleryItems = [
  { label: "Fresh Bowls",       bg: "from-matcha to-olive-light", h: "h-64", src: "/images/gallery-bowls.jpg",
    alt: "Blue spirulina smoothie bowl topped with kiwi, mango and granola" },
  { label: "Matcha Bar",        bg: "from-sand to-bronze",        h: "h-72", src: "/images/gallery-matcha.jpg",
    alt: "Strawberry matcha lattes beside a bamboo whisk at the matcha bar" },
  { label: "Artisan Bakery",    bg: "from-sage to-olive-light",   h: "h-80", src: "/images/gallery-bakery.jpg",
    alt: "Ciabatta sandwich filled with tuna, greens and cucumber" },
  { label: "Warm Interior",     bg: "from-olive-pale to-sage",    h: "h-72", src: "/images/gallery-interior.jpg",
    alt: "Pioppi's dining room with cream banquettes and olive-green chairs" },
  { label: "Community Moments", bg: "from-sand to-gold",          h: "h-64", src: "/images/gallery-community.jpg",
    alt: "A guest enjoying a healthy breakfast spread on the lounge sofa" },
];

const pillars = [
  "Fresh ingredients sourced daily",
  "Balanced meals, every single plate",
  "Clear nutrition information",
  "Delicious first, healthy always",
  "A space for your whole lifestyle",
];

const romanNumerals = ["I", "II", "III", "IV", "V"];

const communityEvents = [
  "Wellness Mornings",
  "Matcha Tastings",
  "Family Brunches",
  "Healthy Workshops",
];

const hours = [
  { days: "Open Daily", time: "9:30 – 22:00" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/pioppi.drc/", Icon: IconInstagram },
  { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61591542536572", Icon: IconFacebook },
  { label: "TikTok",    href: "https://www.tiktok.com/@pioppi60", Icon: IconTikTok },
];

/* ─── Helpers ───────────────────────────────────────────────────────── */

function revealStyle(delay = 0): React.CSSProperties {
  return {
    // fill-mode "both" keeps the from-frame applied during the delay phase,
    // so elements never flash visible before their reveal starts
    animation: `fadeUp 0.9s ${delay}s cubic-bezier(0.22, 1, 0.36, 1) both`,
    animationPlayState: "paused",
  };
}

function Ornament({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-4" aria-hidden="true">
      <span className={`h-px w-16 ${light ? "bg-cream/15" : "bg-cocoa/15"}`} />
      <span className={light ? "text-gold" : "text-bronze"}>✦</span>
      <span className={`h-px w-16 ${light ? "bg-cream/15" : "bg-cocoa/15"}`} />
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────────────────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* nav state + subtle hero parallax (skipped for reduced-motion users) */
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (!reduceMotion && heroRef.current) {
        heroRef.current.style.transform = `translate3d(0, ${Math.min(y * 0.18, 80)}px, 0) scale(1.2)`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* pause the ambient hero video for reduced-motion users */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  /* Intersection Observer for fade-up reveals */
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animationPlayState = "running";
            e.target.classList.add("opacity-100");
            observerRef.current?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-olive focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>

      {/* Film-grain texture for a tactile, editorial feel.
          No mix-blend-mode: a full-viewport blended layer forces whole-page
          compositing on every scroll frame on mobile GPUs. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[45] opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      {/* `solid` = scrolled OR menu open, so the bar and the open mobile
          panel always read as one cream surface */}
      <nav
        aria-label="Main"
        className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
          scrolled || menuOpen
            ? "border-b border-cocoa/10 bg-cream/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#main"
            className={`font-serif text-2xl tracking-wide transition-colors duration-500 ${
              scrolled || menuOpen ? "text-cocoa" : "text-cream"
            }`}
          >
            Pioppi
          </a>

          <div
            className={`hidden gap-8 text-xs font-medium uppercase tracking-[0.2em] md:flex ${
              scrolled ? "text-cocoa/60" : "text-cream/60"
            }`}
          >
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={`transition-colors ${scrolled ? "hover:text-olive" : "hover:text-gold-light"}`}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              aria-label="Reserve a table via WhatsApp"
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-500 ${
                scrolled || menuOpen
                  ? "bg-cocoa text-cream hover:bg-olive"
                  : "border border-gold/50 text-gold-light hover:bg-gold hover:text-ink"
              }`}
            >
              Reserve
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
                scrolled || menuOpen ? "text-cocoa hover:bg-cocoa/5" : "text-cream hover:bg-cream/10"
              }`}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="border-t border-cocoa/10 bg-cream px-6 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-cocoa/70 transition-colors hover:bg-olive/10 hover:text-olive"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main id="main">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-6 py-32">

        {/* background film — the interior tour, muted, looping (subtle parallax) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div ref={heroRef} className="absolute inset-0 will-change-transform">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover opacity-60"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/hero-poster.jpg"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
        </div>

        {/* soft glows — radial gradients, not blur() (far cheaper to raster) */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[56rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(92,107,58,0.30),transparent)]" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 bg-[radial-gradient(closest-side,rgba(201,168,106,0.14),transparent)]" />

        {/* fireflies */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {fireflies.map((f, i) => (
            <span
              key={i}
              className="firefly"
              style={{ left: f.left, top: f.top, animationDelay: f.delay, animationDuration: f.dur }}
            />
          ))}
        </div>

        {/* hero content */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="reveal opacity-0" style={revealStyle(0)}>
            <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              <span aria-hidden="true" className="h-px w-12 bg-gold/40" />
              Now Open · Gombe, Kinshasa
              <span aria-hidden="true" className="h-px w-12 bg-gold/40" />
            </div>
          </div>

          <h1
            className="reveal mt-10 font-serif text-6xl font-medium leading-[1.05] text-cream opacity-0 sm:text-7xl md:text-8xl"
            style={revealStyle(0.15)}
          >
            Eat Better.<br />
            <em className="text-shimmer font-semibold">Live Better.</em><br />
            Gather Better.
          </h1>

          <p
            className="reveal mx-auto mt-9 max-w-xl text-base leading-8 text-cream/55 opacity-0"
            style={revealStyle(0.3)}
          >
            A premium healthy restaurant and lifestyle space where fresh food,
            signature drinks, artisan bakery and community meet in the heart
            of Kinshasa.
          </p>

          <div
            className="reveal mt-12 flex flex-wrap justify-center gap-4 opacity-0"
            style={revealStyle(0.45)}
          >
            <a
              href="#menu"
              className="rounded-full bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(201,168,106,0.45)]"
            >
              Discover the Menu
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cream/25 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-gold hover:text-gold-light"
            >
              Visit Us
            </a>
          </div>
        </div>

        {/* scroll cue */}
        <a
          href="#about"
          aria-label="Scroll down to learn more"
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-cream/60">Scroll</span>
          <span className="relative block h-14 w-px overflow-hidden bg-cream/10">
            <span className="scroll-line absolute left-0 top-0 block h-1/2 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
          </span>
        </a>
      </section>

      {/* ── TICKER ──────────────────────────────────────────────────── */}
      <div className="overflow-hidden border-b border-cocoa/10 bg-cream py-4" aria-hidden="true">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-7 text-xs uppercase tracking-[0.3em] text-cocoa/70">
              {item}
              <span className="ml-7 text-bronze/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">

          {/* Arched photo frame */}
          <div className="reveal opacity-0" style={revealStyle(0)}>
            <div className="relative mx-auto h-[420px] w-full max-w-sm overflow-hidden rounded-t-full bg-gradient-to-br from-matcha to-olive-light md:h-[480px]">
              <Image
                src="/images/about.jpg"
                alt="A server pouring tea beside a coconut dessert at a walnut table"
                fill
                sizes="(min-width: 768px) 24rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="reveal opacity-0" style={revealStyle(0.15)}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-bronze-dark">
              Our Story
            </p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-cocoa md:text-5xl">
              More than<br /><em className="text-olive">a restaurant.</em>
            </h2>
            <p className="mt-7 text-base leading-8 text-cocoa/75">
              Pioppi was born in Kinshasa to make healthy eating more enjoyable,
              accessible and inspiring. A place where the community gathers
              around food, wellness and shared better habits — from the first
              coffee of the morning to the last conversation of the evening.
            </p>
            <p className="mt-6 font-serif text-lg italic text-cocoa/65">
              — The Pioppi family
            </p>
          </div>
        </div>
      </section>

      {/* ── MENU ────────────────────────────────────────────────────── */}
      <section id="menu" className="border-y border-cocoa/10 bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-bronze-dark">
              The Menu
            </p>
            <h2 className="font-serif text-4xl font-medium text-cocoa md:text-5xl">
              Good food, <em className="text-olive">made to feel good.</em>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {menuItems.map(({ num, title, desc, img, alt }, i) => (
              <div
                key={title}
                className="reveal group opacity-0"
                style={revealStyle(i * 0.12)}
              >
                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-ink shadow-[0_20px_50px_-25px_rgba(45,32,20,0.55)]">
                  <Image
                    src={img}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
                  <span className="absolute left-5 top-4 font-serif text-sm italic text-gold-light [text-shadow:0_1px_10px_rgba(23,29,18,0.85)]">{num}</span>
                </div>
                <h3 className="font-serif text-2xl text-cocoa transition-colors duration-300 group-hover:text-olive">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-cocoa/70">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-olive px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cocoa hover:shadow-[0_0_40px_rgba(201,168,106,0.35)]"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE DISHES ────────────────────────────────────────── */}
      <section id="signatures" className="relative overflow-hidden bg-ink py-28 md:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(92,107,58,0.20),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Signature Dishes
            </p>
            <h2 className="font-serif text-4xl font-medium text-cream md:text-5xl">
              Plated with <em className="text-olive-light">purpose.</em>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {signatureDishes.map(({ name, note, tag, img, alt }, i) => (
              <figure
                key={name}
                className="reveal group relative overflow-hidden rounded-3xl opacity-0 ring-1 ring-cream/10"
                style={revealStyle(i * 0.1)}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-block rounded-full border border-gold/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                    {tag}
                  </span>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-cream">{name}</h3>
                  <p className="mt-1.5 text-xs leading-6 text-cream/55">{note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CINEMATIC BAND ──────────────────────────────────────────── */}
      {/* next/image instead of bg-fixed: background-attachment fixed is
          broken on iOS Safari and bypasses image optimization */}
      <section
        aria-label="Fresh every morning"
        className="relative flex h-[58vh] min-h-[420px] items-center justify-center overflow-hidden bg-ink"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="/images/band.jpg"
            alt=""
            fill
            sizes="100vw"
            className="scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-ink/55" />
        </div>
        <div className="reveal relative z-10 max-w-2xl px-6 text-center opacity-0" style={revealStyle(0)}>
          <Ornament light />
          <p className="mt-7 font-serif text-3xl italic leading-snug text-cream md:text-5xl md:leading-[1.15]">
            Fresh every morning,<br />from our kitchen to your table.
          </p>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────── */}
      <section id="gallery" className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-bronze-dark">
              A Glimpse Inside
            </p>
            <h2 className="font-serif text-4xl font-medium text-cocoa md:text-5xl">
              Through <em className="text-olive">the arches.</em>
            </h2>
          </div>

          {/* Arched windows */}
          <div className="flex flex-wrap items-end justify-center gap-7">
            {galleryItems.map(({ label, bg, h, src, alt }, i) => (
              <figure
                key={label}
                className="reveal opacity-0"
                style={revealStyle(i * 0.1)}
              >
                <div
                  className={`relative w-44 overflow-hidden rounded-t-full bg-gradient-to-b ${bg} ${h} transition-transform duration-500 hover:scale-[1.03] sm:w-48`}
                >
                  {src && (
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(min-width: 640px) 12rem, 11rem"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  )}
                </div>
                <figcaption className="mt-4 text-center text-[11px] uppercase tracking-[0.25em] text-cocoa/70">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────────────────── */}
      <section id="nutrition" className="relative overflow-hidden bg-ink py-28 md:py-36">
        {/* glow + fireflies */}
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(92,107,58,0.24),transparent)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {fireflies.slice(0, 5).map((f, i) => (
            <span
              key={i}
              className="firefly"
              style={{ left: f.left, top: f.top, animationDelay: f.delay, animationDuration: f.dur }}
            />
          ))}
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="reveal opacity-0" style={revealStyle(0)}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Nutrition
            </p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-cream md:text-5xl">
              Food with<br />
              <em className="text-shimmer">intention.</em>
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-cream/65">
              We design every recipe with balance in mind — quality proteins,
              fresh vegetables, natural flavors, thoughtful portions and better
              ingredients. Delicious first, healthy always.
            </p>
          </div>

          <ul className="reveal divide-y divide-cream/10 opacity-0" style={revealStyle(0.15)}>
            {pillars.map((item, i) => (
              <li key={item} className="flex items-center gap-6 py-6 text-sm text-cream/75">
                <span className="w-8 shrink-0 font-serif text-lg italic text-gold" aria-hidden="true">
                  {romanNumerals[i]}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── COMMUNITY ───────────────────────────────────────────────── */}
      <section id="community" className="bg-cream py-28 text-center md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <div className="reveal opacity-0" style={revealStyle(0)}>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-bronze-dark">
              Community
            </h2>
            <p aria-hidden="true" className="font-serif text-7xl leading-none text-gold/50">“</p>
            <p className="-mt-6 font-serif text-2xl italic leading-relaxed text-cocoa/80 md:text-3xl">
              A place where people meet, work, eat, learn
              and share better habits — together.
            </p>
          </div>

          <div className="reveal mt-12 opacity-0" style={revealStyle(0.2)}>
            <Ornament />
            <p className="mt-10 text-xs uppercase leading-loose tracking-[0.3em] text-cocoa/70">
              {communityEvents.map((e, i) => (
                <span key={e}>
                  {e}
                  {i < communityEvents.length - 1 && (
                    <span className="mx-4 text-bronze/60" aria-hidden="true">✦</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="border-t border-cocoa/10 bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-xl px-6 text-center">
          <div className="reveal opacity-0" style={revealStyle(0)}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-bronze-dark">
              Visit Pioppi
            </p>
            <h2 className="font-serif text-4xl font-medium text-cocoa md:text-5xl">
              Come for the food,<br /><em className="text-olive">stay for the feeling.</em>
            </h2>
            <p className="mt-6 text-base leading-8 text-cocoa/75">
              Gombe, Kinshasa — we&apos;d love to welcome you. Reach us on WhatsApp
              for reservations, questions or just to say hello.
            </p>

            <a
              href={WHATSAPP_URL}
              aria-label="Contact Pioppi on WhatsApp"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(201,168,106,0.35)]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Contact on WhatsApp
            </a>

            <p className="mt-5 text-sm tracking-wide text-cocoa/70">
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="transition-colors hover:text-olive">
                {PHONE_DISPLAY}
              </a>
            </p>

            <p className="mt-3 text-sm leading-7 text-cocoa/70">
              <a
                href="https://maps.google.com/?q=Matrix+Tower,+119+Boulevard+du+30+Juin,+Gombe,+Kinshasa"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-olive"
              >
                2ᵉ étage, Immeuble Matrix (LC Waikiki)<br />
                119 Boulevard du 30 Juin, Gombe · Kinshasa
              </a>
            </p>
          </div>

          {/* Opening hours */}
          <div className="reveal mt-14 border-y border-cocoa/10 opacity-0" style={revealStyle(0.15)}>
            {hours.map(({ days, time }) => (
              <div key={days} className="px-3 py-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.25em] text-cocoa/70">{days}</p>
                <p className="mt-2 font-serif text-lg text-cocoa">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-ink px-6 pb-10 pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-3xl text-cream">Pioppi</p>
          <p className="mt-2 font-serif text-sm italic tracking-wide text-gold-light/80">
            Paradis de santé
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.25em] text-cream/60">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-gold-light">
                {l}
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pioppi on ${label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition-colors hover:border-gold/50 hover:text-gold-light"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="mt-10">
            <Ornament light />
          </div>

          <p suppressHydrationWarning className="mt-8 text-[11px] uppercase tracking-[0.25em] text-cream/60">
            © {new Date().getFullYear()} Pioppi · Eat Better. Live Better. Gather Better.
          </p>
        </div>
      </footer>

    </div>
  );
}
