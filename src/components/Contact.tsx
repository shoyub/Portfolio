import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdSend } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    contactTimeline.fromTo(
      ".contact-section h3",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    contactTimeline.fromTo(
      ".contact-card, .contact-form-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      contactTimeline.kill();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${config.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{config.developer.fullName}</h3>
        <p className="contact-subhead">
          Have an opportunity or question? Send a message directly to Shoyub!
        </p>

        <div className="contact-grid">
          {/* Interactive Contact Form */}
          <div className="contact-form-container">
            <h4>Send Message to Shoyub</h4>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
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
                  placeholder="Enter your email"
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
                data-cursor="disable"
              >
                <span>Send Mail</span>
                <MdSend className="send-icon" />
              </button>

              {submitted && (
                <p className="form-success-msg">
                  ✓ Opening mail client to send directly to {config.contact.email}!
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
