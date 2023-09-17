import { Component } from "preact";

export class Card extends Component {
  constructor(props: any) { super(props); }

  render = () => {
    return <div class="card-holder">{this.props.children}</div>
  }
}