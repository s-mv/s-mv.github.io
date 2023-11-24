import { Component, RefObject, createRef } from "preact";

import './css/nav.scss';

import { socials } from "./socials";
import { body } from "./global";
import { PageType } from "./body";

import sun from './assets/sun.svg';
import moon from './assets/moon.svg';

export class Nav extends Component<{}, { light: boolean }> {
  techRef: RefObject<HTMLAnchorElement>;
  meRef: RefObject<HTMLAnchorElement>;
  constructor(props: any) {
    super(props);
    this.techRef = createRef();
    this.meRef = createRef();
    this.state = { light: localStorage.getItem("smvPortfolioSiteThemeLight") == "1" };
    if (this.state.light) {
      document.documentElement.classList.toggle("light-theme");
    }
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
    window.localStorage.setItem("smvPortfolioSiteThemeLight", this.state.light ? "1" : "");
    console.log(localStorage.getItem("smvPortfolioSiteThemeLight"));
    this.setState({ light: !this.state.light });
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
          <span className="nav-item" onClick={this.switchTheme}>
            <img class="nav-img" src={this.state.light ? moon : sun}></img>
          </span>
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
