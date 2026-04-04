import { useEffect, useRef, useState } from "react";
import "./App.css";

const patrons = [
  "RIGI", "WATERFIELD", "ZERODHA", "multipl", "CRED", "Quizizz",
  "uni·", "OKAYA", "ZERV", "Green Soul", "trupeer", "durex",
  "moj", "ESTÉE LAUDER", "urban kisaan", "The Ordinary.", "atlan",
];

const ecosystemCards = [
  {
    label: "WDR VIDEOS",
    heading: "We Build Videos",
    desc: "An AI-native content studio built for the future. We produce over 700 videos a month — ad films, AI films, animated videos, CGI/VFX, and digital content — using in-house studios, cutting-edge AI tools that compress timelines without compromising craft.",
    bg: "linear-gradient(135deg, #8B0000 0%, #cf1134 50%, #ff4500 100%)",
    href: "#videos",
  },
  {
    label: "WDR DESIGNS",
    heading: "We Build Campaigns",
    desc: "Marketing Campaigns, Influencer partnerships, bold outdoor moments, and hands-on social media management, all working together to keep your brand relevant every day.",
    bg: "linear-gradient(135deg, #2a0080 0%, #5329e6 50%, #7b52ff 100%)",
    href: "#designs",
  },
  {
    label: "WDR YOUTUBE",
    heading: "We Build IPs & Distribution",
    desc: "We create digital IPs like Podcasts, YT channels, IG Creator / Community Pages.",
    bg: "linear-gradient(135deg, #7a3500 0%, #ff8819 50%, #f4bd45 100%)",
    href: "#youtube",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="wdr-root">
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <a href="#" className="navbar-brand">
          <img src="/images/wdr-logo.png" alt="WDR Logo" className="navbar-logo" />
          <span className="navbar-name">THE CREATIVE PANACEA</span>
        </a>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <a href="#contact" className="btn-schedule">SCHEDULE A CALL</a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-video-wrap">
          <video
            ref={videoRef}
            src="/media/Iycx9u2R769lOoLLgJ6dU9rG4.webm"
            loop
            muted
            playsInline
            preload="auto"
            className="hero-video"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <div className="hero-tagline reveal">BUILDING CREATIVE TRUST</div>
          <h1 className="hero-headline reveal">
            WE THINK IN<br />
            <span className="hero-accent">INSIGHT<span className="dot">.</span></span>
          </h1>
          <div className="hero-sub reveal">WE ORGANISE THE THOUGHTS</div>
          <a href="#about" className="btn-explore reveal">EXPLORE OUR SOLUTIONS ↗</a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-left reveal">
            <p className="about-body">
              <strong>WHITE DRUNK RABBIT</strong> is a creative concierce service that replaces agency headaches with tailored solutions and frictionless management. We take your raw preferences and do the complex thinking for you, delivering polished results across integrated campaigns, digital strategy, and high-impact content.
            </p>
            <p className="about-body">
              If you want to focus on your vision while we handle the chaos, you've come to the right place.
            </p>
          </div>
          <div className="about-right reveal">
            <p className="about-right-text">
              As a dedicated{" "}
              <span className="highlight">creative concierge service in the digital space</span>
              , White Drunk Rabbit operates with the agility of a specialized task force and the polished delivery of a premium luxury service.
            </p>
            <p className="about-right-text">
              Our tight-knit collective of{" "}
              <span className="highlight">problem-solvers, strategists, designers, and creators</span>{" "}
              is united by a single, uncompromising goal: to diagnose your creative roadblocks and deliver flawless solutions while you barely lift a finger.
            </p>
          </div>
        </div>
      </section>

      {/* ── PATRONS ── */}
      <section className="patrons" id="work">
        <div className="patrons-label reveal">OUR PATRONS</div>
        <div className="patrons-title reveal">
          TRUSTED BY BRANDS THAT{" "}
          <span className="patrons-title-accent">SHAPE THE WORLD</span>
        </div>
        <div className="patrons-ticker">
          <div className="patrons-track">
            {[...patrons, ...patrons].map((name, i) => (
              <div key={i} className="patron-item">{name}</div>
            ))}
          </div>
        </div>
        <div className="patrons-ticker patrons-ticker-reverse">
          <div className="patrons-track patrons-track-reverse">
            {[...patrons, ...patrons].reverse().map((name, i) => (
              <div key={i} className="patron-item">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM / WHAT WE BUILD ── */}
      <section className="ecosystem" id="videos">
        <div className="eco-label reveal">ECOSYSTEM</div>
        <h2 className="eco-title reveal">
          WHAT WE <span className="eco-accent">BUILD</span>
        </h2>
        <p className="eco-desc reveal">
          Our structure is designed for specialized excellence across the modern marketing stack. We build three things every ambitious brand needs to win today:
        </p>
        <div className="cards-grid">
          {ecosystemCards.map((card) => (
            <div key={card.label} className="card reveal">
              <div className="card-thumb" style={{ background: card.bg }}>
                <span className="card-thumb-text">{card.label}</span>
              </div>
              <div className="card-body">
                <h3 className="card-heading">{card.heading}</h3>
                <p className="card-desc">{card.desc}</p>
                <a href={card.href} className="card-link">Learn More ↗</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SCALE ── */}
      <section className="scale" id="about">
        <div className="scale-inner">
          <div className="scale-video-wrap reveal">
            <video
              src="/media/sLExNztbxBz0iQXzKiG4WAPki0E.webm"
              autoPlay
              loop
              muted
              playsInline
              className="scale-video"
            />
          </div>
          <div className="scale-content">
            <div className="scale-label reveal">ENGINEERED FOR ZERO-FRICTION EXECUTION</div>
            <h2 className="scale-title reveal">
              BUILT IN-HOUSE FOR<br />
              <span className="scale-accent">END-TO-END</span> EXCELLENCE.
            </h2>
            <div className="scale-texts">
              <p className="scale-text reveal">
                As a dedicated{" "}
                <span className="scale-hl">creative concierge service in the digital space</span>
                , White Drunk Rabbit operates with the agility of a specialized task force and the polished delivery of a premium luxury service.
              </p>
              <p className="scale-text reveal">
                Our tight-knit collective of{" "}
                <span className="scale-hl">problem-solvers, strategists, designers, and creators</span>{" "}
                is united by a single, uncompromising goal: to diagnose your creative roadblocks and deliver flawless solutions while you barely lift a finger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="approach">
        <div className="approach-inner">
          <div className="approach-video-wrap reveal">
            <video
              src="/media/UzV0LXfr8BwVii9AICZtT3UAG4c.webm"
              autoPlay
              loop
              muted
              playsInline
              className="approach-video"
            />
          </div>
          <div className="approach-text-wrap">
            <p className="approach-text reveal">
              This streamlined, zero-friction model guarantees that what you picture in your head is exactly what gets delivered.
            </p>
            <p className="approach-text reveal">
              We provide a direct line from your{" "}
              <strong>mind to the market, acting as the ultimate interpreters for your brand</strong>
              . You don't have to over-explain; you just tell us what you are thinking, and we give it structure, visual identity, and life.
            </p>
            <p className="approach-text reveal">
              Let our creative intuition become your definitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section className="cta" id="contact">
        <div className="cta-inner reveal">
          <div className="cta-eyebrow">READY TO START?</div>
          <h2 className="cta-title">
            LET'S BUILD SOMETHING<br />
            <span className="cta-accent">EXTRAORDINARY.</span>
          </h2>
          <a href="mailto:hello@thecreativepanacea.com" className="btn-cta">
            SCHEDULE A CALL ↗
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/images/wdr-logo.png" alt="WDR Logo" className="footer-logo" />
            <span className="footer-name">THE CREATIVE PANACEA</span>
          </div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} The Creative Panacea. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
