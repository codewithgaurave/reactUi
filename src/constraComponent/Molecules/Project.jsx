import React, { useState } from 'react';
import './Project.css';

const projects = [
  { id: 1, category: 'Commercial', image: 'https://demo.themefisher.com/constra-bootstrap/images/projects/project1.jpg', alt: 'Commercial project' },
  { id: 2, category: 'Education', image: 'https://demo.themefisher.com/constra-bootstrap/images/projects/project2.jpg', alt: 'Education project' },
  { id: 3, category: 'Government', image: 'https://demo.themefisher.com/constra-bootstrap/images/projects/project3.jpg', alt: 'Government project' },
  { id: 4, category: 'Infrastructure', image: 'https://demo.themefisher.com/constra-bootstrap/images/projects/project4.jpg', alt: 'Infrastructure project' },
  { id: 5, category: 'Residential', image: 'https://demo.themefisher.com/constra-bootstrap/images/projects/project5.jpg', alt: 'Residential project' },
  { id: 6, category: 'Healthcare', image: 'https://demo.themefisher.com/constra-bootstrap/images/projects/project6.jpg', alt: 'Healthcare project' },
];

const categories = ['Show All', 'Commercial', 'Education', 'Government', 'Infrastructure', 'Residential', 'Healthcare'];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('Show All');

  const filteredProjects = selectedCategory === 'Show All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="recent-projects-section">
      <h2 className="section-title-pr">WORK OF EXCELLENCE</h2>
      <h3 className="section-subtitle">RECENT PROJECTS</h3>

      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.alt} className="project-image" />
          </div>
        ))}
      </div>

      <div className="view-all-projects">
        <button className="view-all-button">VIEW ALL PROJECTS</button>
      </div>
    </div>
  );
};

export default Project;
