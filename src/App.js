import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

// ===============================
// PUBLIC PAGES
// ===============================
import Home from "./pages/Home";
import About from "./pages/About";

// ===============================
// ABOUT US PAGES
// Files are directly inside /pages
// ===============================
import CompanyProfile from "./pages/CompanyProfile";
import OurStory from "./pages/OurStory";
import VisionMission from "./pages/VisionMission";
import CoreValues from "./pages/CoreValues";
import Leadership from "./pages/Leadership";
import OurTeam from "./pages/OurTeam";

// ===============================
// SOLUTIONS
// ===============================
import Solutions from "./pages/Solutions";
import ServiceDetails from "./pages/ServiceDetails";

// ===============================
// OTHER PUBLIC PAGES
// ===============================
//import Industries from "./pages/Industries";
//import Projects from "./pages/Projects";
//import ProjectDetails from "./pages/ProjectDetails";
//import Brands from "./pages/Brands";
//import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
//import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

// ===============================
// ADMIN
// ===============================
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedAdminRoute from "./pages/ProtectedAdminRoute";

import "./App.css";
import "./MobileIntro.css";

function MobileBrandIntro() {
  return (
    <main className="mobile-brand-intro" role="status" aria-label="JAY ELECTRONICS">
      <div className="mobile-brand-intro-content">
        <div className="mobile-brand-intro-mark" aria-hidden="true">
          JE
        </div>
        <span className="mobile-brand-intro-overline">INTEGRATED TECHNOLOGY SINCE 1989</span>
        <h1>JAY ELECTRONICS</h1>
        <p>PRIVATE LIMITED</p>
        <div className="mobile-brand-intro-tagline">
          <span>SECURE</span>
          <i />
          <span>CONNECT</span>
          <i />
          <span>PROTECT</span>
        </div>
        <div className="mobile-brand-intro-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </main>
  );
}

function SiteLayout({ children }) {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {isAdminRoute ? children : <main>{children}</main>}
      {!isAdminRoute && <FloatingButtons />}
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  const [showMobileIntro, setShowMobileIntro] = useState(() =>
    typeof window !== "undefined" &&
    window.location.pathname === "/" &&
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    if (!showMobileIntro) return undefined;

    const timer = window.setTimeout(() => setShowMobileIntro(false), 1500);
    const mobileViewport = window.matchMedia("(max-width: 768px)");
    const dismissOnDesktop = (event) => {
      if (!event.matches) setShowMobileIntro(false);
    };

    mobileViewport.addEventListener("change", dismissOnDesktop);

    return () => {
      window.clearTimeout(timer);
      mobileViewport.removeEventListener("change", dismissOnDesktop);
    };
  }, [showMobileIntro]);

  return (
    <BrowserRouter>
      {showMobileIntro ? (
        <MobileBrandIntro />
      ) : (
        <>

      <SiteLayout>

        <Routes>

          {/* =========================
              HOME
          ========================== */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =========================
              ABOUT US
          ========================== */}

          {/* About Us Overview */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Company Profile */}
          <Route
            path="/about/company-profile"
            element={<CompanyProfile />}
          />

          {/* Our Story */}
          <Route
            path="/about/our-story"
            element={<OurStory />}
          />

          {/* Vision & Mission */}
          <Route
            path="/about/vision-mission"
            element={<VisionMission />}
          />

          {/* Core Values */}
          <Route
            path="/about/core-values"
            element={<CoreValues />}
          />

          {/* Leadership */}
          <Route
            path="/about/leadership"
            element={<Leadership />}
          />

          {/* Our Team */}
          <Route
            path="/about/our-team"
            element={<OurTeam />}
          />


          {/* =========================
              SOLUTIONS
          ========================== */}

          {/* All Solutions */}
          <Route
            path="/solutions"
            element={<Solutions />}
          />

          {/* Individual Solution */}
          <Route
            path="/solutions/:slug"
            element={<ServiceDetails />}
          />


          {/* =========================
              INDUSTRIES
          ========================== }

          <Route
            path="/industries"
            element={<Industries />}
          />


          {/* =========================
              PROJECTS
          ========================== }

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetails />}
          />


          {/* =========================
              BRANDS
          ========================== }

          <Route
            path="/brands"
            element={<Brands />}
          />


          {/* =========================
              GALLERY
          ========================== }

          <Route
            path="/gallery"
            element={<Gallery />}
          />


          { =========================
              BLOGS
          ========================== }

          <Route
            path="/blogs"
            element={<Blogs />}
          />


          {/* =========================
              CAREERS
          ========================== */}

          

          {/* =========================
              CONTACT
          ========================== */}

          <Route
            path="/blogs"
            element={<Blogs />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* =========================
              ADMIN LOGIN
          ========================== */}

          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />


          {/* =========================
              PROTECTED ADMIN DASHBOARD
          ========================== */}

          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />

        </Routes>
      </SiteLayout>
        </>
      )}

    </BrowserRouter>
  );
}

export default App;