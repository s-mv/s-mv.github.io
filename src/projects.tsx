import { Component } from "preact";

import './css/projects.scss';

type project = {
  WIP: boolean,
  name: string,
  desc: string,
  link: string,
};

let projects: project[] = [
  // {
  //   WIP: true,
  //   name: "smvcc",
  //   desc: "A C compiler written in C. Lots TODO.",
  //   link: "https://github.com/s-mv/smvcc"
  // },
];

export class Projects extends Component {
  constructor(props: any) {
    super(props);
  }

  render = () => {
    return <div class="proj">
      <h2>projects</h2>
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
    </div>;
  }
}