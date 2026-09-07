import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>

          <h2>Rooted By Confia</h2>

          <p>
            Premium herbal haircare rooted in nature,
            crafted to nourish healthy hair from the roots.
          </p>

        </div>

        <div>

          <h3>Quick Links</h3>

          <ul>

            <li><Link href="/">Home</Link></li>

            <li><Link href="#about">About</Link></li>

            <li><Link href="/products">Products</Link></li>

            <li><Link href="#hairducation">Hairducation</Link></li>

          </ul>

        </div>

        <div>

          <h3>Connect</h3>

          <ul>

            <li>
              <a href="https://wa.me/2349034682973">
                WhatsApp
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/rootedbyconfia">
                Instagram
              </a>
            </li>

            <li>
              <a href="https://www.tiktok.com">
                TikTok
              </a>
            </li>

            <li>
              <a href="https://youtube.com/@rootedbyconfia">
                YouTube
              </a>
            </li>

          </ul>

        </div>

      </div>

      <div className="copyright">
        <p>© 2026 Rooted By Confia.</p>

        <p>Built with 🌿 in Nigeria.</p>

        <p className="developer-credit">
            Website designed & developed by{" "}
                <a
                   href="https://github.com/yourusername"
                   target="_blank"
                   rel="noopener noreferrer"
                   >
                   della_d_dev
                </a>.
        </p>
      </div>

    </footer>
  );
}
