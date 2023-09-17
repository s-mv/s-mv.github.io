import { Component } from "preact";
import './css/card.scss';

export class Card extends Component {
  constructor(props: any) { super(props); }

  render = () => {
    return <div class="card-holder">
      {this.props.children}
    </div>
  }
}