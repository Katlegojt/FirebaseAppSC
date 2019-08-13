import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { GroceryService } from '../service/grocery.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  groceryList;
  itemList
  Item : Item;
  name;
email;
 

  constructor(private grocery: GroceryService, private alertcontroler: AlertController, private router: Router, public afAuth: AngularFireAuth) {

    this.grocery.getItemSnapChanges().subscribe(data => {
     this.itemList = data.map ( e => {
       return{
         key: e.payload.doc.id,
         ...e.payload.doc.data()
       } as Item;
     });
     console.log(this.itemList);

    });

    
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      
      this.email = data.email;
    });
  }


  updateItem(Item){
    
    this.router.navigate(['/edit-item'], { queryParams: {name :Item.name, price:Item.price, type:Item.type, key:Item.key } });
  }



}
