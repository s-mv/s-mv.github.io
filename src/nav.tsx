import { Component } from "preact";

import './css/nav.scss';

import linkedin from './assets/linkedin.svg';
import github from './assets/linkedin.svg';

type URL = {
  [src: string]: string
};

const URLs: URL = {
  [linkedin]: "https://www.linkedin.com/in/shreerang-vaidya-7aa1a0269/",
  [github]: "https://github.com/s-mv/",
}


export class Nav extends Component {
  constructor(props: any) { super(props); }
  render = () => {


    return <>
      <div class="nav-sec right"></div>
      <div class="nav-sec center"></div>
      {/* for links */}
      <div class="nav-sec left">
        {Object.keys(URLs).map((key: string) => {
          return <a class="nav-item" href={URLs[key]}><img class="nav-img" src={key} /></a>;
        })}
      </div >
    </>;
  }
}