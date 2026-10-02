import React, { useState } from "react";
import {
  BriefcaseBusiness,
  Users,
  GraduationCap,
  TrendingUp,
  Send,
  CheckCircle2,
} from "lucide-react";
import { ref, push } from "firebase/database";
import { db } from "../Firebase";
import "./Careers.css";

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  position: "",
  experience: "",
  location: "",
  message: "",
  resume: null,
};

const openings = [
  {
    title: "Project Engineer",
    department: "Engineering",
    type: "Full Time",
    location: "Maharashtra",
    description:
      "Work on CCTV, networking, access control and integrated technology projects.",
  },
  {
    title: "Site Engineer",
    department: "Projects",
    type: "Full Time",
    location: "Maharashtra",
    description:
      "Support installation, testing and commissioning of electronic security and technology systems.",
  },
  {
    title: "Service Engineer",
    department: "Technical Support",
    type: "Full Time",
    location: "Maharashtra",
    description:
      "Handle technical support, maintenance and troubleshooting for installed systems.",
  },
  {
    title: "Sales & Business Development Executive",
    department: "Sales",
    type: "Full Time",
    location: "Maharashtra",
    description:
      "Develop customer relationships and identify opportunities for security and technology solutions.",
  },
];

function Careers() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(false);
    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.mobile ||
      !form.position
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (form.mobile.length < 10) {
      setError("Please enter a valid mobile number.");
      return;
    }

    try {
      setLoading(true);

      // Firebase Realtime Database reference
      const applicationsRef = ref(db, "careerApplications");

      // Save application
      await push(applicationsRef, {
        name: form.name.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        position: form.position,
        experience: form.experience,
        location: form.location,
        message: form.message.trim(),

        // Resume information
        resumeName: form.resume ? form.resume.name : "",

        // Application status
        status: "New",

        // Submission date and time
        submittedAt: new Date().toISOString(),
      });

      setSubmitted(true);
      setError("");
      setForm(initialForm);
    } catch (firebaseError) {
      console.error(
        "Firebase Career Application Error:",
        firebaseError
      );

      setError(
        "Unable to submit your application right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="careers-page">

      {/* HERO */}
      <section className="careers-hero">
        <div className="careers-hero-overlay">
          <div className="container">
            <span>BUILD YOUR CAREER WITH JEPL</span>

            <h1>Join Our Team</h1>

            <p>
              Be part of a growing technology organization delivering
              security, connectivity and smart technology solutions
              across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="careers-intro section-padding">
        <div className="container">

          <div className="section-heading">
            <span>CAREERS AT JEPL</span>

            <h2>Grow With Technology</h2>

            <p>
              At JAY ELECTRONICS PRIVATE LIMITED, we believe that
              skilled and motivated people are the foundation of
              successful technology projects.
            </p>
          </div>

          <div className="career-benefits">

            <div className="career-benefit-card">
              <div>
                <Users size={28} />
              </div>
              <h3>Collaborative Team</h3>
              <p>
                Work with engineers, technical professionals and
                project teams on real-world technology solutions.
              </p>
            </div>

            <div className="career-benefit-card">
              <div>
                <GraduationCap size={28} />
              </div>
              <h3>Continuous Learning</h3>
              <p>
                Develop your technical and professional skills through
                hands-on projects and training opportunities.
              </p>
            </div>

            <div className="career-benefit-card">
              <div>
                <TrendingUp size={28} />
              </div>
              <h3>Career Growth</h3>
              <p>
                Build experience across security, networking,
                communication and integrated technology systems.
              </p>
            </div>

            <div className="career-benefit-card">
              <div>
                <BriefcaseBusiness size={28} />
              </div>
              <h3>Real Projects</h3>
              <p>
                Gain practical exposure through installations,
                maintenance and technology integration projects.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* OPENINGS */}
      <section className="openings-section section-padding">
        <div className="container">

          <div className="section-heading">
            <span>CURRENT OPPORTUNITIES</span>

            <h2>Current Openings</h2>

            <p>
              Explore opportunities with JEPL. Job availability should
              be verified by the client before publishing the website.
            </p>
          </div>

          <div className="openings-grid">

            {openings.map((job, index) => (
              <div className="opening-card" key={index}>

                <div className="opening-icon">
                  <BriefcaseBusiness size={24} />
                </div>

                <div className="opening-content">

                  <h3>{job.title}</h3>

                  <div className="opening-meta">
                    <span>{job.department}</span>
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                  </div>

                  <p>{job.description}</p>

                  <button
                    type="button"
                    onClick={() => {
                      setForm((prev) => ({
                        ...prev,
                        position: job.title,
                      }));

                      setTimeout(() => {
                        document
                          .getElementById("career-application")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }, 100);
                    }}
                  >
                    Apply Now
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* INTERNSHIP */}
      <section className="internship-section section-padding">
        <div className="container">

          <div className="internship-box">

            <div className="internship-icon">
              <GraduationCap size={38} />
            </div>

            <div className="internship-content">
              <span>INTERNSHIP PROGRAM</span>

              <h2>Start Your Professional Journey</h2>

              <p>
                Students and fresh graduates interested in electronic
                security, networking, communication systems and
                technology integration can submit their profile for
                consideration.
              </p>

              <a href="#career-application">
                Submit Your Profile
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* APPLICATION FORM */}
      <section
        className="application-section section-padding"
        id="career-application"
      >
        <div className="container">

          <div className="section-heading">
            <span>CAREER APPLICATION</span>

            <h2>Submit Your Application</h2>

            <p>
              Fill in your details and submit your profile for
              consideration.
            </p>
          </div>

          <div className="application-card">

            {submitted && (
              <div className="career-success">
                <CheckCircle2 size={23} />

                <div>
                  <strong>
                    Application Submitted Successfully
                  </strong>

                  <p>
                    Thank you for your interest in joining JEPL.
                    Your application details have been recorded
                    in this demonstration form.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="career-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="career-form-row">

                <div className="career-form-group">
                  <label>
                    Full Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="career-form-group">
                  <label>
                    Email Address <span>*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

              </div>

              <div className="career-form-row">

                <div className="career-form-group">
                  <label>
                    Mobile Number <span>*</span>
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    maxLength="10"
                  />
                </div>

                <div className="career-form-group">
                  <label>
                    Position Applying For <span>*</span>
                  </label>

                  <select
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select position
                    </option>

                    {openings.map((job) => (
                      <option
                        key={job.title}
                        value={job.title}
                      >
                        {job.title}
                      </option>
                    ))}

                    <option value="Internship">
                      Internship
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

              </div>

              <div className="career-form-row">

                <div className="career-form-group">
                  <label>Experience</label>

                  <select
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select experience
                    </option>
                    <option value="Fresher">
                      Fresher
                    </option>
                    <option value="0-1 Years">
                      0–1 Years
                    </option>
                    <option value="1-3 Years">
                      1–3 Years
                    </option>
                    <option value="3-5 Years">
                      3–5 Years
                    </option>
                    <option value="5+ Years">
                      5+ Years
                    </option>
                  </select>
                </div>

                <div className="career-form-group">
                  <label>Preferred Location</label>

                  <select
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select location
                    </option>
                    <option value="Sangli">
                      Sangli
                    </option>
                    <option value="Kolhapur">
                      Kolhapur
                    </option>
                    <option value="Pune">
                      Pune
                    </option>
                    <option value="Any">
                      Any Location
                    </option>
                  </select>
                </div>

              </div>

              <div className="career-form-group">
                <label>Message</label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div className="career-form-group">
                <label>Upload Resume</label>

                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />

                <small>
                  Accepted formats: PDF, DOC, DOCX
                </small>
              </div>

              <button
                type="submit"
                className="career-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="career-loading-spinner"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Application
                  </>
                )}
              </button>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Careers;