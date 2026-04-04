import { useEffect, useRef, useState } from "react";
import "./App.css";

const patrons = [
  "RIGI", "WATERFIELD", "ZERODHA", "multipl", "CRED", "Quizizz",
  "uni·", "OKAYA", "ZERV", "Green Soul", "trupeer", "durex",
  "moj", "ESTÉE LAUDER", "urban kisaan", "The Ordinary.", "atlan", "AIR INDIA",
];

const ecosystemCards = [
  {
    label: "WDR VIDEOS",
    heading: "We Build Videos",
    desc: "An AI-native content studio built for the future. We produce over 700 videos a month — ad films, AI films, animated videos, CGI/VFX, and digital content — using in-house studios, cutting-edge AI tools that compress timelines without compromising craft.",
    bg: "linear-gradient(135deg, #8B0000 0%, #cf1134 55%, #ff4500 100%)",
  },
  {
    label: "WDR DESIGNS",
    heading: "We Build Campaigns",
    desc: "Marketing Campaigns, Influencer partnerships, bold outdoor moments, and hands-on social media management, all working together to keep your brand relevant every day.",
    bg: "linear-gradient(135deg, #1a0060 0%, #5329e6 55%, #7b52ff 100%)",
  },
  {
    label: "WDR YOUTUBE",
    heading: "We Build IPs & Distribution",
    desc: "We create digital IPs like Podcasts, YT channels, IG Creator / Community Pages.",
    bg: "linear-gradient(135deg, #5a2500 0%, #ff8819 55%, #f4bd45 100%)",
  },
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function CameraHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");
      const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
      const s = String(elapsed % 60).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {/* Video BG */}
      <div className="hero-video-wrap">
        <video ref={videoRef} src="/media/Iycx9u2R769lOoLLgJ6dU9rG4.webm"
          loop muted playsInline className="hero-video" />
        <div className="hero-overlay" />
      </div>

      {/* Camera UI */}
      <div className="cam-ui">
        <div className="cam-top">
          <div className="cam-rec"><span className="rec-dot" />REC</div>
          <div className="cam-timer">{time}</div>
          <div className="cam-menu">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M2 2h16M2 7h16M2 12h10" stroke="#fff3e2" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Centre bracket + logo */}
        <div className="cam-center">
          <div className="cam-bracket cam-bracket-tl" />
          <div className="cam-bracket cam-bracket-tr" />
          <div className="cam-center-content rv">
            <img src="/images/wdr-logo-transparent.png" alt="WDR Logo" className="cam-logo" />
            <div className="cam-brand-text">BUILDING CREATIVE TRUST</div>
          </div>
          <div className="cam-bracket cam-bracket-bl" />
          <div className="cam-bracket cam-bracket-br" />
        </div>

        <div className="cam-bottom">
          <div className="cam-iso">ISO 100</div>
          <div className="cam-res">4K&nbsp;<span className="cam-hd">HD</span></div>
        </div>
      </div>

      {/* Hero text */}
      <div className="hero-content">
        <div className="hero-tag rv">THE CREATIVE PANACEA</div>
        <h1 className="hero-headline rv">
          WE THINK IN<br />
          INSIGHT<span className="dot">.</span>
        </h1>
        <p className="hero-sub rv">WE ORGANISE THE THOUGHTS</p>
        <a href="#about" className="btn-red rv">EXPLORE OUR SOLUTIONS ↗</a>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="wdr-root">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="navbar-brand">
          <img src="/images/wdr-logo-transparent.png" alt="WDR" className="nav-logo" />
          <span className="nav-name">THE CREATIVE PANACEA</span>
        </a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Home","About","Work","Contact"].map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a></li>
          ))}
        </ul>
        <a href="#contact" className="btn-red btn-nav">SCHEDULE A CALL</a>
      </nav>

      {/* HERO with camera UI */}
      <CameraHero />

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="two-col">
          <div>
            <p className="body-text rv">
              <strong>WHITE DRUNK RABBIT</strong> is a creative concierge service that replaces agency headaches with tailored solutions and frictionless management. We take your raw preferences and do the complex thinking for you, delivering polished results across integrated campaigns, digital strategy, and high-impact content.
            </p>
            <p className="body-text rv" style={{marginTop:"1.2rem"}}>
              If you want to focus on your vision while we handle the chaos, you've come to the right place.
            </p>
          </div>
          <div>
            <p className="body-text muted text-right rv">
              As a dedicated{" "}
              <span className="hl">creative concierge service in the digital space</span>
              , White Drunk Rabbit operates with the agility of a specialized task force and the polished delivery of a premium luxury service.
            </p>
            <p className="body-text muted text-right rv" style={{marginTop:"1.2rem"}}>
              Our tight-knit collective of{" "}
              <span className="hl">problem-solvers, strategists, designers, and creators</span>{" "}
              is united by a single, uncompromising goal: to diagnose your creative roadblocks and deliver flawless solutions while you barely lift a finger.
            </p>
          </div>
        </div>
      </section>

      {/* PATRONS */}
      <section className="section patrons-section" id="work">
        <div className="eyebrow rv">TRUSTED BY BRANDS THAT</div>
        <h2 className="display-title rv">
          SHAPE <span className="grad-text">THE WORLD</span>
        </h2>

        {/* Crosshair grid of logos */}
        <div className="logos-grid rv">
          {patrons.map((name) => (
            <div key={name} className="logo-cell">
              <span className="plus tl">+</span>
              <span className="plus tr">+</span>
              <span className="logo-name">{name}</span>
              <span className="plus bl">+</span>
              <span className="plus br">+</span>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWREEL */}
      <section className="section showreel-section">
        <div className="showreel-inner">
          <div className="showreel-text">
            <div className="eyebrow rv">SHOWREEL</div>
            <h2 className="display-title rv">
              SEE <span className="grad-text">OUR VISION</span><br/>IN MOTION
            </h2>
            <p className="body-text muted rv" style={{maxWidth:"440px", marginTop:"1.5rem"}}>
              A curated reel of our most insightful work across all three divisions — a testament to clarity and execution.
            </p>
          </div>
          <div className="showreel-video-wrap rv">
            <video src="/media/IuaBOuyApyJicsjK2Bxx5IW4ic.webm"
              autoPlay loop muted playsInline className="showreel-video" />
            <div className="showreel-play">▶</div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section" id="videos">
        <div className="eyebrow rv">ECOSYSTEM</div>
        <h2 className="display-title rv">
          WHAT WE <span className="grad-text-orange">BUILD</span>
        </h2>
        <p className="body-text muted rv" style={{maxWidth:"560px", margin:"1rem auto 3.5rem", textAlign:"center"}}>
          Our structure is designed for specialized excellence across the modern marketing stack. We build three things every ambitious brand needs to win today:
        </p>
        <div className="cards-grid">
          {ecosystemCards.map((card) => (
            <div key={card.label} className="card rv">
              <div className="card-thumb" style={{background: card.bg}}>
                <span className="card-label">{card.label}</span>
              </div>
              <div className="card-body">
                <h3 className="card-heading">{card.heading}</h3>
                <p className="card-desc">{card.desc}</p>
                <a href="#" className="card-link">Learn More ↗</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCALE */}
      <section className="section scale-section">
        <div className="two-col reverse-mob">
          <div className="video-frame rv">
            <video src="/media/sLExNztbxBz0iQXzKiG4WAPki0E.webm"
              autoPlay loop muted playsInline className="fill-video" />
          </div>
          <div>
            <div className="eyebrow rv">ENGINEERED FOR ZERO-FRICTION EXECUTION</div>
            <h2 className="display-title rv" style={{fontSize:"clamp(1.8rem,3.5vw,3rem)", textAlign:"left", marginBottom:"2rem"}}>
              BUILT IN-HOUSE FOR<br/>
              <span className="grad-text-orange">END-TO-END</span> EXCELLENCE.
            </h2>
            <p className="body-text muted rv">
              As a dedicated{" "}
              <span className="hl">creative concierge service in the digital space</span>
              , White Drunk Rabbit operates with the agility of a specialized task force and the polished delivery of a premium luxury service.
            </p>
            <p className="body-text muted rv" style={{marginTop:"1.2rem"}}>
              Our tight-knit collective of{" "}
              <span className="hl">problem-solvers, strategists, designers, and creators</span>{" "}
              is united by a single, uncompromising goal: to diagnose your creative roadblocks and deliver flawless solutions while you barely lift a finger.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section">
        <div className="two-col">
          <div className="approach-texts">
            <p className="body-large rv">
              This streamlined, zero-friction model guarantees that what you picture in your head is exactly what gets delivered.
            </p>
            <p className="body-large rv" style={{marginTop:"1.5rem"}}>
              We provide a direct line from your{" "}
              <strong>mind to the market, acting as the ultimate interpreters for your brand</strong>
              . You don't have to over-explain; you just tell us what you are thinking, and we give it structure, visual identity, and life.
            </p>
            <p className="body-large rv" style={{marginTop:"1.5rem"}}>
              Let our creative intuition become your definitive advantage.
            </p>
          </div>
          <div className="video-frame rv">
            <video src="/media/UzV0LXfr8BwVii9AICZtT3UAG4c.webm"
              autoPlay loop muted playsInline className="fill-video" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section" id="contact">
        <div className="cta-inner">
          <div className="eyebrow rv">READY TO START?</div>
          <h2 className="display-title rv">
            LET'S BUILD SOMETHING<br/>
            <span className="grad-text">EXTRAORDINARY.</span>
          </h2>
          <a href="mailto:hello@thecreativepanacea.com" className="btn-red btn-big rv">
            SCHEDULE A CALL ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/images/wdr-logo-transparent.png" alt="WDR" className="footer-logo" />
            <span className="footer-name">THE CREATIVE PANACEA</span>
          </div>
          <div className="footer-links">
            {["Home","About","Work","Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
            ))}
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} The Creative Panacea. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
