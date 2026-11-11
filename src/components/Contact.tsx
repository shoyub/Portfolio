import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdSend } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildFormattedMail = () => {
    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanSubject = formData.subject.trim() || "General Inquiry";
    const cleanMessage = formData.message.trim();

    const formattedSubject = `Portfolio Mail from ${cleanName} - ${cleanSubject}`;
    const formattedBody = [
      "=========================================",
      "PORTFOLIO MAIL FROM USER",
      "=========================================",
      `Who (Name)   : ${cleanName}`,
      `Sender Email : ${cleanEmail}`,
      `Subject      : ${cleanSubject}`,
      "-----------------------------------------",
      "",
      "Message:",
      cleanMessage,
      "=========================================",
    ].join("\n");

    return {
      cleanName,
      cleanEmail,
      cleanSubject,
      cleanMessage,
      formattedSubject,
      formattedBody,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }

    const {
      cleanName,
      cleanEmail,
      cleanSubject,
      cleanMessage,
      formattedSubject,
      formattedBody,
    } = buildFormattedMail();

    setStatus("sending");

    const encodedSubject = encodeURIComponent(formattedSubject);
    const encodedBody = encodeURIComponent(formattedBody);
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      config.contact.email
    )}&su=${encodedSubject}&body=${encodedBody}`;

    // Open pre-formatted Gmail Compose in a new tab so it works immediately in browser
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");

    // Also dispatch directly via FormSubmit AJAX endpoint in the background
    try {
      await fetch(`https://formsubmit.co/ajax/${config.contact.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: formattedSubject,
          _replyto: cleanEmail,
          _template: "table",
          _captcha: "false",
          Mail_Header: "Portfolio Mail from User",
          Who_Name: cleanName,
          Sender_Email: cleanEmail,
          Subject: cleanSubject,
          Message: cleanMessage,
        }),
      });
    } catch {
      // Gmail tab is already opened as primary browser mail handler
    }

    setStatus("sent");
    setTimeout(() => setStatus("idle"), 7000);
  };

  const handleDefaultMailApp = () => {
    const { formattedSubject, formattedBody } = buildFormattedMail();
    window.location.href = `mailto:${config.contact.email}?subject=${encodeURIComponent(
      formattedSubject
    )}&body=${encodeURIComponent(formattedBody)}`;
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-container section-container">
        <h3>{config.developer.fullName}</h3>
        <p className="contact-subhead">
          Have an opportunity or question? Send a formatted portfolio mail directly to Shoyub!
        </p>

        <div className="contact-grid">
          {/* Interactive Contact Form */}
          <div className="contact-form-container">
            <h4>Send Message to Shoyub</h4>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name (Who)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    data-cursor="disable"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    data-cursor="disable"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. SDE Opportunity / Project Collaboration"
                  required
                  data-cursor="disable"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  data-cursor="disable"
                />
              </div>

              <div className="contact-actions">
                <button
                  type="submit"
                  className="contact-submit-btn"
                  data-cursor="disable"
                >
                  <span>
                    {status === "sending" ? "Preparing Mail..." : "Send Portfolio Mail"}
                  </span>
                  <MdSend className="send-icon" />
                </button>

                <button
                  type="button"
                  onClick={handleDefaultMailApp}
                  className="contact-mailto-btn"
                  data-cursor="disable"
                >
                  Open in Default Mail App
                </button>
              </div>

              {status === "sent" && (
                <p className="form-success-msg">
                  ✓ Formatted as &ldquo;Portfolio Mail from {formData.name} - {formData.subject}&rdquo; for {config.contact.email}!
                </p>
              )}
            </form>
          </div>

          {/* Contact Details & Links */}
          <div className="contact-details-container">
            <div className="contact-card">
              <h4>Email</h4>
              <p>
                <a href={`mailto:${config.contact.email}`} data-cursor="disable">
                  {config.contact.email}
                </a>
              </p>

              <h4>Phone</h4>
              <p>
                <a href={`tel:${config.contact.phone}`} data-cursor="disable">
                  {config.contact.phone}
                </a>
              </p>

              <h4>Location</h4>
              <p>
                <span>{config.contact.location}</span>
              </p>
            </div>

            <div className="contact-card">
              <h4>Social & Links</h4>
              <a
                href={config.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href={config.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Resume (PDF) <MdArrowOutward />
              </a>
            </div>

            <div className="contact-card contact-credit">
              <h2>
                Designed & Developed <br /> by <span>{config.developer.fullName}</span>
              </h2>
              <h5>
                <MdCopyright /> {new Date().getFullYear()}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
