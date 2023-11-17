import { Component, render } from 'preact'
import { nav, projects } from './global';
import './css/index.scss';
import './css/helpers.scss';
import './css/mini-tailwind.scss';
import smv from './assets/smv.jpeg'
import down from './assets/down.svg';
import { Canvas } from './canvas';

class App extends Component {
  constructor(props: any) { super(props); }

  render = () => {
    return <>
      <Canvas />
      <div class="main" id="main">
        {nav}
        <div id="pushup"></div>
        <div class="section-holder">
          <h1 class="center">Shreerang Vaidya</h1>
          <img src={smv} class="smv-pic" /><br />
          <h3>Full Stack | ML</h3>
          <span>
            Student at VESIT.
          </span>
          <div class="scroll-down">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="section-holder">
          {projects}
        </div>
        {/* TODO: footer */}
      </div>
    </>;
  }
}

render(<App />, document.getElementById('app')!);