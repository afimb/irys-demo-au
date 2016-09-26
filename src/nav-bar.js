import {bindable} from 'aurelia-framework';
import {observable} from 'aurelia-framework';

export class NavBar {
  @observable siriProfile = window.localStorage.getItem('siri-profile');
  @bindable router = null;


  siriProfileChanged(newVal) {
    if(newVal == '2.2')
      $(".siri_24").hide();
    else
      $(".siri_24").show();
    window.localStorage.setItem('siri-profile', newVal);
  }

  closePanel() {
    $('.right-panel-wrapper').removeClass('open');
    return true;
  }
}
