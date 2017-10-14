import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EventosPage } from '../pages/eventos/eventos';
import { LoginPage } from '../pages/login/login';
import { RegistroinstitucionPage } from '../pages/registroinstitucion/registroinstitucion';
import { SlidesPage} from '../pages/slides/slides';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Eventos', component: EventosPage },
      { title: 'Iniciar Sesión', component: LoginPage },
      { title: 'Registrarse', component: RegistroinstitucionPage },
      { title: 'Slides', component: SlidesPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
