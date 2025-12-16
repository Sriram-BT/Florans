import React from "react";
import "../Styles/Supporters.css";

// Import images (put images in src/Assets/supporters/)
import s1 from "../Assets/s1.jpg";
import s2 from "../Assets/s2.jpg";
import s3 from "../Assets/s3.jpg";
// add more as needed

const supporters = [
  {
    name: "Gotham – Monikka",
    role: "MFA – MS",
    location: "MARYLAND, USA",
    img: s1,
  },
  {
    name: "Bippen",
    role: "Director IT Projects & Program Management",
    location: "AUSTRALIA",
    img: s2,
  },
  {
    name: "Lavanya R",
    role: "Senior Software Engineering",
    location: "SWEDEN",
    img: s3,
  },
];

export default function Supporters() {
  return (
    <section className="supporters-section">
      <div className="supporters-container">
        <div className="supporters-header">
          <div>
            <span className="supporters-badge">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Gratitude & Recognition
            </span>
          </div>

          <h1 className="supporters-title">Our Supporters, Our Strength</h1>

          <p className="supporters-desc">
            Enlight Trust extends sincere gratitude to all who have contributed
            their time, resources, and goodwill. Each act of support—big or
            small—helps us continue our mission of hope.
          </p>
        </div>

        <div className="supporters-grid">
          {supporters.map((supporter, index) => (
            <div key={index} className="supporter-card">
              <div className="supporter-image-wrapper">
                <div className="supporter-image">
                  <img src={supporter.img} alt={supporter.name} />
                </div>
                
              </div>

              <div className="supporter-card-inner">
                <h3 className="supporter-name">{supporter.name}</h3>
                <p className="supporter-role">{supporter.role}</p>

                <div className="supporter-location">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="supporter-location-text">{supporter.location}</span>
                </div>
              </div>

              <div className="supporter-card-blur"></div>
            </div>
          ))}
        </div>

        <div className="supporters-footer">
          <div className="supporters-footer-content">
            <div className="supporters-avatars">
              <div className="supporters-avatar"></div>
              <div className="supporters-avatar"></div>
              <div className="supporters-avatar"></div>
            </div>
            <p className="supporters-footer-text">Join our growing community of supporters</p>
          </div>
        </div>
      </div>
    </section>
  );
}