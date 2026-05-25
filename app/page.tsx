import { Leaf, Coffee, Heart, MapPin, MessageCircle } from "lucide-react";

const menu = [
  ["All-Day Breakfast", "Fresh toast, eggs, chia pudding, almond oatmeal and avocado dishes."],
  ["Salads & Bowls", "Colorful bowls, fresh vegetables, grains, proteins and homemade dressings."],
  ["Healthy Mains", "Balanced warm meals with chicken, beef, fish, vegetables and signature sauces."],
  ["Matcha & Coffee", "Signature lattes, matcha drinks, infusions and wellness beverages."]
];

const gallery = ["Fresh Bowls", "Matcha Bar", "Artisan Bakery", "Warm Interior", "Healthy Mains", "Community Moments"];

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 z-50 w-full bg-cream/90 backdrop-blur border-b border-cocoa/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-semibold tracking-wide text-olive">Pioppi</div>
          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#about">About</a><a href="#menu">Menu</a><a href="#nutrition">Nutrition</a><a href="#community">Community</a><a href="#contact">Contact</a>
          </div>
          <a href="https://wa.me/243000000000" className="rounded-full bg-olive px-5 py-2 text-sm font-semibold text-white">WhatsApp</a>
        </div>
      </nav>

      <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,#D8C3A5,transparent_35%),linear-gradient(135deg,#F7F0E6,#fff)] pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-olive shadow-sm">Healthy lifestyle restaurant — Gombe, Kinshasa</p>
            <h1 className="text-5xl font-bold leading-tight text-cocoa md:text-7xl">Eat Better. Live Better. Gather Better.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cocoa/80">Pioppi is a premium healthy restaurant and lifestyle space where fresh food, signature drinks, artisan bakery and community meet in the heart of Kinshasa.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="rounded-full bg-olive px-7 py-3 font-semibold text-white">Discover Menu</a>
              <a href="#contact" className="rounded-full border border-olive px-7 py-3 font-semibold text-olive">Visit Us</a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-2xl">
            <div className="flex h-[520px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-sage/40 to-sand/50 text-center">
              <div>
                <Leaf className="mx-auto mb-6 h-16 w-16 text-olive" />
                <p className="text-3xl font-semibold text-cocoa">Fresh • Balanced • Beautiful</p>
                <p className="mt-3 text-cocoa/70">Replace this area with Pioppi hero food/interior image.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold text-cocoa">Who We Are</h2>
        <p className="mt-6 text-xl leading-9 text-cocoa/80">Pioppi is more than a restaurant. It is a new way of gathering around food, wellness and community. Born in Kinshasa, Pioppi was created to make healthy eating more enjoyable, accessible and inspiring.</p>
      </section>

      <section id="menu" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-cocoa">Our Menu</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {menu.map(([title, desc]) => (
              <div key={title} className="rounded-3xl bg-cream p-6 shadow-sm">
                <Coffee className="mb-4 h-8 w-8 text-olive" />
                <h3 className="text-xl font-semibold text-cocoa">{title}</h3>
                <p className="mt-3 text-cocoa/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nutrition" className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-cocoa">Food With Intention</h2>
          <p className="mt-6 text-lg leading-8 text-cocoa/80">We design recipes with balance in mind: quality proteins, fresh vegetables, natural flavors, thoughtful portions and better ingredients.</p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          {["Fresh ingredients", "Balanced meals", "Clear nutrition information", "Delicious first, healthy always"].map(x => (
            <p key={x} className="mb-4 flex items-center gap-3 text-lg text-cocoa"><Heart className="h-5 w-5 text-olive" />{x}</p>
          ))}
        </div>
      </section>

      <section id="community" className="bg-olive py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold">A Place to Gather</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">Pioppi is designed as a community space where people can meet, work, eat, learn and share better habits through wellness mornings, matcha tastings, family brunches and healthy workshops.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold text-cocoa">Gallery Preview</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {gallery.map(item => <div key={item} className="flex h-52 items-center justify-center rounded-3xl bg-sand/50 font-semibold text-cocoa">{item}</div>)}
        </div>
      </section>

      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <MapPin className="mx-auto mb-5 h-10 w-10 text-olive" />
          <h2 className="text-4xl font-bold text-cocoa">Visit Pioppi</h2>
          <p className="mt-4 text-lg text-cocoa/75">Gombe, Kinshasa — opening details coming soon.</p>
          <a href="https://wa.me/243000000000" className="mt-8 inline-flex items-center gap-2 rounded-full bg-olive px-8 py-4 font-semibold text-white"><MessageCircle /> Contact on WhatsApp</a>
        </div>
      </section>

      <footer className="bg-cocoa px-6 py-10 text-center text-white">© 2026 Pioppi. Eat Better. Live Better. Gather Better.</footer>
    </main>
  );
}
