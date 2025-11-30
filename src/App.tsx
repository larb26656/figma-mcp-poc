import "./App.css";

const ASSETS = {
  heroGlow: "/assets/21077d203d3c27a5eb83754ed8e397895e5d387a.png",
  wwdc: "/assets/e36cabb7ba27416af750f220bdd479723349bd96.png",
  aiWordmark: "/assets/589921ab8b0232001768985b41d586926f94b384.png",
  aiIcons: [
    "/assets/76f22169bb44f543a09246fd78a320ced592ed60.png",
    "/assets/c098ab4e55245b21f3e093339fb942d60cd722dc.png",
    "/assets/2e6e5db82c0fd15f54415600de3356b07b460c2e.png",
    "/assets/0df6fa769d55a8b7de977ca3840508a8b403a286.png",
    "/assets/ba8dfa62d9e2c663975b9e0d568535c364c1d1d6.png",
  ],
  ios: {
    gaming: "/assets/d9bf4e84fdc54a9441654392c3d0cabf4ee7c7d8.png",
    messages: "/assets/804f76bd4529243c9e1d7f378af9973b6e5adb29.png",
    emoji: "/assets/74ede2a800c670ec8c15f85f46add116d37908ce.png",
    maps: "/assets/3118caf597ddffe02d3c7a73c228aeb8e124a9a1.png",
    homescreen: "/assets/9187d5c0bc88037f9af0fcf009a963c88c5c244c.png",
  },
  ipados: {
    top: "/assets/8e702a84df5b23dfdeee1e2a8a2b7591e74033fe.png",
    left: "/assets/00cda20baab0c87091666fb8cc46ef149286e083.png",
    bottom: "/assets/596f4adb56c8560c06e236fe84c6b4535e79fb00.png",
    right: "/assets/74856ec1d89204f4cc6266bc44a5ff4b6b42b65f.png",
  },
  macos: {
    left: "/assets/f255afa2a34d4cf6cbca752a0eeacba8d2ff7e62.png",
    middle: "/assets/d89ed1ece885d293c900b153e9cc98feb419cf4e.png",
    right: "/assets/8a288a816f9e9ce285c39ec78e5e6763a290d2b8.png",
  },
  watchos: [
    "/assets/4067a891b6813165d64db4b8e51509674d9c7a7a.png",
    "/assets/a9d1bd0d9539f03715b9a11ceb943381c5f764ea.png",
    "/assets/cc53733ab44def82aab34d12ab2771cb14d94f3e.png",
    "/assets/25e6832be62ed87582ef6b5dcb9e8bf86d914401.png",
    "/assets/cb1a830a3d2e67fced2c8b08de30596ca1f66db3.png",
  ],
  vision: "/assets/55ada835e88bbd81786d4c1d1178c53c39defc63.png",
} as const;

const FOOTER_COLUMNS = [
  {
    title: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    title: "Entertainment",
    links: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple News+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  {
    title: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Group Reservations",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Carrier Deals at Apple",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    title: "For Business",
    links: ["Apple and Business", "Shop for Business"],
    extra: {
      title: "For Education",
      links: [
        "Apple and Education",
        "Shop for K-12",
        "Shop for College",
      ],
    },
  },
  {
    title: "For Healthcare",
    links: [
      "Apple in Healthcare",
      "Mac in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone and iPad",
    ],
    extra: {
      title: "For Government",
      links: ["Shop for Government", "Shop for Veterans and Military"],
    },
  },
  {
    title: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supply Chain",
    ],
    extra: {
      title: "About Apple",
      links: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
  },
];

function Navigation() {
  const items = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <div className="nav">
      <div className="nav-content">
        <span className="nav-logo"></span>
        {items.map((item) => (
          <span key={item} className="nav-item">
            {item}
          </span>
        ))}
        <span className="nav-icon">🔍</span>
        <span className="nav-icon">🛍</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <Navigation />
      <div className="hero-content">
        <div className="hero-image">
          <img src={ASSETS.heroGlow} alt="Apple Intelligence logo glow" />
        </div>
        <div className="hero-text">
          <img src={ASSETS.wwdc} alt="WWDC24" className="hero-wwdc" />
          <div className="hero-wordmark">
            <img src={ASSETS.aiWordmark} alt="Apple Intelligence" />
          </div>
          <p className="hero-subtitle">
            Introducing Apple Intelligence, your personal intelligence system
            that is intuitive, powerful, and grounded in your privacy.
          </p>
          <div className="hero-badges">
            <span className="badge">Coming this fall</span>
            <span className="badge light">Available in beta in US English</span>
          </div>
          <div className="cta-group">
            <button className="cta primary">Learn more</button>
            <button className="cta ghost">View Apple Intelligence film</button>
          </div>
        </div>
      </div>
    </section>
  );
}

type Feature = { label: string; icon: string };

function FeatureRow({ features }: { features: Feature[] }) {
  return (
    <div className="feature-row">
      {features.map((feature) => (
        <div key={feature.label} className="feature">
          <div className="feature-icon">
            <img src={feature.icon} alt="" />
          </div>
          <span>{feature.label}</span>
        </div>
      ))}
    </div>
  );
}

function IOSSection() {
  const features: Feature[] = [
    { label: "Intuitive, adaptive UI", icon: ASSETS.aiIcons[0] },
    { label: "Unlocks creativity", icon: ASSETS.aiIcons[1] },
    { label: "Built with privacy", icon: ASSETS.aiIcons[2] },
    { label: "Context aware", icon: ASSETS.aiIcons[3] },
    { label: "Multimodal smarts", icon: ASSETS.aiIcons[4] },
  ];

  const phoneImages = [
    ASSETS.ios.gaming,
    ASSETS.ios.messages,
    ASSETS.ios.emoji,
    ASSETS.ios.maps,
    ASSETS.ios.homescreen,
  ];

  return (
    <section className="section ios">
      <div className="section-content">
        <FeatureRow features={features} />
        <div className="section-header">
          <h2 className="section-title ios-title">iOS 18</h2>
          <p className="section-subtitle">
            More magical, flexible, and personal than ever.
          </p>
          <div className="cta-group">
            <button className="cta secondary">Learn more</button>
            <button className="cta ghost">Watch the film</button>
          </div>
        </div>
        <div className="phone-grid">
          {phoneImages.map((src, index) => (
            <div key={src} className="phone">
              <img src={src} alt={`iPhone feature ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IPadSection() {
  return (
    <section className="section ipad">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title ipad-title">iPadOS 18</h2>
          <p className="section-subtitle">
            New features you&apos;ll love. Tried-and-true apps with a fresh feel.
          </p>
          <button className="cta secondary">Learn more</button>
        </div>
        <div className="ipad-grid">
          <img src={ASSETS.ipados.top} alt="iPadOS widget stack" />
          <div className="ipad-row">
            <img src={ASSETS.ipados.left} alt="iPadOS calculator" />
            <img src={ASSETS.ipados.bottom} alt="iPadOS handwriting" />
            <img src={ASSETS.ipados.right} alt="iPadOS mail" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MacSection() {
  return (
    <section className="section mac">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title mac-title">macOS Sequoia</h2>
          <p className="section-subtitle">
            Next-level power. Next-level productivity. Next-level fun.
          </p>
          <div className="cta-group">
            <button className="cta secondary">Learn more</button>
            <button className="cta ghost">Watch the film</button>
          </div>
        </div>
        <div className="mac-grid">
          <img src={ASSETS.macos.left} alt="macOS Sequoia left app" />
          <img src={ASSETS.macos.middle} alt="macOS Sequoia center apps" />
          <img src={ASSETS.macos.right} alt="macOS Sequoia gaming" />
        </div>
      </div>
    </section>
  );
}

function WatchSection() {
  return (
    <section className="section watch">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title watch-title">watchOS 11</h2>
          <p className="section-subtitle">
            A smartwatch powerhouse for your workouts, health, and motivation.
          </p>
          <button className="cta secondary">Learn more</button>
        </div>
        <div className="watch-row">
          {ASSETS.watchos.map((src, index) => (
            <img key={src} src={src} alt={`watchOS watch ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="section vision">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title vision-title">visionOS 2</h2>
          <p className="section-subtitle">
            Next-level spatial experiences that let you work, play, and connect
            with a whole new perspective.
          </p>
          <button className="cta secondary">Learn more</button>
        </div>
        <div className="vision-hero">
          <img src={ASSETS.vision} alt="visionOS 2 interface" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <p>
            Apple Intelligence is available in beta on iOS 18, iPadOS 18, and
            macOS Sequoia for U.S. English. Features are subject to change and
            may not be available in all regions, languages, or on all devices.
          </p>
        </div>
        <div className="footer-columns">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="footer-column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
              {column.extra && (
                <>
                  <h4>{column.extra.title}</h4>
                  <ul>
                    {column.extra.links.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>
            More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </p>
          <div className="legal">
            <span>Copyright © 2024 Apple Inc. All rights reserved.</span>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Sales and Refunds</span>
            <span>Legal</span>
            <span>Site Map</span>
          </div>
          <span className="locale">United States</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main>
      <Hero />
      <IOSSection />
      <IPadSection />
      <MacSection />
      <WatchSection />
      <VisionSection />
      <Footer />
    </main>
  );
}

export default App;
