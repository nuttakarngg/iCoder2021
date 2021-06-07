import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(){
    this.sumResult()
  }
  title = 'iCoder2021';
  result:number = 0;
  actionBarNumber1:number = 5;
  actionBarNumber2:number = 10;
  actionBarNumber3:number = 50;

  sumResult(){
    this.result = this.actionBarNumber1+this.actionBarNumber2+this.actionBarNumber3;
  }

}
