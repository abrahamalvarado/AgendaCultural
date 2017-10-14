import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the PublicareventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicarevento',
  templateUrl: 'publicarevento.html',
})
export class PublicareventoPage {
  Eventos: FirebaseListObservable<any[]>;
  Lugar = '';
  Categoria = '';
  CP='';
  Numero='';
  Colonia='';
  Calle='';
  Entrada = '';
  Precio = '';
  Descripcion= '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseProvider: FirebaseProvider, public AlertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicareventoPage');
  }
  showAlert() {
    let alert = this.AlertCtrl.create({
      
      subTitle: 'Tu evento ha sido publicado correctamente!',
      buttons: ['OK']
    });
    alert.present();
  }

  Publicar(){
    this.firebaseProvider.Publicar(this.Lugar,this.Categoria,this.CP,this.Numero,this.Colonia,this.Calle,this.Entrada,this.Precio,this.Descripcion);
    this.showAlert();
    this.navCtrl.setRoot(HomePage);
  }
}
