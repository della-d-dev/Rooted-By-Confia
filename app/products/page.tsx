import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: "rootrise",
    eyebrow: "Rooted care",
    name: "RootRise Hair Oil",
    description:
      "A considered haircare essential for your routine, available in three sizes to meet the way you care for your hair.",
    sizes: ["50ml", "100ml", "500ml"],
    imageLabel: "RootRise Hair Oil photography",
    tone: "product-stage--rootrise",
  },
  {
    id: "hydrabutter",
    eyebrow: "Everyday moisture",
    name: "HydraButter",
    description:
      "A rich, simple staple for your haircare shelf, offered in two sizes for a routine that feels personal and unhurried.",
    sizes: ["100g", "200g"],
    imageLabel: "HydraButter photography",
    tone: "product-stage--hydrabutter",
  },
];

export const metadata = {
  title: "Products | Rooted By Confia",
  description:
    "Explore the Rooted By Confia collection: RootRise Hair Oil and HydraButter.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="products-page">
        <section className="products-page-hero" aria-labelledby="products-page-title">
          <div className="products-page-hero-copy">
            <p className="products-page-kicker">The RBC collection</p>
            <h1 id="products-page-title">Care that starts at the root.</h1>
            <p className="products-page-intro">
              Meet the considered essentials at the heart of Rooted By Confia —
              made to belong in a thoughtful, consistent haircare ritual.
            </p>
            <Link className="products-page-button" href="#collection">
              Explore the collection <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div className="products-page-hero-art" aria-label="A space for Rooted By Confia product photography" role="img">
            <span>RBC / product study</span>
            <strong>Rooted<br />in ritual.</strong>
            <i aria-hidden="true" />
          </div>
        </section>

        <section className="products-collection" id="collection" aria-labelledby="collection-title">
          <div className="products-collection-heading">
            <div>
              <p className="products-page-kicker">Our products</p>
              <h2 id="collection-title">The essentials</h2>
            </div>
            <p>
              Two intentional staples. Choose the size that fits your rhythm,
              then make them part of your own ritual.
            </p>
          </div>

          <div className="products-detail-grid">
            {products.map((product, index) => (
              <article className="products-detail-card" id={product.id} key={product.id}>
                <div className={`product-detail-stage ${product.tone}`} role="img" aria-label={product.imageLabel}>
                  <span className="product-detail-index">0{index + 1}</span>
                  <span className="product-detail-image-note">Image ready</span>
                  <div className="product-detail-object" aria-hidden="true">
                    <span />
                  </div>
                </div>
                <div className="products-detail-copy">
                  <p className="products-page-kicker">{product.eyebrow}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-sizes" aria-label={`Available sizes for ${product.name}`}>
                    {product.sizes.map((size) => <span key={size}>{size}</span>)}
                  </div>
                  <Link className="products-detail-link" href={`/products#${product.id}`}>
                    View details <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="products-page-cta" aria-labelledby="products-cta-title">
          <p className="products-page-kicker">Stay rooted</p>
          <h2 id="products-cta-title">Your ritual, thoughtfully held.</h2>
          <p>Learn more about the story and philosophy behind Rooted By Confia.</p>
          <Link className="products-page-button products-page-button--light" href="/#about">
            Discover RBC <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Product photography can be added later by replacing each stage with an Image
// while keeping the existing stage classes, ratio, and object positioning.
