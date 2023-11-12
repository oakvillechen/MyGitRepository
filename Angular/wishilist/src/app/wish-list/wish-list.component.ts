import { Component, OnInit, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { wishItem } from '../../shared/models/wishItem';
@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit{

  @Input() wishes : wishItem[]=[];
   constructor(){}

   ngOnInit(): void{}

  toggleItem(item: wishItem){
    item.isCompleted = !item.isCompleted
    console.log(item);
  }

}
