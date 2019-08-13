import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceryService } from 'src/app/service/grocery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {



  item = { name: '', price: 0, type: '' }




  constructor(private alertcontroler: AlertController, private grocery: GroceryService, private router:Router) { }

  ngOnInit() {
  }

  submit() {

    this.grocery.post(this.item, this.alertcontroler);
    this.router.navigateByUrl('/home');


  }

}
