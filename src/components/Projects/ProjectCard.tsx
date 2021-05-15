import React from 'react';
import { CardContainer } from './ProjectCard.sc';

interface Props {
  url: string,
  img: string,
  name: string,
}

const ProjectCard = ({ url, img, name }: Props ) => (
  <CardContainer>
    <img src={ img } alt={`Project ${name}`} />
    <p>{ name }</p>
    <a href={url} target="_blank" rel="noreferrer">Ver o projeto</a>
  </CardContainer>
);

export default ProjectCard;
