import { Component } from "preact";

import './css/nav.scss';

import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import { projects } from "./global";

type URL = {
  [src: string]: string
};

const URLs: URL = {
  [linkedin]: "https://www.linkedin.com/in/shreerang-vaidya-7aa1a0269/",
  [github]: "https://github.com/s-mv/",
};

export class Nav extends Component {
  constructor(props: any) {
    super(props);
  }

  render = () => {
    return <div class="nav">
      <section class="right" style={{ fontWeight: "bold" }}>SMV</section>
      <section class="center">
        <div className="nav-item" onClick={() => { this.setState({ page: 'home' }) }}>HOME</div>
        <div className="nav-item" onClick={() => { this.setState({ page: 'projects' }) }}>PROJECTS</div>
        <div className="nav-item">BLOG</div>
      </section>
      {/* for links */}
      <section class="left">
        {Object.keys(URLs).map((key: string) => {
          return <a target="_blank" class="nav-item" href={URLs[key]}><img class="nav-img" src={key} /></a>;
        })}
      </section>
    </div>;
  }
}