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
    let request = new stopMonitoringRequest;
    let siri_profile = JSON.parse(localStorage.getItem(localStorage.getItem('siri-profile')));
    request.siriVersionAPI = siri_profile.version;
    request.requestorRef = siri_profile.requestor;
    let response = new stopDiscoveryResponse;
    let req_gsd = null;
    let req_gld = null;
    if(localStorage.getItem('siri-profile') != 'siri-lite') {
      req_gsd = request.getStopDiscovery();
      req_gld = request.getLineDiscovery();
    }
    request.sendRequest(req_gsd, request.handleStopDiscoveryResponse, response, null, 'stoppoints-discovery');
    request.sendRequest(req_gld, request.handleLineDiscoveryResponse, response, null, 'lines-discovery');
    localStorage.setItem('autoCompleteAlready', true);
  }
}
