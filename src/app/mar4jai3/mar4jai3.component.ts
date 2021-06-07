import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mar4jai3',
  templateUrl: './mar4jai3.component.html',
  styleUrls: ['./mar4jai3.component.scss'],
})
export class Mar4jai3Component implements OnInit {
  constructor() {}
  result = 0;

  ngOnInit(): void {}

  calBuffet(value: string) {
    const price = Number(value);
    this.result = (price * 3) / 4;
  }
}
