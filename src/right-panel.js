import * as tools from 'tools';

export class RightPanel {

  attached() {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      console.log(evt);
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

    var request = new stopMonitoringRequest;
    request.siriVersionAPI = $("#siri-server-value").attr(
        'data-version');
    request.requestorRef = $("#siri-server-value").attr(
        'data-requestor');
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
    var request = new stopMonitoringRequest;
    var node = $("#siri-server-value");
    request.siriVersionAPI = node.attr('data-version');
    request.requestorRef = node.attr('data-requestor');
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
    var request = new stopMonitoringRequest;
    request.siriVersionAPI = $("#siri-server-value").attr(
        'data-version');
    request.requestorRef = $("#siri-server-value").attr(
        'data-requestor');
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
    var request = new stopMonitoringRequest;
    request.siriVersionAPI = $("#siri-server-value").attr(
        'data-version');
    request.requestorRef = $("#siri-server-value").attr(
        'data-requestor');
    var responseCard = new stopMonitoringCard;
    var lineDscRequest = request.getLineDiscovery();
    request.sendRequest(lineDscRequest,
        request.handleLineDiscoveryResponseDisplay, responseCard,
        $('#service-discovery-form-wrapper'));
  }

  checkStatus() {
    localStorage.setItem('currentPanel', '#check-status-form-wrapper');
    $("#response > .panel, #fancy-response .fancy-stop-wrapper").remove();
    var request = new stopMonitoringRequest;
    request.siriVersionAPI = $("#siri-server-value").attr('data-version');
    request.requestorRef = $("#siri-server-value").attr('data-requestor');
    var responseCard = new stopMonitoringCard;
    var checkStatusRequest = request.getCheckStatus();
    request.sendRequest(checkStatusRequest,
        request.handleCheckStatusResponse, responseCard,
        $('#check-status-form-wrapper'));
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

  superToggle(el) {
    var target = localStorage.getItem('currentPanel');
    if ($(target).hasClass('i-m-there')) {
      $(target).removeClass('i-m-there');
    }  else {
      $(target).addClass('i-m-there');
    }
  }
}
