import {bindable} from 'aurelia-framework';
import {observable} from 'aurelia-framework';

export class NavBar {
  @observable siriProfile = window.localStorage.getItem('siri-profile');
  @bindable router = null;

  attached() {
    this.siriServers = JSON.parse(localStorage.getItem('siri-servers'));
  }

  siriProfileChanged(newVal) {
    if(newVal == 'siri-2.2') {
      $(".siri_24").hide();
    } else {
      $(".siri_24").show();
    }
    localStorage.setItem('autoCompleteAlready', false);
    window.localStorage.setItem('siri-profile', newVal);
  }

  closePanel() {
    $('.right-panel-wrapper').removeClass('open');
    return true;
  }
}
