import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceryService } from 'src/app/service/grocery.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {


item =  {key:'' , name:'' , price:0, type:''}
  constructor(private router:Router, private route: ActivatedRoute, private grocery: GroceryService,private alertcontroler: AlertController,public toastController: ToastController) {

    
   }
  
   
 
  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
       
      this.item.name = params.name;
      this.item.price = params.price;
      this.item.type = params.type;
      this.item.key = params.key;
      console.log(this.item.name, this.item.price, this.item.type, this.item.key); // popular
    });
  }

  updaeItem(item, key){
    this.grocery.update(item, item.key);
    this.presentToastWithOptions()
    this.router.navigateByUrl('/home')
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      
      message: this.item.name + ' Was Updated',
      position: 'bottom',
      duration: 2000,
      buttons: [
      
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
  deleteItem(item, key)
  {
    this.grocery.deleteItem(item, item.key);
  }

}
