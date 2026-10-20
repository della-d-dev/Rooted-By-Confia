import Link from "next/link";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-section-image" aria-label="Brand image space">
        <span>Brand image space</span>
      </div>

      <div className="about-content">
        <p className="section-tag">ABOUT US</p>

        <h2 className="about-heading">Rooted in Nature. Driven by Results.</h2>

        <p>
          Rooted By Confia is a premium herbal haircare brand dedicated
          to restoring confidence through healthy hair. Our products are
          carefully crafted with nourishing natural ingredients that
          strengthen, moisturize and encourage healthy hair growth.
        </p>

        <Link className="about-cta" href="#hairducation">
          Read Our Story
        </Link>
      </div>
    </section>
  );
}
