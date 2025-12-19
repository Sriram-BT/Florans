import "../Styles/FounderSection.css";
import founderImg from '../Assets/founderImg.png'
import jo from '../Assets/Jo.jpg'

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="founder-left">
        <h1 className="founder-title">
          Our <span>Founder</span>
        </h1>

        <h2 className="founder-name">D. JO MATHEW</h2>

        <p className="founder-text">
          With a deep commitment to community service, she started this trust 
          to support children, women, and underserved families. Her vision is 
          to build a society where everyone has equal access to dignity, care, 
          and opportunities for a better future.
        </p>

        
      </div>

      <div className="founder-right">
        <img src={jo} alt="Founder" className="founder-image" />
      </div>
    </section>
  );
}
