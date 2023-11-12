import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponentComponent } from './form-component/form-component.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgModule,
    AppModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
