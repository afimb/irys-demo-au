import * as tools from 'tools';

export class GeneralMessage {
  constructor() {
    $('.right-panel-wrapper').show();
    $('.fancy-view').show();
    localStorage.setItem('right-panel', 'get-general-message');
  }
  togglePanel() {
    tools.Tools.prototype.togglePanel();
  }
}
