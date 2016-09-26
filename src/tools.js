export class Tools {
  togglePanel() {
    $('#right-panel-wrapper > #forms-wrapper > *').removeClass('i-m-there');
    $('#' + localStorage.getItem('right-panel') + '-form-wrapper').addClass('i-m-there');
    $('.right-panel-wrapper').toggleClass('open');
    if(localStorage.getItem('autoCompleteAlready') == 'false')
      Tools.autoComplete();
  }

  static autoComplete() {
    var request = new stopMonitoringRequest;
    request.siriVersionAPI = $("#siri-server-value").attr('data-version');
    request.requestorRef = $("#siri-server-value").attr('data-requestor');
    var response = new stopDiscoveryResponse;
    request.sendRequest(request.getStopDiscovery(), request.handleStopDiscoveryResponse, response);
    request.sendRequest(request.getLineDiscovery(), request.handleLineDiscoveryResponse, response);
    localStorage.setItem('auto-complete-already', true);
  }
}
