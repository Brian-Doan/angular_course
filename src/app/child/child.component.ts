import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() name: string = '';
  @Output() sayHello: EventEmitter<any> = new EventEmitter();
  private dataReceived: any = {};
  public dataReceivedStringify: string = '';

  constructor() {}

  ngOnInit(): void {}

  public handleClickButton(): void {
    console.log('[handleClickButton] - triggered');
    this.sayHello.emit(this.name);
  }

  public handleReceiveData(data: any): void {
    console.log(
      `[Child Component] - ${this.name} - has received ${JSON.stringify(
        data
      )} - from Parent Component`
    );
    this.dataReceived = data;
    this.dataReceivedStringify = JSON.stringify(this.dataReceived);
  }
}
