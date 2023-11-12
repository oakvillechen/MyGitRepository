import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css',
  standalone:true,
  imports:[FormsModule]
})


export class FormComponentComponent {

  submit(login: any){
    console.log("Form submitted",login)
  }

}
