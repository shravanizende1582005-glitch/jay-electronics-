import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import footerLinksFallback from "../data/footerLinks";
import footerDetailsFallback from "../data/footerDetails";
import { useManagedContent } from "../data/managedContent";

import "./Footer.css";

function Footer() {
  const { items: managedFooterLinks } = useManagedContent(
    "siteContent/footerLinks",
    footerLinksFallback
  );
  const footerLinks = managedFooterLinks.length
    ? managedFooterLinks
    : footerLinksFallback;
  const footerGroups = ["Solutions", "Resources"]
    .map((group) => ({
      group,
      links: footerLinks.filter((item) => item.group === group),
    }))
    .filter(({ links }) => links.length > 0);
  const footerMainClass = footerGroups.length === 0
    ? "footer-main footer-main--no-links"
    : footerGroups.length === 1
    ? "footer-main footer-main--one-group"
    : "footer-main";
  const { items: footerDetails } = useManagedContent(
    "siteContent/footerDetails",
    footerDetailsFallback
  );
  const contactDetails = footerDetails[0] || footerDetailsFallback[0];

  return (

    <footer className="site-footer">

      <div className="container">

        <div className={footerMainClass}>

          {/* COMPANY */}

          <div className="footer-company">

            <div className="footer-logo">
              JE
            </div>

            <h3>
              JAY ELECTRONICS
            </h3>

            <span>
              PRIVATE LIMITED
            </span>

            <p>
              Integrated security, networking,
              communication and smart technology
              solutions since 1989.
            </p>

            <div className="footer-contact">

              <div>
                <MapPin size={17} />
                <span>{contactDetails.address}</span>
              </div>

              <div>
                <Phone size={17} />
                {contactDetails.phone ? (
                  <a href={`tel:${contactDetails.phone.replace(/[^\d+]/g, "")}`}>
                    {contactDetails.phone}
                  </a>
                ) : (
                  <Link to="/contact">Contact JEPL</Link>
                )}
              </div>

              <div>
                <Mail size={17} />
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </div>

            </div>

          </div>


          {footerGroups.map(({ group, links }) => (
            <div className="footer-column" key={group}>
              <h4>{group}</h4>
              {links.map((item) => (
                <Link to={item.path} key={item.id || item.path}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 JAY ELECTRONICS PRIVATE LIMITED.
            All Rights Reserved.
          </span>

          <div>

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;