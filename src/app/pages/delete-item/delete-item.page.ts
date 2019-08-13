import { Component, OnInit } from '@angular/core';
import { GroceryService } from 'src/app/service/grocery.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.page.html',
  styleUrls: ['./delete-item.page.scss'],
})
export class DeleteItemPage implements OnInit {

  itemList
  constructor(private grocery: GroceryService,) {

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

  ngOnInit() {
  }

  delete(item, key){

    this.grocery.deleteItem(item, key);
  }

}
