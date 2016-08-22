define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Irys - Démonstrateur';
      config.map([{ route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Accueil' }, { route: 'autres-services', name: 'services_others', moduleId: './services/others', nav: true, title: 'Autres services' }]);

      this.router = router;
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('footer-view',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FooterView = exports.FooterView = function FooterView() {
    _classCallCheck(this, FooterView);
  };
});
define('home',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./elements/loading-indicator']);
  }
});
define('services/others',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Others = exports.Others = function Others() {
    _classCallCheck(this, Others);
  };
});
define('resources/elements/loading-indicator',['exports', 'nprogress', 'aurelia-framework'], function (exports, _nprogress, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LoadingIndicator = undefined;

  var nprogress = _interopRequireWildcard(_nprogress);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var LoadingIndicator = exports.LoadingIndicator = (0, _aureliaFramework.decorators)((0, _aureliaFramework.noView)(['nprogress/nprogress.css']), (0, _aureliaFramework.bindable)({ name: 'loading', defaultValue: false })).on(function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _class.prototype.loadingChanged = function loadingChanged(newValue) {
      if (newValue) {
        nprogress.start();
      } else {
        nprogress.done();
      }
    };

    return _class;
  }());
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./nav-bar.html\"></require>\n  <require from=\"./footer-view\"></require>\n  <require from=\"./modal-data.html\"></require>\n  <require from=\"bootstrap/css/bootstrap.min.css\"></require>\n  <require from=\"sass/layout.css\"></require>\n\n  <nav-bar router.bind=\"router\"></nav-bar>\n\n  <loading-indicator loading.bind=\"router.isNavigating\"></loading-indicator>\n  \n  <div class=\"container\">\n    <router-view></router-view>\n  </div>\n\n  <footer-view></footer-view>\n  <modal-data></modal-data>\n</template>\n"; });
define('text!check-status.html', ['module'], function(module) { module.exports = "<template>\n  <div id='check-status'>\n    <div class=\"app-wrapper\">\n      <div class=\"text-wrapper\">\n        <div class=\"explaination-text container\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h2 class=\"text-center mb-lg\">Check Status</h2>\n              <p>\n                Requête premettant de vérifier le bon fonctionnement du serveur SIRI.\n                <a href=\"#\" class=\"request-form-opener\">\n                  Accéder au formulaire\n                </a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!sass/layout.css', ['module'], function(module) { module.exports = "body {\n  padding-top: 50px; }\n\n.id-description {\n  text-align: center;\n  padding: 4px 0; }\n\nfooter {\n  margin-top: 45px;\n  padding: 20px;\n  background-color: #222;\n  color: #777;\n  font-size: 12px;\n  min-height: 200px; }\n  footer ul, footer li {\n    margin: 0;\n    padding: 0; }\n  footer li {\n    list-style: none; }\n  footer h4 {\n    color: #777; }\n  footer a {\n    color: #FFF; }\n"; });
define('text!footer-view.html', ['module'], function(module) { module.exports = "<template>\n  <footer>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <a href=\"http://www.chouette.mobi/irys/\" class=\"allow-request-action\" id=\"open-slider\">\n            <img src=\"/images/logo_afimb.jpg\" class=\"afimb-logo\">\n          </a>\n        </div>\n        <div class=\"col-md-3\">\n          <ul>\n            <li>\n              <h4>Démonstrateur</h4>\n              <ul>\n                <li>\n                  <a href=\"http://www.cecill.info/licences/Licence_CeCILL-B_V1-fr.html\" target=\"_blank\">Licence</a>\n                </li>\n                <li>\n                  <a href=\"https://github.com/afimb/irys-demo\" target=\"_blank\">Code Source</a>\n                </li>\n                <li>\n                  <a href=\"http://www.chouette.mobi/les-utilisateurs/club-utilisateur-des-outils-chouette-et-irys/\" target=\"_blank\">Club utilisateur</a>\n                </li>\n                <li>\n                  <a href=\"#myModal\" data-toggle=\"modal\" data-target=\"#myModal\">Données</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul>\n            <li>\n              <h4>Support</h4>\n              <ul>\n                <li>\n                  <a href=\"http://www.chouette.mobi/contact-support/\" target=\"_blank\">Contactez nous</a>\n                </li>\n                <li>\n                  <a href=\"http://www.chouette.mobi/club-utilisateurs/newsletter/\" target=\"newsletter\">Lettre d'information</a>\n                </li>\n                <li>\n                  <a href=\"http://forum.chouette.mobi/\" target=\"forum\">Forum</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Données</h4>\n              </div>\n              <div class=\"modal-body\">\n                Le site de démonstration utilise uniquement des données de simulation.\n                Ces données sont produites à partir d'une offre planifiée de test à laquelle sont appliqués des changements aléatoires pour simuler un état temps réel de l'offre de transport.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</template>\n"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\n  <h1>Test</h1>\n</template>"; });
define('text!modal-data.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n            aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">Données</h4>\n        </div>\n        <div class=\"modal-body\">Le site de démonstration utilise\n          uniquement des données de simulation. Ces données sont produites\n          à partir d'une offre planifiée de test à laquelle sont appliqués\n          des changements aléatoires pour simuler un état temps réel de\n          l'offre de transport.</div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\n          <span class=\"sr-only\">Toggle Navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">\n          <i class=\"fa fa-home\"></i>\n          <span>${router.title}</span>\n        </a>\n      </div>\n\n      <div class=\"collapse navbar-collapse\" id=\"skeleton-navigation-navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n            <a data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse.in\" href.bind=\"row.href\">${row.title}</a>\n          </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"loader\" if.bind=\"router.isNavigating\">\n            <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <p class=\"id-description\">\n    Le site est un démonstrateur de SIRI : la norme de données transport en commun pour les échanges temps réel.\n  </p>\n</template>\n"; });
define('text!services/discovery.html', ['module'], function(module) { module.exports = "<template>\n  <div id='service-discovery'>\n    <div class=\"app-wrapper\">\n      <div class=\"text-wrapper\">\n        <div class=\"explaination-text container\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h2 class=\"text-center mb-lg\">Service Discovery</h2>\n              <p>\n                Les services de découverte des données d'application sont\n                spécifiques au contenu correspondant des Services\n                fonctionnels SIRI. Ils permettent par exemple d'identifier\n                les arrêts gérés par un service SIRI Stop Monitoring donné ou\n                de connaître les codes de Catégorie de produit utilisés. Ces\n                services de découverte peuvent s'avérer particulièrement\n                utiles à l'heure de réduire les coûts d'approvisionnement et\n                de réapprovisionnement. En général, un service de couverture\n                implique une demande simple, parfois exécutée par le client,\n                visant à identifier les valeurs des données de référence\n                pouvant être reprises dans les demandes. Il s'agit entre\n                autres des emplacements, des points ou des ensembles de\n                données de référence (LIGNES ou DESTINATIONS prises en charge\n                par exemple). Avec SIRI, les services de découverte sont\n                facultatifs et sont traités dans le cadre d'un type de\n                service spécifique. Les données reçues sont utilisées pour\n                assurer l'autocompletion des formulaires. <a href=\"#\"\n                  class=\"request-form-opener\"> Accéder au formulaire</a>\n              </p>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!services/general-message.html', ['module'], function(module) { module.exports = "<template>\n  <div id='get-general-message'>\n    <div class=\"app-wrapper\">\n      <div class=\"text-wrapper\">\n        <div class=\"explaination-text container\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h2 class=\"text-center mb-lg\">Service General Message\n                (GM)</h2>\n              <p>\n                Le service SIRI General Message est utilisé pour échanger des\n                messages informatifs entre des individus identifiés dans un\n                format structuré libre ou arbitraire. Il permet l'envoi et la\n                révocation des messages. En plus du contenu réel, des\n                périodes de validité sont affectées aux messages. <a href=\"#\"\n                  class=\"request-form-opener\"> Accéder au formulaire</a>\n              </p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"panel panel-info mt-lg\">\n                <div class=\"panel-heading text-center\">\n                  <h3 class=\"panel-title\">Mode d'emploi</h3>\n                </div>\n                <dl class=\"panel-body\">\n                  <dt>Nom de l'arrêt</dt>\n                  <dd>Filtre les résultats pour l'arrêt choisi.\n                    Renseigner soit le nom de l'arrêt, soit son identifiant\n                    SIRI</dd>\n                  <dt>Nom de la ligne</dt>\n                  <dd>Filtre les résultats pour la ligne choisie.\n                    Renseigner soit le nom de la ligne, soit son identifiant\n                    SIRI</dd>\n                  <dt>Canal d'information</dt>\n                  <dd>Filtre les résultats pour un canal de messages</dd>\n                </dl>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!services/others.html', ['module'], function(module) { module.exports = "<template>\n  <div id='other-services-explaination-text'>\n    <div class=\"app-wrapper\">\n      <div class=\"text-wrapper\">\n        <div class=\"explaination-text container\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h2 class=\"text-center mb-lg\">Stop Timetable</h2>\n              <p>Le service SIRI Stop Timetable fournit une vue centrée\n                sur l'arrêt concernant les arrivées et les départs de\n                véhicules graphiqués à un arrêt désigné. Il peut être utilisé\n                pour réduire le volume d'informations à transmettre en temps\n                réel aux arrêts et aux affichages en tant que données de\n                référence pour le service Stop Monitoring, ainsi que pour\n                fournir un flux de données aux horaires statiques.</p>\n              <h2 class=\"text-center mb-lg\">Service Estimated Timetable</h2>\n              <p>Le service SIRI Estimated Timetable permet la diffusion\n                d'informations concernant la progression réelle des Courses\n                suivant les lignes d'un service spécifique, en détaillant les\n                heures de départ et d'arrivée prévues à des arrêts\n                spécifiques sur un itinéraire planifié. Les informations\n                comprendront des données enregistrées pour les arrêts qui ont\n                été passés, ainsi que des données prévues pour les arrêts qui\n                n'ont pas encore été passés. En outre, le service Estimated\n                Timetable permet d'annuler, d'ajouter ou de modifier des\n                Courses.</p>\n              <h2 class=\"text-center mb-lg\">Service Production\n                Timetable</h2>\n              <p>Le service SIRI Production Timetable permet la\n                diffusion d'informations concernant la progression planifiée\n                de véhicules exploitant un service spécifique, identifiée par\n                l'heure d'arrivée et de départ des véhicules à des arrêts\n                spécifiques sur un itinéraire planifié pour un jour\n                d'exploitation particulier.</p>\n              <h2 class=\"text-center mb-lg\">Service Stop Timetable</h2>\n              <p>Le service SIRI Stop Timetable fournit une vue centrée\n                sur l'arrêt concernant les arrivées et les départs de\n                véhicules graphiqués à un arrêt désigné. Il peut être utilisé\n                pour réduire le volume d'informations à transmettre en temps\n                réel aux arrêts et aux affichages en tant que données de\n                référence pour le service Stop Monitoring, ainsi que pour\n                fournir un flux de données aux horaires statiques.</p>\n              <h2 class=\"text-center mb-lg\">Service Connection\n                Timetable</h2>\n              <p>Le service SIRI Connection Timetable peut être utilisé\n                pour fournir des informations concernant les arrivées\n                planifiées d'un véhicule amenant à l'exploitant d'un service\n                partant de correspondance. L'exploitant du service partant\n                peut alors planifier comment garantir la correspondance, soit\n                par rapport au véhicule prévu soit par rapport à un véhicule\n                différent.</p>\n              <h2 class=\"text-center mb-lg\">Service Connection\n                Monitoring</h2>\n              <p>Le service SIRI Connection Monitoring est utilisé pour\n                fournir des informations concernant les arrivées planifiées\n                d'un véhicule amenant à l'exploitant d'un service partant de\n                correspondance. L'exploitant du service partant peut alors\n                gérer le service de manière à garantir la correspondance, en\n                se basant sur la marche actuelle du véhicule.</p>\n              <h2 class=\"text-center mb-lg\">Service Facility Monitoring</h2>\n              <p>Le service SIRI Facility Monitoring permet la mise à\n                jour des informations d'état des équipements et des services\n                (disponibilité des ascenseurs, des escaliers mécaniques, des\n                guichets automatiques, des palettes dans les bus, etc.)</p>\n              <h2 class=\"text-center mb-lg\">Service Situation Exchange</h2>\n              <p>Le service SIRI Situation Exchange permet de diffuser\n                des informations détaillées et structurées sur les\n                perturbations (cause et conséquences), aussi bien pour les\n                perturbations planifiées (travaux, manifestation, etc.) que\n                pour les perturbations intervenant en cours d'exploitation\n                (incident voyageur, accident sur le réseau routier,\n                conditions météo, etc.).</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!services/stop-monitoring.html', ['module'], function(module) { module.exports = "<template>\n  <div id='stop-monitoring'>\n    <div class=\"app-wrapper\">\n      <div class=\"text-wrapper\">\n        <div class=\"explaination-text container\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h2 class=\"text-center mb-lg\">Service Stop Monitoring</h2>\n              <p>\n                Le service SIRI Stop Monitoring fournit une vue centrée sur\n                l'arrêt concernant les arrivées et les départs de véhicules à\n                un arrêt désigné. Il peut être utilisé par les systèmes\n                d'affichage et les services de présentation divers en vue de\n                fournir en temps réel les informations relatives aux horaires\n                et aux courses sur les panneaux de départ et les autres\n                systèmes d'affichage au niveau de l'arrêt et à distance. <a\n                  href=\"#\" class=\"request-form-opener\">Accéder au\n                  formulaire</a>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"panel panel-info mt-lg\">\n                <div class=\"panel-heading text-center\">\n                  <h3 class=\"panel-title\">Mode d'emploi</h3>\n                </div>\n                <dl class=\"panel-body\">\n                  <dt>Nom de l'arrêt</dt>\n                  <dd>Arrêt de référence pour la requête. Renseigner soit\n                    le nom de l'arrêt, soit son identifiant SIRI</dd>\n                  <dt>Nom de la ligne</dt>\n                  <dd>Filtre les résultats pour la ligne choisie.\n                    Renseigner soit le nom de la ligne, soit son identifiant\n                    SIRI</dd>\n                  <dt>Heure</dt>\n                  <dd>Heure de début de la plage horaire observée (non\n                    renseignée = heure courante)</dd>\n                  <dt>Type d'horaires</dt>\n                  <dd>Filtre les résultats sur le type d'horaire retourné\n                    (arrivée, départ ou les 2)</dd>\n                  <dt>Intervalle Temporel</dt>\n                  <dd>Durée de la plage horaire observée (non renseignée\n                    = jusqu'à fin de service)</dd>\n                  <dt>Limite de passages</dt>\n                  <dd>Nombre de passages à l'arrêt de référence maximum\n                    affichés</dd>\n                  <dt>Minimum de passages par ligne</dt>\n                  <dd>Nombre de passages à l'arrêt de référence répartis\n                    par lignes</dd>\n                  <dt>Arrêts suivants</dt>\n                  <dd>Nombre d'arrêts au dela de l'arrêt de référence à\n                    retourner par course.</dd>\n                  <dt>Arrêt de destination</dt>\n                  <dd>Filtre les résultats pour la destination choisie.\n                    Renseigner soit le nom de l'arrêt, soit son identifiant\n                    SIRI</dd>\n                  <dt>Minimum de passages par via</dt>\n                  <dd>Nombre de passages à l'arrêt de référence répartis\n                    par alternatives de trajets</dd>\n                </dl>\n              </div>\n            </div>\n\n            <!-- <h3 class = \"text-center\">Mode d'emploi</h3>\n              <div class=\"col-sm-5 col-sm-offset-1\">\n                <h5>Nom Arrêt</h5>\n                <p>Arrêt de référence pour la requête. Renseigner soit le nom de l'arrêt, soit son id (8 chiffres)</p>\n                <h5>Nom de la ligne</h5>\n                <p>Filtre les résultats pour la ligne choisie. Renseigner soit le nom de la ligne, soit son id (8 chiffres)</p>\n                <h5>Heure</h5>\n                <p>Heure de début de la requête</p>\n                <h5>Type d'arrêt</h5>\n                <p>Filtre les résultats sur le type d'arrête sélectionné</p>\n              </div>\n\n              <div class=\"col-sm-5\">\n                <h5>Intervalle Temporel</h5>\n                <p>Filtre les résultats sur le le laps de temps voulu. Le poit de départ est soit l'instant de la requête, soit l'heure choisie</p>\n                <h5>Limite de passages</h5>\n                <p>Nombre de passages maximums affichés</p>\n                <h5>Minimum d'arrêts par ligne</h5>\n                <p>Nombre minimum d'arrêts par ligne</p>\n                <h5>Arrêts suivants</h5>\n                <p>Nombre d'onwards par arrêt</p>\n              </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map