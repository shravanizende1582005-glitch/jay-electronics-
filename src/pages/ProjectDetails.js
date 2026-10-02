import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Target,
  Lightbulb,
  TrendingUp
} from "lucide-react";

import projects from "../data/projects";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>

        <p>
          The requested project could not be found.
        </p>

        <Link to="/projects">
          Back to Projects
        </Link>
      </div>
    );
  }

  document.title = `${project.title} | JAY ELECTRONICS PRIVATE LIMITED`;

  return (
    <div className="project-details">

      {/* HERO */}

      <section
        className="project-detail-hero"
        style={{
          backgroundImage: `url(${project.image})`
        }}
      >
        <div className="project-detail-overlay">

          <div className="container">

            <Link
              to="/projects"
              className="back-projects"
            >
              <ArrowLeft size={17} />
              Back to Projects
            </Link>

            <span>{project.category}</span>

            <h1>{project.title}</h1>

            <div className="detail-location">
              <MapPin size={18} />
              {project.location}
            </div>

          </div>

        </div>
      </section>

      {/* OVERVIEW */}

      <section className="project-overview">

        <div className="container">

          <div className="project-overview-grid">

            <div>

              <span className="detail-label">
                PROJECT OVERVIEW
              </span>

              <h2>
                Delivering the Right Technology
                for the Requirement
              </h2>

              <p>
                {project.shortDescription}
              </p>

            </div>

            <div className="project-info-box">

              <div>
                <span>Industry</span>
                <strong>{project.category}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{project.location}</strong>
              </div>

              <div>
                <span>Solution</span>
                <strong>Technology Integration</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROBLEM / SOLUTION */}

      <section className="project-content-section">

        <div className="container">

          <div className="case-study-grid">

            <div className="case-study-card">

              <div className="case-icon">
                <Target />
              </div>

              <span>THE CHALLENGE</span>

              <h2>Problem Statement</h2>

              <p>
                {project.problem}
              </p>

            </div>

            <div className="case-study-card solution-card">

              <div className="case-icon">
                <Lightbulb />
              </div>

              <span>OUR APPROACH</span>

              <h2>Solution Provided</h2>

              <p>
                {project.solution}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="project-products">

        <div className="container">

          <div className="project-section-title">

            <span>TECHNOLOGY</span>

            <h2>Products & Systems Used</h2>

            <p>
              The project solution was designed around the
              requirements of the site.
            </p>

          </div>

          <div className="used-products">

            {project.products.map(
              (product, index) => (

                <div
                  className="used-product"
                  key={index}
                >
                  <CheckCircle2 size={19} />
                  {product}
                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* OUTCOME */}

      <section className="project-outcome">

        <div className="container">

          <div className="outcome-box">

            <div className="outcome-icon">
              <TrendingUp size={35} />
            </div>

            <div>

              <span>PROJECT OUTCOME</span>

              <h2>
                Results That Support Better Operations
              </h2>

              <p>
                {project.outcome}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="project-detail-cta">

        <div className="container">

          <h2>
            Planning a Similar Project?
          </h2>

          <p>
            Let our engineering team understand your
            requirement and design a suitable solution.
          </p>

          <Link to="/contact">
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default ProjectDetails;