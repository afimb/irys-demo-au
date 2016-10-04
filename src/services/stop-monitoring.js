import * as tools from 'tools';

export class StopMonitoring {
  constructor() {
    $('.right-panel-wrapper').show();
    $('.fancy-view').show();
    localStorage.setItem('right-panel', 'stop-monitoring');
  }
  togglePanel() {
    tools.Tools.prototype.togglePanel();
  }
}
