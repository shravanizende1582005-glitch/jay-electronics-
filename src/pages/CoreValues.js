import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lightbulb,
  Award,
  Handshake,
  Users,
  RefreshCw,
  HardHat,
  ArrowRight,
} from "lucide-react";

import "./CoreValues.css";

const values = [
  {
    title: "Integrity",
    text: "We believe in transparent, ethical and responsible business practices.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    text: "We continuously explore relevant technologies and better ways of working.",
    icon: Lightbulb,
  },
  {
    title: "Quality",
    text: "We focus on dependable solutions, professional execution and quality standards.",
    icon: Award,
  },
  {
    title: "Commitment",
    text: "We remain committed to our customers, projects and responsibilities.",
    icon: Handshake,
  },
  {
    title: "Customer First",
    text: "We understand customer requirements and design solutions around them.",
    icon: Users,
  },
  {
    title: "Continuous Improvement",
    text: "We encourage learning, improvement and development across the organization.",
    icon: RefreshCw,
  },
  {
    title: "Safety",
    text: "Safety remains an important consideration in project execution and operations.",
    icon: HardHat,
  },
];

function CoreValues() {
  return (
    <div className="values-page">

      <section className="values-hero">

        <div className="container">

          <span>WHAT GUIDES US</span>

          <h1>
            Core Values
          </h1>

          <p>
            The principles that shape the way we work,
            serve customers and build relationships.
          </p>

        </div>

      </section>


      <section className="values-content">

        <div className="container">

          <div className="values-intro">

            <span>
              OUR PRINCIPLES
            </span>

            <h2>
              Values Behind Every Project
            </h2>

            <p>
              Our values influence our decisions, customer
              relationships, engineering practices and
              long-term approach to business.
            </p>

          </div>


          <div className="values-grid">

            {values.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  className="value-card"
                  key={item.title}
                >

                  <div className="value-icon">
                    <Icon size={25} />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>


          <Link
            to="/about/leadership"
            className="values-next"
          >
            Meet Our Leadership
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default CoreValues;