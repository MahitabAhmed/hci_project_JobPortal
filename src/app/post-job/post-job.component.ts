import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AbstractControl, ValidationErrors, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
  constructor(private formBuilder:FormBuilder,private router: Router){}
  postJobForm = this.formBuilder.group({
    companyName: ['', [Validators.required,]],
    jobTitle: ['', [Validators.required,]],
    location:['',[Validators.required]],
    applyingMethod:[''],
    description:['', [Validators.required]],
    qualifications:['', [Validators.required]]

    });

}
