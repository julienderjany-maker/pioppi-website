"use client";

import { useEffect, useState } from "react";
import { Coffee, Croissant, Heart, Leaf, MapPin, MessageCircle, Salad, Sparkles, Users } from "lucide-react";

const menu = [
  { title: "Breakfast", desc: "Farm eggs, warm sourdough, chia parfaits and seasonal fruit pairings.", icon: Leaf },
  { title: "Matcha & Coffee", desc: "Ceremonial matcha, hand-crafted espresso and signature wellness lattes.", icon: Coffee },
  { title: "Salads", desc: "Market greens, ancient grains, house ferments and bright olive dressings.", icon: Salad },
  { title: "Artisan Bakery", desc: "Buttery viennoiserie, rustic breads and small-batch pastries each morning.", icon: Croissant }
];

const gallery = ["Plated Brunch", "Matcha Ritual", "Open Kitchen", "Sunlit Seating", "Pastry Counter", "Community Table"];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="site-shell">
      <nav className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="logo">Pioppi</div>
          <button className="hamburger md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">☰</button>
          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#about">About</a><a href="#menu">Menu</a><a href="#nutrition">Nutrition</a><a href="#community">Community</a><a href="#contact">Contact</a>
          </div>
          <a href="https://wa.me/243000000000" className="reserve-btn hidden md:inline-flex">Reserve</a>
        </div>
        {open && <div className="mobile-menu md:hidden"><a href="#about">About</a><a href="#menu">Menu</a><a href="#community">Community</a><a href="#contact">Contact</a></div>}
      </nav>

      <section className="hero pt-32">
        <div className="blob blob-1" /><div className="blob blob-2" /><div className="blob blob-3" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="fade-up">
            <p className="pill">Healthy lifestyle restaurant — Gombe, Kinshasa</p>
            <h1 className="hero-title">Eat Better. Live Better. Gather Better.</h1>
            <p className="hero-copy">Pioppi is a refined healthy restaurant and lifestyle house where fresh food, signature drinks, artisan bakery and community gather in one elegant destination.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="reserve-btn">Discover Menu</a>
              <a href="#contact" className="ghost-btn">Visit Us</a>
            </div>
          </div>
          <div className="glass-card fade-up delay-2">
            <div className="hero-image-frame">
              <Leaf className="mx-auto mb-6 h-16 w-16 text-olive" />
              <p className="text-3xl font-semibold text-cocoa">Premium Hero Photography</p>
              <p className="mt-3 text-cocoa/70">Placeholder for signature dishes, interior mood and table styling.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24 fade-up">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-copy">Pioppi is more than a restaurant. It is a modern way of gathering around food, wellness and thoughtful living in Kinshasa.</p>
      </section>

      <section id="menu" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Our Menu</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {menu.map(({ title, desc, icon: Icon }, i) => (
              <div key={title} className="menu-card" style={{ animationDelay: `${i * 90}ms` }}>
                <Icon className="mb-4 h-8 w-8 text-olive" />
                <h3 className="text-xl font-semibold text-cocoa">{title}</h3>
                <p className="mt-3 text-cocoa/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nutrition" className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 fade-up">
        <div>
          <h2 className="section-title">Food With Intention</h2>
          <p className="section-copy">Every plate is balanced for energy and pleasure with premium ingredients and clean flavors.</p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          {["Fresh ingredients", "Balanced meals", "Clear nutrition information", "Delicious first, healthy always"].map((x) => (
            <p key={x} className="mb-4 flex items-center gap-3 text-lg text-cocoa"><Heart className="h-5 w-5 text-olive" />{x}</p>
          ))}
        </div>
      </section>

      <section id="community" className="community py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center section-title text-white">A Place to Gather</h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-white/85">Wellness mornings, matcha tastings and curated brunches create a meaningful community rhythm.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Wellness Events", "Creative Meetings", "Family Brunches"].map((x) => <div key={x} className="life-card">{x}<span>Imagery Placeholder</span></div>)}
          </div>
          <div className="mt-10 grid gap-4 text-center md:grid-cols-3">
            {["12k+ Guests", "180+ Events", "4.9 Guest Rating"].map((s) => <div key={s} className="stat-card"><Users className="mx-auto mb-2" />{s}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="section-title">Gallery Preview</h2>
        <div className="masonry mt-10">
          {gallery.map((item) => <div key={item} className="gallery-item">{item}<span>Photo Placeholder</span></div>)}
        </div>
      </section>

      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-cream/60 px-6 py-14 text-center">
          <MapPin className="mx-auto mb-5 h-10 w-10 text-olive" />
          <h2 className="section-title">Visit Pioppi</h2>
          <p className="mt-4 text-lg text-cocoa/75">Gombe, Kinshasa • Open Daily 7:00 AM — 10:00 PM</p>
          <p className="mt-2 text-cocoa/75">Luxury wellness dining in the city center.</p>
          <a href="https://wa.me/243000000000" className="reserve-btn mt-8 inline-flex items-center gap-2"><MessageCircle /> Reserve on WhatsApp</a>
          <div className="mt-6 flex justify-center gap-3"><a className="social">IG</a><a className="social">FB</a><a className="social">TT</a></div>
        </div>
      </section>

      <footer className="bg-cocoa px-6 py-10 text-center text-white">© 2026 Pioppi. Eat Better. Live Better. Gather Better.</footer>
    </main>
  );
}
