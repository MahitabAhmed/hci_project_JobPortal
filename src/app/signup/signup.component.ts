import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../validators/password-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private formBuilder:FormBuilder){}

    signUpForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: [''],
      password: [''],
      confirmPassword: [''],
      userType:['']}, 
      {validator:passwordMatchValidator});

}


