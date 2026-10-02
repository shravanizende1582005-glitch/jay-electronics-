import React, { useState } from "react";
import { X, Maximize2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import galleryItems from "../data/gallery";
import "./Gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "All",
    "CCTV",
    "Networking",
    "Control Room",
    "Industrial",
    "Commercial",
    "LED",
    "Audio Visual"
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="gallery-page">

      {/* HERO */}

      <section className="gallery-hero">

        <div className="container">

          <span>OUR GALLERY</span>

          <h1>
            Technology in Action
          </h1>

          <p>
            Explore selected installation environments,
            infrastructure and technology solutions.
          </p>

        </div>

      </section>

      {/* GALLERY */}

      <section className="gallery-section">

        <div className="container">

          <div className="gallery-heading">

            <span>PROJECT GALLERY</span>

            <h2>
              Our Work. Our Expertise.
            </h2>

            <p>
              A visual look at security, networking,
              communication and technology installations.
            </p>

          </div>

          {/* FILTER */}

          <div className="gallery-filters">

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

          {/* GRID */}

          <div className="gallery-grid">

            {filteredItems.map((item) => (

              <div
                className="gallery-item"
                key={item.id}
                onClick={() =>
                  setSelectedImage(item)
                }
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-overlay">

                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <div className="gallery-expand">
                    <Maximize2 size={20} />
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* LIGHTBOX */}

      {selectedImage && (

        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            <X size={26} />
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="lightbox-caption">

              <span>
                {selectedImage.category}
              </span>

              <h3>
                {selectedImage.title}
              </h3>

            </div>

          </div>

        </div>

      )}

      {/* CTA */}

      <section className="gallery-cta">

        <div className="container">

          <h2>
            Want a Solution Designed for Your Site?
          </h2>

          <p>
            Let JEPL's engineering team understand your
            requirement and recommend the right solution.
          </p>

          <Link to="/contact">
            Request a Site Survey
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Gallery;