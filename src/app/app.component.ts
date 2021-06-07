import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
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
