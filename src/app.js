export class App {
  configureRouter(config, router) {
    config.title = 'Irys - Démonstrateur';
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
