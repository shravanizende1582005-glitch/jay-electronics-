import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  ShieldCheck,
  Settings2,
  Network,
  Camera,
  ArrowRight,
} from "lucide-react";

import "./CompanyProfile.css";

const companyMetrics = [
  { value: "35+", label: "Years of experience" },
  { value: "1,000+", label: "Projects completed" },
  { value: "100+", label: "Corporate customers" },
];

const capabilities = [
  {
    icon: Camera,
    number: "01",
    title: "Electronic security",
    description: "CCTV, surveillance, access control and fire safety systems planned around each site.",
  },
  {
    icon: Network,
    number: "02",
    title: "Networks & connectivity",
    description: "Structured networking and communications infrastructure for dependable operations.",
  },
  {
    icon: Building2,
    number: "03",
    title: "Integrated environments",
    description: "Audio visual, LED display and smart technology integrated into one coordinated solution.",
  },
  {
    icon: Settings2,
    number: "04",
    title: "Lifecycle support",
    description: "Consultation, installation, commissioning, training and ongoing technical support.",
  },
];

function CompanyProfile() {
  return (
    <div className="company-profile-page">
      <section className="company-profile-hero">
        <img
          className="company-profile-hero-image"
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85"
          alt="Network infrastructure in a modern technology environment"
        />
        <div className="container company-profile-hero-inner">
          <div className="company-profile-hero-copy">
            <span className="company-profile-kicker">ABOUT THE COMPANY · EST. 1989</span>
            <h1>
              JAY
              <span>ELECTRONICS</span>
            </h1>
            <p>
              Engineering connected, secure and dependable environments for
              businesses across Maharashtra.
            </p>
            <div className="company-profile-hero-actions">
              <span>Company profile</span>
              <Link to="/contact" aria-label="Talk to the JEPL team">
                Talk to our team <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="company-profile-hero-index" aria-hidden="true">
            <span>JEPL</span>
            <span>TECHNOLOGY<br />INTEGRATION</span>
            <span>01 / 04</span>
          </div>
        </div>
      </section>

      <section className="company-profile-metrics" aria-label="Company at a glance">
        <div className="container company-profile-metrics-inner">
          {companyMetrics.map((metric) => (
            <div className="company-profile-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
          <div className="company-profile-metric-location">
            <ShieldCheck size={20} />
            <span>Serving government, industry<br />and enterprise</span>
          </div>
        </div>

      </section>
      <section className="company-profile-story">
        <div className="container company-profile-story-grid">
          <figure className="company-profile-story-image">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
              alt="Precision technology components used in connected systems"
              loading="lazy"
            />
            <figcaption>
              <span>From specification to support</span>
              <span>One accountable team</span>
            </figcaption>
          </figure>
          <div className="company-profile-story-copy">
            <span className="company-profile-section-label">WHO WE ARE</span>
            <h2>One partner for the systems that keep work moving.</h2>
            <p>
              Established in 1989, JAY ELECTRONICS PRIVATE LIMITED has grown
              into a technology integration company serving organizations
              across Maharashtra.
            </p>
            <p>
              We bring electronic security, networking, communication and
              smart technology together, with a practical approach that
              starts with understanding the site and continues well beyond
              installation.
            </p>
            <Link className="company-profile-story-link" to="/about/our-story">
              Discover our story <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="company-profile-capabilities">
        <div className="container">
          <div className="company-profile-section-heading">
            <div>
              <span className="company-profile-section-label">WHAT WE DO</span>
              <h2>Technology built around real-world needs.</h2>
            </div>
            <p>
              We coordinate the right systems, people and support for each
              environment, from the first site visit to ongoing service.
            </p>
          </div>
          <div className="company-profile-capability-grid">
            {capabilities.map(({ icon: Icon, number, title, description }) => (
              <article className="company-profile-capability" key={number}>
                <div className="company-profile-capability-top">
                  <Icon size={24} strokeWidth={1.8} />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-profile-method">
        <div className="container company-profile-method-inner">
          <div>
            <span className="company-profile-section-label">HOW WE WORK</span>
            <h2>Careful at every stage.</h2>
          </div>
          <ol>
            <li><span>01</span>Understand the site</li>
            <li><span>02</span>Design the solution</li>
            <li><span>03</span>Install and commission</li>
            <li><span>04</span>Support what we build</li>
          </ol>
        </div>
      </section>

      <section className="company-profile-contact">
        <div className="container company-profile-contact-inner">
          <div>
            <span>LET'S BUILD SOMETHING THAT LASTS</span>
            <h2>Tell us what your site needs.</h2>
          </div>
          <Link to="/contact">
            Talk to JEPL <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}

export default CompanyProfile;