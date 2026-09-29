import React, { useState } from "react";

const filters = [
  { value: "all", label: "A little of everything" },
  { value: "coast", label: "Salt air" },
  { value: "country", label: "Country quiet" },
  { value: "wild", label: "Wide open" },
];

const stays = [
  {
    setting: "coast",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=82",
    alt: "A quiet coastal home looking out toward the sea",
    tag: "By the water",
    location: "Cornwall, England",
    price: "From £145 / night",
    name: "The Tide House",
    description: "Salt on the windows, a path to the shore, and absolutely no plans.",
  },
  {
    setting: "country",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=82",
    alt: "A secluded timber cabin tucked into a green woodland",
    tag: "Under the trees",
    location: "Lake District, England",
    price: "From £128 / night",
    name: "Fernwood Cabin",
    description: "A tucked-away woodland cabin made for long walks and longer breakfasts.",
  },
  {
    setting: "wild",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=82",
    alt: "Mountain peaks fading into the distance beneath a soft sky",
    tag: "Out in the open",
    location: "Highlands, Scotland",
    price: "From £162 / night",
    name: "The Long View",
    description: "A hillside hideaway with big skies, good books, and room to breathe.",
  },
];

function StayCard({ stay }) {
  return (
    <article className="stay">
      <a className="stay-image" href="#newsletter" aria-label={`Discover ${stay.name}`}>
        <img src={stay.image} alt={stay.alt} loading="lazy" />
        <span className="stay-tag">{stay.tag}</span>
      </a>
      <div className="stay-meta">
        <span>{stay.location}</span>
        <span>{stay.price}</span>
      </div>
      <h3>{stay.name}</h3>
      <p className="stay-description">{stay.description}</p>
      <a className="stay-link" href="#newsletter">
        Take a closer look <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [signupMessage, setSignupMessage] = useState("");
  const visibleStays = stays.filter(
    (stay) => activeFilter === "all" || stay.setting === activeFilter,
  );

  function handleSignup(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    setSignupMessage(`You’re on the list. Look out for a note at ${email}.`);
    event.currentTarget.reset();
  }

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">Good places, a little off-route</p>
          <h1 id="hero-title">Find your<br /><em>somewhere.</em></h1>
          <p className="hero-copy">A considered collection of small stays and slow weekends, for when the usual routine needs a change of scenery.</p>
          <a className="hero-link" href="#stays">Meet your next getaway <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section id="stays" aria-labelledby="stays-title">
        <div className="intro">
          <div>
            <p className="section-kicker">A change of pace</p>
            <h2 id="stays-title">Little places. Big exhale.</h2>
          </div>
          <p className="intro-note">Three places worth taking the long way for. Pick a mood; we’ll find the rest.</p>
        </div>
        <div className="filter-row" role="group" aria-label="Filter stays by setting">
          <span className="filter-label">I’m craving</span>
          {filters.map((filter) => (
            <button
              className="filter-button"
              type="button"
              key={filter.value}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="stays" aria-live="polite">
          {visibleStays.map((stay) => <StayCard key={stay.setting} stay={stay} />)}
        </div>
      </section>

      <section className="note-band" id="about" aria-labelledby="about-title">
        <div>
          <p className="section-kicker">A note from us</p>
          <h2 id="about-title">Less itinerary.<br /><em>More feeling.</em></h2>
        </div>
        <p>We think a good getaway is less about ticking places off a list and more about how you feel when you get there. So we look for the thoughtful details: the well-worn path, the favorite mug, the window you’ll want to wake up beside.</p>
      </section>

      <section className="newsletter" id="newsletter" aria-labelledby="newsletter-title">
        <div className="newsletter-copy">
          <p className="section-kicker">A good thing in your inbox</p>
          <h2 id="newsletter-title">A little note from elsewhere.</h2>
          <p>New stays, thoughtful itineraries, and the occasional very good excuse to log off.</p>
        </div>
        <div>
          <form className="signup" onSubmit={handleSignup}>
            <label htmlFor="email" className="visually-hidden">Your email address</label>
            <input id="email" name="email" type="email" placeholder="Your email address" autoComplete="email" required />
            <button type="submit">Count me in <span aria-hidden="true">→</span></button>
          </form>
          <p className="form-message" aria-live="polite">{signupMessage}</p>
        </div>
      </section>
    </>
  );
}