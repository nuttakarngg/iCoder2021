import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  editStudent:Student|null = null;
  fiveBathList = [4, 10, 8, 20, 50];
  oneBathList: number[] = [];
  summary: number = 0;
  ngOnInit() {}
  transform5BathToBath() {
    this.oneBathList = this.fiveBathList.map((num) => num * 5);
  }
  sum() {
    this.summary = this.fiveBathList.reduce((sum, num) => sum + num * 5, 0);
  }
}
