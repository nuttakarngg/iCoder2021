import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StudentAdd, ResponseEditStudent } from '../student';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss'],
})
export class EditstudentComponent implements OnInit {
  emailFormControl = new FormControl(null, [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl(null, Validators.required);
  telFormControl = new FormControl(null, Validators.required);
  editStudentFormGroup = new FormGroup({
    id: new FormControl(),
    version: new FormControl(),
    email: this.emailFormControl,
    name: this.nameFormControl,
    tel: this.telFormControl,
  });
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router,
    private appComponent: AppComponent
  ) {
    const student = this.appComponent.editStudent;
    // this.nameFormControl.setValue(student?.name);
    // this.emailFormControl.setValue(student?.email);
    // this.telFormControl.setValue(student?.name);
    if (student) {
      this.editStudentFormGroup.patchValue(student);
    }
  }
  saveStudent() {
    const student = this.editStudentFormGroup.value;

    this.http
      .put<ResponseEditStudent>('/training-demo/student/', student)
      // .pipe(catchError((err) => EMPTY))
      .subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'บันทึกแล้วนะจ๊ะ',
            detail: 'บันทึกสำเร็จ',
          });
          this.editStudentFormGroup.patchValue({
            version: response.result.version,
          });
          // this.router.navigateByUrl('/student');
          // this.router.navigate(['/student']);
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
