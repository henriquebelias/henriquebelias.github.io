import React from 'react';
import { SkillsContaier, SkillsGrid } from './Skills.sc';

const Skills = () => (
  <SkillsContaier>
    <h3>Habilidades</h3>
    <SkillsGrid>
      <div>
        <h4>Básico</h4>
        <p>CSS</p>
        <p>SASS</p>
      </div>
      <div>
        <h4>Intermediário</h4>
        <p>HTML</p>
        <p>Javascript</p>
        <p>React</p>
      </div>
    </SkillsGrid>
  </SkillsContaier>
);

export default Skills;
