import { Component } from "preact";

import './css/nav.scss';

import { socials } from "./socials";

export class Nav extends Component {
  constructor(props: any) {
    super(props);
  }

  render = () => {
    return <div class="nav-container">
      <nav>
        <section class="right nav-item" style={{ fontWeight: "bold" }}>
          <a href="/blog">BLOG</a>
        </section>
        <section class="center">
          <a class="nav-item current">TECH</a>
          <a class="nav-item">ME</a>
        </section>
        {/* for links */}
        <section class="left">
          {Object.keys(socials).map((key: string) => {
            return <a target="_blank" class="nav-item" href={socials[key]}><img class="nav-img" src={key} /></a>;
          })}
        </section>
      </nav>
    </div>;
  }
}