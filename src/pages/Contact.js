import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Building2,
  Headphones,
} from "lucide-react";
import { ref, push } from "firebase/database";
import { db } from "../Firebase";
import "./Contact.css";

const initialForm = {
  name: "",
  company: "",
  mobile: "",
  email: "",
  location: "",
  service: "",
  projectType: "",
  message: "",
};

const services = [
  "CCTV Surveillance",
  "Networking Solutions",
  "Access Control",
  "Video Door Phones",
  "Fire Alarm Systems",
  "EPABX & Intercom",
  "Audio Visual Solutions",
  "LED Display Solutions",
  "Solar Security Solutions",
  "Annual Maintenance Contract",
  "Other",
];

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(false);
    setError("");

    // Required field validation
    if (
      !form.name.trim() ||
      !form.mobile.trim() ||
      !form.email.trim() ||
      !form.location.trim() ||
      !form.service
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    // Mobile number validation
    const mobileNumber = form.mobile.replace(/\D/g, "");

    if (mobileNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      // Firebase Realtime Database reference
      const enquiryRef = ref(db, "contactEnquiries");

      // Save enquiry
      await push(enquiryRef, {
        name: form.name.trim(),
        company: form.company.trim(),
        mobile: mobileNumber,
        email: form.email.trim(),
        location: form.location.trim(),
        service: form.service,
        projectType: form.projectType,
        message: form.message.trim(),

        // Admin information
        status: "New",

        // Date and time
        submittedAt: new Date().toISOString(),
      });

      // Success
      setSubmitted(true);
      setError("");
      setForm(initialForm);
    } catch (firebaseError) {
      console.error("Firebase Contact Enquiry Error:", firebaseError);

      setError(
        "Unable to submit your enquiry right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="container">
            <span className="contact-eyebrow">
              LET'S CONNECT
            </span>

            <h1>Contact JEPL</h1>

            <p>
              Talk to our engineering team about your security,
              networking and technology requirements.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="contact-intro section-padding">
        <div className="container">
          <div className="section-heading">
            <span>CONTACT US</span>

            <h2>Let's Discuss Your Requirement</h2>

            <p>
              Whether you need a CCTV system, networking infrastructure,
              access control, fire alarm, audio visual solution or a
              complete technology integration project, our team is ready
              to help.
            </p>
          </div>

          <div className="contact-layout">

            {/* LEFT INFORMATION */}
            <div className="contact-information">

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={24} />
                </div>

                <div>
                  <h3>Our Locations</h3>
                  <p>Sangli</p>
                  <p>Kolhapur</p>
                  <p>Pune</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Phone size={24} />
                </div>

                <div>
                  <h3>Phone</h3>
                  <p>Contact number to be updated</p>

                  <small>
                    Please replace this with the client's verified
                    business number before launch.
                  </small>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Mail size={24} />
                </div>

                <div>
                  <h3>Email</h3>
                  <p>info@jayelectronics.co.in</p>

                  <small>
                    Verify this email address with the client before
                    publishing the website.
                  </small>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Clock size={24} />
                </div>

                <div>
                  <h3>Business Hours</h3>
                  <p>Monday – Saturday</p>
                  <p>9:30 AM – 6:30 PM</p>
                </div>
              </div>

              <div className="contact-support-card">
                <Headphones size={30} />

                <div>
                  <h3>Need Technical Assistance?</h3>

                  <p>
                    Contact our team for service support,
                    maintenance and technology requirements.
                  </p>
                </div>
              </div>

            </div>

            {/* FORM */}
            <div className="contact-form-card" id="quotation">

              <div className="form-header">
                <span>REQUEST A QUOTATION</span>

                <h2>Tell Us About Your Project</h2>

                <p>
                  Submit your requirement and our team can get back
                  to you with the appropriate solution.
                </p>
              </div>

              {/* SUCCESS MESSAGE */}
              {submitted && (
                <div className="success-message">
                  <CheckCircle2 size={22} />

                  <div>
                    <strong>
                      Enquiry Submitted Successfully
                    </strong>

                    <p>
                      Thank you for contacting JEPL. Our team will
                      review your requirement.
                    </p>
                  </div>
                </div>
              )}

              {/* ERROR MESSAGE */}
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* NAME + COMPANY */}
                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Full Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Company / Organization
                    </label>

                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />
                  </div>

                </div>

                {/* MOBILE + EMAIL */}
                <div className="form-row">

                  <div className="form-group">
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

                  <div className="form-group">
                    <label>
                      Email Address <span>*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                    />
                  </div>

                </div>

                {/* LOCATION + SERVICE */}
                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Project Location <span>*</span>
                    </label>

                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="City / Project location"
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Required Service <span>*</span>
                    </label>

                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* PROJECT TYPE */}
                <div className="form-group">
                  <label>
                    Project Type
                  </label>

                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select project type
                    </option>

                    <option value="New Installation">
                      New Installation
                    </option>

                    <option value="Upgrade">
                      Existing System Upgrade
                    </option>

                    <option value="AMC">
                      AMC / Maintenance
                    </option>

                    <option value="Site Survey">
                      Site Survey
                    </option>

                    <option value="Consultation">
                      Consultation
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="form-group">
                  <label>
                    Requirement Details
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement..."
                    rows="5"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="contact-loading-spinner"
                        aria-hidden="true"
                      ></span>

                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Enquiry
                    </>
                  )}
                </button>

              </form>

              <div className="form-note">
                <Building2 size={16} />

                Your requirement will be handled by the JEPL team.
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="locations-section section-padding">
        <div className="container">

          <div className="section-heading">
            <span>OUR PRESENCE</span>

            <h2>
              Serving Customers Across Maharashtra
            </h2>

            <p>
              JEPL operates across key locations in Maharashtra,
              supporting customers with installation, integration
              and technical services.
            </p>
          </div>

          <div className="locations-grid">

            <div className="location-card">
              <MapPin size={28} />

              <h3>Sangli</h3>

              <p>
                Regional operations and customer support.
              </p>
            </div>

            <div className="location-card">
              <MapPin size={28} />

              <h3>Kolhapur</h3>

              <p>
                Technology solutions and service support.
              </p>
            </div>

            <div className="location-card">
              <MapPin size={28} />

              <h3>Pune</h3>

              <p>
                Technology integration and project support.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container">

          <div className="contact-cta-content">

            <div>
              <span>READY TO GET STARTED?</span>

              <h2>
                Need a Reliable Technology Partner?
              </h2>

              <p>
                Discuss your project with the JEPL team and
                discover a solution designed around your requirements.
              </p>
            </div>

            <div className="contact-cta-actions">

              <a
                href="mailto:info@jayelectronics.co.in"
                className="cta-email-btn"
              >
                <Mail size={18} />
                Email Us
              </a>

              <a
                href="#quotation"
                className="cta-quote-btn"
              >
                <MessageCircle size={18} />
                Request Quotation
              </a>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;