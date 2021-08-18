import { Component } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

name:any;
description:any;
image:any;

products:Products;
  constructor() {}



  submit()
  {
this.products=new Products(this.name,this.image,this.description);

console.log(this.products);
  }

}
