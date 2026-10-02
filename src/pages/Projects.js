import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import projects from "../data/projects";
import "./Projects.css";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Government",
    "Police",
    "Hospitals",
    "Factories",
    "Banks",
    "Education",
    "Commercial",
    "Residential"
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <div className="projects-page">

      {/* HERO */}

      <section className="projects-hero">
        <div className="container">

          <span className="projects-label">
            OUR PROJECTS
          </span>

          <h1>
            Delivering Technology
            <br />
            That Makes a Difference
          </h1>

          <p>
            Explore our project capabilities across security,
            networking, communication and integrated technology
            solutions.
          </p>

        </div>
      </section>

      {/* INTRO */}

      <section className="projects-intro">
        <div className="container">

          <div className="projects-intro-content">

            <div>
              <span>OUR EXPERIENCE</span>

              <h2>
                Technology Solutions Delivered
                With Engineering Excellence
              </h2>
            </div>

            <p>
              From government organizations and industrial facilities
              to hospitals, educational institutions and commercial
              properties, JEPL delivers customized technology
              integration solutions designed around each customer's
              requirements.
            </p>

          </div>

        </div>
      </section>

      {/* FILTER */}

      <section className="projects-section">

        <div className="container">

          <div className="project-filters">

            {categories.map((category) => (

              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>

          {/* PROJECT GRID */}

          <div className="projects-grid">

            {filteredProjects.map((project) => (

              <article
                className="project-card"
                key={project.slug}
              >

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <div className="project-location">
                    <MapPin size={16} />
                    {project.location}
                  </div>

                  <p>
                    {project.shortDescription}
                  </p>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-link"
                  >
                    View Case Study
                    <ArrowRight size={17} />
                  </Link>

                </div>

              </article>

            ))}

          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <h3>No projects found</h3>
              <p>
                Projects for this category will be added soon.
              </p>
            </div>
          )}

        </div>

      </section>

      {/* CTA */}

      <section className="projects-cta">

        <div className="container">

          <span>START YOUR PROJECT</span>

          <h2>
            Have a Technology Requirement?
          </h2>

          <p>
            Talk to our engineering team about your security,
            networking or technology integration requirements.
          </p>

          <Link to="/contact">
            Discuss Your Requirement
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Projects;