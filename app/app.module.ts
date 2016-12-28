import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {SignInPage} from "../pages/sign-in/sign-in";
import {ContactModelPage} from "../pages/contact-model/contact-model";
import {ConnectionPage} from "../pages/connection/connection";
import {ContactsPage} from "../pages/contacts/contacts";
import {ResetPasswordPage} from "../pages/reset-password/reset-password";
// Import providers
import {AuthData} from '../providers/auth-data';

@NgModule({
  declarations: [
    ContactsPage,
    ConnectionPage,
    MyApp,
    SignInPage,
    ContactModelPage,
    ResetPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ContactsPage,
    ConnectionPage,
    MyApp,
    SignInPage,
    ContactModelPage,
    ResetPasswordPage
  ],
  providers: [
    AuthData
  ]
})
export class AppModule {
}
