import { Component, render } from 'preact'

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render = () => {
    return <>Initial commit!</>;
  }
}

render(<App />, document.getElementById('app')!);