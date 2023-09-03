import { Component, render } from 'preact'

import './css/main.scss';
import { nav, projects } from './global';

class App extends Component {
  constructor(props: any) { super(props); }

  render = () => {
    return <div className="main">
      {nav}
      <div class="body">
        <h1>Hello, world!</h1>
        Welcome to my <strong>portfolio</strong>!
        <section>
          <h2>myself</h2>
          <span>
            I'm Shreerang Vaidya, better known online as <strong>smv</strong>.<br />
            <br />
            Currently a sophomore studying <strong>computer science</strong> at Vivekanand
            Education Society's Institute of Technology (VESIT).<br />
            <br />
            {/* <a>resume</a> */}
          </span>
        </section>
        {projects}
      </div>
      {/* TODO: footer */}
    </div>;
  }
}

render(<App />, document.getElementById('app')!);