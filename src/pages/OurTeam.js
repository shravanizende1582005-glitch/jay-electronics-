import React from "react";
import { Link } from "react-router-dom";
import {
  HardHat,
  Wrench,
  Headphones,
  Calculator,
  ShoppingCart,
  Users,
  ArrowRight,
} from "lucide-react";

import "./OurTeam.css";

const teams = [
  {
    title: "Project Engineers",
    description:
      "Plan, coordinate and execute technology integration projects.",
    icon: HardHat,
  },
  {
    title: "Site Engineers",
    description:
      "Support installation, testing and commissioning at project sites.",
    icon: Wrench,
  },
  {
    title: "Service Engineers",
    description:
      "Provide technical troubleshooting, maintenance and service support.",
    icon: Headphones,
  },
  {
    title: "Administration & Accounts",
    description:
      "Manage administrative, documentation and financial operations.",
    icon: Calculator,
  },
  {
    title: "Procurement",
    description:
      "Coordinate sourcing and supply of technology products and equipment.",
    icon: ShoppingCart,
  },
  {
    title: "Support Team",
    description:
      "Coordinate customer communication, support requests and operational activities.",
    icon: Users,
  },
];

function OurTeam() {
  return (
    <div className="team-page">

      <section className="team-hero">

        <div className="container">

          <span>OUR PEOPLE</span>

          <h1>
            Our Team
          </h1>

          <p>
            Skilled professionals working together to deliver
            reliable technology solutions.
          </p>

        </div>

      </section>


      <section className="team-content">

        <div className="container">

          <div className="team-intro">

            <span>
              PEOPLE BEHIND JEPL
            </span>

            <h2>
              Engineering & Support Teams
            </h2>

            <p>
              Successful technology projects require coordination
              between engineering, site execution, service,
              procurement, administration and customer support.
            </p>

          </div>


          <div className="team-grid">

            {teams.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  className="team-card"
                  key={item.title}
                >

                  <div className="team-icon">
                    <Icon size={26} />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              );

            })}

          </div>


          <div className="team-bottom">

            <h2>
              One Team. One Commitment.
            </h2>

            <p>
              Working together to deliver quality technology
              solutions and dependable customer support.
            </p>

            <Link to="/contact">
              Contact JEPL
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default OurTeam;