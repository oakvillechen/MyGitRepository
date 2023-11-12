import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp-info.component.html',
  styleUrl: './emp-info.component.css',
  providers:[RecordsService]
})
export class EmpInfoComponent implements OnInit {

  constructor(private rservice:RecordsService){}
  ngOnInit(): void {

  }

  infoRec1: string[] =[];
  infoRec2: string[] =[];
  infoRec3: string[] =[];


  getInfoFromServiceClass1(){
    this.infoRec1 = this.rservice.getinfo1()
  }
  getInfoFromServiceClass2(){
    this.infoRec2 = this.rservice.getinfo2()
  }
  getInfoFromServiceClass3(){
    this.infoRec3 = this.rservice.getinfo3()
  }



}
