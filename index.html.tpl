<!DOCTYPE html>
<html>
  <head>
    <title>Irys - Démonstrateur</title>
    <link rel="stylesheet" href="${url_root_path}node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="${url_root_path}stylesheets/loading.css">
  </head>

  <body aurelia-app="main">
    <p class="loading-page">
      <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
      Chargement de l'application en cours...
    </p>
    <script src="${url_root_path}scripts/vendor-bundle.js" data-main="aurelia-bootstrapper"></script>
    <script src="${url_root_path}node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="${url_root_path}scripts/app/stopMonitoringRequest.js"></script>
    <script src="${url_root_path}scripts/app/stopMonitoringCard.js"></script>
    <script src="${url_root_path}scripts/app/stopDiscoveryResponse.js"></script>
  </body>
</html>
