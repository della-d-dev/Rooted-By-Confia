import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type EducationCard = {
  category: string;
  title: string;
  description: string;
  imageLabel: string;
  imageSource: string;
  tone: string;
};

const topics: EducationCard[] = [
  {
    category: "Hair care basics",
    title: "Building a routine that feels like yours",
    description: "A gentle place to begin: understand the simple steps that can make hair care feel more consistent and considered.",
    imageLabel: "Placeholder for a hair care routine image",
    imageSource: "/images/hairducation-routine.jpg",
    tone: "hairducation-card-stage--routine",
  },
  {
    category: "Scalp care",
    title: "Start with the foundation",
    description: "Explore editable guidance for creating a calm, thoughtful approach to caring for your scalp.",
    imageLabel: "Placeholder for a scalp care image",
    imageSource: "/images/hairducation-scalp.jpg",
    tone: "hairducation-card-stage--scalp",
  },
  {
    category: "Moisture & hydration",
    title: "Making space for moisture",
    description: "Learn about the role of moisture in a balanced routine, with room for RBC’s future notes and advice.",
    imageLabel: "Placeholder for a moisture and hydration image",
    imageSource: "/images/hairducation-moisture.jpg",
    tone: "hairducation-card-stage--moisture",
  },
  {
    category: "Protective styling",
    title: "Care between the styles",
    description: "A future guide to keeping your routine intentional before, during, and after protective styling.",
    imageLabel: "Placeholder for a protective styling image",
    imageSource: "/images/hairducation-protective-style.jpg",
    tone: "hairducation-card-stage--protective",
  },
];

export const metadata = {
  title: "Hairducation | Rooted By Confia",
  description: "Hair-care education and thoughtful routines from Rooted By Confia.",
};

function ImagePlaceholder({ label, source, className }: { label: string; source: string; className: string }) {
  return (
    <div className={`hairducation-image-placeholder ${className}`} role="img" aria-label={label}>
      <span className="hairducation-image-kicker">RBC / image ready</span>
      <strong>{source}</strong>
    </div>
  );
}

export default function HairducationPage() {
  return (
    <div className="hairducation-shell">
      <Navbar />
      <main>
        <section className="hairducation-hero" aria-labelledby="hairducation-title">
          <div className="hairducation-hero-copy">
            <p className="hairducation-eyebrow">The RBC learning space</p>
            <h1 id="hairducation-title">Hairducation</h1>
            <p className="hairducation-hero-intro">
              A thoughtful collection of notes for understanding your hair, caring for your scalp, and building rituals that feel rooted in you.
            </p>
            <div className="hairducation-hero-actions">
              <Link className="hairducation-button" href="#featured-education">Start exploring <span aria-hidden="true">↓</span></Link>
              <Link className="hairducation-text-link" href="/#about">Back home <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <ImagePlaceholder
            label="Placeholder for the Hairducation hero image"
            source="/images/hairducation-hero.jpg"
            className="hairducation-hero-image"
          />
        </section>

        <section className="hairducation-featured" id="featured-education" aria-labelledby="featured-title">
          <div className="hairducation-section-heading">
            <p className="hairducation-eyebrow">Featured education</p>
            <h2 id="featured-title">Healthy hair care starts with paying attention.</h2>
          </div>
          <article className="hairducation-featured-card">
            <ImagePlaceholder
              label="Placeholder for a featured hair education image"
              source="/images/hairducation-featured.jpg"
              className="hairducation-featured-image"
            />
            <div className="hairducation-featured-copy">
              <p className="hairducation-card-category">Hair care basics</p>
              <h3>A slower, simpler way to learn your hair</h3>
              <p>Use this space for a future editorial guide on observing what your hair needs and making room for a routine that can grow with you.</p>
              <span className="hairducation-coming-soon">Featured guide coming soon</span>
            </div>
          </article>
        </section>

        <section className="hairducation-topics" aria-labelledby="topics-title">
          <div className="hairducation-section-heading hairducation-section-heading--topics">
            <div>
              <p className="hairducation-eyebrow">Explore the topics</p>
              <h2 id="topics-title">Knowledge for your ritual.</h2>
            </div>
            <p>Browse the foundations of a considered hair-care practice. Each guide is designed to make the next step feel clearer.</p>
          </div>
          <div className="hairducation-card-grid">
            {topics.map((topic) => (
              <article className="hairducation-card" key={topic.title}>
                <ImagePlaceholder label={topic.imageLabel} source={topic.imageSource} className={`hairducation-card-stage ${topic.tone}`} />
                <div className="hairducation-card-copy">
                  <p className="hairducation-card-category">{topic.category}</p>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                  <span className="hairducation-read-more">Read more <span aria-hidden="true">→</span></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="hairducation-cta" aria-labelledby="hairducation-cta-title">
          <p className="hairducation-eyebrow">Keep exploring</p>
          <h2 id="hairducation-cta-title">Bring what you learn into your ritual.</h2>
          <p>Discover the Rooted By Confia essentials created to sit alongside your hair-care practice.</p>
          <Link className="hairducation-button hairducation-button--light" href="/products">Explore our products <span aria-hidden="true">→</span></Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
