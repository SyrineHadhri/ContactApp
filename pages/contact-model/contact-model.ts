import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-contact-model',
  templateUrl: 'contact-model.html'
})

export class ContactModelPage {
  contact: any;

  constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController) {

    this.contact = this.params.get('contactobject');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
