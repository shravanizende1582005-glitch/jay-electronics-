
import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  History,
  Eye,
  ShieldCheck,
  UserRound,
  Users,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Wrench,
  Headphones,
} from "lucide-react";

import "./About.css";

const aboutSections = [
  {
    number: "01",
    title: "Company Profile",
    description:
      "Get to know JEPL, our experience, capabilities and the technology solutions we provide.",
    icon: Building2,
    link: "/about/company-profile",
  },
  {
    number: "02",
    title: "Our Story",
    description:
      "Take a look at our journey since 1989 and how we have grown with changing technology.",
    icon: History,
    link: "/about/our-story",
  },
  {
    number: "03",
    title: "Vision & Mission",
    description:
      "Understand what drives us and where we want to take JEPL in the future.",
    icon: Eye,
    link: "/about/vision-mission",
  },
  {
    number: "04",
    title: "Core Values",
    description:
      "The values that shape the way we work, serve customers and complete projects.",
    icon: ShieldCheck,
    link: "/about/core-values",
  },
  {
    number: "05",
    title: "Leadership",
    description:
      "Meet the people who guide JEPL and help us deliver reliable technology solutions.",
    icon: UserRound,
    link: "/about/leadership",
  },
  {
    number: "06",
    title: "Our Team",
    description:
      "Meet the engineers, technicians and support team behind our projects.",
    icon: Users,
    link: "/about/our-team",
  },
];

function About() {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>

        <div className="container about-hero-container">

          <div className="about-hero-content">

            <div className="about-small-badge">
              <span className="about-badge-dot"></span>
              ABOUT JAY ELECTRONICS
            </div>

            <h1>
              Technology You Can
              <span> Trust.</span>
            </h1>

            <p>
              From CCTV and networking to access control and communication
              systems, JEPL helps businesses stay secure, connected and
              ready for the future.
            </p>

            <div className="about-hero-buttons">

              <Link to="/about/company-profile" className="about-primary-btn">
                Know About JEPL
                <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="about-secondary-btn">
                Talk to Us
              </Link>

            </div>

          </div>

          {/* Hero floating card */}
          <div className="about-hero-card">

            <div className="hero-card-top">
              <div className="hero-card-icon">
                <ShieldCheck size={25} />
              </div>

              <div>
                <strong>Trusted Since</strong>
                <span>1989</span>
              </div>
            </div>

            <div className="hero-card-line"></div>

            <div className="hero-card-stats">

              <div>
                <strong>35+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>1000+</strong>
                <span>Projects</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= QUICK HIGHLIGHTS ================= */}
      <section className="about-highlights">

        <div className="container">

          <div className="highlight-grid">

            <div className="highlight-item">
              <div className="highlight-icon">
                <History size={22} />
              </div>

              <div>
                <strong>35+ Years</strong>
                <span>of experience</span>
              </div>
            </div>


            <div className="highlight-item">
              <div className="highlight-icon">
                <Wrench size={22} />
              </div>

              <div>
                <strong>End-to-End</strong>
                <span>technology solutions</span>
              </div>
            </div>


            <div className="highlight-item">
              <div className="highlight-icon">
                <Headphones size={22} />
              </div>

              <div>
                <strong>After-Sales</strong>
                <span>support & service</span>
              </div>
            </div>


            <div className="highlight-item">
              <div className="highlight-icon">
                <MapPin size={22} />
              </div>

              <div>
                <strong>Maharashtra</strong>
                <span>serving local businesses</span>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="about-introduction">

        <div className="container">

          <div className="about-intro-layout">

            <div className="about-intro-heading">

              <span className="about-section-tag">
                WHO WE ARE
              </span>

              <h2>
                More Than Just
                <span> Technology.</span>
              </h2>

              <div className="about-heading-line"></div>

              <p className="about-intro-short">
                We help businesses choose, install and maintain technology
                that actually works for them.
              </p>

            </div>


            <div className="about-intro-text">

              <p>
                JAY ELECTRONICS PRIVATE LIMITED was established in 1989
                with a simple goal — to provide dependable electronic and
                communication solutions backed by good service and
                engineering expertise.
              </p>

              <p>
                Over the years, our work has expanded across CCTV
                surveillance, networking, fiber optic solutions, access
                control, audio visual systems, LED displays, fire safety,
                telecom and smart technology integration.
              </p>

              <p>
                Whether it is a small shop, office, school, commercial
                property or a larger project, our team works with customers
                to understand their requirements and provide practical
                solutions.
              </p>

              <div className="about-check-list">

                <div>
                  <CheckCircle2 size={18} />
                  <span>Requirement-based solutions</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Professional installation</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Maintenance & support</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPLORE JEPL ================= */}
      <section className="about-sections">

        <div className="container">

          <div className="about-section-header">

            <div>

              <span className="about-section-tag">
                EXPLORE JEPL
              </span>

              <h2>
                Get to Know Us
              </h2>

            </div>

            <p>
              Everything you want to know about our company, people,
              journey and the way we work.
            </p>

          </div>


          <div className="about-cards">

            {aboutSections.map((item) => {

              const Icon = item.icon;

              return (
                <Link
                  to={item.link}
                  className="about-card"
                  key={item.title}
                >

                  <div className="about-card-top">

                    <span className="about-card-number">
                      {item.number}
                    </span>

                    <div className="about-card-icon">
                      <Icon size={23} />
                    </div>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="about-card-bottom">

                    <span>
                      Explore
                    </span>

                    <div className="about-card-arrow">
                      <ArrowRight size={17} />
                    </div>

                  </div>

                </Link>
              );

            })}

          </div>

        </div>

      </section>


      {/* ================= LOCAL BUSINESS MESSAGE ================= */}
      <section className="about-local">

        <div className="container">

          <div className="about-local-box">

            <div className="about-local-icon">
              <MapPin size={30} />
            </div>

            <div className="about-local-content">

              <span className="about-section-tag">
                LOCAL EXPERTISE
              </span>

              <h2>
                Your business.
                <br />
                <span>Our technology.</span>
              </h2>

              <p>
                From setting up CCTV at a local shop to building complete
                security and networking systems, our team focuses on
                practical solutions that fit your actual requirements.
              </p>

              <div className="about-local-points">

                <span>
                  <CheckCircle2 size={16} />
                  Easy to understand solutions
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Professional installation
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Reliable service support
                </span>

              </div>

              <Link to="/contact" className="about-local-btn">
                Talk to Our Team
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="about-bottom">

        <div className="container">

          <div className="about-bottom-content">

            <span>
              NEED HELP WITH YOUR BUSINESS?
            </span>

            <h2>
              Let's find the right
              <br />
              solution for you.
            </h2>

            <p>
              Tell us what you need. Our team will help you understand
              the right technology solution for your business.
            </p>

            <Link to="/contact" className="about-bottom-btn">
              Contact JEPL
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;

