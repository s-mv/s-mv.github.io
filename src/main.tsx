import { Component, render } from 'preact'
import { nav, projects } from './global';
import './css/main.scss';
import smv from './assets/smv.jpeg'
import { Section } from './section';

class App extends Component {
  constructor(props: any) { super(props); }

  render = () => {
    return <div class="main">
      {nav}
      <div class="body">
        <Section>
          <h1>Shreerang Vaidya</h1>
          <img src={smv} class="smv-pic" /><br />
          <h3>
            Full Stack | ML
          </h3>
          <h2>myself</h2>
          <span>
            I'm Shreerang Vaidya, better known online as <strong>smv</strong>.<br />
            Currently a sophomore studying <strong>computer science</strong> at Vivekanand
            Education Society's Institute of Technology (VESIT).<br />
            <br />
            {/* <a>resume</a> */}
          </span>
        </Section>
        <Section>
          {projects}
        </Section>
      </div>
      {/* TODO: footer */}
    </div>;
  }
}

render(<App />, document.getElementById('app')!);