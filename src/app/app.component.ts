import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { LoginPage}  from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  config = {
    apiKey: "AIzaSyBNNVz7BG3lmRyJ5dWPGi7PUgK1qPa1dLg",
    authDomain: "elearning-a430a.firebaseapp.com",
    databaseURL: "https://elearning-a430a.firebaseio.com",
    projectId: "elearning-a430a",
    storageBucket: "elearning-a430a.appspot.com",
    messagingSenderId: "706746628359"
  };

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(this.config);
  }
}

