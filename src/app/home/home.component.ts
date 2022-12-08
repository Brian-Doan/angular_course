import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Brian Doan';
  public age = 18;
  public fruits = ['Apple', 'Grape', 'Mango', 'Watermelon'];

  constructor() {}

  ngOnInit(): void {}

  public handleResetName(): void {
    console.log('handleResetName triggered');
    this.name = 'Brian Doan';
  }
}
