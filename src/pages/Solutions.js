import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import servicesFallback from "../data/services";
import { useManagedContent } from "../data/managedContent";
import "./Solutions.css";

function Solutions() {
  const { items: services } = useManagedContent(
    "siteContent/solutions",
    servicesFallback
  );

  return (
    <div className="solutions-page">

      {/* HERO */}

      <section className="solutions-hero">
        <div className="container">

          <span>OUR SOLUTIONS</span>

          <h1>
            Integrated Technology
            <br />
            Solutions for Your Business
          </h1>

          <p>
            From security and surveillance to networking, communication and
            smart technology, JEPL delivers complete end-to-end solutions.
          </p>

        </div>
      </section>

      {/* SERVICES */}

      <section className="solutions-section">

        <div className="container">

          <div className="solutions-heading">

            <span>WHAT WE DO</span>

            <h2>Technology Solutions</h2>

            <p>
              Explore our complete range of security, communication and
              technology integration services.
            </p>

          </div>

          <div className="solutions-grid">

            {services.map((service) => (

              <div className="solution-card" key={service.slug}>

                <div
                  className="solution-image"
                  style={{
                    backgroundImage: `url(${service.image})`
                  }}
                />

                <div className="solution-content">

                  <h3>{service.title}</h3>

                  <p>{service.shortDescription}</p>

                  <Link
                    to={`/solutions/${service.slug}`}
                    className="solution-link"
                  >
                    Explore Solution
                    <ArrowRight size={17} />
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="solutions-cta">

        <div className="container">

          <h2>Not Sure Which Solution You Need?</h2>

          <p>
            Our engineering team can understand your requirement and
            recommend the right technology solution.
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

export default Solutions;