import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./OurStory.css";

const milestones = [
  {
    year: "1989",
    title: "Beginning of JEPL",
    text: "JAY ELECTRONICS began its journey with a focus on electronic and communication systems.",
  },
  {
    year: "Expansion",
    title: "Security Solutions",
    text: "The company expanded into CCTV surveillance and electronic security systems.",
  },
  {
    year: "Growth",
    title: "Network & Fiber",
    text: "Networking infrastructure and fiber optic capabilities became part of the solution portfolio.",
  },
  {
    year: "Innovation",
    title: "Integrated Technology",
    text: "Audio visual, LED display, fire safety and solar surveillance solutions were added.",
  },
  {
    year: "Today",
    title: "Complete Integration",
    text: "JEPL provides end-to-end technology integration supported by engineering and service teams.",
  },
];

function OurStory() {
  return (
    <div className="story-page">

      <section className="story-hero">
        <div className="container">

          <span>OUR JOURNEY</span>

          <h1>
            Our Story
          </h1>

          <p>
            From electronic systems in 1989 to integrated
            technology solutions today.
          </p>

        </div>
      </section>


      <section className="story-content">

        <div className="container">

          <div className="story-intro">

            <span>
              SINCE 1989
            </span>

            <h2>
              Growing With Technology
            </h2>

            <p>
              JEPL's journey has been shaped by changing
              technology, evolving customer requirements and
              a commitment to engineering-led execution.
            </p>

          </div>


          <div className="timeline">

            {milestones.map((item, index) => (

              <div
                className="timeline-item"
                key={index}
              >

                <div className="timeline-year">
                  <CalendarDays size={18} />
                  {item.year}
                </div>

                <div className="timeline-card">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>


          <div className="story-present">

            <CheckCircle2 size={25} />

            <div>

              <h3>
                Today
              </h3>

              <p>
                JEPL continues to develop its technology
                capabilities while focusing on quality,
                customer relationships and long-term support.
              </p>

            </div>

          </div>


          <Link
            to="/about/vision-mission"
            className="story-next"
          >
            Vision & Mission
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default OurStory;