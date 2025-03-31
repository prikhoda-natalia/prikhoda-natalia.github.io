import React from 'react';

import Tools from '~/components/collections/Tools';

import s from './Projects.module.scss';
import Details from '../Details';
import type { ProjectsType } from '~/types/ProjectType';

type ProjectsProps = {
  items: ProjectsType;
};

const Projects = ({ items }: ProjectsProps) => (
  <div className={s.projects}>
    {items.map((project) => (
      <div key={project.name} className={s.project}>
        <h3 className={s.name}>{project.name}</h3>
        <p className={s.description}>{project.description}</p>
        <div className={s.meta}>
          <Tools items={project.tools} />
          <Details items={project.links} />
        </div>
      </div>
    ))}
  </div>
);

export default Projects;
