import { Component, OnInit } from '@angular/core';


import { WindowService } from 'src/app/service/window.service';
import * as firebase from 'firebase';
import { PhoneNumber } from 'src/app/home/modules/phone';



@Component({
  selector: 'app-one-time-pin',
  templateUrl: './one-time-pin.page.html',
  styleUrls: ['./one-time-pin.page.scss'],


  
})
export class OneTimePinPage implements OnInit {
  verificationID

  phoneNumber{ };

  firebaseAuthentication: any;

  windowRef: any;
 
  phoneNumber = new PhoneNumber();


  verificationCode: string;

  user: any;

  constructor(  public win: WindowService ) { }

  ngOnInit() {

    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }

  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber( num , appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


  // phoneAuth() {
  //   this.firebaseAuthentication.verifyPhoneNumber("+27840249307", 30000).then((verificationID) => {
  //     console.log(verificationID);
  //     this.verificationID = verificationID;

  //   }).catch((error) => {
    
  //   });
  // }
    
  //   signInWithCode( smsCode){
    
  //   this.fireAuth.signInWithVerificationId(this.verificationID, smsCode).then((user) =>{
  //   console.log(user)
    
    
  //   });
  //   }

    // https://angularfirebase.com/lessons/firebase-phone-authentication-with-angular-4-tutorial/
}
