import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnInit {
  constructor() {}
  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 10;
  @Input() set number(value: number) {
    this.cost = value;
  }
  get number(): number {
    return this.cost;
  }


  @Output() numberChange = new EventEmitter();
  cost: number = this.min;
  ngOnInit(): void {
    this.cost = this.number;
  }

  decrease() {
    if (this.cost - this.step >= this.min) {
      this.cost = this.cost - this.step;
      this.numberChange.emit(this.number);
    }
  }

  increase() {
    if (this.cost + this.step <= this.max) {
      this.cost = this.cost + this.step;
      this.numberChange.emit(this.number);
    }
  }
}
