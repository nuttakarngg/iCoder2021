import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StudentAdd } from '../student';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  emailFormControl = new FormControl(null, [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl(null, Validators.required);
  telFormControl = new FormControl(null, Validators.required);
  addStudentFormGroup = new FormGroup({
    email: this.emailFormControl,
    name: this.nameFormControl,
    tel: this.telFormControl,
  });
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
  ) {}
  saveStudent() {
    const student = this.addStudentFormGroup.value;

    this.http
      .post<StudentAdd>('/training-demo/student', student)
      .pipe(catchError((err) => EMPTY))
      .subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'บันทึกแล้วนะจ๊ะ',
            detail: 'บันทึกสำเร็จ',
          });
          // this.router.navigateByUrl('/student');
          this.router.navigate(['/student']);
        },
        (error:HttpErrorResponse) => {
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
