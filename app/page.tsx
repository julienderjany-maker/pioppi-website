import { Leaf, Coffee, Heart, MapPin, MessageCircle, Sparkles } from "lucide-react";

const menu = [
  {
    title: "All-Day Breakfast",
    desc: "Fresh toast, eggs, chia pudding, almond oatmeal and avocado dishes.",
  },
  {
    title: "Salads & Bowls",
    desc: "Colorful bowls, fresh vegetables, grains, proteins and homemade dressings.",
  },
  {
    title: "Healthy Mains",
    desc: "Balanced warm meals with fish, chicken, vegetables and signature sauces.",
  },
  {
    title: "Matcha & Coffee",
    desc: "Signature lattes, ceremonial matcha, espresso and wellness infusions.",
  },
];

const gallery = [
  "Mediterranean Bowls",
  "Matcha Ritual Bar",
  "Artisan Bakery",
  "Warm Interior",
  "Healthy Mains",
  "Community Brunch",
];

export default function Home() {
  return (
    <main className="site-main">
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#home" className="brand" aria-label="Pioppi home">
            Pioppi
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#rituals">Rituals</a>
            <a href="#community">Community</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="https://wa.me/243000000000" className="nav-cta">
            Reserve
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="fade-up delay-1">
            <p className="eyebrow">Luxury healthy lifestyle restaurant · Gombe, Kinshasa</p>
            <h1>Eat Better. Live Better. Gather Better.</h1>
            <p className="hero-sub">
              Mediterranean wellness meets modern Kinshasa with soft Lebanese coastal elegance. Pioppi brings refined nourishment,
              beautiful atmosphere, and community energy together.
            </p>
            <div className="hero-actions">
              <a href="#menu" className="btn btn-primary">
                Discover Menu
              </a>
              <a href="#contact" className="btn btn-secondary">
                Visit Us
              </a>
            </div>
          </div>

          <div className="hero-card fade-up delay-2">
            <Leaf size={52} />
            <p className="hero-card-title">Fresh • Balanced • Beautiful</p>
            <p>Premium ingredients, intentional nutrition and vibrant flavors crafted daily.</p>
          </div>
        </div>
      </section>

      <section id="about" className="section container fade-up">
        <h2>Who We Are</h2>
        <p>
          Pioppi is more than a restaurant. It is a lifestyle destination where food, wellness and social connection are designed into every
          detail.
        </p>
      </section>

      <section id="menu" className="section section-soft">
        <div className="container">
          <h2 className="fade-up">Premium Menu Preview</h2>
          <div className="card-grid">
            {menu.map((item, i) => (
              <article key={item.title} className={`menu-card fade-up delay-${(i % 3) + 1}`}>
                <Coffee size={24} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rituals" className="section container ritual-grid">
        <div className="fade-up">
          <h2>Matcha & Coffee Rituals</h2>
          <p>
            From ceremonial matcha to slow-crafted espresso, our beverage experience is designed for mindful mornings and creative afternoons.
          </p>
        </div>
        <div className="feature-card fade-up delay-2">
          <p><Heart size={18} /> Functional blends with clean ingredients</p>
          <p><Sparkles size={18} /> Signature matcha latte artistry</p>
          <p><Coffee size={18} /> Specialty coffee with elegant pairings</p>
          <p><Leaf size={18} /> Wellness-forward seasonal menu</p>
        </div>
      </section>

      <section id="community" className="section community">
        <div className="container fade-up">
          <h2>Community Lifestyle</h2>
          <p>
            Pioppi is a social wellness hub for brunches, tastings, workshops, and meaningful moments centered around healthier living.
          </p>
        </div>
      </section>

      <section className="section container">
        <h2 className="fade-up">Gallery Preview</h2>
        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <div key={item} className={`gallery-tile fade-up delay-${(i % 3) + 1}`}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section section-soft contact">
        <div className="container fade-up">
          <MapPin size={34} />
          <h2>Visit Pioppi</h2>
          <p>Gombe, Kinshasa — opening details coming soon.</p>
          <a href="https://wa.me/243000000000" className="btn btn-primary contact-btn">
            <MessageCircle size={20} /> Contact on WhatsApp
          </a>
        </div>
      </section>

      <a href="https://wa.me/243000000000" className="whatsapp-sticky" aria-label="Chat on WhatsApp">
        <MessageCircle size={18} /> WhatsApp
      </a>

      <footer className="footer">© 2026 Pioppi. Eat Better. Live Better. Gather Better.</footer>
    </main>
  );
}
