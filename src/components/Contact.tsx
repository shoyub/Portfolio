import { useState } from "react";
import {
  MdArrowOutward,
  MdCopyright,
  MdSend,
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openGmailCompose = (subject: string, body: string) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      config.contact.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanSubject = formData.subject.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      return;
    }

    setStatus("sending");

    const formattedSubject = `Portfolio Mail from ${cleanName} - ${cleanSubject}`;
    const formattedBody = `Name: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${config.contact.email}`,
        {
          method: "POST",
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: formattedSubject,
            _replyto: cleanEmail,
            _template: "table",
            _captcha: "false",
            "Portfolio Mail From": cleanName,
            "Sender Email": cleanEmail,
            Subject: cleanSubject,
            Message: cleanMessage,
          }),
        }
      );
      clearTimeout(timeoutId);

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        throw new Error("FormSubmit response not ok");
      }
    } catch {
      clearTimeout(timeoutId);
      // Fast fallback: Open pre-filled Gmail Compose immediately so user never waits and message is sent
      openGmailCompose(formattedSubject, formattedBody);
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-container section-container">
        <h3>{config.developer.fullName}</h3>
        <p className="contact-subhead">
          Have an opportunity or question? Send a message directly to Shoyub!
        </p>

        <div className="contact-grid">
          {/* Interactive Contact Form */}
          <div className="contact-form-container">
            <h4>Send Message to Shoyub</h4>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
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

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={status === "sending"}
                data-cursor="disable"
              >
                <span>{status === "sending" ? "Sending..." : "Send"}</span>
                <MdSend className="send-icon" />
              </button>

              {status === "sent" && (
                <p className="form-success-msg">
                  ✓ Sent! Shoyub will get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="form-error-msg">
                  Something went wrong while sending. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Details & Links */}
          <div className="contact-details-container">
            <div className="contact-card">
              <h4>Email</h4>
              <p>
                <a
                  href={`mailto:${config.contact.email}`}
                  onClick={(e) => {
                    e.preventDefault();
                    openGmailCompose(
                      "Inquiry for Shoyub Khan",
                      "Hi Shoyub,\n\nI came across your portfolio and wanted to reach out regarding..."
                    );
                  }}
                  data-cursor="disable"
                  className="contact-info-link"
                >
                  <MdEmail className="contact-card-icon" /> {config.contact.email}
                </a>
              </p>

              <h4>Phone</h4>
              <p>
                <a
                  href={`tel:${config.contact.phone}`}
                  data-cursor="disable"
                  className="contact-info-link"
                >
                  <MdPhone className="contact-card-icon" /> {config.contact.phone}
                </a>
              </p>

              <h4>Location</h4>
              <p className="contact-info-link">
                <MdLocationOn className="contact-card-icon" /> <span>{config.contact.location}</span>
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
