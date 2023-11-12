import { Component , OnInit,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { wishItem } from '../../shared/models/wishItem';
import { WishListComponent } from '../wish-list/wish-list.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule, WishListComponent, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit{
  @Output() addWish = new EventEmitter<wishItem>();

  constructor(){}
  ngOnInit(): void{}

  newWishText = '';
  addNewWish(){
    this.addWish.emit(new wishItem(this.newWishText));
    this.newWishText ='';
  }


}
