import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QRComponent implements OnInit {
  public qrValue: string = '';
  public qrSubfix: any = {};
  public qrSize: number = 150;
  public qrFull: string = '';

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((param) => {
      console.log('queryParams :', param);
      if (param && param['data']) {
        const data = param['data'];
        console.log('queryParams data :', data);
        console.log('qrValue :', data['qrValue']);
        console.log('qrSubfix :', data['qrSubfix']);

        const obj = JSON.parse(data);
        console.log('queryParams obj :', obj);
        console.log('qrValue :', obj['qrValue']);
        console.log('qrSubfix :', obj['qrSubfix']);
      }
    });
  }

  ngOnInit(): void {}

  public handleChangeFullQRLink(event: any): void {
    this.qrFull = event.target.value;
    this.qrValue = event.target.value;
    this.combine();
  }

  public handleChangeQRValue(event: any): void {
    this.qrValue = event.target.value;
    this.combine();
  }

  public handleChangeSubfixValue(event: any): void {
    this.qrSubfix = event.target.value;
    this.combine();
  }

  private combine(): void {
    const data = JSON.stringify({
      qrValue: this.qrValue,
      qrSubfix: this.qrSubfix,
    });
    this.qrFull = this.qrValue + '?data=' + data;
    console.log('qrFull :', this.qrFull);
  }
}
