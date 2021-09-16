import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm: FormGroup;
  passwordCtrl: FormControl;
  loginCtrl: FormControl = new FormControl('', Validators.required);
  birthYearCtrl: FormControl;

  constructor(fb: FormBuilder) {
    this.passwordCtrl = fb.control('', Validators.required);
    this.birthYearCtrl = fb.control('', Validators.required);
    this.loginCtrl = fb.control('', Validators.required);

    this.userForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl,
      birthYear: this.birthYearCtrl
    });
  }

  register() {}
}
