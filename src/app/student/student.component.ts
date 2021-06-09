import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppComponent } from '../app.component';
import { Student, StudentCondition, StudentResponse } from '../student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  nameFormControl = new FormControl();
  emailFormControl = new FormControl();
  telFormControl = new FormControl();
  studentFormControl = new FormGroup({
    name: this.nameFormControl,
    email: this.emailFormControl,
    tel: this.telFormControl,
  });
  students: Student[] = [
    // { name: 'BoppinCode', email: 'sappinebz@gmail.com', tel: 'x0111-3453' },
    // { name: 'Cristina', email: 'Cristina@gmail.com', tel: 'x0111-3453' },
    // { name: 'Wanda', email: 'Wanda@gmail.com', tel: 'x0111-3453' },
    // { name: 'Dariana', email: 'Dariana@gmail.com', tel: 'x0111-3453' },
    // { name: 'Kristopher', email: 'Kristopher@gmail.com', tel: 'x0111-3453' },
    // { name: 'Hailee', email: 'Hailee@gmail.com', tel: 'x0111-3453' },
    // { name: 'Cody', email: 'Cody@gmail.com', tel: 'x0111-3453' },
    // { name: 'BoppinCode', email: 'sappinebz@gmail.com', tel: 'x0111-3453' },
    // { name: 'Cristina', email: 'Cristina@gmail.com', tel: 'x0111-3453' },
    // { name: 'Wanda', email: 'Wanda@gmail.com', tel: 'x0111-3453' },
    // { name: 'Dariana', email: 'Dariana@gmail.com', tel: 'x0111-3453' },
    // { name: 'Kristopher', email: 'Kristopher@gmail.com', tel: 'x0111-3453' },
    // { name: 'Hailee', email: 'Hailee@gmail.com', tel: 'x0111-3453' },
    // { name: 'Cody', email: 'Cody@gmail.com', tel: 'x0111-3453' },
    // { name: 'Cristina', email: 'Cristina@gmail.com', tel: 'x0111-3453' },
    // { name: 'Wanda', email: 'Wanda@gmail.com', tel: 'x0111-3453' },
    // { name: 'Dariana', email: 'Dariana@gmail.com', tel: 'x0111-3453' },
    // { name: 'Kristopher', email: 'Kristopher@gmail.com', tel: 'x0111-3453' },
    // { name: 'Hailee', email: 'Hailee@gmail.com', tel: 'x0111-3453' },
    // { name: 'Cody', email: 'Cody@gmail.com', tel: 'x0111-3453' },
    // { name: 'Cristina', email: 'Cristina@gmail.com', tel: 'x0111-3453' },
    // { name: 'Wanda', email: 'Wanda@gmail.com', tel: 'x0111-3453' },
    // { name: 'Dariana', email: 'Dariana@gmail.com', tel: 'x0111-3453' },
    // { name: 'Kristopher', email: 'Kristopher@gmail.com', tel: 'x0111-3453' },
    // { name: 'Hailee', email: 'Hailee@gmail.com', tel: 'x0111-3453' },
    // { name: 'Cody', email: 'Cody@gmail.com', tel: 'x0111-3453' },
  ];

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router,
    private appComponent: AppComponent
  ) {}
  clearStudent() {
    this.studentFormControl.reset();
  }
  queryStudent() {
    const name = this.nameFormControl.value;
    const email = this.emailFormControl.value;
    const tel = this.telFormControl.value;

    const condition: StudentCondition = {};
    if (name) {
      condition.name = name;
    }
    if (email) {
      condition.email = email;
    }
    if (tel) {
      condition.tel = tel;
    }
    const httpParams = new HttpParams({ fromObject: condition as any });
    this.http
      .get<StudentResponse>('/training-demo/student/all', {
        params: httpParams,
      })
      .subscribe(
        (response) => (this.students = response.result),
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.statusText,
          });
        }
      );
  }
  editStudent(student: Student) {
    this.appComponent.editStudent = student;
    this.router.navigate(['/edit']);
  }
  delectStudent(student: Student) {
    this.http.delete<any>(`/training-demo/student/${student.id}`).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'ลบสำเร็จ',
        });
        this.queryStudent();
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.statusText,
        });
      }
    );
  }

  ngOnInit(): void {}
}
