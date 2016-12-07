(function() {
  window.stopMonitoringRequest = (function() {
    function stopMonitoringRequest() {}

    stopMonitoringRequest.prototype.siriVersionAPI = null;

    stopMonitoringRequest.prototype.stopId = null;

    stopMonitoringRequest.prototype.destId = null;

    stopMonitoringRequest.prototype.operatorId = null;

    stopMonitoringRequest.prototype.start = null;

    stopMonitoringRequest.prototype.preview = null;

    stopMonitoringRequest.prototype.typeVisit = null;

    stopMonitoringRequest.prototype.maxStop = null;

    stopMonitoringRequest.prototype.minStLine = null;

    stopMonitoringRequest.prototype.onWard = null;

    stopMonitoringRequest.prototype.lineId = null;

    stopMonitoringRequest.prototype.minimumStopVisitPerLineVia = null;

    stopMonitoringRequest.prototype.groupOfLinesRef = null;

    stopMonitoringRequest.prototype.destinationId = null;

    stopMonitoringRequest.prototype.perturbationType = null;

    stopMonitoringRequest.prototype.requestorRef = null;

    stopMonitoringRequest.prototype.requestTemplate = "<S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n<SOAP-ENV:Header/>\n<S:Body>\n  <ns7:GetStopMonitoring xmlns:ns2=\"http://www.siri.org.uk/siri\" xmlns:ns3=\"http://www.ifopt.org.uk/acsb\" xmlns:ns4=\"http://www.ifopt.org.uk/ifopt\" xmlns:ns5=\"http://datex2.eu/schema/2_0RC1/2_0\" xmlns:ns6=\"http://scma/siri\" xmlns:ns7=\"http://wsdl.siri.org.uk\">\n    <ServiceRequestInfo>\n      <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n      <ns2:RequestorRef>{{requestorRef}}</ns2:RequestorRef>\n      <ns2:MessageIdentifier>StopMonitoring:Test:0</ns2:MessageIdentifier>\n    </ServiceRequestInfo>\n    <Request version=\"{{siriVersion}}\">\n      <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n      <ns2:MessageIdentifier>StopMonitoring:Test:0</ns2:MessageIdentifier>\n		{{#preview}}\n      <ns2:PreviewInterval>{{preview}}</ns2:PreviewInterval>\n      {{/preview}}\n      <ns2:StartTime>{{startDate}}</ns2:StartTime>\n		{{#stopId}}\n      <ns2:MonitoringRef>{{stopId}}</ns2:MonitoringRef>\n      {{/stopId}}\n      {{#lineId}}\n      <ns2:LineRef>{{lineId}}</ns2:LineRef>\n      {{/lineId}}        \n      {{#destinationId}}\n		<ns2:DestinationRef>{{destinationId}}</ns2:DestinationRef>\n		{{/destinationId}}\n		{{#typeVisit}}\n		<ns2:StopVisitTypes>{{typeVisit}}</ns2:StopVisitTypes>\n		{{/typeVisit}}\n		{{#maxStop}}\n		<ns2:MaximumStopVisits>{{maxStop}}</ns2:MaximumStopVisits>\n		{{/maxStop}}\n      {{#minStLine}}\n      <ns2:MinimumStopVisitsPerLine>{{minStLine}}</ns2:MinimumStopVisitsPerLine>\n      {{/minStLine}}\n		{{#minimumStopVisitPerLineVia}}\n		<ns2:MinimumStopVisitsPerLineVia>{{minimumStopVisitPerLineVia}}</ns2:MinimumStopVisitsPerLineVia>\n		{{/minimumStopVisitPerLineVia}}\n      {{#onward}}\n      <ns2:MaximumNumberOfCalls>\n      	<ns2:Onwards>{{onward}}</ns2:Onwards>\n      </ns2:MaximumNumberOfCalls>\n    	{{/onward}}\n    </Request>\n    <RequestExtension/>\n  </ns7:GetStopMonitoring>\n</S:Body>\n</S:Envelope>";

    stopMonitoringRequest.prototype.stopDiscoveryTemplate = "<S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Header/>\n  <S:Body>\n    <ns7:StopPointsDiscovery xmlns:ns2=\"http://www.siri.org.uk/siri\" xmlns:ns3=\"http://www.ifopt.org.uk/acsb\" xmlns:ns4=\"http://www.ifopt.org.uk/ifopt\" xmlns:ns5=\"http://datex2.eu/schema/2_0RC1/2_0\" xmlns:ns6=\"http://scma/siri\" xmlns:ns7=\"http://wsdl.siri.org.uk\">\n      <Request version=\"{{siriVersion}}\">\n        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n        <ns2:RequestorRef>{{requestorRef}}</ns2:RequestorRef>\n        <ns2:MessageIdentifier>Discovery:Test:0</ns2:MessageIdentifier>\n      </Request>\n      <RequestExtension/>\n    </ns7:StopPointsDiscovery>\n</S:Body>\n</S:Envelope>";

    stopMonitoringRequest.prototype.lineDiscoveryTemplate = "<S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Header/>\n  <S:Body>\n    <ns7:LinesDiscovery xmlns:ns2=\"http://www.siri.org.uk/siri\"  xmlns:ns7=\"http://wsdl.siri.org.uk\">\n      <Request version=\"{{siriVersion}}\">\n        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n        <ns2:RequestorRef>{{requestorRef}}</ns2:RequestorRef>\n        <ns2:MessageIdentifier>Discovery:Test:2</ns2:MessageIdentifier>\n      </Request>\n      <RequestExtension/>\n    </ns7:LinesDiscovery>\n  </S:Body>\n</S:Envelope>";

    stopMonitoringRequest.prototype.generalMessageTemplate = "<S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Header/>\n  <S:Body>\n    <ns7:GetGeneralMessage xmlns:ns2=\"http://www.siri.org.uk/siri\" xmlns:ns3=\"http://www.ifopt.org.uk/acsb\" xmlns:ns4=\"http://www.ifopt.org.uk/ifopt\" xmlns:ns5=\"http://datex2.eu/schema/2_0RC1/2_0\" xmlns:ns7=\"http://wsdl.siri.org.uk\">\n      <ServiceRequestInfo>\n        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n        <ns2:RequestorRef>{{requestorRef}}</ns2:RequestorRef>\n        <ns2:MessageIdentifier>GeneralMessage:Test:0</ns2:MessageIdentifier>\n      </ServiceRequestInfo>\n      <Request version=\"{{siriVersion}}\">\n        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n        <ns2:MessageIdentifier>GeneralMessage:Test:0</ns2:MessageIdentifier>\n        {{#perturbationType}}\n        <ns2:InfoChannelRef>{{perturbationType}}</ns2:InfoChannelRef>\n        {{/perturbationType}}\n        <ns2:Extensions>\n          <ns2:IDFGeneralMessageRequestFilter>\n          {{#stopId}}\n            <ns2:StopPointRef>{{stopId}}</ns2:StopPointRef>\n          {{/stopId}}\n          {{#lineId}}\n            <ns2:LineRef>{{lineId}}</ns2:LineRef>\n          {{/lineId}}\n          </ns2:IDFGeneralMessageRequestFilter>\n        </ns2:Extensions>\n      </Request>\n      <RequestExtension/>\n    </ns7:GetGeneralMessage>\n  </S:Body>\n</S:Envelope>";

    stopMonitoringRequest.prototype.generalMessageTemplate_24 = "<S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Header/>\n  <S:Body>\n    <ns7:GetGeneralMessage xmlns:ns2=\"http://www.siri.org.uk/siri\" xmlns:ns3=\"http://www.ifopt.org.uk/acsb\" xmlns:ns4=\"http://www.ifopt.org.uk/ifopt\" xmlns:ns5=\"http://datex2.eu/schema/2_0RC1/2_0\" xmlns:ns6=\"http://wsdl.siri.org.uk/siri\" xmlns:ns7=\"http://wsdl.siri.org.uk\">\n      <ServiceRequestInfo>\n        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n        <ns2:RequestorRef>{{requestorRef}}</ns2:RequestorRef>\n        <ns2:MessageIdentifier>GeneralMessage:Test:0</ns2:MessageIdentifier>\n      </ServiceRequestInfo>\n      <Request version=\"{{siriVersion}}\">\n        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n        <ns2:MessageIdentifier>GeneralMessage:Test:0</ns2:MessageIdentifier>\n        {{#perturbationType}}\n        <ns2:InfoChannelRef>{{perturbationType}}</ns2:InfoChannelRef>\n        {{/perturbationType}}\n        <ns2:Extensions>\n          <ns6:IDFGeneralMessageRequestFilter>\n          {{#stopId}}\n          <ns2:StopPointRef>{{stopId}}</ns2:StopPointRef>\n          {{/stopId}}\n          {{#lineId}}\n            <ns2:LineRef>{{lineId}}</ns2:LineRef>\n          {{/lineId}}\n		        </ns6:IDFGeneralMessageRequestFilter>\n        </ns2:Extensions>	          \n      </Request>\n      <RequestExtension/>\n    </ns7:GetGeneralMessage>\n  </S:Body>\n</S:Envelope>";

    stopMonitoringRequest.prototype.checkStatusTemplate = "<S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Header/>\n    <S:Body>\n      <ns7:CheckStatus xmlns:ns2=\"http://www.siri.org.uk/siri\" xmlns:ns3=\"http://www.ifopt.org.uk/acsb\" xmlns:ns4=\"http://www.ifopt.org.uk/ifopt\" xmlns:ns5=\"http://datex2.eu/schema/2_0RC1/2_0\" xmlns:ns6=\"http://scma/siri\" xmlns:ns7=\"http://wsdl.siri.org.uk\">\n        <Request>\n          <ns2:RequestTimestamp>{{startDate}}</ns2:RequestTimestamp>\n          <ns2:RequestorRef>{{requestorRef}}</ns2:RequestorRef>\n          <ns2:MessageIdentifier>CheckStatus:Test:0</ns2:MessageIdentifier>\n        </Request>\n        <RequestExtension/>\n      </ns7:CheckStatus>\n    </S:Body>\n  </S:Envelope>";

    stopMonitoringRequest.prototype.errorResponse = "<div class=\"alert alert-danger\" role=\"alert\">{{errorText}}</div>";

    stopMonitoringRequest.prototype.requestDate = function() {
      var offset, requestDate;
      requestDate = new Date;
      offset = requestDate.getHours() - requestDate.getTimezoneOffset() / 60;
      requestDate.setHours(offset.toString());
      requestDate = requestDate.toISOString();
      return requestDate;
    };

    stopMonitoringRequest.prototype.startDate = function() {
      var hours, minutes, offset, ref, requestDate;
      if (this.start) {
        requestDate = new Date;
        ref = this.start.split(':'), hours = ref[0], minutes = ref[1];
        offset = +hours - requestDate.getTimezoneOffset() / 60;
        requestDate.setHours(offset.toString());
        requestDate.setMinutes(minutes);
        requestDate = requestDate.toISOString();
      } else {
        requestDate = this.requestDate();
      }
      return requestDate;
    };

    stopMonitoringRequest.prototype.parseForm = function(el) {
      var form, i, input, key, len, parseVariables, results;
      parseVariables = ["stopId", "lineId", "destId", "operatorId", "start", "preview", "typeVisit", "maxStop", "minStLine", "onward", "requestorVersion", "requestorName", "destinationRef", "groupOfLinesRef", "perturbationType", "minimumStopVisitPerLineVia", "destinationId"];
      form = $(el);
      results = [];
      for (i = 0, len = parseVariables.length; i < len; i++) {
        key = parseVariables[i];
        input = form.find('#' + key);
        results.push(this[key] = input.val());
      }
      return results;
    };

    stopMonitoringRequest.prototype.setStart = function() {
      var startHValue, startMValue;
      startHValue = parseInt(+this.preview / 60);
      startMValue = parseInt(+this.preview % 60);
      if (startHValue > 0 && startMValue > 0) {
        this.preview = "PT" + startHValue + "H" + startMValue + "M";
      } else if (startHValue > 0) {
        this.preview = "PT" + startHValue + "H";
      } else {
        this.preview = "PT" + startMValue + "M";
      }
    };

    stopMonitoringRequest.prototype.siriVersion = function() {
      var siriVersion;
      return siriVersion = this.siriVersionAPI;
    };

    stopMonitoringRequest.prototype.getStopMonitoring = function(form) {
      var template;
      this.parseForm(form);
      if (this.preview) {
        this.setStart();
      }
      this;
      template = this.requestTemplate;
      Mustache.parse(template);
      return Mustache.render(template, this);
    };

    stopMonitoringRequest.prototype.getStopDiscovery = function() {
      var template;
      template = this.stopDiscoveryTemplate;
      Mustache.parse(template);
      return Mustache.render(template, this);
    };

    stopMonitoringRequest.prototype.getLineDiscovery = function() {
      var template;
      template = this.lineDiscoveryTemplate;
      Mustache.parse(template);
      return Mustache.render(template, this);
    };

    stopMonitoringRequest.prototype.getGeneralMessage = function(form) {
      var template;
      this.parseForm(form);
      if (this.siriVersionAPI === '1.3') {
        template = this.generalMessageTemplate;
      } else {
        template = this.generalMessageTemplate_24;
      }
      Mustache.parse(template);
      return Mustache.render(template, this);
    };

    stopMonitoringRequest.prototype.getCheckStatus = function(form) {
      var template;
      template = this.checkStatusTemplate;
      Mustache.parse(template);
      return Mustache.render(template, this);
    };

    stopMonitoringRequest.prototype.handleStopMonitoringResponse = function(xmlOrJsonResponse, handler, responseWrapper) {
      var array, i, item, len, node, nodes, siriVersionToDisplay;

      if(localStorage.getItem('siri-profile') == 'siri-lite') {
        siriVersionToDisplay = JSON.parse(localStorage.getItem('siri-lite')).version
        nodes = [];
        for (const item of xmlOrJsonResponse[0].Siri.ServiceDelivery.GeneralMessageDelivery[0].GeneralMessage) {
          nodes.push(item);
        }
      } else {
        siriVersionToDisplay = xmlOrJsonResponse[0].getElementsByTagNameNS('http://www.siri.org.uk/siri', 'StopMonitoringDelivery')[0].getAttribute('version');
        array = xmlOrJsonResponse.find('*');
        nodes = (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = array.length; i < len; i++) {
            item = array[i];
            if (item.localName === 'MonitoredStopVisit') {
              results.push(item);
            }
          }
          return results;
        })();
      }
      for (i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];
        handler.parseSiriResponse(node);
        handler.buildFancyStopMonitoring();
        handler.buildStopMonitoring();
      }
      stopMonitoringRequest.prototype.renderXmlOrJson(xmlOrJsonResponse[0]);
      stopMonitoringRequest.prototype.renderNodesLength(nodes.length);
      stopMonitoringRequest.prototype.renderSiriVersion(siriVersionToDisplay);
      return stopMonitoringCard.prototype.toggleFancyThings(responseWrapper);
    };

    stopMonitoringRequest.prototype.handleStopDiscoveryResponse = function(xmlOrJsonResponse, handler, responseWrapper) {
      var array, item, nodes;
      if(localStorage.getItem('siri-profile') == 'siri-lite') {
        nodes = [];
        for (const item of xmlOrJsonResponse[0].Siri.StopPointsDelivery.AnnotatedStopPointRef) {
          nodes.push(item);
        }
      } else {
        array = xmlOrJsonResponse.find('*');
        nodes = (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = array.length; i < len; i++) {
            item = array[i];
            if (item.localName === 'AnnotatedStopPointRef') {
              results.push(item);
            }
          }
          return results;
        })();
      }
      return nodes ? handler.buildAutocompleteArray(nodes, "Stop") : false;
    };

    stopMonitoringRequest.prototype.handleLineDiscoveryResponse = function(xmlOrJsonResponse, handler, responseWrapper) {
      var array, item, nodes;
      if(localStorage.getItem('siri-profile') == 'siri-lite') {
        nodes = [];
        for (const item of xmlOrJsonResponse[0].Siri.LinesDelivery.AnnotatedLineRef) {
          nodes.push(item);
        }
      } else {
        array = xmlOrJsonResponse.find('*');
        nodes = (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = array.length; i < len; i++) {
            item = array[i];
            if (item.localName === 'AnnotatedLineRef') {
              results.push(item);
            }
          }
          return results;
        })();
      }
      return nodes ? handler.buildAutocompleteArray(nodes, "Line") : false;
    };

    stopMonitoringRequest.prototype.handleCheckStatusResponse = function(xmlOrJsonResponse, handler, responseWrapper) {
      var serviceOk;
      serviceOk = "<div class='alert alert-success' role='alert'><a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Service OK</div>";
      stopMonitoringCard.prototype.toggleClassicThings(responseWrapper);
      $('#check-status-response-wrapper').html(serviceOk);
      if (xmlOrJsonResponse)
        return stopMonitoringRequest.prototype.renderXmlOrJson(xmlOrJsonResponse[0]);
      else
        return true;
    };

    stopMonitoringRequest.prototype.handleStopDiscoveryResponseDisplay = function(xmlResponse, handler, responseWrapper) {
      var array, i, item, len, node, nodes;
      array = xmlResponse.find('*');
      nodes = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = array.length; i < len; i++) {
          item = array[i];
          if (item.localName === 'AnnotatedStopPointRef') {
            results.push(item);
          }
        }
        return results;
      })();
      for (i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];
        handler.buildStopDiscoveryJSON(node);
        handler.buildStopDiscovery();
      }
      stopMonitoringRequest.prototype.renderXmlOrJson(xmlResponse[0]);
      return stopMonitoringCard.prototype.toggleClassicThings(responseWrapper);
    };

    stopMonitoringRequest.prototype.handleLineDiscoveryResponseDisplay = function(xmlResponse, handler, responseWrapper) {
      var array, i, item, len, node, nodes;
      array = xmlResponse.find('*');
      nodes = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = array.length; i < len; i++) {
          item = array[i];
          if (item.localName === 'AnnotatedLineRef') {
            results.push(item);
          }
        }
        return results;
      })();
      for (i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];
        handler.buildLineDiscoveryJSON(node);
        handler.buildLineDiscovery(nodes, "Line");
      }
      stopMonitoringRequest.prototype.renderXmlOrJson(xmlResponse[0]);
      return stopMonitoringCard.prototype.toggleClassicThings(responseWrapper);
    };

    stopMonitoringRequest.prototype.handleGeneralMessageResponse = function(xmlOrJsonResponse, handler, responseWrapper) {
      var array, errorSpan, i, item, len, node, nodes;
      if(localStorage.getItem('siri-profile') == 'siri-lite') {
        nodes = [];
        if(xmlOrJsonResponse[0].Siri.ServiceDelivery.GeneralMessageDelivery[0].GeneralMessage) {
          for (const item of xmlOrJsonResponse[0].Siri.ServiceDelivery.GeneralMessageDelivery[0].GeneralMessage) {
            nodes.push(item);
          }
        }
      } else {
        array = xmlOrJsonResponse.find('*');
        nodes = (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = array.length; i < len; i++) {
            item = array[i];
            if (item.localName === 'GeneralMessage') {
              results.push(item);
            }
          }
          return results;
        })();
      }
      if (nodes.length > 0) {
        for (i = 0, len = nodes.length; i < len; i++) {
          node = nodes[i];
          handler.generalMessage = {};
          handler.buildGeneralMessageJSON(node);
          handler.buildFancyGeneralMessage();
          handler.buildGeneralMessage();
        }
        stopMonitoringRequest.prototype.renderXmlOrJson(xmlOrJsonResponse[0]);
        return stopMonitoringCard.prototype.toggleClassicThings(responseWrapper);
      } else {
        errorSpan = "<div class='alert alert-success' role='alert'><a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Pas de message</div>";
        return $('#get-general-message-form-wrapper .alert-wrapper').append(errorSpan);
      }
    };

    stopMonitoringRequest.prototype.renderXmlOrJson = function(response) {
      if(localStorage.getItem('siri-profile') == 'siri-lite') {
        return $('#xml-response-wrapper').val(JSON.stringify(response, null, 2));
      } else {
        var xmlText;
        xmlText = new XMLSerializer().serializeToString(response);
        return $('#xml-response-wrapper').val(this.formatXml(xmlText));
      }
    };
    
    stopMonitoringRequest.prototype.renderNodesLength = function(l) {
      var el, i, len, ref;
      ref = $('.response-counter');
      for (i = 0, len = ref.length; i < len; i++) {
        el = ref[i];
        $(el).text("Nombre de réponses: " + l);
      }
    };

    stopMonitoringRequest.prototype.renderSiriVersion = function(l) {
      var el, i, len, ref;
      ref = $('.siri-version-display');
      for (i = 0, len = ref.length; i < len; i++) {
        el = ref[i];
        $(el).text("Version Siri: " + l);
      }
    };

    stopMonitoringRequest.prototype.sendRequest = function(xmlRequest, responseHandler, handler, responseWrapper, discovery='general-message') {
      var errorHandler, serverUrl;
      var siri_profile = JSON.parse(localStorage.getItem(localStorage.getItem('siri-profile')));
      var serverUrl = siri_profile.value;
      if(siri_profile.id == 'siri-lite') {
        serverUrl += '/' + siri_profile.version + '/' + discovery + '.json?RequestorRef=' + siri_profile.requestor;
      }
      if (responseWrapper) {
        errorHandler = responseWrapper.find('.alert-wrapper');
        errorHandler.empty();
      }
      if(siri_profile.id == 'siri-lite') {
        var method = 'GET';
        xmlRequest = '';
        contentType = 'application/json';
        dataType = 'json';
      } else {
        var method = 'POST';
        contentType = 'text/xml';
        dataType = 'xml';
      }
      $.ajax({
        method: method,
        url: serverUrl,
        context: document.body,
        crossDomain: true,
        contentType: contentType,
        dataType: dataType,
        headers: {
          'version': '1.0',
          'encoding': 'UTF-8',
          'standalone': 'no'
        },
        data: xmlRequest
      }).done(function(data, textStatus, jqXHR) {
        var errorSpan, errorText, isError, xmlDoc;
        xmlDoc = $(data);
        if(siri_profile.id == 'siri-lite') {
          if (jqXHR.status == 200)
            responseHandler(xmlDoc, handler, responseWrapper);
        } else {
          isError = xmlDoc.find('ErrorText');
          if (isError.length > 0) {
            errorText = isError[0].innerHTML;
            errorSpan = "<div class='alert alert-danger' role='alert'><a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" + errorText + "</div>";
            errorHandler.html(errorSpan);
          } else {
            responseHandler(xmlDoc, handler, responseWrapper);
          }
        }
      }).fail(function() {
        return console.log('epic fail');
      });
    };

    stopMonitoringRequest.prototype.formatXml = function(xml) {
      var formatted = '';
      var reg = /(>)(<)(\/*)/g;
      xml = xml.replace(reg, '$1\r\n$2$3');
      var pad = 0;
      jQuery.each(xml.split('\r\n'), function(index, node) {
          var indent = 0;
          if (node.match( /.+<\/\w[^>]*>$/ )) {
              indent = 0;
          } else if (node.match( /^<\/\w/ )) {
              if (pad != 0) {
                  pad -= 2;
              }
          } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
              indent = 2;
          } else {
              indent = 0;
          }

          var padding = '';
          for (var i = 0; i < pad; i++) {
              padding += '  ';
          }

          formatted += padding + node + '\r\n';
          pad += indent;
      });

      return formatted;
    }

    return stopMonitoringRequest;

  })();

}).call(this);
