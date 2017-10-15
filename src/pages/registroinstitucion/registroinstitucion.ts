import { Component,ViewChild } from '@angular/core';
import { IonicPage,Nav, NavController, NavParams,AlertController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { MyApp } from '../../app/app.component';
import { EventosPage } from '../../pages/eventos/eventos';
import { HomePage } from '../../pages/home/home';
import { AuthService } from '../../auth/auth.service';
/**
 * Generated class for the RegistroinstitucionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registroinstitucion',
  templateUrl: 'registroinstitucion.html',
})
export class RegistroinstitucionPage {
  Institutos: FirebaseListObservable<any[]>;
  @ViewChild(Nav) nav: Nav;
  Nombre='';
  CP='';
  Numero='';
  Colonia='';
  Calle='';
  Web = '';
  Email='';
  Password='';
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseProvider: FirebaseProvider,public AlertCtrl:AlertController, public authService: AuthService) {
  }
  showAlert() {
    let alert = this.AlertCtrl.create({
      
      subTitle: 'El registro de la institucion fue correcto!',
      buttons: ['OK']
    });
    alert.present();
  }
  Registrar() {
    this.firebaseProvider.Registrar(this.Nombre,this.CP,this.Numero,this.Colonia,this.Calle,this.Web);
    this.authService.signup(this.Email, this.Password);
    this.Email = this.Password = '';
    this.showAlert();
    this.navCtrl.setRoot(HomePage);
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroinstitucionPage');
  }

}
