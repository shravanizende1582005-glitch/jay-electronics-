import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Settings,
  Headphones,
  Store,
  Home as HomeIcon,
  Network,
  LockKeyhole,
  Camera,
  Radio,
  Zap,
  Activity,
  ScanLine,
  Wifi,
  Server,
  Fingerprint,
} from "lucide-react";

import servicesFallback from "../data/services";
import { useManagedContent } from "../data/managedContent";

import "./Home.css";

function Home() {
  const { items: services } = useManagedContent(
    "siteContent/solutions",
    servicesFallback
  );

  /* =========================================================
     INDUSTRIES
     ========================================================= */

  const industries = [
    {
      name: "Retail & Shops",
      description:
        "CCTV, networking and security solutions for shops and retail businesses.",
      icon: Store,
    },
    {
      name: "Commercial Offices",
      description:
        "Complete security and connectivity solutions for offices and commercial spaces.",
      icon: Building2,
    },
    {
      name: "Residential Societies",
      description:
        "Smart surveillance, access control and communication solutions for societies.",
      icon: HomeIcon,
    },
  ];

  /* =========================================================
     TECHNOLOGY PARTNERS
     ========================================================= */

  const brands = [
    {
      name: "CP PLUS",
      logo: "https://www.google.com/s2/favicons?domain=cpplusworld.com&sz=128",
    },
    {
      name: "DAHUA",
      logo: "https://cdn.simpleicons.org/dahuatechnology",
    },
    {
      name: "HIKVISION",
      logo: "https://cdn.simpleicons.org/hikvision",
    },
    {
      name: "TP-LINK",
      logo: "https://cdn.simpleicons.org/tplink",
    },
    {
      name: "CISCO",
      logo: "https://cdn.simpleicons.org/cisco",
    },
    {
      name: "NETGEAR",
      logo: "https://cdn.simpleicons.org/netgear",
    },
    {
      name: "DELL",
      logo: "https://cdn.simpleicons.org/dell",
    },
    {
      name: "HONEYWELL",
      logo: "https://cdn.simpleicons.org/honeywell",
    },
    {
      name: "BOSCH",
      logo: "https://cdn.simpleicons.org/bosch",
    },
    {
      name: "MATRIX",
      logo: "https://cdn.simpleicons.org/matrix",
    },
  ];

  const marqueeBrands = [...brands, ...brands];

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hero-section">

        {/* DIGITAL BACKGROUND */}

        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        {/* HERO CONTENT */}

        <div className="container hero-container">

          <div className="hero-content">

            <div className="hero-tag">
              <span className="hero-tag-dot"></span>
              35+ YEARS OF ENGINEERING EXCELLENCE
            </div>

            <h1>
              Security.
              <br />

              <span className="hero-gradient-text">
                Connectivity.
              </span>

              <br />

              <strong>Intelligence.</strong>
            </h1>

            <p className="hero-main-description">
              JAY ELECTRONICS PRIVATE LIMITED delivers integrated
              security, networking, communication and smart technology
              solutions designed for modern businesses.
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="primary-btn hero-primary-btn"
              >
                Get Free Site Survey
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="hero-outline-btn"
              >
                Request Quotation
              </Link>

            </div>

            <div className="hero-trust">

              <span>
                <CheckCircle2 size={16} />
                Qualified Engineers
              </span>

              <span>
                <CheckCircle2 size={16} />
                Turnkey Execution
              </span>

              <span>
                <CheckCircle2 size={16} />
                PAN Maharashtra Support
              </span>

            </div>

          </div>

          {/* =====================================================
              HERO TECHNOLOGY VISUAL
          ===================================================== */}

          <div className="hero-tech-visual">

            <div className="tech-circle tech-circle-one"></div>
            <div className="tech-circle tech-circle-two"></div>

            {/* CENTER CORE */}

            <div className="security-core">

              <div className="core-ring"></div>

              <div className="core-inner">
                <ShieldCheck size={56} />
              </div>

              <div className="core-scan"></div>

            </div>

            {/* FLOATING CARD 1 */}

            <div className="floating-tech-card card-camera">

              <div className="floating-icon">
                <Camera size={20} />
              </div>

              <div>
                <strong>SMART CCTV</strong>
                <span>24/7 Surveillance</span>
              </div>

              <div className="status-dot"></div>

            </div>

            {/* FLOATING CARD 2 */}

            <div className="floating-tech-card card-network">

              <div className="floating-icon">
                <Network size={20} />
              </div>

              <div>
                <strong>NETWORK</strong>
                <span>Secure Connectivity</span>
              </div>

              <div className="status-dot"></div>

            </div>

            {/* FLOATING CARD 3 */}

            <div className="floating-tech-card card-access">

              <div className="floating-icon">
                <Fingerprint size={20} />
              </div>

              <div>
                <strong>ACCESS CONTROL</strong>
                <span>Smart Protection</span>
              </div>

            </div>

            {/* FLOATING CARD 4 */}

            <div className="floating-tech-card card-system">

              <div className="floating-icon">
                <Activity size={20} />
              </div>

              <div>
                <strong>SYSTEM STATUS</strong>
                <span>All Systems Active</span>
              </div>

              <div className="system-bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

            </div>

            {/* SMALL ICONS */}

            <div className="mini-tech mini-one">
              <Wifi size={17} />
            </div>

            <div className="mini-tech mini-two">
              <LockKeyhole size={17} />
            </div>

            <div className="mini-tech mini-three">
              <Server size={17} />
            </div>

            <div className="mini-tech mini-four">
              <Zap size={17} />
            </div>

          </div>

        </div>

        {/* HERO BOTTOM BAR */}

        <div className="hero-bottom-bar">

          <div className="hero-bottom-item">
            <ScanLine size={17} />
            <span>SECURITY INTEGRATION</span>
          </div>

          <div className="hero-bottom-line"></div>

          <div className="hero-bottom-item">
            <Network size={17} />
            <span>NETWORK INFRASTRUCTURE</span>
          </div>

          <div className="hero-bottom-line"></div>

          <div className="hero-bottom-item">
            <Radio size={17} />
            <span>SMART COMMUNICATION</span>
          </div>

        </div>

      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="intro-section">

        <div className="container">

          <div className="intro-grid">

            <div>

              <span className="section-label">
                WHO WE ARE
              </span>

              <h2>
                Technology That Protects.
                <br />
                Infrastructure That Connects.
              </h2>

              <p>
                For more than three decades, JAY ELECTRONICS
                PRIVATE LIMITED has been delivering innovative
                technology solutions that help businesses,
                industries, educational institutions, hospitals,
                government organizations and residential
                customers improve security, communication and
                operational efficiency.
              </p>

              <p>
                With successful installations and an experienced
                engineering team, we provide complete turnkey
                solutions — from consultation and design to
                installation, commissioning, training and
                annual maintenance.
              </p>

              <Link
                to="/about"
                className="text-link"
              >
                Discover Our Story
                <ArrowRight size={17} />
              </Link>

            </div>

            <div className="intro-visual">

              <div className="experience-box">

                <strong>35+</strong>

                <span>
                  Years of Excellence
                </span>

              </div>

              <div className="intro-image-box">

                <div className="image-pattern"></div>

                <div className="visual-network-lines"></div>

                <div className="visual-content">

                  <ShieldCheck size={60} />

                  <h3>
                    Integrated
                    <br />
                    Technology Solutions
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="services-section section-padding">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              OUR SOLUTIONS
            </span>

            <h2>
              Complete Technology
              <br />
              Solutions Under One Roof
            </h2>

            <p>
              From electronic security to networking,
              communication and smart technology integration,
              we provide end-to-end solutions designed around
              your requirements.
            </p>

          </div>

          <div className="services-grid">

            {services.map((service) => (

              <div
                className="service-card"
                key={service.slug}
              >

                <div
                  className="service-image"
                  style={{
                    backgroundImage:
                      `url(${service.image})`,
                  }}
                >

                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>

                </div>

                <div className="service-card-body">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <Link
                    to={`/solutions/${service.slug}`}
                    className="service-link"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>

            ))}

          </div>

          <div className="center-button">

            <Link
              to="/solutions"
              className="primary-btn dark-btn"
            >
              Explore All Solutions
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <section className="industries-section section-padding">

        <div className="container">

          <div className="section-heading light-heading">

            <span className="section-label">
              INDUSTRIES WE SERVE
            </span>

            <h2>
              Security Solutions
              <br />
              For Every Business
            </h2>

            <p>
              Practical security and connectivity solutions
              designed for local businesses, offices and
              residential communities.
            </p>

          </div>

          <div className="industries-grid">

            {industries.map((industry, index) => {

              const IndustryIcon = industry.icon;

              return (

                <div
                  className="industry-item"
                  key={index}
                >

                  <div className="industry-icon-box">
                    <IndustryIcon size={28} />
                  </div>

                  <div className="industry-content">

                    <h3>
                      {industry.name}
                    </h3>

                    <p>
                      {industry.description}
                    </p>

                  </div>

                  <ArrowRight
                    className="industry-arrow"
                    size={19}
                  />

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY CHOOSE JEPL
      ========================================================= */}

      <section className="why-section section-padding">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              WHY CHOOSE JEPL
            </span>

            <h2>
              Experience. Expertise.
              <br />
              Excellence.
            </h2>

          </div>

          <div className="why-grid">

            <div className="why-item">
              <ShieldCheck />

              <h3>
                35+ Years Experience
              </h3>

              <p>
                Decades of experience delivering reliable
                technology and security solutions.
              </p>
            </div>

            <div className="why-item">
              <Settings />

              <h3>
                Turnkey Execution
              </h3>

              <p>
                Complete project execution from consultation
                and design to installation and commissioning.
              </p>
            </div>

            <div className="why-item">
              <Headphones />

              <h3>
                Professional Support
              </h3>

              <p>
                Dedicated after-sales service and AMC support
                for long-term system reliability.
              </p>
            </div>

            <div className="why-item">
              <CheckCircle2 />

              <h3>
                Trusted Technology
              </h3>

              <p>
                Solutions based on established technology
                partners and quality products.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="stats-section">

        <div className="container">

          <div className="stats-grid">
            <div className="stats-track">
              <div className="stats-group">
                <div className="stat">
                  <strong>35+</strong>
                  <span>Years of Excellence</span>
                </div>

                <div className="stat">
                  <strong>1000+</strong>
                  <span>Projects Completed</span>
                </div>

                <div className="stat">
                  <strong>500+</strong>
                  <span>Happy Clients</span>
                </div>

                <div className="stat">
                  <strong>50+</strong>
                  <span>Government Projects</span>
                </div>

                <div className="stat">
                  <strong>100+</strong>
                  <span>Corporate Customers</span>
                </div>
              </div>

              <div className="stats-group stats-group-duplicate" aria-hidden="true">
                <div className="stat">
                  <strong>35+</strong>
                  <span>Years of Excellence</span>
                </div>

                <div className="stat">
                  <strong>1000+</strong>
                  <span>Projects Completed</span>
                </div>

                <div className="stat">
                  <strong>500+</strong>
                  <span>Happy Clients</span>
                </div>

                <div className="stat">
                  <strong>50+</strong>
                  <span>Government Projects</span>
                </div>

                <div className="stat">
                  <strong>100+</strong>
                  <span>Corporate Customers</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================
          BRANDS
      ========================================================= */}

      <section className="brands-section section-padding">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              TECHNOLOGY PARTNERS
            </span>

            <h2>
              Trusted Brands.
              <br />
              Reliable Solutions.
            </h2>

            <p>
              We work with established technology brands to
              deliver dependable security, networking and
              communication solutions.
            </p>

          </div>

        </div>

        <div className="brand-marquee">

          <div className="brand-marquee-track">

            {marqueeBrands.map((brand, index) => (

              <div
                className="brand-box"
                key={`${brand.name}-${index}`}
              >

                <div className="brand-logo-wrapper">

                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="brand-logo"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.classList.add(
                        "logo-fallback"
                      );
                    }}
                  />

                  <span className="brand-name-fallback">
                    {brand.name}
                  </span>

                </div>

                <span className="brand-name">
                  {brand.name}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="home-cta">

        <div className="container">

          <div className="cta-content">

            <div>

              <span>
                READY TO GET STARTED?
              </span>

              <h2>
                Need a reliable technology partner?
              </h2>

              <p>
                Talk to our team today and discover
                the right solution for your organization.
              </p>

            </div>

            <Link
              to="/contact"
              className="cta-button"
            >
              Contact JEPL
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;