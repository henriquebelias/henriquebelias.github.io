import React from 'react';
import ProjectCard from '../ProjectCard';
import './styles.scss';

const Feature = () => (
  <>
    <div className="feature-projects">
      <h1>Projetos</h1>
      <div className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </>
);

export default Feature;
