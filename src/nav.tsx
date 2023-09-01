import { Component } from "preact";

import './css/nav.scss';

import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';

type URL = {
  [src: string]: string
};

const URLs: URL = {
  [linkedin]: "https://www.linkedin.com/in/shreerang-vaidya-7aa1a0269/",
  [github]: "https://github.com/s-mv/",
};

export class Nav extends Component {
  constructor(props: any) { super(props); }
  render = () => {
    return <div class="nav">
      <div class="nav-sec right" style={{ fontWeight: "bold" }}>SMV</div>
      <div class="nav-sec center">
        <div className="nav-item">HOME</div>
        <div className="nav-item">PROJECTS</div>
        <div className="nav-item">BLOG</div>
      </div>
      {/* for links */}
      <div class="nav-sec left">
        {Object.keys(URLs).map((key: string) => {
          return <a target="_blank" class="nav-item" href={URLs[key]}><img class="nav-img" src={key} /></a>;
        })}
      </div>
    </div>;
  }
}