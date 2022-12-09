import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-cascade-select',
  templateUrl: './cascade-select.component.html',
  styleUrls: ['./cascade-select.component.scss'],
})
export class CascadeSelectComponent implements OnInit {
  public places = [
    {
      id: 0,
      name: 'Chọn Tỉnh/Thành phố',
      subPlaces: [],
    },
    {
      id: 1,
      name: 'Tiền Giang',
      subPlaces: [{ name: 'Mỹ Tho' }, { name: 'Chợ Gạo' }, { name: 'Cai Lậy' }],
    },
    {
      id: 1,
      name: 'Đắk Lắk',
      subPlaces: [{ name: 'Buôn Ma Thuột' }],
    },
  ];
  public subPlaces: any = [{ name: 'Chọn Quận/Huyện' }];
  public counter = 0;
  public squaredCounter = 0;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.getCounter();
    let increaseCounter = this.counter + 1;
    this.squaredCounter = this.common.binhPhuong(this.counter);
    this.common.setCounter(increaseCounter);
  }

  public handleChangePlaces(event: any) {
    const placeName = event.target.value;
    this.subPlaces = [{ name: 'Chọn Quận/Huyện' }];

    if (!placeName) {
      return;
    }

    const filterSubPlaces = this.places.filter(
      (place) => place.name === placeName
    );
    let filteredResult = [];

    if (filterSubPlaces && filterSubPlaces[0].subPlaces.length > 0) {
      filteredResult = [...filterSubPlaces[0].subPlaces];
      this.subPlaces = this.subPlaces.concat(filteredResult);
    }
  }
}
