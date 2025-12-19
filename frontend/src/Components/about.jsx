import "../Styles/about.css";

// Placeholder images - replace with actual group photos
import ourstory from "../Assets/ourstory.jpeg";
import image from "../Assets/image.jpeg";
import img1 from "../Assets/img 1.jpeg";
import img2 from "../Assets/img 2.jpeg";
import img3 from "../Assets/img 3.jpeg";
import img4 from "../Assets/img 4.jpeg";
import img5 from "../Assets/img 5.jpeg";

export default function About() {
  return (
    <div className="about-container">
      <section className="story-section">
        <div className="story-content">
          <div className="story-header-row">
            <h1 className="story-title">Our Story</h1>
            <p className="story-description">
              We started with a dream to support those in need, and today, our
              journey is marked by compassion, resilience, and unwavering dedication.
            </p>
          </div>

          <div className="story-image-wrapper">
            <img src={ourstory} alt="Our Story" className="story-image" />
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-content">
          <div className="trust-header">
            <span className="trust-label">About Us</span>
            <h2 className="trust-title">Florans Trust</h2>
          </div>

          <div className="trust-body">
            <p>
              Florans Trust was established in 2021 with a strong commitment to educating and empowering rural communities through sports, particularly cricket. Our primary motive is to create awareness about the importance of sports among rural children and youth, providing them with meaningful opportunities to develop their skills, confidence, and discipline through structured athletic programs.
            </p>

            <p>
              We conduct regular weekday and weekend cricket coaching programs for rural children, engaging them in positive and constructive sports activities. These initiatives play a vital role in preventing children and youth from falling into harmful habits such as drug and alcohol abuse, while simultaneously promoting physical fitness, teamwork, and self-discipline.
            </p>

            <p>
              Through Florans Trust, we have connected and supported several talented players, helping them establish themselves in the field of cricket. We have successfully organized and participated in numerous cricket tournaments, including state-level and All India–level competitions, where teams representing Florans Trust have achieved notable victories. Winning several tournaments under the name of our trust stands as a proud testament to our dedication, structured training, and commitment to excellence.
            </p>

            <p>
              In addition to player development, we run structured coaching certification and training programs, supporting aspiring cricketers in gaining professional qualifications. These programs enable them to secure employment opportunities as cricket coaches in schools, academies, and sports institutions, thereby creating sustainable career pathways.
            </p>

            <p>
              Furthermore, Florans Trust strongly believes in inclusivity. We organize inclusive sports events and offer regular cricket coaching for children with special needs, ensuring that every child, regardless of physical or developmental challenges, has equal opportunities to participate in sports. Our programs are designed to help children stay active, build confidence, and grow with dignity, self-respect, and a sense of belonging.
            </p>

            <p>
              Through our continuous efforts, Florans Trust has achieved significant milestones in promoting sports education, nurturing rural talent, and building a healthier, disciplined, and empowered generation through cricket.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-content">
          <div className="gallery-header">
            <span className="gallery-label">Our Moments</span>
            <h2 className="gallery-title">Gallery</h2>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={image} alt="Cricket Training Session" />
              <div className="gallery-item-overlay"></div>
              <span className="gallery-item-caption">Training Session</span>
            </div>

            <div className="gallery-item">
              <img src={img1} alt="Tournament Victory" />
              <div className="gallery-item-overlay"></div>
              <span className="gallery-item-caption">Tournament Victory</span>
            </div>

            <div className="gallery-item">
              <img src={img2} alt="Community Event" />
              <div className="gallery-item-overlay"></div>
              <span className="gallery-item-caption">Community Event</span>
            </div>

            <div className="gallery-item">
              <img src={img3} alt="Youth Coaching" />
              <div className="gallery-item-overlay"></div>
              <span className="gallery-item-caption">Youth Coaching</span>
            </div>

            <div className="gallery-item">
              <img src={img4} alt="Team Celebration" />
              <div className="gallery-item-overlay"></div>
              <span className="gallery-item-caption">Team Celebration</span>
            </div>

            <div className="gallery-item">
              <img src={img5} alt="Sports Day" />
              <div className="gallery-item-overlay"></div>
              <span className="gallery-item-caption">Sports Day</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
