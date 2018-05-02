import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

type LoginFields = 'email' | 'password';
type FormsErrors = {
  [l in LoginFields]: string
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

 loginForm: FormGroup;
 formErrors: FormsErrors = {
   'email': '',
   'password': ''
 };
 validationMessage = {
    'email': {
      'required': 'Email is required',
      'email': 'Email must be valid'
    },
    'password': {
      'required': 'Password is required',
      'pattern': 'Password must contain atleast one letter an one number',
      'minlength': 'Password must be atleast 6 chars long',
      'maxlength': 'Password cannot be more than 40 chars long'

    }
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _aS: AuthService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(40),
        Validators.required
      ]]
    });
    this.loginForm.valueChanges.subscribe(
      (data) => this.onValueChanged(data)
    );
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) {
      return;
    }

    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessage[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]}` + '\n';
              }
            }
          }
        }
      }
    }
  }

  signIn() {
    this._aS.signIn(this.loginForm.value['email'], this.loginForm.value['password']);
  }
}
