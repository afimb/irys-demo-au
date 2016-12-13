<!DOCTYPE html>
<html>
  <head>
    <title>Irys - Démonstrateur</title>
    <link rel="stylesheet" href="${urlRootPath}node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="${urlRootPath}stylesheets/loading.css">
  </head>

  <body aurelia-app="main">
    <p class="loading-page">
      <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
      Chargement de l'application en cours...
    </p>
    <script src="${urlRootPath}scripts/vendor-bundle.js" data-main="aurelia-bootstrapper"></script>
    <script src="${urlRootPath}node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="${urlRootPath}scripts/app/stopMonitoringRequest.js"></script>
    <script src="${urlRootPath}scripts/app/stopMonitoringCard.js"></script>
    <script src="${urlRootPath}scripts/app/stopDiscoveryResponse.js"></script>
  </body>
</html>
