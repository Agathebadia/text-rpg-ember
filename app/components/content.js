import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContentComponent extends Component {
  @tracked state = {};
  @tracked currentTextNode = null;

  constructor() {
    super(...arguments);
    this.startGame();
  }

    @action
  startGame() {
    this.state = {};
    this.showTextNode(1);
  }

    @action
  showTextNode(id) {
    const node = this.args.story.find(n => n.id === id);
    this.currentTextNode = node;
  }

    @action
  selectOption(option) {
    if (option.nextText <= 0) {
      this.startGame();
      return;
    }
    this.state = { ...this.state, ...option.setState };
    this.showTextNode(option.nextText);
  }

get visibleOptions() {
  if (!this.currentTextNode) return [];
  return this.currentTextNode.options.filter(option =>
    !option.requiredState || option.requiredState(this.state)
  );
}
}
