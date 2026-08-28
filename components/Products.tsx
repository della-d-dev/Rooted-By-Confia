import Link from "next/link";

const products = [
  {
    name: "RootRise Hair Oil",
    size: "50ml",
    badge: "Best Seller",
  },
  {
    name: "RootRise Hair Oil",
    size: "100ml",
    badge: "Popular",
  },
  {
    name: "RootRise Hair Oil",
    size: "500ml",
    badge: "Best Value",
  },
  {
    name: "HydraButter",
    size: "100g",
    badge: "Best Seller",
  },
  {
    name: "HydraButter",
    size: "200g",
    badge: "New",
  },
];

export default function Products() {
  return (
    <section className="products-section" id="products">

      <div className="section-heading">
        <p>OUR PRODUCTS</p>

        <h2>Crafted For Healthy Hair</h2>

        <span>
          Nature-powered essentials made to nourish, strengthen and
          restore your hair from root to tip.
        </span>
      </div>

      <div className="product-grid">

        {products.map((product) => (
          <article
            className="product-card"
            key={product.name + product.size}
          >

            <span className="badge">
              {product.badge}
            </span>

            <div className="product-image">
              Product Image
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>

              <p>{product.size}</p>

              <Link className="product-link" href="/products">
                View Product →
              </Link>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}
