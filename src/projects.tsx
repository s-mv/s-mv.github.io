import { Component } from "preact";

import './css/projects.scss';
import projectsObj from './data/projects.json';
import experimentsObj from './data/experiments.json';
import { Card } from "./card";

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
    return <div class="projects">
      <h2>projects</h2>
      <div class="projects-container">
        {projects.map((v) => {
          return <Card>
            <h3>
              <a target="_blank" href={v.link}>
                {v.name}{v.WIP ?? <aside>&nbsp;(WIP)</aside>}
              </a>
            </h3>
            {v.desc}<br />
            <span>
              link:&nbsp;<a target="_blank" href={v.link}>{v.link}</a>
            </span>
          </Card>;
        })}
      </div>
      <h2>more bytes of code</h2>
      The less impressive of my "projects" and experiments.
      <div class="projects-container">
        {experiments.map((v) => {
          return <Card>
            <h3>
              <a target="_blank" href={v.link}>
                {v.name}{v.WIP ?? <aside>&nbsp;(WIP)</aside>}
              </a>
            </h3>
            {v.desc}<br />
            <span>
              link:&nbsp;<a target="_blank" href={v.link}>{v.link}</a>
            </span>
          </Card>;
        })}
      </div>
    </div>;
  }
}