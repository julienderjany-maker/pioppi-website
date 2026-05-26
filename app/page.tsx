import { Leaf, Coffee, Heart, MapPin, MessageCircle } from "lucide-react";

const menu = [
  ["All-Day Breakfast", "Fresh toast, eggs, chia pudding, almond oatmeal and avocado dishes."],
  ["Salads & Bowls", "Colorful bowls, fresh vegetables, grains, proteins and homemade dressings."],
  ["Healthy Mains", "Balanced warm meals with chicken, beef, fish, vegetables and signature sauces."],
  ["Matcha & Coffee", "Signature lattes, matcha drinks, infusions and wellness beverages."],
];

const gallery = [
  "Fresh Bowls",
  "Matcha Bar",
  "Artisan Bakery",
  "Warm Interior",
  "Healthy Mains",
  "Community Moments",
];

export default function Home() {
  return (
    <main className="site-root">
      <nav className="nav">
        <div className="container nav-inner fade-up">
          <div className="brand">Pioppi</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#nutrition">Nutrition</a>
            <a href="#community">Community</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="https://wa.me/243000000000" className="btn btn-primary btn-sm">
            WhatsApp
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div className="fade-up">
            <p className="eyebrow">Healthy lifestyle restaurant — Gombe, Kinshasa</p>
            <h1>Healthy is the new rich.</h1>
            <p className="subtitle">
              Pioppi is a premium healthy restaurant and lifestyle space where fresh food, signature drinks, artisan bakery and community meet in the heart of Kinshasa.
            </p>
            <div className="hero-cta">
              <a href="#menu" className="btn btn-primary">Discover Menu</a>
              <a href="#contact" className="btn btn-outline">Visit Us</a>
            </div>
          </div>

          <div className="hero-card fade-up delay-1">
            <div className="hero-visual">
              <Leaf className="hero-icon" />
              <p className="hero-title">Un style de vie</p>
              <p className="hero-copy">Paradis de santé • Fresh • Balanced • Beautiful</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container section-narrow fade-up">
          <h2>Who We Are</h2>
          <p>
            Pioppi is more than a restaurant. It is a new way of gathering around food, wellness and community. Born in Kinshasa, Pioppi was created to make healthy eating more enjoyable, accessible and inspiring.
          </p>
        </div>
      </section>

      <section id="menu" className="section section-soft">
        <div className="container fade-up">
          <h2>Our Menu</h2>
          <div className="card-grid menu-grid">
            {menu.map(([title, desc], index) => (
              <article className="card" key={title} style={{ animationDelay: `${index * 90}ms` }}>
                <Coffee className="card-icon" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nutrition" className="section">
        <div className="container nutrition-grid">
          <div className="fade-up">
            <h2>Food With Intention</h2>
            <p>
              We design recipes with balance in mind: quality proteins, fresh vegetables, natural flavors, thoughtful portions and better ingredients.
            </p>
          </div>
          <div className="card fade-up delay-1">
            {[
              "Fresh ingredients",
              "Balanced meals",
              "Clear nutrition information",
              "Delicious first, healthy always",
            ].map((x) => (
              <p key={x} className="list-row">
                <Heart className="list-icon" />
                {x}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="section section-olive">
        <div className="container section-narrow text-center fade-up">
          <h2>A Place to Gather</h2>
          <p>
            Pioppi is designed as a community space where people can meet, work, eat, learn and share better habits through wellness mornings, matcha tastings, family brunches and healthy workshops.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container fade-up">
          <h2>Gallery Preview</h2>
          <div className="card-grid gallery-grid">
            {gallery.map((item, index) => (
              <div className="gallery-tile" key={item} style={{ animationDelay: `${index * 90}ms` }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-soft">
        <div className="container section-narrow text-center fade-up">
          <MapPin className="contact-icon" />
          <h2>Visit Pioppi</h2>
          <p>Gombe, Kinshasa — opening details coming soon.</p>
          <a href="https://wa.me/243000000000" className="btn btn-primary">
            <MessageCircle /> Contact on WhatsApp
          </a>
        </div>
      </section>

      <a className="wa-sticky" href="https://wa.me/243000000000" aria-label="Contact Pioppi on WhatsApp">
        <MessageCircle />
      </a>

      <footer className="footer">© 2026 Pioppi. Healthy is the new rich.</footer>
    </main>
  );
}
