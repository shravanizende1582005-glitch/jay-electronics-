import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  ClipboardCheck,
  PenTool,
  Wrench,
  TestTube,
  GraduationCap,
  ShieldCheck
} from "lucide-react";

import servicesFallback from "../data/services";
import { useManagedContent } from "../data/managedContent";
import "./ServiceDetails.css";

function ServiceDetails() {
  const { slug } = useParams();
  const { items: services } = useManagedContent(
    "siteContent/solutions",
    servicesFallback
  );

  const service = services.find((item) => item.slug === slug);

  const [openFaq, setOpenFaq] = useState(null);

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>
        <p>The requested solution could not be found.</p>
        <Link to="/solutions">Back to Solutions</Link>
      </div>
    );
  }

  document.title = `${service.title} | JAY ELECTRONICS PRIVATE LIMITED`;

  const process = [
    {
      icon: <ClipboardCheck />,
      title: "Site Survey",
      text: "Our engineers understand your site and requirements."
    },
    {
      icon: <PenTool />,
      title: "System Design",
      text: "We prepare a solution according to your requirements."
    },
    {
      icon: <ArrowRight />,
      title: "Proposal",
      text: "A detailed technical and commercial proposal is prepared."
    },
    {
      icon: <Wrench />,
      title: "Installation",
      text: "Our technical team executes the installation professionally."
    },
    {
      icon: <TestTube />,
      title: "Testing",
      text: "The complete system is tested and commissioned."
    },
    {
      icon: <GraduationCap />,
      title: "Training",
      text: "Users are trained to operate the installed system."
    }
  ];

  return (
    <div className="service-details">

      {/* HERO */}

      <section
        className="service-hero"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="service-hero-overlay">
          <div className="container">

            <span className="service-breadcrumb">
              Home / Solutions / {service.title}
            </span>

            <h1>{service.title}</h1>

            <p>{service.shortDescription}</p>

            <Link to="/contact" className="service-main-btn">
              Request a Quote
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="service-intro">
        <div className="container service-two-column">

          <div>
            <span className="section-label">OUR SOLUTION</span>

            <h2>
              Professional {service.title} Solutions
            </h2>

            <p>{service.intro}</p>

            <p>
              From initial consultation and system design to installation,
              commissioning and maintenance, JEPL provides complete
              technology integration support.
            </p>
          </div>

          <div className="service-trust-box">
            <ShieldCheck size={42} />

            <h3>Complete Technology Integration</h3>

            <p>
              Professional engineering, quality products and reliable
              after-sales support.
            </p>

            <Link to="/contact">
              Talk to Our Experts <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="service-section light-bg">
        <div className="container">

          <div className="section-heading">
            <span>KEY FEATURES</span>
            <h2>What Our Solution Includes</h2>
          </div>

          <div className="feature-grid">
            {service.features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <CheckCircle2 size={21} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BENEFITS */}

      <section className="service-section">
        <div className="container">

          <div className="section-heading">
            <span>BENEFITS</span>
            <h2>Why Choose This Solution?</h2>
          </div>

          <div className="benefit-grid">
            {service.benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{benefit}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="service-section light-bg">
        <div className="container">

          <div className="section-heading">
            <span>INDUSTRIES</span>
            <h2>Where We Provide Solutions</h2>
          </div>

          <div className="industry-tags">
            {service.industries.map((industry, index) => (
              <div className="industry-tag" key={index}>
                <CheckCircle2 size={18} />
                {industry}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}

      <section className="service-section">
        <div className="container">

          <div className="section-heading">
            <span>OUR PROCESS</span>
            <h2>From Survey to Support</h2>
            <p>
              Our structured process ensures quality execution at every stage.
            </p>
          </div>

          <div className="process-grid">

            {process.map((item, index) => (
              <div className="process-card" key={index}>

                <div className="process-icon">
                  {item.icon}
                </div>

                <div className="process-number">
                  0{index + 1}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PRODUCTS */}

      <section className="service-section light-bg">
        <div className="container">

          <div className="section-heading">
            <span>PRODUCTS & TECHNOLOGY</span>
            <h2>Technology We Work With</h2>
          </div>

          <div className="product-list">

            {service.products.map((product, index) => (
              <div className="product-pill" key={index}>
                <CheckCircle2 size={18} />
                {product}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="service-section">
        <div className="container faq-container">

          <div className="section-heading">
            <span>FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">

            {service.faqs.map((faq, index) => (

              <div
                className={`faq-item ${
                  openFaq === index ? "active" : ""
                }`}
                key={index}
              >

                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>

                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="service-cta">

        <div className="container">

          <div className="service-cta-content">

            <div>
              <span>READY TO GET STARTED?</span>

              <h2>
                Need a reliable {service.title} solution?
              </h2>

              <p>
                Contact JEPL for a site survey and customized proposal.
              </p>
            </div>

            <div className="service-cta-buttons">

              <Link to="/contact" className="cta-primary">
                Request Quote
                <ArrowRight size={18} />
              </Link>

              <a href="tel:+919999999999" className="cta-secondary">
                <Phone size={18} />
                Call Now
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ServiceDetails;