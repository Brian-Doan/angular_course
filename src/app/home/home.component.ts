import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Brian Doan';
  public age = 18;
  public fruits = ['Apple', 'Grape', 'Mango', 'Watermelon'];
  public counter = 0;
  public squaredCounter = 0;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.getCounter();
    let increaseCounter = this.counter + 1;
    this.squaredCounter = this.common.binhPhuong(this.counter);
    this.common.setCounter(increaseCounter);
  }

  public handleResetName(): void {
    console.log('handleResetName triggered');
    this.name = 'Brian Doan';
  }
}
