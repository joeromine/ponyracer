import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  passwordCtrl: FormControl;
  
  constructor(fb: FormBuilder) {
    this.passwordCtrl = fb.control('',Validators.required);


    this.userForm =  fb.group({
      userName: '', password: this.passwordCtrl, birthYear: fb.control('')
    },{ validators: Validators.required })
   }

   

  ngOnInit(): void {

  }

  register(){

  }
 

}
