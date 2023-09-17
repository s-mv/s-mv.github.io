import { Component } from "preact";
import './css/section.scss';


export class Section extends Component {
  constructor(props: any) {
    super(props);
  }
  render = () => {
    return <div class="section-holder">
      <div className="section-content">
        {this.props.children}
      </div>
    </div>;
  }
}