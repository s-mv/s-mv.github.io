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
  constructor(props: any) {
    super(props);
  }

  render = () => {
    return <div class="nav-container">
      <nav>
        <section class="right logo" style={{ fontWeight: "bold" }}>SMV</section>
        <section class="center">
          <a className="nav-item">HOME</a>
          <a className="nav-item">PROJECTS</a>
          <a className="nav-item">BLOG</a>
        </section>
        {/* for links */}
        <section class="left">
          {Object.keys(URLs).map((key: string) => {
            return <a target="_blank" class="nav-item" href={URLs[key]}><img class="nav-img" src={key} /></a>;
          })}
        </section>
      </nav>
    </div>;
  }
}