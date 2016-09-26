import * as tools from 'tools';

export class Discovery {
  constructor() {
    $('.right-panel-wrapper').show();
    localStorage.setItem('right-panel', 'service-discovery');
  }
  togglePanel() {
    tools.Tools.prototype.togglePanel();
  }
}
