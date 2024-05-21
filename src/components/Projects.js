import React from 'react';
import './Projects.css';
import projectImage from '../assets/project.jpg';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <img src={projectImage} alt="TravelTrove" />
            <h3>TravelTrove</h3>
            <p>A travel blog featuring destination guides, travel tips, and adventure stories from around the world.</p>
          </div>
          <div className="project">
            <img src={projectImage} alt="HealthHub" />
            <h3>HealthHub</h3>
            <p>A wellness website offering resources, articles, and tips for maintaining a healthy lifestyle.</p>
          </div>
          <div className="project">
            <img src={projectImage} alt="PixelPulse" />
            <h3>PixelPulse</h3>
            <p>A creative portfolio showcasing digital artwork, photography, and design projects.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
}

export default Projects;


