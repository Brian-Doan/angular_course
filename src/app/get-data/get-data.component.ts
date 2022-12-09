import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  public courses: any = [];

  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    this.httpServerService.getCourses().subscribe((data) => {
      console.log('[GetDataComponent - getCourses] - data :', data);
      this.courses = data;
    });
  }
}
