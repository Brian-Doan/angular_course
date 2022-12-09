import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  public firstName = '';
  public lastName = '';

  constructor(private common: CommonService) {}

  ngOnInit(): void {}

  public handleSubmitForm(): void {
    console.group('[TemplateDrivenForm] - Submit form successfully');
    console.groupEnd();

    this.common.submitData({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
}
