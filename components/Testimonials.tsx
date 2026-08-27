export default function Testimonials() {
  const reviews = [
    {
      name: "Happy Customer",
      text: "My hair feels healthier and stronger since I started using Rooted By Confia products.",
    },
    {
      name: "Natural Hair Enthusiast",
      text: "The ingredients are gentle and my scalp has never felt better.",
    },
    {
      name: "Returning Customer",
      text: "Every product feels thoughtfully made. I love the consistency and results.",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">

      <div className="section-heading">

        <p className="section-tag">
          TESTIMONIALS
        </p>

        <h2>
          Loved By Our Community
        </h2>

        <p className="section-description">
          Every healthy hair journey begins with trust. Here&apos;s what our customers
          have to say.
        </p>

      </div>

      <div className="testimonial-grid">

        {reviews.map((review) => (

          <div className="testimonial-card" key={review.name}>

            <div className="quote">
              “
            </div>

            <p className="review-text">
              {review.text}
            </p>

            <h4>
              {review.name}
            </h4>

          </div>

        ))}

      </div>

    </section>
  );
}