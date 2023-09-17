import { Component, render } from 'preact'
import { nav, projects } from './global';
import './css/index.scss';
import './css/main.scss';
import './css/helpers.scss';
import './css/mini-tailwind.scss';
import smv from './assets/smv.jpeg'
import { Section } from './section';

class App extends Component {
  constructor(props: any) { super(props); }

  render = () => {
    return <div class="main">
      {nav}
      <div class="body">
        <Section>
          <h1 class="center">Shreerang Vaidya</h1>
          <img src={smv} class="smv-pic" /><br />
          <h3>Full Stack | ML</h3>
          <span>
            Student at VESIT.
          </span>
        </Section>
        <Section>
          {projects}
        </Section>
      </div >
      {/* TODO: footer */}
    </div >;
  }
}

render(<App />, document.getElementById('app')!);