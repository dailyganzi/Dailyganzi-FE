// TopSection component
import Component from './Component.js';
import BackButton from './BackButton.js';

export default class TopSection extends Component {
  constructor({ titleText = '타이틀' }) {
    super({ tagName: 'section', props: { titleText } });
  }

  render() {
    this.backButton = new BackButton().el;
    this.title = document.createElement('h3');

    this.el.appendChild(this.backButton);
    this.el.appendChild(this.title);

    this.title.textContent = this.props.titleText;

    this.el.classList.add('top-section');

    // this.el.style.position = "relative";
    // this.el.style.width = "100%";
    // this.el.style.height = "50px";
    // this.el.style.marginBottom = "50px";
    // this.el.style.display = "flex";
    // this.el.style.alignItems = "center";
    // this.el.style.justifyContent = "center";

    // this.backButton.style.position = "absolute";
    // this.backButton.style.left = "10px";

    // this.title.style.textAlign = "center";
    // this.title.style.fontSize = "20px";
    // this.title.style.fontWeight = "bold";
  }
}
