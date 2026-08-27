const benefits = [
  {
    title: "Promotes Hair Growth",
    description:
      "Our herbal blend nourishes the scalp and supports healthy, consistent hair growth.",
  },
  {
    title: "Strengthens Hair",
    description:
      "Reduce breakage and improve the strength of every strand from root to tip.",
  },
  {
    title: "Deep Moisture",
    description:
      "Restore moisture to dry hair and help maintain softness and shine.",
  },
  {
    title: "100% Herbal",
    description:
      "Made with carefully selected natural ingredients and free from harsh chemicals.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits">

      <div className="section-heading">
        <p>WHY CHOOSE US</p>
        <h2>The Rooted By Confia Difference</h2>
      </div>

      <div className="benefits-grid">

        {benefits.map((benefit) => (
          <div
            className="benefit-card"
            key={benefit.title}
          >
            <div className="benefit-icon">
              🌿
            </div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
}