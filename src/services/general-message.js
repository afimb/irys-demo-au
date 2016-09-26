import * as tools from 'tools';

export class GeneralMessage {
  constructor() {
    $('.right-panel-wrapper').show();
    localStorage.setItem('right-panel', 'get-general-message');
  }
  togglePanel() {
    tools.Tools.prototype.togglePanel();
  }
}
