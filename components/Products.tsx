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
    badge: "Cheapest",
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
    <section className="products">

      <div className="section-heading">

        <p>OUR PRODUCTS</p>

        <h2>Crafted For Healthy Hair</h2>

      </div>

      <div className="product-grid">

        {products.map((product) => (

            <div className="product-card" key={product.name + product.size}>

                {product.badge && (
                    <span className="badge">
                       {product.badge}
                    </span>
              )}

                <div className="product-image">
                    Product Image
                </div>

                <h3>{product.name}</h3>

                    <p>{product.size}</p>

                <button>
                     View Product →
                </button>

            </div>

        ))}

      </div>

    </section>
  );
}