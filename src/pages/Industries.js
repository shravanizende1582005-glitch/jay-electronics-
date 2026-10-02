import React from "react";
import { Building2, Factory, Hospital, GraduationCap, Landmark, Hotel, Warehouse, Home, ShoppingBag, Tractor } from "lucide-react";
import "./InnerPage.css";

const industries = [
  {
    title: "Government",
    icon: <Landmark size={32} />,
    description:
      "Integrated security, surveillance and networking solutions for government departments and public organizations."
  },
  {
    title: "Police & Security",
    icon: <Building2 size={32} />,
    description:
      "Advanced CCTV surveillance, control rooms and security systems for police and security organizations."
  },
  {
    title: "Hospitals",
    icon: <Hospital size={32} />,
    description:
      "Reliable security, communication and access control solutions for hospitals and healthcare facilities."
  },
  {
    title: "Factories & Industries",
    icon: <Factory size={32} />,
    description:
      "Industrial surveillance, networking, access control and safety solutions for manufacturing facilities."
  },
  {
    title: "Schools & Colleges",
    icon: <GraduationCap size={32} />,
    description:
      "Complete security and communication infrastructure for educational institutions."
  },
  {
    title: "Banks & Financial Institutions",
    icon: <Landmark size={32} />,
    description:
      "Security surveillance, access control and monitoring systems for financial institutions."
  },
  {
    title: "Commercial Buildings",
    icon: <Building2 size={32} />,
    description:
      "Smart security, networking and communication solutions for offices and commercial properties."
  },
  {
    title: "Hotels",
    icon: <Hotel size={32} />,
    description:
      "Integrated CCTV, access control, networking and communication systems for hospitality businesses."
  },
  {
    title: "Warehouses",
    icon: <Warehouse size={32} />,
    description:
      "24×7 surveillance and security infrastructure for warehouses and logistics facilities."
  },
  {
    title: "Residential Societies",
    icon: <Home size={32} />,
    description:
      "CCTV, video door phone, access control and networking solutions for residential communities."
  },
  {
    title: "Retail Stores",
    icon: <ShoppingBag size={32} />,
    description:
      "Security and surveillance systems designed for retail stores, showrooms and shopping facilities."
  },
  {
    title: "Agriculture & Industrial Plants",
    icon: <Tractor size={32} />,
    description:
      "Remote surveillance and security solutions for agricultural and large industrial sites."
  }
];

function Industries() {
  return (
    <div className="inner-page">
      
      {/* Page Header */}
      <section className="inner-hero">
        <div className="container">
          <span className="hero-tag">INDUSTRIES WE SERVE</span>

          <h1>
            Technology Solutions for
            <span> Every Industry</span>
          </h1>

          <p>
            JEPL provides integrated security, networking, communication and
            technology solutions for organizations across Maharashtra.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="inner-section">
        <div className="container">
          <div className="section-heading">
            <span>OUR EXPERTISE</span>
            <h2>Solutions Designed Around Your Industry</h2>
            <p>
              Every industry has different security, communication and
              operational requirements. Our engineering team designs
              customized solutions according to the size, infrastructure and
              requirements of each customer.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="industry-grid">
            {industries.map((industry, index) => (
              <div className="industry-card" key={index}>
                <div className="industry-icon">
                  {industry.icon}
                </div>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <button className="industry-link">
                  Explore Solutions →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="inner-cta">
        <div className="container">
          <h2>Looking for a Solution for Your Industry?</h2>

          <p>
            Talk to our engineering team and get a customized technology
            solution for your organization.
          </p>

          <a href="/contact" className="cta-button">
            Request a Consultation
          </a>
        </div>
      </section>

    </div>
  );
}

export default Industries;