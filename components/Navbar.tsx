"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Products", href: "/products" },
  { name: "Benefits", href: "#benefits" },
  { name: "Hairducation", href: "/hairducation" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <Link href="/" className="navbar-logo">
          <Image
            src="/images/navlogo.jpeg"
            alt="Rooted By Confia"
            width={110}
            height={70}
            className="navbar-logo-image"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-menu">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={link.name}
              className={`nav-link ${index === 0 ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav className="mobile-nav">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}

      </div>
    </header>
  );
}