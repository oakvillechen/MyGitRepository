import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { ContactComponent } from './contact/contact.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent,AddWishFormComponent,ContactComponent]
})
export class AppComponent {

  items: wishItem[] =[
    new wishItem('Learn Angular',false),
    new wishItem('Pass AZURE Test',false),
    new wishItem('Play Basketball'),
    new wishItem('Coffee time', true)
  ];

  listFilter: string ='0';




  title = 'Guodong - wishilist';

  get visibleItems(): wishItem[]
  {
    let value = this.listFilter;
    if(value == '0'){
      return this.items;
    }
    else if(value == '1'){
      return this.items.filter(item => !item.isCompleted);
    }
    else{
      return this.items.filter(item => item.isCompleted);
    }
  }





}
