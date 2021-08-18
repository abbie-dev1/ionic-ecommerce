import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class SearchPage {

    searchQuery: string = '';
    items: string[];
  
    constructor() {
      this.initializeItems();
    }
  
    initializeItems() {
      this.items = [
        'LG',
        'Samsung',
        'Nokia',
        'Huawei',
        'Jersey',
        'T-shirt',
        'Glass',
        'Musk',
        'Headset',
        'MacBook',
        'HP',
        'Chair',
        'Bed',
        'Book',
        'Hand-Bag'
      ];
    }
  
    getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the searchbar
      const val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
  }

}
