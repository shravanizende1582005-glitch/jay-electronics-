import React, { useState } from "react";
import { ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import brands from "../data/brands";
import "./Brands.css";

function Brands() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Security & Surveillance",
    "Networking",
    "IT Infrastructure",
    "Security & Safety",
    "Access & Communication"
  ];

  const filteredBrands =
    activeCategory === "All"
      ? brands
      : brands.filter(
          (brand) => brand.category === activeCategory
        );

  return (
    <div className="brands-page">

      {/* HERO */}

      <section className="brands-hero">

        <div className="container">

          <span>TECHNOLOGY PARTNERS</span>

          <h1>
            Trusted Technology.
            <br />
            Professional Integration.
          </h1>

          <p>
            JEPL works with established technology brands to
            deliver reliable security, networking, communication
            and infrastructure solutions.
          </p>

        </div>

      </section>

      {/* INTRO */}

      <section className="brands-intro">

        <div className="container">

          <div className="brands-intro-grid">

            <div>

              <span>OUR TECHNOLOGY ECOSYSTEM</span>

              <h2>
                Quality Technology From
                Trusted Manufacturers
              </h2>

            </div>

            <p>
              We select technology according to project
              requirements, site conditions, performance
              expectations and long-term reliability.
            </p>

          </div>

        </div>

      </section>

      {/* BRAND FILTER */}

      <section className="brands-section">

        <div className="container">

          <div className="brand-filters">

            {categories.map((category) => (

              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>

          {/* BRAND GRID */}

          <div className="brands-grid">

            {filteredBrands.map((brand) => (

              <div
                className="brand-card"
                key={brand.name}
              >

                <div className="brand-logo-box">

                  <ShieldCheck size={34} />

                  <h3>{brand.name}</h3>

                </div>

                <div className="brand-card-content">

                  <span>{brand.category}</span>

                  <p>{brand.description}</p>

                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noreferrer"
                    className="brand-link"
                  >
                    Visit Manufacturer
                    <ExternalLink size={15} />
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY BRANDS */}

      <section className="brand-trust">

        <div className="container">

          <div className="brand-trust-content">

            <div className="brand-trust-icon">
              <ShieldCheck size={42} />
            </div>

            <div>

              <span>OUR APPROACH</span>

              <h2>
                Technology Selection Based
                on Your Requirement
              </h2>

              <p>
                Our engineering team evaluates the project
                requirements before recommending suitable
                technology and system architecture.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="brands-cta">

        <div className="container">

          <h2>
            Need Help Selecting the Right Technology?
          </h2>

          <p>
            Talk to our team about your security,
            networking or communication requirements.
          </p>

          <Link to="/contact">
            Talk to Our Experts
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Brands;