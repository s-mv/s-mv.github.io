import { Component, render } from 'preact'
// import { Nav } from './nav';

import './css/main.scss';

class App extends Component {
  constructor(props: any) { super(props); }

  render = () => {
    return <div className="main">
      {/* <Nav /> */}
      Hello, world!
    </div>;
  }
}

render(<App />, document.getElementById('app')!);