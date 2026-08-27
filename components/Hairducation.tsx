export default function Hairducation() {
  const lessons = [
    {
      title: "Hair Care Tips",
      description:
        "Simple routines and practical advice for maintaining healthy hair every day.",
    },
    {
      title: "Ingredient Spotlight",
      description:
        "Discover the natural herbs and oils behind our nourishing formulations.",
    },
    {
      title: "Watch & Learn",
      description:
        "Explore tutorials, styling guides and educational videos across our social platforms.",
    },
  ];

  return (
    <section className="hairducation-section" id="hairducation">

      <div className="section-heading">

        <p className="section-tag">
          HAIRDUCATION
        </p>

        <h2>
          Learn. Grow. Flourish.
        </h2>

        <p className="section-description">
          We believe informed haircare leads to healthier results. Explore our
          educational content designed to help you build a confident routine.
        </p>

      </div>

      <div className="hairducation-grid">

        {lessons.map((lesson) => (

          <div className="lesson-card" key={lesson.title}>

            <div className="lesson-icon">
              🌿
            </div>

            <h3>{lesson.title}</h3>

            <p>{lesson.description}</p>

            <button>
              Learn More →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}