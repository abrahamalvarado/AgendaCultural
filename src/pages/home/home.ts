import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AuthService } from '../../auth/auth.service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Institutos: FirebaseListObservable<any[]>;
  newItem = '';
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider,public authService: AuthService) {
    this.Institutos = this.firebaseProvider.getInstitutosItems();
  }
 
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  openPage(){
    this.navCtrl.setRoot(LoginPage);
  }

}
