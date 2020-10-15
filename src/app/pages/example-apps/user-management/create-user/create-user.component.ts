import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ListUserService } from 'src/app/shared/services/user-management/list-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  srcResult: any;

  addUserForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]{4,20}')]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,5})$'
        ),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^(?=.*[1-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[a-zA-Z]).{8,}$'
        ),
      ],
    ],
    gender: [''],
    birthday: ['', [Validators.required]],
    comment: ['', [Validators.pattern('[a-zA-Z1-9]{4,}')]],
  });

  constructor(
    private fb: FormBuilder,
    private listUserService: ListUserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  getNameErrorMessage() {
    const nameControl = this.addUserForm.controls['name'];
    if (nameControl.hasError('required')) {
      return 'Name must be not empty';
    } else if (nameControl.hasError('pattern')) {
      return 'Name is at least 4 characters and not include number';
    }
  }

  getEmailErrorMessage() {
    const emailControl = this.addUserForm.controls['email'];
    if (emailControl.hasError('required')) {
      return 'Email must be not empty';
    } else if (emailControl.hasError('pattern')) {
      return 'Email is not valid';
    }
  }

  getPasswordErrorMessage() {
    const passwordControl = this.addUserForm.controls['password'];
    if (passwordControl.hasError('required')) {
      return 'Password must be not empty';
    } else if (passwordControl.hasError('pattern')) {
      return 'Password has at least 8 characters, include uppercase, lowercase, number and specific character';
    }
  }

  getCommentErrorMessage() {
    const commentControl = this.addUserForm.controls['comment'];
    if (commentControl.hasError('pattern')) {
      return 'Comment has at least 4 characters';
    }
  }

  getBirthOfDateErrorMessage() {
    const birthOfDateControl = this.addUserForm.controls['birthday'];
    if (birthOfDateControl.hasError('required')) {
      return 'Please choose a date by click calender icon';
    }
  }

  addUserInfo() {
    // TODO
    const formData = {
      ...this.addUserForm.value,
      avatar: 'https://robohash.org/estipsamalias.png?size=150x150&set=set1',
      birthday: this.addUserForm.value.birthday.toLocaleDateString('en-US'),
    };

    this.listUserService.addUser(formData).subscribe(
      (res) => {
        this.addUserForm.reset();
        this.snackBar.open('Add user information successful !', 'OKE', {
          duration: 2000,
          panelClass: ['success-snackbar'],
        });
      },
      (err) => {
        this.snackBar.open('Add user information fail !', 'OKE', {
          duration: 2000,
          panelClass: ['error-snackbar'],
        });
      }
    );
  }
}
