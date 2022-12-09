import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  // public formData: FormGroup = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   age: new FormControl(''),
  // });

  public formData2: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    age: ['', Validators.required],
  });

  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  public handleSubmitForm(): void {
    console.group('[ReactiveForm] - Submit form successfully');
    console.log('formData :', this.formData2.value);
    console.groupEnd();

    this.common.submitData(this.formData2.value);
  }
}
