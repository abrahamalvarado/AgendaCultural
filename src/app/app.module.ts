import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EventosPage } from '../pages/eventos/eventos';
import { LoginPage } from '../pages/login/login';
import { RegistroinstitucionPage } from '../pages/registroinstitucion/registroinstitucion';
import { SlidesPage} from '../pages/slides/slides';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

const config = {
  apiKey: "AIzaSyCHLw8gqYFOOBeGeUcmFz-d-vEakx5XNCE",
  authDomain: "agendacultural-420.firebaseapp.com",
  databaseURL: "https://agendacultural-420.firebaseio.com",
  projectId: "agendacultural-420",
  storageBucket: "",
  messagingSenderId: "289225152962"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SlidesPage,
    EventosPage,
    LoginPage,
    RegistroinstitucionPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SlidesPage,
    EventosPage,
    LoginPage,
    RegistroinstitucionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
