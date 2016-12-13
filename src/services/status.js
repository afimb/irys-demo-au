import * as tools from 'tools';

export class Status {
  constructor() {
    $('.right-panel-wrapper').show();
    localStorage.setItem('right-panel', 'check-status');
  }
  togglePanel() {
    tools.Tools.prototype.togglePanel();
  }
}
