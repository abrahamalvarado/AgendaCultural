import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../auth/auth.service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }
  openPage(){
    this.navCtrl.setRoot(LoginPage);
  }

}
