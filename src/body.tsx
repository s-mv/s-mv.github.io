import { Component } from "preact";
import { projects } from "./global";

import smv from './assets/smv.jpeg'
import { socials } from "./socials";
import { Projects } from "./projects";

export enum PageType { Tech, Me };
export class Body extends Component<{}, { page: PageType }> {
  constructor(props: any) {
    super(props);
    this.state = { page: PageType.Tech };
  }

  public switchPageType = (type: PageType) => {
    this.setState({ page: type });
  }

  render = () => {
    return <>
      <div id="pushup"></div>
      {this.state.page == PageType.Tech
        ? <>
          <div class="section-holder">
            <h1 class="center">Shreerang Vaidya</h1>
            <img src={smv} class="smv-pic" /><br />
            <h3>Full Stack | ML</h3>
            <h3 class="socials">
              {Object.keys(socials).map((key: string) => {
                return <a target="_blank" style={{ margin: ".5rem" }} href={socials[key]}><img class="nav-img" src={key} /></a>;
              })}
            </h3>
            <span>Student at VESIT.</span>
            <div class="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="section-holder">
            <Projects ref={projects} />
          </div></>
        : <>
          <div class="section-holder">
            <h2 class="center">About Me</h2>
            <div>Hello, world.</div>
            <div>This page is still under construction. I'm happy that people are still visiting, though!</div>
          </div>
        </>
      }
    </>;
  }
}