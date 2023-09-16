import { Component } from "preact";
import './css/section.scss';

export class Section extends Component {
  constructor(props: any) {
    super(props);
  }

  render = () => {
    return <div class="section-holder">{this.props.children}</div>
  }
}