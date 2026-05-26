import { Leaf, Coffee, Heart, MapPin, MessageCircle, Menu } from "lucide-react";

const menu = [
  ["All-Day Breakfast", "Fresh toast, eggs, chia pudding, almond oatmeal and avocado dishes."],
  ["Salads & Bowls", "Colorful bowls, fresh vegetables, grains, proteins and homemade dressings."],
  ["Healthy Mains", "Balanced warm meals with chicken, beef, fish, vegetables and signature sauces."],
  ["Matcha & Coffee", "Signature lattes, matcha drinks, infusions and wellness beverages."]
];

const gallery = ["Fresh Bowls", "Matcha Bar", "Artisan Bakery", "Warm Interior", "Healthy Mains", "Community Moments"];

export default function Home() {
  return (
    <main className="grain-bg text-cocoa">
      <nav className="fixed top-0 z-50 w-full border-b border-cocoa/10 bg-cream/90 backdrop-blur-xl">
        <div className="site-container flex items-center justify-between py-4">
          <a href="#" className="text-2xl font-semibold tracking-[0.12em] text-olive">PIOPPI</a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-olive">About</a>
            <a href="#menu" className="hover:text-olive">Menu</a>
            <a href="#nutrition" className="hover:text-olive">Nutrition</a>
            <a href="#community" className="hover:text-olive">Community</a>
            <a href="#contact" className="hover:text-olive">Contact</a>
          </div>

          <a href="https://wa.me/243000000000" className="hidden rounded-full bg-olive px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(103,120,82,0.25)] transition hover:-translate-y-0.5 hover:bg-olive/90 md:inline-flex">WhatsApp</a>

          <details className="group relative md:hidden">
            <summary className="list-none rounded-full border border-cocoa/20 bg-white p-2 text-cocoa shadow-sm marker:content-none">
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-cocoa/10 bg-white p-4 shadow-xl">
              <div className="flex flex-col gap-3 text-sm">
                <a href="#about">About</a><a href="#menu">Menu</a><a href="#nutrition">Nutrition</a><a href="#community">Community</a><a href="#contact">Contact</a>
                <a href="https://wa.me/243000000000" className="mt-1 rounded-full bg-olive px-4 py-2 text-center font-semibold text-white">WhatsApp</a>
              </div>
            </div>
          </details>
        </div>
      </nav>

      <section className="hero-section pt-24">
        <div className="site-container grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cocoa/10 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-olive shadow-sm">Healthy is the new rich · Un style de vie</p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">Mediterranean wellness, served with quiet luxury.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-cocoa/75 md:text-lg">Pioppi is a premium healthy restaurant and lifestyle house where fresh food, signature drinks, artisan bakery and community meet in the heart of Kinshasa.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#menu" className="rounded-full bg-olive px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(103,120,82,0.25)] transition hover:-translate-y-0.5">Discover Menu</a>
              <a href="#contact" className="rounded-full border border-cocoa/25 bg-white/70 px-6 py-3 text-sm font-semibold">Visit Us</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/50 bg-white/70 p-4 shadow-[0_24px_70px_rgba(63,52,38,0.14)] backdrop-blur">
            <div className="flex h-[300px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-sage/50 via-cream to-sand/60 text-center md:h-[400px]">
              <div>
                <Leaf className="mx-auto mb-5 h-14 w-14 text-olive" />
                <p className="font-serif text-2xl md:text-3xl">Fresh • Balanced • Beautiful</p>
                <p className="mt-2 text-sm text-cocoa/70">Replace with Pioppi signature hero image.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="site-container section-pad">
        <h2 className="font-serif text-3xl md:text-5xl">Who We Are</h2>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-cocoa/80">Pioppi is more than a restaurant. It is a new way of gathering around food, wellness and community. Born in Kinshasa, Pioppi was created to make healthy eating more enjoyable, accessible and inspiring.</p>
      </section>

      <section id="menu" className="section-pad bg-white/70">
        <div className="site-container">
          <h2 className="font-serif text-3xl md:text-5xl">Our Menu</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {menu.map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-cocoa/10 bg-cream/80 p-6 shadow-[0_14px_40px_rgba(56,45,33,0.08)] transition hover:-translate-y-1">
                <Coffee className="mb-4 h-8 w-8 text-olive" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-cocoa/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nutrition" className="site-container section-pad grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl">Food With Intention</h2>
          <p className="mt-5 text-lg leading-8 text-cocoa/80">We design recipes with balance in mind: quality proteins, fresh vegetables, natural flavors, thoughtful portions and better ingredients.</p>
        </div>
        <div className="rounded-3xl border border-cocoa/10 bg-white/80 p-8 shadow-sm">
          {["Fresh ingredients", "Balanced meals", "Clear nutrition information", "Delicious first, healthy always"].map((x) => (
            <p key={x} className="mb-4 flex items-center gap-3 text-lg"><Heart className="h-5 w-5 text-olive" />{x}</p>
          ))}
        </div>
      </section>

      <section id="community" className="section-pad bg-olive text-white">
        <div className="site-container">
          <h2 className="text-center font-serif text-3xl md:text-5xl">A Place to Gather</h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-white/85">Pioppi is designed as a community space where people can meet, work, eat, learn and share better habits through wellness mornings, matcha tastings, family brunches and healthy workshops.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Wellness mornings",
              "Matcha tastings",
              "Family brunches"
            ].map((item) => (
              <article key={item} className="rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.14em] text-white/80">Community</p>
                <h3 className="mt-3 font-serif text-2xl">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-pad">
        <h2 className="font-serif text-3xl md:text-5xl">Gallery Preview</h2>
        <div className="mt-10 grid auto-rows-[150px] gap-4 md:grid-cols-3">
          {gallery.map((item, idx) => (
            <div key={item} className={`flex items-center justify-center rounded-3xl border border-cocoa/10 bg-sand/50 px-5 text-center font-semibold shadow-sm ${idx % 3 === 0 ? "md:row-span-2" : ""}`}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-pad bg-white/80">
        <div className="site-container max-w-5xl text-center">
          <MapPin className="mx-auto mb-5 h-10 w-10 text-olive" />
          <h2 className="font-serif text-3xl md:text-5xl">Visit Pioppi</h2>
          <p className="mt-4 text-lg text-cocoa/75">Gombe, Kinshasa — opening details coming soon.</p>
          <a href="https://wa.me/243000000000" className="mt-8 inline-flex items-center gap-2 rounded-full bg-olive px-8 py-4 font-semibold text-white shadow-[0_10px_24px_rgba(103,120,82,0.25)] transition hover:-translate-y-0.5"><MessageCircle /> Contact on WhatsApp</a>
        </div>
      </section>

      <footer className="bg-cocoa px-6 py-10 text-center text-white">© 2026 Pioppi. Healthy is the new rich.</footer>
    </main>
  );
}
