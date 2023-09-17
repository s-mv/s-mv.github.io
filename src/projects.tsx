import { Component } from "preact";

import './css/projects.scss';
import projectsObj from './data/projects.json';
import experimentsObj from './data/experiments.json';

type project = {
  WIP: boolean,
  name: string,
  desc: string,
  link: string,
};

const projects: [project] = Object.assign(projectsObj);
const experiments: [project] = Object.assign(experimentsObj);

export class Projects extends Component {
  constructor(props: any) {
    super(props);
  }

  render = () => {
    return <div class="proj">
      <h2>projects</h2>
      <div class="projects-container">
        {projects.map((v) => {
          return <section>
            <h3>
              <a target="_blank" href={v.link}>
                {v.name}{v.WIP ?? <aside>&nbsp;(WIP)</aside>}
              </a>
            </h3>
            {v.desc}<br />
            <span>
              link:&nbsp;<a target="_blank" href={v.link}>{v.link}</a>
            </span>
          </section>;
        })}
      </div>
      <h2>more bytes of code</h2>
      The less impressive of my "projects" and experiments.
      <div class="projects-container">
        {experiments.map((v) => {
          return <section>
            <h3>
              <a target="_blank" href={v.link}>
                {v.name}{v.WIP ?? <aside>&nbsp;(WIP)</aside>}
              </a>
            </h3>
            {v.desc}<br />
            <span>
              link:&nbsp;<a target="_blank" href={v.link}>{v.link}</a>
            </span>
          </section>;
        })}
      </div>
    </div>;
  }
}