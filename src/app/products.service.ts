import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFirestore) { }




  addBagss(addproduct:Products) {

  
    this.db.collection("Products").add({
    name :addproduct.name,
    description: addproduct.description,
   image: addproduct.image,
   
    })
    .then(function () {
      console.log("Document successfully written to firebase!");
    })
    .catch(function (error) {
      console.error("Error writing document: error");
    });
    }
}
