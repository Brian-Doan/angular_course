import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss'],
})
export class PostDataComponent implements OnInit {
  public postCourseForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
  });
  public courses: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private httpServerService: HttpServerService
  ) {}

  ngOnInit(): void {
    this.httpServerService.getCourses().subscribe((data) => {
      this.courses = [...data];
    });
  }

  public handleSubmitForm(): void {
    console.log('[postCourseForm] data :', this.postCourseForm.value);
    const payload = {
      name: this.postCourseForm.value?.name,
      description: this.postCourseForm.value?.description,
    };
    this.httpServerService.postCourse(payload).subscribe((data) => {
      console.log('[PostDataComponent - postCourse] - data :', data);
      this.courses = [data, ...this.courses];
    });
  }
}
