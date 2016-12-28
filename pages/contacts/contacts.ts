import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {ContactModelPage} from "../contact-model/contact-model";

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})

export class ContactsPage {

  contactList = [
    {
      id: 1,
      firstName: "Amy",
      lastName: "Taylor",
      title: "CEO",
      phone: "617-244-3672",
      email: "amy@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
    },
    {
      id: 2,
      firstName: "Anup",
      lastName: "Gupta",
      title: "VP of Engineering",
      phone: "617-244-3672",
      email: "anup@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Jones",
      title: "VP of Marketing",
      phone: "617-244-3672",
      email: "michael@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    },
    {
      id: 4,
      firstName: "Caroline",
      lastName: "Kingsley",
      title: "VP of Sales",
      phone: "617-244-3672",
      email: "caroline@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    {
      id: 5,
      firstName: "James",
      lastName: "Kennedy",
      title: "Account Executive",
      phone: "617-244-3672",
      email: "james@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/james_kennedy.jpg"
    },
    {
      id: 6,
      firstName: "Jennifer",
      lastName: "Wu",
      title: "Account Executive",
      managerId: 4,
      managerName: "Caroline Kingsley",
      phone: "617-244-3672",
      mobilePhone: "617-244-3672",
      email: "jen@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    },
    {
      id: 7,
      firstName: "Jonathan",
      lastName: "Bradley",
      title: "Account Executive",
      phone: "617-244-3672",
      email: "jonathan@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
    },
    {
      id: 8,
      firstName: "Kenneth",
      lastName: "Sato",
      title: "Account Executive",
      phone: "617-244-3672",
      email: "kenneth@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/kenneth_sato.jpg"
    },
    {
      id: 9,
      firstName: "Lisa",
      lastName: "Parker",
      title: "Software Architect",
      phone: "617-244-3672",
      email: "lisa@fakemail.com",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/lisa_parker.jpg"
    }
  ];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ContactModelPage, characterNum);
    modal.present();
  }

}
