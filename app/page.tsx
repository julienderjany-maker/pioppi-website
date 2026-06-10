"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, MessageCircle, ArrowRight, Menu, X } from "lucide-react";

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

const menuItems = [
  {
    emoji: "🍳",
    title: "All-Day Breakfast",
    desc: "Fresh toast, eggs, chia pudding, almond oatmeal and avocado dishes.",
    bg: "bg-matcha/30",
  },
  {
    emoji: "🥗",
    title: "Salads & Bowls",
    desc: "Colorful bowls, fresh vegetables, grains, proteins and homemade dressings.",
    bg: "bg-sage/20",
  },
  {
    emoji: "🔥",
    title: "Healthy Mains",
    desc: "Balanced warm meals with chicken, beef, fish, vegetables and signature sauces.",
    bg: "bg-sand/30",
  },
  {
    emoji: "🍵",
    title: "Matcha & Coffee",
    desc: "Signature lattes, matcha drinks, infusions and wellness beverages.",
    bg: "bg-olive-pale/40",
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

const pillars = [
  "Fresh ingredients sourced daily",
  "Balanced meals, every single plate",
  "Clear nutrition information",
  "Delicious first, healthy always",
  "A space for your whole lifestyle",
];

const galleryItems = [
  { label: "Fresh Bowls",       span: "row-span-2", bg: "from-matcha to-olive-light" },
  { label: "Matcha Bar",        span: "",           bg: "from-sand to-[#B8935A]"      },
  { label: "Artisan Bakery",    span: "",           bg: "from-sage to-[#5C9E85]"      },
  { label: "Warm Interior",     span: "",           bg: "from-[#C4A8B8] to-[#9E5C85]" },
  { label: "Community Moments", span: "",           bg: "from-[#C4C4A8] to-[#9E9E5C]" },
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
          <a href="#main" className="font-serif text-2xl tracking-wide text-cocoa">Pioppi</a>

          <div className="hidden gap-8 text-xs font-medium tracking-widest uppercase text-cocoa/60 md:flex">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="transition-colors hover:text-olive"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              aria-label="Reserve a table via WhatsApp"
              className="rounded-full bg-olive px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-white transition-opacity hover:opacity-80"
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
      <section className="min-h-screen bg-cream pt-20 md:pt-0">
        <div className="grid min-h-screen md:grid-cols-2">

          {/* Left */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-8 md:px-16 md:py-24">
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-olive/25 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-olive">
                <MapPin className="h-3 w-3" aria-hidden="true" /> Gombe, Kinshasa
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-olive/25 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-olive">
                Now Open
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.08] text-cocoa md:text-7xl">
              Eat Better.<br />
              <em className="text-olive">Live Better.</em><br />
              Gather Better.
            </h1>

            <p className="mt-7 max-w-md text-base leading-8 text-cocoa/60">
              A premium healthy restaurant and lifestyle space where fresh food,
              signature drinks, artisan bakery and community meet in the heart
              of Kinshasa.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-full bg-olive px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
              >
                Discover Menu
              </a>
              <a
                href="#contact"
                className="rounded-full border border-olive px-8 py-3.5 text-sm font-semibold text-olive transition-colors hover:bg-olive hover:text-white"
              >
                Visit Us
              </a>
            </div>
          </div>

          {/* Right — hero photo */}
          <div className="relative h-72 overflow-hidden sm:h-96 md:h-auto">
            <Image
              src="/hero-boulevard.png"
              alt="Pioppi restaurant terrace on the boulevard in Gombe, Kinshasa"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-lg md:bottom-10 md:left-10">
              <p className="font-serif text-3xl font-bold text-olive">100%</p>
              <p className="mt-1 text-xs text-cocoa/50 leading-5">
                Fresh ingredients<br />every day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────────────── */}
      <div className="overflow-hidden bg-olive py-3.5" aria-hidden="true">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-8 text-xs font-semibold uppercase tracking-widest text-white/85">
              {item}
              <span className="ml-8 text-white/30">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="reveal opacity-0 [animation:fadeUp_0.7s_ease_forwards] [animation-play-state:paused]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-olive">
              Our Story
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-cocoa md:text-5xl">
              More than<br />a restaurant
            </h2>
            <p className="mt-6 text-base leading-8 text-cocoa/60">
              Pioppi was born in Kinshasa to make healthy eating more enjoyable,
              accessible and inspiring. A place where the community gathers
              around food, wellness and shared better habits.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { num: "4+",  label: "Menu categories crafted\nwith balance in mind" },
                { num: "∞",   label: "Community events,\ntastings & mornings" },
              ].map(({ num, label }) => (
                <div
                  key={num}
                  className="rounded-2xl border border-cocoa/10 bg-white p-5"
                >
                  <p className="font-serif text-4xl font-bold text-olive">{num}</p>
                  <p className="mt-2 text-xs leading-5 text-cocoa/50 whitespace-pre-line">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Replace with <Image> when interior photography is ready */}
          <div className="reveal opacity-0 [animation:fadeUp_0.7s_0.15s_ease_forwards] [animation-play-state:paused] flex h-80 items-center justify-center rounded-4xl bg-gradient-to-br from-matcha to-olive-light md:h-[420px]">
            <p className="font-serif text-lg italic text-white/70 text-center leading-loose">
              Interior / team<br />photography here
            </p>
          </div>
        </div>
      </section>

      {/* ── MENU ────────────────────────────────────────────────────── */}
      <section id="menu" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-olive">
            What we serve
          </p>
          <h2 className="font-serif text-4xl font-bold text-cocoa md:text-5xl">
            Our Menu
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {menuItems.map(({ emoji, title, desc, bg }, i) => (
              <div
                key={title}
                className={`reveal opacity-0 group rounded-3xl ${bg} p-6 transition-shadow hover:shadow-md`}
                style={{
                  animation: `fadeUp 0.6s ${i * 0.1}s ease forwards`,
                  animationPlayState: "paused",
                }}
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-olive text-xl" aria-hidden="true">
                  {emoji}
                </div>
                <h3 className="font-serif text-xl font-semibold text-cocoa">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-cocoa/60">{desc}</p>
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-olive">
                  Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────── */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-olive">
            A glimpse inside
          </p>
          <h2 className="font-serif text-4xl font-bold text-cocoa">
            Gallery
          </h2>
        </div>

        {/* Replace bg-gradient divs with Next.js <Image> components when photos are ready */}
        <div className="grid h-[560px] grid-cols-2 grid-rows-3 gap-3 md:h-[420px] md:grid-cols-3 md:grid-rows-2">
          {galleryItems.map(({ label, span, bg }) => (
            <div
              key={label}
              className={`${span} bg-gradient-to-br ${bg} flex items-end overflow-hidden rounded-3xl p-4 transition-transform duration-300 hover:scale-[1.02]`}
            >
              <span className="text-sm font-semibold text-white/90">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────────────────── */}
      <section id="nutrition" className="bg-cocoa py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-cream md:text-5xl">
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
            {pillars.map((item) => (
              <li key={item} className="flex items-center gap-4 py-5 text-sm text-cream/80">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-olive-light" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── COMMUNITY ───────────────────────────────────────────────── */}
      <section id="community" className="bg-white py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-olive">
            Community
          </p>
          <h2 className="font-serif text-4xl font-bold text-cocoa md:text-5xl">
            A Place to Gather
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cocoa/60">
            Pioppi is designed as a community space where people can meet,
            work, eat, learn and share better habits — through wellness
            mornings, matcha tastings, family brunches and healthy workshops.
          </p>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <MapPin className="mx-auto mb-5 h-8 w-8 text-olive" aria-hidden="true" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-olive">
            Come see us
          </p>
          <h2 className="font-serif text-4xl font-bold text-cocoa">
            Visit Pioppi
          </h2>
          <p className="mt-4 text-base leading-8 text-cocoa/60">
            Gombe, Kinshasa — we'd love to welcome you. Reach us on WhatsApp
            for reservations, questions or just to say hello.
          </p>

          <a
            href={WHATSAPP_URL}
            aria-label="Contact Pioppi on WhatsApp"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Contact on WhatsApp
          </a>

          {/* Opening hours */}
          <div className="mt-10 inline-flex flex-wrap justify-center gap-0 divide-x divide-cocoa/10 rounded-2xl border border-cocoa/10 bg-white px-2">
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
      <footer className="bg-cocoa px-8 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <span className="font-serif text-xl text-cream">Pioppi</span>

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
      </footer>

    </main>
  );
}
