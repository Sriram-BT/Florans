import "../Styles/ProgramsSection.css";

export default function ProgramsSection() {
  const programs = [
    {
      img: require("../Assets/Program1.png"),
      title: "Cricket Training",
      desc: "Helping young talents improve skills, discipline, and teamwork through structured cricket training."
    },
    {
      img: require("../Assets/Program2.png"),
      title: "Fitness Training",
      desc: "Developing physical fitness and mentoring children who aspire to play football professionally."
    },
    {
      img: require("../Assets/Program3.png"),
      title: "Special Children Sport Activities",
      desc: "Providing emotional and academic support for children requiring special educational assistance."
    },
    {
      img: require("../Assets/Program4.png"),
      title: "Community Welfare",
      desc: "Engaging in programs to uplift underserved families through food, education, and medical aid."
    },
  ];

  return (
    <div className="programs-container">
      <h2 className="programs-title">Our Programs</h2>

      <div className="programs-grid">
        {programs.map((item, index) => (
          <div key={index} className="program-card">
            <img src={item.img} alt={item.title} className="program-img" />

            <h3 className="program-card-title">{item.title}</h3>

            <p className="program-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
