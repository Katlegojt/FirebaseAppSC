import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Item { name: string, price: number, type:string }


@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  list;
  write;

  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;
  
  constructor(private db: AngularFirestore) {

  }


  getItems() {
    return this.db.collection('Grocery').valueChanges();

  }

  getItemSnapChanges() {
    return this.db.collection('Grocery').snapshotChanges();
  }

  post(item, alert) {

    this.write = this.db.collection<any>('Grocery');
    this.write.add(item);
  }

  update(item, key) {
    this.itemDoc = this.db.doc<Item>('Grocery/'+ key);
    this.itemDoc.update(item);
  }

  deleteItem(item, key) {
    this.itemDoc = this.db.doc<Item>('Grocery/'+ key);
    this.itemDoc.delete() ;
 }

}
