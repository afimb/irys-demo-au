import * as tools from 'tools';

export class StopMonitoring {
  constructor() {
    $('.right-panel-wrapper').show();
    localStorage.setItem('right-panel', 'stop-monitoring');
  }
  togglePanel() {
    tools.Tools.prototype.togglePanel();
  }
}
