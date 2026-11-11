import "./styles/Certifications.css";
import { config } from "../config";
import { MdArrowOutward } from "react-icons/md";

const Certifications = () => {
  return (
    <div className="cert-section section-container" id="certifications">
      <div className="cert-container">
        <h2>
          Verified <span>&</span>
          <br /> Certifications
        </h2>
        <div className="cert-grid">
          {config.certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              data-cursor="disable"
            >
              <div className="cert-card-top">
                <div className="cert-issuer-badge">{cert.issuer}</div>
                <div className="cert-date">{cert.date}</div>
              </div>
              <div className="cert-logo-container">
                <img src={cert.image} alt={cert.title} loading="lazy" />
              </div>
              <div className="cert-card-bottom">
                <h4>{cert.title}</h4>
                <div className="cert-verify-link">
                  Verify Credential <MdArrowOutward />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
