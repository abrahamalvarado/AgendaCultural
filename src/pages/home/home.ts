import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Institutos: FirebaseListObservable<any[]>;
  newItem = '';
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.Institutos = this.firebaseProvider.getInstitutosItems();
  }
  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

}
