const links = [
  "Home",
  "About",
  "Products",
  "Benefits",
  "Hairducation",
  "Testimonials",
  "FAQ",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        Rooted By Confia
      </div>

      <nav>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </nav>

      <button className="menu-btn">
        ☰
      </button>
    </header>
  );
}