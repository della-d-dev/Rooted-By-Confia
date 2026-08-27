export default function Hero() {
  return (
    <section className="hero">

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Hero content */}
      <div className="hero-content">

        <p className="hero-label">
          ROOTED BY CONFIA
        </p>

        <p className="hero-tag">
          Nature&apos;s Touch, Flourishing Strands
        </p>

        <h1>
          Healthy Hair
          <br />
          Begins At The Root.
        </h1>

        <p className="hero-text">
          Nature-powered haircare designed to nourish,
          strengthen and restore every strand with carefully
          selected herbal ingredients.
        </p>

        {/* Rating / Trust */}
        <div className="hero-rating">

          <div className="stars">
            ★★★★★
          </div>

          <p className="hero-rating-text">
            100+ happy customers · 500+ bottles sold · 4.9/5
            customer rating
          </p>

        </div>

        {/* Buttons */}
        <div className="hero-buttons">

          <button className="primary-btn">
            Shop Collection
          </button>

          <button className="secondary-btn">
            Our Story
          </button>

        </div>

      </div>

      {/* Trust strip */}
      <div className="hero-features">

        <div className="hero-feature">
          <span>🌿</span>
          <div>
            <strong>100% Natural</strong>
            <small>Pure ingredients</small>
          </div>
        </div>

        <div className="hero-feature">
          <span>💧</span>
          <div>
            <strong>Nourish & Strengthen</strong>
            <small>From root to tip</small>
          </div>
        </div>

        <div className="hero-feature">
          <span>🇳🇬</span>
          <div>
            <strong>Made in Nigeria</strong>
            <small>Proudly local</small>
          </div>
        </div>

        <div className="hero-feature">
          <span>✨</span>
          <div>
            <strong>No Harmful Chemicals</strong>
            <small>Safe & effective</small>
          </div>
        </div>

      </div>

    </section>
  );
}