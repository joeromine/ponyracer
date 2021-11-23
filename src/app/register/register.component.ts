import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm: FormGroup;
  actualUser: UserModel | undefined;
  registrationFailed: boolean = false;
  passwordCtrl: FormControl;
  passwordForm: FormGroup;
  confirmPasswordCtrl: FormControl;
  loginCtrl: FormControl;
  birthYearCtrl: FormControl;
  constructor(fb: FormBuilder, public userService: UserService, public r: Router) {
    this.passwordForm = fb.group(
      {
        password: (this.passwordCtrl = fb.control('', [Validators.required])),
        confirmPassword: (this.confirmPasswordCtrl = fb.control('', [Validators.required]))
      },
      { validator: RegisterComponent.passwordMatch }
    );

    this.userForm = fb.group({
      login: (this.loginCtrl = fb.control('', [Validators.required, Validators.minLength(3)])),
      passwordForm: this.passwordForm,
      birthYear: (this.birthYearCtrl = fb.control('', [
        Validators.required,
        Validators.min(1900),
        Validators.max(new Date().getFullYear())
      ]))
    });
  }

  register(): void {
    this.userService
      .register(this.userForm.value.login, this.userForm.value.passwordForm.value.password, this.userForm.value.birthYear)
      .subscribe(
        () => this.r.navigate(['']),
        () => (this.registrationFailed = true)
      );
  }

  static passwordMatch(passwordfg: FormGroup): { matchingError: true } | null {
    if (passwordfg.controls['password'].value == passwordfg.controls['confirmPassword'].value) {
      return null;
    }
    return { matchingError: true };
  }
}
