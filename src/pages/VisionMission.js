import React from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./VisionMission.css";

function VisionMission() {
  return (
    <div className="vision-page">

      <section className="vision-hero">

        <div className="container">

          <span>OUR DIRECTION</span>

          <h1>
            Vision & Mission
          </h1>

          <p>
            The principles and goals that guide JEPL's
            long-term journey.
          </p>

        </div>

      </section>


      <section className="vision-content">

        <div className="container">

          <div className="vision-grid">

            <div className="vision-card">

              <div className="vision-icon">
                <Eye size={30} />
              </div>

              <span>OUR VISION</span>

              <h2>
                Trusted Technology for a Secure Future
              </h2>

              <p>
                To become Maharashtra's most trusted and
                innovative technology integration company by
                delivering intelligent, secure and future-ready
                solutions that empower businesses and communities.
              </p>

            </div>


            <div className="vision-card">

              <div className="vision-icon">
                <Target size={30} />
              </div>

              <span>OUR MISSION</span>

              <h2>
                Delivering Value Through Engineering
              </h2>

              <p>
                We aim to deliver world-class technology
                solutions with uncompromising quality, maintain
                long-term customer relationships, provide
                excellent after-sales support and continuously
                adopt relevant technologies.
              </p>

            </div>

          </div>


          <div className="mission-points">

            <h2>
              Our Mission in Practice
            </h2>

            <div className="mission-grid">

              {[
                "Deliver reliable technology solutions",
                "Maintain long-term customer relationships",
                "Provide responsive after-sales support",
                "Adopt relevant and emerging technologies",
                "Develop skilled technical professionals",
                "Deliver value beyond customer expectations",
              ].map((item) => (

                <div
                  className="mission-point"
                  key={item}
                >
                  <CheckCircle2 size={20} />
                  {item}
                </div>

              ))}

            </div>

          </div>


          <Link
            to="/about/core-values"
            className="vision-next"
          >
            Explore Our Core Values
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default VisionMission;