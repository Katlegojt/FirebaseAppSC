import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';





const firebaseConfig = {
  apiKey: "AIzaSyAYhKvO-rR4UCY-SlKAJyk1hFxwthJXLYs",
  authDomain: "ionic4shoppingapp.firebaseapp.com",
  databaseURL: "https://ionic4shoppingapp.firebaseio.com",
  projectId: "ionic4shoppingapp",
  storageBucket: "ionic4shoppingapp.appspot.com",
  messagingSenderId: "671164324529",
  appId: "1:671164324529:web:1d3a464b3486496b"
};


@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule,],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

