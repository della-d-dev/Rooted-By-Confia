"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Topic = { category: string; title: string; note: string; tone: string };

const topics: Topic[] = [
  { category: "Hair care basics", title: "Read what your hair is telling you", note: "A gentle starting point for noticing texture, pattern, and the small signals that shape a personal ritual.", tone: "routine" },
  { category: "Scalp care", title: "Begin at the foundation", note: "Create a calmer relationship with the place where every strand begins.", tone: "scalp" },
  { category: "Moisture & hydration", title: "Make space for softness", note: "Explore simple ways to keep moisture at the centre of your routine.", tone: "moisture" },
];

function PlaceholderMedia({ className = "", label }: { className?: string; label: string }) {
  return <div className={`media-placeholder ${className}`} role="img" aria-label={label}><span>RBC / media ready</span><b>{label}</b></div>;
}

function CinematicHero() {
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const section = document.querySelector<HTMLElement>(".cinematic-hero");
        if (!section) return;
        const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
        setProgress(Math.min(Math.max(-section.getBoundingClientRect().top / distance, 0), 1));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); if (frame.current) cancelAnimationFrame(frame.current); };
  }, []);

  return (
    <section className="cinematic-hero" aria-labelledby="hairducation-title" style={{ "--cinematic-progress": progress } as React.CSSProperties}>
      <div className="cinematic-stage" aria-hidden="true">
        <PlaceholderMedia className="cinematic-layer cinematic-layer--hair" label="Natural textured hair footage placeholder" />
        <PlaceholderMedia className="cinematic-layer cinematic-layer--botanical" label="Botanical imagery placeholder" />
        <PlaceholderMedia className="cinematic-layer cinematic-layer--oil" label="Rootrise oil product footage placeholder" />
        <div className="cinematic-vignette" />
      </div>
      <div className="cinematic-atmosphere"><p>Your crown has a language.<br />Learn to speak it.</p></div>
      <div className="cinematic-title">
        <p className="cinematic-kicker">The RBC learning space</p>
        <h1 id="hairducation-title">HAIRDUCATION</h1>
        <p>Understand your hair.<br />Nurture your crown.</p>
      </div>
      <p className="cinematic-scroll">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></p>
    </section>
  );
}

function EducationBook() {
  const [open, setOpen] = useState(false);
  return (
    <section className="book-section" id="explore-book" aria-labelledby="book-title">
      <div className="book-intro"><p className="eyebrow">A living library</p><h2 id="book-title">A book for the ritual you are becoming.</h2><p>Open a considered collection of notes, moving images, and gentle reminders for understanding your hair.</p></div>
      <div className={`book ${open ? "book--open" : ""}`} onClick={() => setOpen(!open)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setOpen(!open); } }} role="button" tabIndex={0} aria-expanded={open} aria-label={open ? "Close Hairducation book" : "Open Hairducation book"}>
        <span className="book-spine" aria-hidden="true" />
        <span className="book-cover"><span className="book-mark">RBC / VOLUME 01</span><strong>HAIR<br />DUCATION</strong><span className="book-cover-note">Nature, knowledge<br />& confidence</span></span>
        <span className="book-pages">
          <span className="book-page book-page--notes"><span className="eyebrow">Featured lesson</span><strong>Listen before<br />you change.</strong><small>Tap the cover to close</small></span>
          <span className="book-page book-page--video"><span className="video-media"><PlaceholderMedia label="Placeholder for Hairducation video cover" /><a className="play-mark" href="https://www.youtube.com/@rootedbyconfia" target="_blank" rel="noreferrer" aria-label="Watch Understanding your crown externally">▶</a></span><span className="video-copy"><b>Understanding your crown</b><small>Hair care basics / watch externally ↗</small></span></span>
        </span>
      </div>
      <p className="book-hint">{open ? "Tap to close the book" : "Tap to open the book"}</p>
    </section>
  );
}

export default function HairducationPage() {
  return <div className="hairducation-shell"><Navbar /><main><CinematicHero /><EducationBook /><section className="learning-section" aria-labelledby="topics-title"><div className="learning-heading"><div><p className="eyebrow">Continue exploring</p><h2 id="topics-title">Knowledge for your ritual.</h2></div><p>Curated foundations for a more intentional relationship with your hair.</p></div><div className="topic-grid">{topics.map((topic) => <article className="topic-card" key={topic.title}><PlaceholderMedia className={`topic-media topic-media--${topic.tone}`} label={`${topic.category} image placeholder`} /><div className="topic-copy"><p className="eyebrow">{topic.category}</p><h3>{topic.title}</h3><p>{topic.note}</p><span>Coming soon <span aria-hidden="true">→</span></span></div></article>)}</div></section><section className="hairducation-cta"><p className="eyebrow">Carry it into your ritual</p><h2>Rooted care for every chapter.</h2><Link href="/products" className="hairducation-button">Explore our products <span aria-hidden="true">→</span></Link></section></main><Footer /></div>;
}

