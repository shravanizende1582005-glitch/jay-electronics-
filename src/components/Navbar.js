import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  FileText,
} from "lucide-react";

import "./Navbar.css";

function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const location = useLocation();

  const closeMenus = () => {
    setMobileMenu(false);
    setAboutOpen(false);
    setSolutionsOpen(false);
  };

  const aboutLinks = [
    {
      name: "Company Profile",
      link: "/about/company-profile",
    },
    {
      name: "Our Story",
      link: "/about/our-story",
    },
    {
      name: "Vision & Mission",
      link: "/about/vision-mission",
    },
    {
      name: "Core Values",
      link: "/about/core-values",
    },
    {
      name: "Leadership",
      link: "/about/leadership",
    },
    {
      name: "Our Team",
      link: "/about/our-team",
    },
  ];

  const solutionLinks = [
    {
      name: "CCTV Surveillance",
      link: "/solutions/cctv-surveillance",
    },
    {
      name: "Networking Solutions",
      link: "/solutions/networking-solutions",
    },
    {
      name: "Access Control",
      link: "/solutions/access-control",
    },
    {
      name: "Video Door Phones",
      link: "/solutions/video-door-phones",
    },
    {
      name: "Fire Alarm Systems",
      link: "/solutions/fire-alarm-systems",
    },
    {
      name: "EPABX & Intercom",
      link: "/solutions/epabx-intercom",
    },
    {
      name: "Audio Visual Solutions",
      link: "/solutions/audio-visual-solutions",
    },
    {
      name: "LED Display Solutions",
      link: "/solutions/led-display-solutions",
    },
    {
      name: "Solar Security Solutions",
      link: "/solutions/solar-security-solutions",
    },
    {
      name: "Annual Maintenance Contract",
      link: "/solutions/annual-maintenance-contract",
    },
  ];

  return (
    <header className="main-navbar">

      {/* TOP BAR */}

      <div className="top-navbar">

        <div className="container top-navbar-inner">

          <div className="top-left">
            Professional Technology Solutions Since 1989
          </div>

          <div className="top-right">

            <span>
              info@jayelectronics.co.in
            </span>

            <span className="top-divider">
              |
            </span>

            <span>
              Sangli | Kolhapur | Pune
            </span>

          </div>

        </div>

      </div>


      {/* MAIN NAVBAR */}

      <div className="navbar-main">

        <div className="container navbar-inner">

          {/* LOGO */}

          <Link
            to="/"
            className="jepl-logo"
            onClick={closeMenus}
          >

            <div className="je-logo-box">
              JE
            </div>

            <div className="je-logo-text">

              <strong>
                JAY ELECTRONICS
              </strong>

              <small>
                PRIVATE LIMITED
              </small>

            </div>

          </Link>


          {/* DESKTOP NAVIGATION */}

          <nav className="desktop-navigation">

            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>


            {/* ABOUT */}

            <div
              className="nav-dropdown"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >

              <Link
                to="/about"
                className={
                  location.pathname.startsWith("/about")
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={closeMenus}
              >

                About Us

                <ChevronDown size={15} />

              </Link>


              {aboutOpen && (

                <div className="dropdown-menu-custom">

                  {/* MAIN ABOUT */}

                  <Link
                    to="/about"
                    className="dropdown-main-link"
                    onClick={closeMenus}
                  >
                    About Us Overview
                  </Link>

                  <div className="dropdown-separator" />


                  {aboutLinks.map((item) => (

                    <Link
                      key={item.name}
                      to={item.link}
                      onClick={closeMenus}
                    >
                      {item.name}
                    </Link>

                  ))}

                </div>

              )}

            </div>


            {/* SOLUTIONS */}

            <div
              className="nav-dropdown"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >

              <Link
                to="/solutions"
                className={
                  location.pathname.startsWith("/solutions")
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={closeMenus}
              >

                Solutions

                <ChevronDown size={15} />

              </Link>


              {solutionsOpen && (

                <div className="dropdown-menu-custom solutions-dropdown">

                  <Link
                    to="/solutions"
                    className="dropdown-main-link"
                    onClick={closeMenus}
                  >
                    All Solutions
                  </Link>

                  <div className="dropdown-separator" />

                  {solutionLinks.map((item) => (

                    <Link
                      key={item.name}
                      to={item.link}
                      onClick={closeMenus}
                    >
                      {item.name}
                    </Link>

                  ))}

                </div>

              )}

            </div>


            

            
            


            


            <Link
              to="/blogs"
              className={
                location.pathname.startsWith("/blogs")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Blogs
            </Link>


            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              
            
              Contact
            </Link>


            <Link
              to="/contact#quotation"
              className="quote-nav-button"
              onClick={closeMenus}
            >

              <FileText size={17} />

              Request Quote

            </Link>

          </nav>


          {/* MOBILE BUTTON */}

          <button
            className="mobile-menu-button"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
          >

            {mobileMenu ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}

          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      {mobileMenu && (

        <div className="mobile-navigation">

          <Link
            to="/"
            onClick={closeMenus}
          >
            Home
          </Link>


          {/* MOBILE ABOUT */}

          <div className="mobile-dropdown">

            <div className="mobile-parent-row">

              <Link
                to="/about"
                onClick={closeMenus}
              >
                About Us
              </Link>

              <button
                onClick={() =>
                  setAboutOpen(!aboutOpen)
                }
              >
                <ChevronDown size={18} />
              </button>

            </div>


            {aboutOpen && (

              <div className="mobile-submenu">

                <Link
                  to="/about"
                  onClick={closeMenus}
                >
                  About Us Overview
                </Link>

                {aboutLinks.map((item) => (

                  <Link
                    key={item.name}
                    to={item.link}
                    onClick={closeMenus}
                  >
                    {item.name}
                  </Link>

                ))}

              </div>

            )}

          </div>


          {/* MOBILE SOLUTIONS */}

          <div className="mobile-dropdown">

            <div className="mobile-parent-row">

              <Link
                to="/solutions"
                onClick={closeMenus}
              >
                Solutions
              </Link>

              <button
                onClick={() =>
                  setSolutionsOpen(!solutionsOpen)
                }
              >
                <ChevronDown size={18} />
              </button>

            </div>


            {solutionsOpen && (

              <div className="mobile-submenu">

                <Link
                  to="/solutions"
                  onClick={closeMenus}
                >
                  All Solutions
                </Link>

                {solutionLinks.map((item) => (

                  <Link
                    key={item.name}
                    to={item.link}
                    onClick={closeMenus}
                  >
                    {item.name}
                  </Link>

                ))}

              </div>

            )}

          </div>


          <Link
            to="/blogs"
            onClick={closeMenus}
          >
            Blogs
          </Link>

          <Link
            to="/contact"
            onClick={closeMenus}
          >
            Contact
          </Link>

          <Link
            to="/contact#quotation"
            className="mobile-quote-button"
            onClick={closeMenus}
          >

            <FileText size={17} />

            Request Quote

          </Link>

        </div>

      )}

    </header>
  );
}

export default Navbar;