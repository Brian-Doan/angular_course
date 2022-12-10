import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  public message: string = '';
  @ViewChild('ChildBrian') ChildBrian: ChildComponent | undefined;
  @ViewChild('ChildQuang') ChildQuang: ChildComponent | undefined;

  constructor() {}

  ngOnInit(): void {}

  public sayHello(name: string): void {
    this.message = `Hello Child Component: ${name}`;
  }

  public handleSendData(): void {
    this.ChildBrian?.handleReceiveData({ name: 'Brian', age: '23' });
    this.ChildQuang?.handleReceiveData([1, 2, 3, 4, 5, 6]);
  }
}
