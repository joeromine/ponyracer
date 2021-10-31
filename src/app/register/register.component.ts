import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm: FormGroup;
  passwordCtrl: FormControl;
  passwordForm: FormGroup;
  confirmPasswordCtrl: FormControl;
  loginCtrl: FormControl;
  birthYearCtrl: FormControl;

  constructor(fb: FormBuilder) {
    this.passwordForm = fb.group({
      password: (this.passwordCtrl = fb.control('', Validators.required)),
      confirmPassword: (this.confirmPasswordCtrl = fb.control('', Validators.required))
    });

    this.userForm = fb.group({
      login: (this.loginCtrl = fb.control('', [Validators.required, Validators.minLength(3)])),
      passwordForm: this.passwordForm,
      birthYear: (this.birthYearCtrl = fb.control('', Validators.required))
    });
  }

  register() {}
}
