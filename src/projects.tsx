import { Component, RefObject, createRef } from "preact";

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
  linkshower: RefObject<HTMLAnchorElement>;

  constructor(props: any) {
    super(props);
    this.linkshower = createRef();
  }


  onmouse = (inside: boolean) => {
    if (inside)
      this.linkshower.current!.classList.add("visible");
    else
      this.linkshower.current!.classList.remove("visible");
  }

  onhover = (link: string, x: number, y: number) => {
    this.linkshower.current!.style.left = `${x - 32}px`;
    this.linkshower.current!.style.top = `${y - 32}px`;
    this.linkshower.current!.href = link;
  }

  render = () => {
    return <div class="projects">
      <a class="linkshower" ref={this.linkshower}>view</a>
      <h2>projects</h2>
      <div class="projects-container">
        {projects.map((v) => {
          return <Card>
            <div class="hoverme"
              onMouseEnter={() => { this.onmouse(true) }}
              onMouseMove={e => { this.onhover(v.link, e.clientX, e.clientY) }}
              onMouseLeave={() => { this.onmouse(false) }}
            >
              <h3>
                <a target="_blank" href={v.link}>
                  {v.name}{v.WIP ?? <aside>&nbsp;(WIP)</aside>}
                </a>
              </h3>
              <span class="desc">
                {v.desc}
              </span>
            </div>
          </Card>;
        })}
      </div>
      <h2>more bytes of code</h2>
      The less impressive of my "projects" and experiments.
      <div class="projects-container">
        {experiments.map((v) => {
          return <Card>
            <div class="hoverme"
              onMouseEnter={() => { this.onmouse(true) }}
              onMouseMove={e => { this.onhover(v.link, e.clientX, e.clientY) }}
              onMouseLeave={() => { this.onmouse(false) }}
            >
              <h3>
                <a target="_blank" href={v.link}>
                  {v.name}{v.WIP ?? <aside>&nbsp;(WIP)</aside>}
                </a>
              </h3>
              <span class="desc">
                {v.desc}
              </span>
            </div>
          </Card>;
        })}
      </div>
    </div>;
  }
}