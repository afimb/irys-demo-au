export class Tools {
  togglePanel() {
    $('#right-panel-wrapper > #forms-wrapper > *').removeClass('i-m-there');
    $('#response-wrapper > *').removeClass('i-m-there');
    $('#' + localStorage.getItem('right-panel') + '-form-wrapper').addClass('i-m-there');
    $('.right-panel-wrapper').toggleClass('open');
    if(localStorage.getItem('autoCompleteAlready') == 'false')
      Tools.autoComplete();
  }

  static autoComplete() {
    var request = new stopMonitoringRequest;
    var siri_profile = JSON.parse(localStorage.getItem('siri-' + localStorage.getItem('siri-profile')));
    request.siriVersionAPI = siri_profile.version;
    request.requestorRef = siri_profile.requestor;
    var response = new stopDiscoveryResponse;
    request.sendRequest(request.getStopDiscovery(), request.handleStopDiscoveryResponse, response);
    request.sendRequest(request.getLineDiscovery(), request.handleLineDiscoveryResponse, response);
    localStorage.setItem('autoCompleteAlready', true);
  }
}
