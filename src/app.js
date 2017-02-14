import environment from './environment';
import configSrv from './config';

export class App {
  activate() {
    try {
      let listServer = [];
      for (const elem of configSrv.servers) {
        localStorage.setItem(elem.id, JSON.stringify(elem));
        listServer.push(elem.id);
      }
      localStorage.setItem('siri-servers', JSON.stringify(listServer));
    } catch (e) {
      console.error(e);
    }
  }

  attached() {
    if (localStorage.getItem('siri-profile') === null) {
      localStorage.setItem('siri-profile', document.getElementById('siri-profile').value);
    }
    if (localStorage.getItem('siri-profile') === 'siri-lite') {
      $('[data-hide-for="siri-lite"]').hide();
    } else {
      $('[data-hide-for="siri-lite"]').show();
    }
  }

  configureRouter(config, router) {
    config.title = 'Irys - Démonstrateur';
    config.options.pushState = true;
    config.options.root = environment.urlRootPath;
    config.map([
      { route: ['', 'home'], name: 'home',  moduleId: './home',  nav: true, title: 'Accueil' },
      { route: 'stop-monitoring', name: 'stopMonitoring', moduleId: './services/stop-monitoring', nav: true, title: 'Service Stop Monitoring' },
      { route: 'general-message', name: 'generalMessage', moduleId: './services/general-message', nav: true, title: 'Service General Message' },
      { route: 'discovery', name: 'discovery', moduleId: './services/discovery', nav: true, title: 'Service Discovery' },
      { route: 'status', name: 'status', moduleId: './services/status', nav: true, title: 'Check Status' },
      { route: 'autres-services', name: 'servicesOthers', moduleId: './services/others', nav: true, title: 'Autres services' }
    ]);

    this.router = router;
    localStorage.setItem('autoCompleteAlready', false);
    localStorage.removeItem('currentPanel');
  }
}
