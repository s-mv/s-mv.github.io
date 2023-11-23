import { Component, RefObject, createRef } from "preact";

import './css/nav.scss';

import { socials } from "./socials";
import { body } from "./global";
import { PageType } from "./body";

import sun from './assets/sun.svg';
import moon from './assets/moon.svg';

export class Nav extends Component<{}, { dark: boolean }> {
  techRef: RefObject<HTMLAnchorElement>;
  meRef: RefObject<HTMLAnchorElement>;
  constructor(props: any) {
    super(props);
    this.techRef = createRef();
    this.meRef = createRef();
    this.state = { dark: true };
  }

  switchTechMe = (e: any) => {
    e.target.classList.add("current");
    if (e.target.id == "tech") {
      this.meRef.current?.classList.remove("current");
      body.current?.switchPageType(PageType.Tech);
    } else {
      this.techRef.current?.classList.remove("current");
      body.current?.switchPageType(PageType.Me);
    }
  }

  switchTheme = () => {
    document.documentElement.classList.toggle("light-theme");
    this.setState({ dark: !this.state.dark });
  }

  render = () => {
    return <div class="nav-container">
      <nav>
        <section class="right nav-item" style={{ fontWeight: "bold" }}>
          <a href="/blog">BLOG</a>
        </section>
        <section class="center">
          <a class="nav-item current" id="tech" ref={this.techRef} onClick={this.switchTechMe}>TECH</a>
          <a class="nav-item" ref={this.meRef} onClick={this.switchTechMe}>ME</a>
        </section>
        {/* for links */}
        <section class="left">
          {Object.keys(socials).map((key: string) => {
            return <a target="_blank" class="nav-item" href={socials[key]}><img class="nav-img" src={key} /></a>;
          })}
          <span className="nav-item" onClick={this.switchTheme}>
            <img class="nav-img" src={this.state.dark ? sun : moon}></img>
          </span>
        </section>
      </nav>
    </div>;
  }
}
