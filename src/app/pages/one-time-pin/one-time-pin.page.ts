import { Component, OnInit } from '@angular/core';
import { FirebaseAuthentication } from 'node_modules/@ionic-native/firebase-authentication/ngx';


@Component({
  selector: 'app-one-time-pin',
  templateUrl: './one-time-pin.page.html',
  styleUrls: ['./one-time-pin.page.scss'],
})
export class OneTimePinPage implements OnInit {
  verificationID
  phone;
  firebaseAuthentication: any;
  constructor( private fireAuth: FirebaseAuthentication, ) { }

  ngOnInit() {
  }
  phoneAuth() {
    this.firebaseAuthentication.verifyPhoneNumber("+27840249307", 30000).then((verificationID) => {
      console.log(verificationID);
      this.verificationID = verificationID;

    }).catch((error) => {
    
    });
  }
    
    signInWithCode( smsCode){
    
    this.fireAuth.signInWithVerificationId(this.verificationID, smsCode).then((user) =>{
    console.log(user)
    
    
    });
    }

    // https://angularfirebase.com/lessons/firebase-phone-authentication-with-angular-4-tutorial/
}
