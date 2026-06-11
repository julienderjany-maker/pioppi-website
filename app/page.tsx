"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, MessageCircle, ArrowRight, ArrowDown, Menu, X } from "lucide-react";

/* ─── Icons (brand icons removed from lucide-react) ────────────────── */

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

const WHATSAPP_URL = "https://wa.me/243000000000";

const heroStickers = [
  { emoji: "🥑", pos: "left-[7%] top-[20%]",     rot: "-rotate-6", delay: "0s"   },
  { emoji: "🍓", pos: "right-[9%] top-[17%]",    rot: "rotate-6",  delay: "1.2s" },
  { emoji: "🍵", pos: "right-[13%] bottom-[24%]", rot: "rotate-3",  delay: "2.1s" },
  { emoji: "🥐", pos: "left-[12%] bottom-[27%]", rot: "-rotate-3", delay: "0.7s" },
];

const menuItems = [
  {
    emoji: "🍳",
    title: "All-Day Breakfast",
    desc: "Fresh toast, eggs, chia pudding, almond oatmeal and avocado dishes.",
    bg: "bg-matcha/60",
    rot: "md:-rotate-1",
  },
  {
    emoji: "🥗",
    title: "Salads & Bowls",
    desc: "Colorful bowls, fresh vegetables, grains, proteins and homemade dressings.",
    bg: "bg-blush/40",
    rot: "md:rotate-1",
  },
  {
    emoji: "🔥",
    title: "Healthy Mains",
    desc: "Balanced warm meals with chicken, beef, fish, vegetables and signature sauces.",
    bg: "bg-sunshine/40",
    rot: "md:-rotate-1",
  },
  {
    emoji: "🍵",
    title: "Matcha & Coffee",
    desc: "Signature lattes, matcha drinks, infusions and wellness beverages.",
    bg: "bg-olive-pale/70",
    rot: "md:rotate-1",
  },
];

const marqueeItems = [
  "Fresh Ingredients",
  "Healthy Mains",
  "Artisan Bakery",
  "Matcha Bar",
  "Community Space",
  "Wellness Events",
  "Balanced Meals",
  "Kinshasa · Gombe",
];

const marqueeFood = [
  "🥑 Avocado Toast",
  "🍵 Matcha Latte",
  "🥐 Artisan Bakery",
  "🍓 Fresh Juices",
  "🥗 Power Bowls",
  "🍳 All-Day Breakfast",
  "🍯 Honey Granola",
  "🌿 Garden Fresh",
];

const pillars = [
  "Fresh ingredients sourced daily",
  "Balanced meals, every single plate",
  "Clear nutrition information",
  "Delicious first, healthy always",
  "A space for your whole lifestyle",
];

const galleryItems = [
  { label: "Fresh Bowls",       bg: "from-matcha to-olive-light",  rot: "-rotate-3" },
  { label: "Matcha Bar",        bg: "from-sand to-[#B8935A]",      rot: "rotate-2"  },
  { label: "Artisan Bakery",    bg: "from-sage to-[#5C9E85]",      rot: "-rotate-2" },
  { label: "Warm Interior",     bg: "from-blush to-[#C96A7C]",     rot: "rotate-3"  },
  { label: "Community Moments", bg: "from-sunshine to-tangerine",  rot: "-rotate-1" },
];

const communityChips = [
  { label: "Wellness mornings ☀️",  rot: "-rotate-2" },
  { label: "Matcha tastings 🍵",    rot: "rotate-1"  },
  { label: "Family brunches 🥞",    rot: "-rotate-1" },
  { label: "Healthy workshops 🥗",  rot: "rotate-2"  },
];

const hours = [
  { days: "Mon – Fri", time: "7:30 – 22:00" },
  { days: "Saturday",  time: "8:00 – 23:00" },
  { days: "Sunday",    time: "9:00 – 21:00" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: IconInstagram },
  { label: "Facebook",  href: "#", Icon: IconFacebook },
  { label: "TikTok",    href: "#", Icon: IconTikTok },
];

/* ─── Small building blocks ─────────────────────────────────────────── */

function Sticker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block rounded-full border-2 border-cocoa px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cocoa shadow-[3px_3px_0_#2C1A0E] ${className}`}
    >
      {children}
    </span>
  );
}

/* ─── Component ─────────────────────────────────────────────────────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Intersection Observer for fade-up animations */
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
    <main id="main" className="overflow-x-hidden">

      {/* Skip link for keyboard users */}
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-olive focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav aria-label="Main" className="fixed top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-cocoa/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#main" className="font-serif text-2xl font-black tracking-wide text-cocoa">
            Pioppi<span className="text-olive">.</span>
          </a>

          <div className="hidden gap-8 text-xs font-medium tracking-widest uppercase text-cocoa/60 md:flex">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="transition-colors hover:text-tangerine"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              aria-label="Reserve a table via WhatsApp"
              className="rounded-full bg-cocoa px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-cream transition-all hover:-translate-y-0.5 hover:bg-olive"
            >
              Reserve
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-cocoa/5 md:hidden"
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
                  className="rounded-xl px-4 py-3 text-sm font-medium tracking-widest uppercase text-cocoa/70 transition-colors hover:bg-olive/10 hover:text-olive"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6 pb-28 pt-32">

        {/* soft color blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-matcha/50 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-36 h-80 w-80 rounded-full bg-blush/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sunshine/30 blur-3xl" />

        {/* floating food stickers */}
        {heroStickers.map(({ emoji, pos, rot, delay }) => (
          <div key={emoji} aria-hidden="true" className={`absolute ${pos} ${rot} hidden md:block`}>
            <div
              className="flex h-16 w-16 animate-float items-center justify-center rounded-2xl border-2 border-cocoa/10 bg-white text-3xl shadow-[4px_4px_0_rgba(44,26,14,0.08)]"
              style={{ animationDelay: delay }}
            >
              {emoji}
            </div>
          </div>
        ))}

        {/* spinning badge */}
        <div aria-hidden="true" className="absolute left-[9%] top-[44%] hidden lg:block">
          <div className="relative h-[120px] w-[120px] text-cocoa/60">
            <svg className="animate-spin-slow" width="120" height="120" viewBox="0 0 120 120">
              <defs>
                <path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text fill="currentColor" style={{ fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase" }}>
                <textPath href="#circ">· Eat better · Live better ·</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 grid place-items-center text-2xl">🌿</span>
          </div>
        </div>

        {/* hero content */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <Sticker className="bg-white -rotate-2">📍 Gombe, Kinshasa</Sticker>
            <Sticker className="bg-sunshine rotate-2">✨ Now Open</Sticker>
          </div>

          <h1 className="font-serif text-6xl font-black leading-[1.02] text-cocoa sm:text-7xl md:text-8xl">
            Eat Better.<br />
            <em className="text-olive">Live Better.</em><br />
            <span className="relative inline-block">
              <span aria-hidden="true" className="absolute inset-x-[-3%] bottom-[8%] h-[32%] -rotate-1 bg-sunshine/80" />
              <span className="relative">Gather Better.</span>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-cocoa/60">
            A premium healthy restaurant and lifestyle space where fresh food,
            signature drinks, artisan bakery and community meet in the heart
            of Kinshasa.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#menu"
              className="rounded-full bg-cocoa px-8 py-4 text-sm font-semibold text-cream transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#5C6B3A]"
            >
              Discover Menu
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-cocoa px-8 py-4 text-sm font-semibold text-cocoa transition-all hover:-translate-y-0.5 hover:bg-sunshine hover:shadow-[5px_5px_0_#2C1A0E]"
            >
              Visit Us
            </a>
          </div>
        </div>

        {/* scroll cue */}
        <a
          href="#about"
          aria-label="Scroll down to learn more"
          className="absolute bottom-8 left-1/2 flex h-12 w-12 -translate-x-1/2 animate-bounce items-center justify-center rounded-full border-2 border-cocoa/15 text-cocoa/50 transition-colors hover:border-cocoa/40 hover:text-cocoa"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      {/* ── DOUBLE MARQUEE RIBBONS ──────────────────────────────────── */}
      <div className="relative z-10 -my-4" aria-hidden="true">
        <div className="-ml-[2.5%] w-[105%] -rotate-[1.2deg] overflow-hidden bg-olive py-3.5">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-8 text-xs font-semibold uppercase tracking-widest text-white/85">
                {item}
                <span className="ml-8 text-white/30">·</span>
              </span>
            ))}
          </div>
        </div>
        <div className="-ml-[2.5%] -mt-1 w-[105%] rotate-[1.2deg] overflow-hidden bg-tangerine py-3.5">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...marqueeFood, ...marqueeFood].map((item, i) => (
              <span key={i} className="mx-8 text-xs font-bold uppercase tracking-widest text-cocoa">
                {item}
                <span className="ml-8 text-cocoa/30">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="reveal opacity-0 [animation:fadeUp_0.7s_ease_forwards] [animation-play-state:paused]">
            <Sticker className="mb-6 bg-sunshine -rotate-2">Our Story 🌱</Sticker>
            <h2 className="font-serif text-4xl font-black leading-tight text-cocoa md:text-5xl">
              More than<br /><em className="text-olive">a restaurant.</em>
            </h2>
            <p className="mt-6 text-base leading-8 text-cocoa/60">
              Pioppi was born in Kinshasa to make healthy eating more enjoyable,
              accessible and inspiring. A place where the community gathers
              around food, wellness and shared better habits.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { num: "4+",  label: "Menu categories crafted\nwith balance in mind", color: "text-tangerine", rot: "md:-rotate-1" },
                { num: "∞",   label: "Community events,\ntastings & mornings",        color: "text-olive",     rot: "md:rotate-1"  },
              ].map(({ num, label, color, rot }) => (
                <div
                  key={num}
                  className={`rounded-2xl border-2 border-cocoa/10 bg-white p-5 shadow-[4px_4px_0_rgba(44,26,14,0.06)] ${rot}`}
                >
                  <p className={`font-serif text-4xl font-black ${color}`}>{num}</p>
                  <p className="mt-2 text-xs leading-5 text-cocoa/50 whitespace-pre-line">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Replace the inner gradient with a Next.js <Image> when photography is ready */}
          <div className="reveal opacity-0 [animation:fadeUp_0.7s_0.15s_ease_forwards] [animation-play-state:paused]">
            <div className="rotate-2 rounded-md bg-white p-4 pb-14 shadow-xl transition-transform duration-300 hover:rotate-0">
              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-matcha to-olive-light md:h-[380px]">
                <p className="font-serif text-lg italic text-white/70 text-center leading-loose">
                  Interior / team<br />photography here
                </p>
              </div>
              <p className="mt-4 text-center font-serif text-lg italic text-cocoa/60">
                Some place you&apos;ll love ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ────────────────────────────────────────────────────── */}
      <section id="menu" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Sticker className="mb-6 bg-blush -rotate-1">What we serve 🍽️</Sticker>
          <h2 className="font-serif text-4xl font-black text-cocoa md:text-6xl">
            Good food,<br /><em className="text-olive">good mood.</em>
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {menuItems.map(({ emoji, title, desc, bg, rot }, i) => (
              <div
                key={title}
                className={`reveal opacity-0 group rounded-3xl border-2 border-cocoa/10 ${bg} ${rot} p-6 transition-all duration-300 hover:translate-y-[-8px] hover:rotate-0 hover:shadow-[6px_6px_0_rgba(44,26,14,0.85)]`}
                style={{
                  animation: `fadeUp 0.6s ${i * 0.1}s ease forwards`,
                  animationPlayState: "paused",
                }}
              >
                <div className="mb-4 text-5xl group-hover:animate-wiggle" aria-hidden="true">
                  {emoji}
                </div>
                <h3 className="font-serif text-xl font-bold text-cocoa">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-cocoa/60">{desc}</p>
                <div className="mt-5 flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-cocoa">
                  Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────── */}
      <section id="gallery" className="overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Sticker className="mb-6 bg-matcha rotate-1">A glimpse inside 👀</Sticker>
            <h2 className="font-serif text-4xl font-black text-cocoa md:text-6xl">
              Sneak <em className="text-olive">a peek.</em>
            </h2>
          </div>

          {/* Polaroid wall — replace gradients with <Image> when photos are ready */}
          <div className="flex flex-wrap items-start justify-center gap-6 md:gap-8">
            {galleryItems.map(({ label, bg, rot }, i) => (
              <div
                key={label}
                className={`reveal opacity-0 group w-56 rounded-md bg-white p-3 pb-12 shadow-lg ${rot} transition-all duration-300 hover:z-10 hover:rotate-0 hover:scale-105 hover:shadow-xl sm:w-60`}
                style={{
                  animation: `fadeUp 0.6s ${i * 0.08}s ease forwards`,
                  animationPlayState: "paused",
                }}
              >
                <div className={`h-52 bg-gradient-to-br ${bg} sm:h-56`} />
                <p className="mt-3 text-center font-serif text-base italic text-cocoa/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────────────────── */}
      <section id="nutrition" className="bg-cocoa py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div>
            <Sticker className="mb-6 border-cream/30 bg-transparent text-cream shadow-[3px_3px_0_rgba(250,246,240,0.2)] -rotate-1">
              Nutrition 🌿
            </Sticker>
            <h2 className="font-serif text-4xl font-black leading-tight text-cream md:text-6xl">
              Food with<br />
              <em className="text-olive-light">intention.</em>
            </h2>
            <p className="mt-6 text-base leading-8 text-cream/55">
              We design every recipe with balance in mind — quality proteins,
              fresh vegetables, natural flavors, thoughtful portions and better
              ingredients. Delicious first, healthy always.
            </p>
          </div>

          <ul className="space-y-0 divide-y divide-cream/10">
            {pillars.map((item, i) => (
              <li key={item} className="flex items-center gap-5 py-5 text-sm text-cream/80">
                <span className="font-serif text-xl italic text-olive-light" aria-hidden="true">
                  0{i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── COMMUNITY ───────────────────────────────────────────────── */}
      <section id="community" className="bg-tangerine py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Sticker className="mb-6 bg-cream -rotate-2">Community 🤝</Sticker>
          <h2 className="font-serif text-4xl font-black text-cocoa md:text-6xl">
            A place <em className="text-cream">to gather.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cocoa/75">
            Pioppi is designed as a community space where people can meet,
            work, eat, learn and share better habits.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {communityChips.map(({ label, rot }) => (
              <span
                key={label}
                className={`inline-block rounded-full bg-cream px-5 py-2.5 text-sm font-bold text-cocoa shadow-[3px_3px_0_rgba(44,26,14,0.3)] ${rot} transition-transform duration-200 hover:rotate-0 hover:scale-105`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <Sticker className="mb-6 bg-sunshine rotate-1">Come see us 📍</Sticker>
          <h2 className="font-serif text-4xl font-black text-cocoa md:text-6xl">
            Come hungry.<br /><em className="text-olive">Leave happy.</em>
          </h2>
          <p className="mt-6 text-base leading-8 text-cocoa/60">
            Gombe, Kinshasa — we&apos;d love to welcome you. Reach us on WhatsApp
            for reservations, questions or just to say hello.
          </p>

          <a
            href={WHATSAPP_URL}
            aria-label="Contact Pioppi on WhatsApp"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#2C1A0E]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Contact on WhatsApp
          </a>

          {/* Opening hours */}
          <div className="mt-10 inline-flex flex-wrap justify-center gap-0 divide-x divide-cocoa/10 rounded-2xl border-2 border-cocoa/10 bg-white px-2 shadow-[4px_4px_0_rgba(44,26,14,0.06)]">
            {hours.map(({ days, time }) => (
              <div key={days} className="px-6 py-5 text-center">
                <p className="text-xs uppercase tracking-widest text-cocoa/40">{days}</p>
                <p className="mt-1 text-sm font-semibold text-cocoa">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-cocoa pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-8">
          <span className="font-serif text-xl font-black text-cream">
            Pioppi<span className="text-olive-light">.</span>
          </span>

          <p className="text-xs tracking-widest text-cream/35 uppercase">
            © {new Date().getFullYear()} Pioppi · Eat Better. Live Better. Gather Better.
          </p>

          <div className="flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={`Pioppi on ${label}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream/15 text-cream/50 transition-colors hover:border-cream/40 hover:text-cream"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-cream/40">Made with 🥑 in Kinshasa</p>

        {/* giant wordmark */}
        <div className="overflow-hidden px-2">
          <p
            aria-hidden="true"
            className="text-outline-cream -mb-[0.24em] select-none whitespace-nowrap text-center font-serif text-[21vw] font-black italic leading-none"
          >
            Pioppi
          </p>
        </div>
      </footer>

    </main>
  );
}
