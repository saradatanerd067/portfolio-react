import React, { useEffect } from 'react';
import './Skills.css';

function Skills() {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-percent');
      bar.style.width = `${width}%`;
    });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skill-list">
          <div className="skill">
            <span className="skill-name">HTML</span>
            <div className="progress-bar">
              <div className="progress" data-percent="90"></div>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">CSS</span>
            <div className="progress-bar">
              <div className="progress" data-percent="85"></div>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">JavaScript</span>
            <div className="progress-bar">
              <div className="progress" data-percent="80"></div>
            </div>
          </div>
          <div className="skill">
            <span className="skill-name">React.js</span>
            <div className="progress-bar">
              <div className="progress" data-percent="75"></div>
            </div>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </section>
  );
}

export default Skills;


