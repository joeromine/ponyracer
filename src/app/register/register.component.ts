/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm: FormGroup;
  passwordForm: FormGroup;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  loginCtrl: FormControl;
  birthYearCtrl: FormControl;

  constructor(fb: FormBuilder) {
    this.passwordCtrl = fb.control('', Validators.required);
    this.birthYearCtrl = fb.control('', [Validators.required, Validators.min(1900),Validators.max(new Date().getFullYear())]);
    this.loginCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.confirmPasswordCtrl = fb.control('', Validators.required);

    this.passwordForm = fb.group({
      // eslint-disable-next-line prettier/prettier
      password: this.passwordCtrl = fb.control(''),
      confirmPassword: this.confirmPasswordCtrl = fb.control('')
    });

    this.userForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordForm,
      birthYear: this.birthYearCtrl
    });
  }

  register() {}

  static passwordMatch(passwordForm: FormGroup){
   return (passwordForm.get('password')?.value == passwordForm.get('confirmPassword')?.value) ? {matchingError: null} : {matchingError: true};
  }
}
