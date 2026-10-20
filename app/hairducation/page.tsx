"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Lesson = {
  category: string;
  title: string;
  description: string;
  coverNote: string;
  tone: string;
  videoUrl: string;
  videoCover: string;
};

const lessons: Lesson[] = [
  { category: "Hair care basics", title: "Read what your hair is telling you", description: "A gentle starting point for noticing texture, pattern, and the small signals that shape a personal ritual.", coverNote: "Listening to your crown", tone: "forest", videoUrl: "https://www.youtube.com/@rootedbyconfia", videoCover: "Natural hair texture video placeholder" },
  { category: "Hair porosity", title: "The way your hair receives", description: "Porosity is a map, not a label. Learn how your strands receive, hold, and release moisture.", coverNote: "A study in moisture", tone: "olive", videoUrl: "https://www.youtube.com/@rootedbyconfia", videoCover: "Hair porosity video placeholder" },
  { category: "Hair types", title: "Your pattern is a language", description: "Move beyond categories and begin to understand the unique rhythm of your curl, coil, or wave.", coverNote: "Pattern & possibility", tone: "clay", videoUrl: "https://www.youtube.com/@rootedbyconfia", videoCover: "Hair type video placeholder" },
  { category: "Moisture & hydration", title: "Make space for softness", description: "Explore simple ways to keep moisture at the centre of a routine that feels generous, not demanding.", coverNote: "A softer practice", tone: "moss", videoUrl: "https://www.youtube.com/@rootedbyconfia", videoCover: "Moisture and hydration video placeholder" },
  { category: "Scalp care", title: "Begin at the foundation", description: "Create a calmer relationship with the place where every strand begins, with attention and consistency.", coverNote: "Care from the root", tone: "umber", videoUrl: "https://www.youtube.com/@rootedbyconfia", videoCover: "Scalp care video placeholder" },
  { category: "Protective styling", title: "Hold, but never hide", description: "A thoughtful approach to protective styling that honours your hair between each chapter.", coverNote: "An intentional hold", tone: "sage", videoUrl: "https://www.youtube.com/@rootedbyconfia", videoCover: "Protective styling video placeholder" },
];

function PlaceholderMedia({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`media-placeholder ${className}`} role="img" aria-label={label}><span>Replaceable media</span><b>{label}</b></div>;
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

  return <section className="cinematic-hero" aria-labelledby="hairducation-title" style={{ "--cinematic-progress": progress } as React.CSSProperties}>
    <div className="cinematic-stage" aria-hidden="true">
      <PlaceholderMedia className="cinematic-layer cinematic-layer--hair" label="Natural textured hair footage placeholder" />
      <PlaceholderMedia className="cinematic-layer cinematic-layer--botanical" label="Botanical imagery placeholder" />
      <PlaceholderMedia className="cinematic-layer cinematic-layer--oil" label="Rootrise oil product footage placeholder" />
      <div className="cinematic-vignette" />
    </div>
    <div className="cinematic-atmosphere"><p>Your crown has a language.<br />Learn to speak it.</p></div>
    <div className="cinematic-title"><p className="cinematic-kicker">The RBC learning space</p><h1 id="hairducation-title">HAIRDUCATION</h1><p>Understand your hair.<br />Nurture your crown.</p></div>
    <p className="cinematic-scroll">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></p>
  </section>;
}

function Book({ lesson, index, active, onOpen }: { lesson: Lesson; index: number; active: boolean; onOpen: () => void }) {
  const open = active;
  return <article className={`library-item library-item--${lesson.tone} ${open ? "is-active" : ""}`} style={{ "--book-tilt": `${index % 2 === 0 ? -1 : 1}deg` } as React.CSSProperties}>
    <div className={`physical-book ${open ? "physical-book--open" : ""}`} onClick={onOpen} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onOpen(); } }} role="button" tabIndex={0} aria-expanded={open} aria-label={`${open ? "Close" : "Open"} ${lesson.title}`}>
      <span className="book-back" aria-hidden="true" /><span className="book-spine" aria-hidden="true" />
      <span className="book-cover"><span className="book-mark">RBC / VOLUME {String(index + 1).padStart(2, "0")}</span><strong>HAIR<br />DUCATION</strong><span className="book-cover-note">{lesson.coverNote}</span><small>Rooted By Confia</small></span>
      <span className="book-pages"><span className="book-page book-page--left"><span className="eyebrow">{lesson.category}</span><h3>{lesson.title}</h3><p>{lesson.description}</p><small>Turn the page with care.</small></span><span className="book-page book-page--right"><span className="video-media"><PlaceholderMedia label={lesson.videoCover} /><a className="play-mark" href={lesson.videoUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} aria-label={`Watch ${lesson.title} externally`}>Play</a></span><span className="video-copy"><b>Watch the lesson</b><small>External video ↗</small></span></span></span>
    </div>
    <p className="book-hint">{open ? "Close this volume" : "Open this volume"}</p>
  </article>;
}

export default function HairducationPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return <div className="hairducation-shell"><Navbar /><main><CinematicHero /><section className="library-section" id="explore-book" aria-labelledby="library-title"><div className="library-heading"><p className="eyebrow">A living library</p><h2 id="library-title">Knowledge for your crown.</h2><p>Open a considered collection of notes, moving images, and gentle reminders for understanding your hair.</p></div><div className="book-grid">{lessons.map((lesson, index) => <Book key={lesson.title} lesson={lesson} index={index} active={activeIndex === index} onOpen={() => setActiveIndex(activeIndex === index ? null : index)} />)}</div></section><section className="hairducation-cta"><p className="eyebrow">Carry it into your ritual</p><h2>Rooted care for every chapter.</h2><Link href="/products" className="hairducation-button">Explore our products <span aria-hidden="true">→</span></Link></section></main><Footer /></div>;
}
