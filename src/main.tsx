import { Component, render } from 'preact'
import { nav, body } from './global';
import './css/index.scss';
import './css/helpers.scss';
import './css/mini-tailwind.scss';

import { Canvas } from './canvas';
import { Nav } from './nav';
import { Body } from './body';

export class App extends Component {
  constructor(props: any) { super(props); }
  
  public reload = () => {
    this.setState({});
  }

  render = () => {
    return <>
      <Canvas />
      <div class="main" id="main">
        <Nav ref={nav} />
        <Body ref={body} />
        {/* TODO: footer */}
      </div>
    </>;
  }
}

render(<App />, document.getElementById('app')!);