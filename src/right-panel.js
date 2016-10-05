import * as tools from 'tools';

export class RightPanel {

  attached() {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
          isEscape = (evt.key == "Escape" || evt.key == "Esc");
      } else {
          isEscape = (evt.keyCode == 27);
      }
      if (isEscape) {
        tools.Tools.prototype.togglePanel();
      }
    };
  }

  togglePanel() {
    tools.Tools.prototype.togglePanel();
  }

  stopMonitoring() {
    localStorage.setItem('currentPanel', '#stop-monitoring-form-wrapper');
    $("#response > .panel, #fancy-response .fancy-stop-wrapper")
        .remove()

    var regEx = /^\d{8}/;

    if (regEx.exec($('#stopName').val())) {
      $("#stopId").val(
          "NINOXE:StopPoint:SPOR:" + $('#stopName').val()
              + ":LOC");
    } else if ($('#stopName').val() == "") {
      $("#stopId").val("");
    }

    if ($('#lineName').val() == "") {
      $("#lineId").val("");
    }

    var request = this.getRequestForProfile();
    var xmlRequest = request
        .getStopMonitoring('#stop-monitoring-form');
    var responseCard = new stopMonitoringCard;
    console.log(xmlRequest)
    request.sendRequest(xmlRequest,
        request.handleStopMonitoringResponse, responseCard,
        $('#stop-monitoring-form-wrapper'));
  }

  generalMessage() {
    localStorage.setItem('currentPanel', '#get-general-message-form-wrapper');
    var regEx = /^\d{8}/;

    if (regEx.exec($('#stopName').val())) {
      $("#stopId").val(
          "NINOXE:StopPoint:SPOR:" + $('#stopName').val()
              + ":LOC");
    } else if ($('#stopName').val() == "") {
      $("#stopId").val("");
    }

    if ($('#lineName').val() == "") {
      $("#lineId").val("");
    }

    $("#response > .panel, #fancy-response .fancy-stop-wrapper")
        .remove()
    var request = this.getRequestForProfile();
    var responseCard = new stopMonitoringCard;
    var generalMessageRequest = request
        .getGeneralMessage('#canned-requests');
    request.sendRequest(generalMessageRequest,
        request.handleGeneralMessageResponse, responseCard,
        $('#get-general-message-form-wrapper'));
  }

  stopDiscovery() {
    localStorage.setItem('currentPanel', '#service-discovery-form-wrapper');
    $("#response > .panel, #fancy-response .fancy-stop-wrapper")
        .remove()
    var request = this.getRequestForProfile();
    var responseCard = new stopMonitoringCard;
    var stopDscRequest = request.getStopDiscovery();
    request.sendRequest(stopDscRequest,
        request.handleStopDiscoveryResponseDisplay, responseCard,
        $('#service-discovery-form-wrapper'));
  }

  lineDiscovery() {
    localStorage.setItem('currentPanel', '#service-discovery-form-wrapper');
    $("#response > .panel, #fancy-response > fancy-stop-wrapper")
        .remove()
    var request = this.getRequestForProfile();
    var responseCard = new stopMonitoringCard;
    var lineDscRequest = request.getLineDiscovery();
    request.sendRequest(lineDscRequest,
        request.handleLineDiscoveryResponseDisplay, responseCard,
        $('#service-discovery-form-wrapper'));
  }

  checkStatus() {
    localStorage.setItem('currentPanel', '#check-status-form-wrapper');
    $("#response > .panel, #fancy-response .fancy-stop-wrapper").remove();
    var request = this.getRequestForProfile();
    var responseCard = new stopMonitoringCard;
    var checkStatusRequest = request.getCheckStatus();
    request.sendRequest(checkStatusRequest,
        request.handleCheckStatusResponse, responseCard,
        $('#check-status-form-wrapper'));
  }

  xmlFormWrapper() {
    localStorage.setItem('currentPanel', '#stop-monitoring-form-wrapper');
    $('#stop-monitoring-form-wrapper').removeClass('i-m-there');
    $('#stop-monitoring-xml-form-wrapper').addClass('i-m-there');
  }

  smartRequest() {
    $("#response > .panel, #fancy-response > fancy-stop-wrapper")
        .remove();

    var dataForRequest = $("#xml-request-textarea").val();
    var request = new stopMonitoringRequest;
    var responseCard = new stopMonitoringCard;

    request.sendRequest(dataForRequest,
        request.handleStopMonitoringResponse, responseCard,
        $('#stop-monitoring-xml-form-wrapper'));
  }

  vueView(target) {
    $('#response-wrapper').find('.i-m-there').removeClass('i-m-there');
    $('#' + target + 'response-panel-wrapper').addClass('i-m-there');
  }

  goBack() {
    $('#right-panel-wrapper').find('.i-m-there').each(function(index, el) {
      $(el).removeClass('i-m-there');
    });
    this.superToggle();
  }

  superToggle() {
    var target = localStorage.getItem('currentPanel');
    if ($(target).hasClass('i-m-there')) {
      $(target).removeClass('i-m-there');
    }  else {
      $(target).addClass('i-m-there');
    }
  }

  resetStopId(event) {
    var parent = $(event.target).closest('form');
    parent.find('#stopId').val('');
    parent.find('#stopName').val('');
  }

  resetDestinationId(event) {
    var parent = $(event.target).parentsUntil('form')
    parent.find('#destinationId').val('');
    parent.find('#destinationName').val('');
  }

  resetLineId(event) {
    var parent = $(event.target).parentsUntil('form')
    parent.find('#lineId').val('');
    parent.find('#lineName').val('');
  }

  getRequestForProfile() {
    var request = new stopMonitoringRequest;
    var siri_profile = JSON.parse(localStorage.getItem(localStorage.getItem('siri-profile')));
    request.siriVersionAPI = siri_profile.version;
    request.requestorRef = siri_profile.requestor;
    return request;
  }
}
