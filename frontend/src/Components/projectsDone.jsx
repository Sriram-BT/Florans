import React from 'react';
import '../Styles/ProjectsDone.css';

export default function ProjectsDone() {

  const projects = [
    {
      id: 1,
      img: require("../Assets/interSchoolTournament.jpg"),
      title: 'Inter-School Sports Tournament',
      subtitle: 'Empowering Special Children Through Sports',
      description:
        'We organized a large-scale inter-school sports tournament dedicated exclusively to children with special needs. The event featured structured activities designed to match various ability levels, ensuring that every child could participate with confidence and excitement. Through games, guided activities, and team-based competitions, we focused on nurturing emotional strength, social interaction, and physical development. This initiative also helped families and teachers witness the unique talents of these children, promoting a culture of acceptance, inclusion, and encouragement within the community.'
    },
    {
      id: 2,
      img: require("../Assets/Project2.png"),
      title: 'Youth Awareness Campaign',
      subtitle: 'Inspiring the Next Generation',
      description:
        'Our youth awareness campaign engaged hundreds of school and college students with powerful discussions on leadership, sportsmanship, and the dangers of substance abuse. Through motivational talks, interactive workshops, and real-life stories of athletes who overcame challenges, we encouraged young individuals to build a disciplined and purpose-driven mindset. The program highlighted how sports and physical activity can help channel energy positively, reduce stress, and strengthen character. This initiative continues to inspire youth to pursue healthier lifestyles and make responsible choices.'
    },
    {
      id: 3,
      img: require("../Assets/sportMarathon.jpg"),
      title: 'Say No to Drugs Mini Marathon',
      subtitle: 'Running Towards a Healthier Future',
      description:
        'We conducted a city-wide mini marathon under the theme “Say No to Drugs,” bringing together students, families, senior citizens, and athletes. The marathon served as a community-wide movement to raise awareness about drug abuse and promote fitness-oriented living. Participants wore themed jerseys, carried awareness banners, and joined together to create a strong visual message of unity and determination. This project not only promoted physical well-being but also encouraged a collective stand against harmful habits, reminding everyone that a healthier future begins with informed choices and an active lifestyle.'
    }
  ];

  return (
    <div className="projects-container">

      {/* Left-aligned heading */}
      <div className="projects-header" style={{ textAlign: "left" }}>
        <h1 className="projects-title">Our Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>

            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <h3 className="project-subtitle">{project.subtitle}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
