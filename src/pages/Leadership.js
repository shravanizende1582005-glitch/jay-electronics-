import React from "react";
import { Link } from "react-router-dom";
import {
  UserRound,
  Target,
  Users,
  ArrowRight,
} from "lucide-react";

import "./Leadership.css";

function Leadership() {
  return (
    <div className="leadership-page">

      <section className="leadership-hero">

        <div className="container">

          <span>LEADERSHIP</span>

          <h1>
            Leadership
          </h1>

          <p>
            Experienced leadership focused on customer trust,
            engineering excellence and sustainable growth.
          </p>

        </div>

      </section>


      <section className="leadership-content">

        <div className="container">

          <div className="leader-message">

            <div className="leader-icon">
              <UserRound size={38} />
            </div>

            <div>

              <span>
                MESSAGE FROM MANAGEMENT
              </span>

              <h2>
                Building Technology Through Trust
              </h2>

              <p>
                At JAY ELECTRONICS PRIVATE LIMITED, our approach
                has always been centered around understanding
                customer requirements and delivering dependable
                technology solutions.
              </p>

              <p>
                As technology continues to evolve, our focus
                remains on engineering capability, responsible
                execution, customer support and long-term
                partnerships.
              </p>

              <p>
                We believe that successful projects are built
                through a combination of technology, people,
                process and trust.
              </p>

              <strong>
                — Management, JAY ELECTRONICS PRIVATE LIMITED
              </strong>

            </div>

          </div>


          <div className="leadership-pillars">

            <div>
              <Target size={28} />
              <h3>Strategic Direction</h3>
              <p>
                Building capabilities around evolving customer
                and technology requirements.
              </p>
            </div>

            <div>
              <Users size={28} />
              <h3>People & Teams</h3>
              <p>
                Supporting skilled professionals and
                engineering teams.
              </p>
            </div>

          </div>


          <Link
            to="/about/our-team"
            className="leadership-next"
          >
            Meet Our Team
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Leadership;