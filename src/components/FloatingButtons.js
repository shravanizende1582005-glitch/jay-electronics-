import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, FileText } from "lucide-react";
import "./FloatingButtons.css";

function FloatingButtons() {

  // Replace this with JEPL's verified WhatsApp number
  const whatsappNumber = "9422407175";

  const whatsappMessage =
    "Hello JAY ELECTRONICS, I would like to enquire about your technology solutions.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="floating-buttons">

      <Link
        to="/contact#quotation"
        className="floating-quote"
        aria-label="Request a quote"
        title="Request a quote"
      >
        <FileText size={23} />
      </Link>

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with JEPL on WhatsApp"
      >
        <MessageCircle size={27} />
      </a>

    </div>
  );
}

export default FloatingButtons;