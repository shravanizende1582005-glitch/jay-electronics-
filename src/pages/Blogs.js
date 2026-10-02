import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  ArrowRight,
  CalendarDays,
  Clock3,
  BookOpen,
  Video,
} from "lucide-react";
import blogsFallback from "../data/blogs";
import { useManagedContent } from "../data/managedContent";
import "./Blogs.css";

function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);
  const { items: blogs } = useManagedContent("siteContent/blogs", blogsFallback);
  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category).filter(Boolean)),
  ];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <div className="blogs-page">

      {/* HERO */}
      <section className="blogs-hero">
        <div className="blogs-hero-overlay"></div>

        <div className="container blogs-hero-content">
          <span className="blogs-eyebrow">
            KNOWLEDGE & INSIGHTS
          </span>

          <h1>
            JEPL <span>Blogs</span>
          </h1>

          <p>
            Explore practical insights about CCTV surveillance, networking,
            access control, fire safety, communication systems and modern
            technology solutions.
          </p>

          <div className="blogs-hero-actions">
            <a href="#latest-blogs" className="blogs-primary-btn">
              Explore Articles
              <ArrowRight size={18} />
            </a>

            <a href="#video-insights" className="blogs-secondary-btn">
              <Video size={18} />
              Video Insights
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="blogs-intro section-padding">
        <div className="container">
          <div className="section-heading-center">
            <span>JEPL KNOWLEDGE CENTER</span>

            <h2>
              Technology Insights for
              <strong> Smarter Decisions</strong>
            </h2>

            <p>
              Stay informed about security, networking and technology
              solutions that can help organizations improve safety,
              connectivity and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="blog-filter">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG CARDS */}
      <section
        id="latest-blogs"
        className="blogs-list-section section-padding"
      >
        <div className="container">

          <div className="section-heading-left">
            <span>LATEST ARTICLES</span>

            <h2>
              Insights & <strong>Resources</strong>
            </h2>

            <p>
              Helpful information for businesses, institutions,
              industries and organizations.
            </p>
          </div>

          <div className="blogs-grid">
            {filteredBlogs.map((blog) => (
              <article className="blog-card" key={blog.id}>

                {/* VIDEO */}
                <div className="blog-video-wrapper">
                  <video
                    className="blog-video"
                    src={blog.video}
                    muted
                    preload="metadata"
                  />

                  <button
                    type="button"
                    className="blog-play-btn"
                    onClick={() => setActiveVideo(blog.video)}
                    aria-label={`Play ${blog.title}`}
                  >
                    <Play size={25} fill="currentColor" />
                  </button>

                  <div className="video-label">
                    <Video size={14} />
                    Video Insight
                  </div>
                </div>

                {/* CONTENT */}
                <div className="blog-card-content">

                  <div className="blog-meta">
                    <span className="blog-category">
                      {blog.category}
                    </span>

                    <span>
                      <CalendarDays size={14} />
                      {blog.date}
                    </span>
                  </div>

                  <h3>{blog.title}</h3>

                  <p>{blog.description}</p>

                  <div className="blog-bottom">

                    <span className="read-time">
                      <Clock3 size={15} />
                      {blog.readTime}
                    </span>

                    <button
                      type="button"
                      className="read-article-btn"
                      onClick={() =>
                        alert(
                          "Blog article page will be connected in the next step."
                        )
                      }
                    >
                      Read Article
                      <ArrowRight size={16} />
                    </button>

                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="no-blogs">
              <BookOpen size={42} />
              <h3>No articles found</h3>
              <p>Please select another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* VIDEO INSIGHTS */}
      <section
        id="video-insights"
        className="video-insights-section section-padding"
      >
        <div className="container">

          <div className="video-insights-box">

            <div className="video-insights-content">

              <span>JEPL VIDEO INSIGHTS</span>

              <h2>
                Learn. Understand.
                <br />
                <strong>Secure & Connect.</strong>
              </h2>

              <p>
                Watch technology demonstrations, installation insights,
                product explanations and security solution videos.
              </p>

              <Link to="/contact" className="video-contact-btn">
                Discuss Your Requirement
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="video-feature">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
                muted
                poster=""
              />
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="blogs-cta section-padding">
        <div className="container">

          <div className="blogs-cta-inner">

            <div>
              <span>NEED EXPERT GUIDANCE?</span>

              <h2>
                Looking for the right
                <strong> technology solution?</strong>
              </h2>

              <p>
                Talk to the JEPL team about your security,
                networking or technology requirements.
              </p>
            </div>

            <Link to="/contact" className="blogs-cta-btn">
              Contact JEPL
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="video-modal"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-close-btn"
              onClick={() => setActiveVideo(null)}
            >
              ×
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default Blogs;