import { Component } from '@angular/core';
import {AbstractControl, ValidationErrors, FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../validators/password-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private formBuilder:FormBuilder){}

    signUpForm = this.formBuilder.group({
      userName: ['',[
       Validators.required,
      Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^[a-zA-Z0-9_]*$/), // Only letters, numbers, and underscores allowed
    this.validateReservedKeywords]],
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(8), 
    ]],
      confirmPassword: ['',[Validators.required]],
      userType:['',Validators.required]}, 
      {validator:passwordMatchValidator});

// Custom validation function to check against reserved keywords
validateReservedKeywords(control: AbstractControl): ValidationErrors | null {
  const reservedKeywords = ['admin', 'root'];
  const username = control.value.toLowerCase(); 

  if (reservedKeywords.includes(username)) {
    return { reservedKeyword: true }; // return an error if username is a reserved keyword
  }

  return null; // return null if validation passes
}

}


