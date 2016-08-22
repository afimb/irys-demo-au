export class App {
  configureRouter(config, router) {
    config.title = 'Irys - Démonstrateur';
    config.map([
      { route: ['', 'home'], name: 'home',  moduleId: './home',  nav: true, title: 'Accueil' },
      { route: 'autres-services', name: 'services_others', moduleId: './services/others', nav: true, title: 'Autres services' }
    ]);

    this.router = router;
  }
}
