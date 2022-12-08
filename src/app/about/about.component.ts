import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public fruits = ['Apple', 'Grape', 'Mango', 'Watermelon'];
  public fruits2 = [
    {
      id: 1,
      name: 'Apple',
      price: 100,
      inStock: 0,
      isDiscount: true,
    },
    {
      id: 2,
      name: 'Grape',
      price: 200.99,
      inStock: 5,
      isDiscount: false,
    },
    {
      id: 3,
      name: 'Mango',
      price: 300,
      inStock: 3,
      isDiscount: true,
    },
    {
      id: 4,
      name: 'Watermelon',
      price: 400.59,
      inStock: 0,
      isDiscount: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
