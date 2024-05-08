import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { job } from '../interfaces/job';
import {Router} from '@angular/router';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent {
  @Output() jobAdded = new EventEmitter<void>(); // Event emitter to notify HomeComponent

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router:Router,
  ) { }

  postJobForm = this.formBuilder.group({
    companyName: ['', [Validators.required]],
    jobTitle: ['', [Validators.required, Validators.maxLength(50)]],
    location: ['', [Validators.required]],
    salaryRange: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
  });

  onSubmit() {
    if (this.postJobForm.valid) {
      const newJob: Partial<job> = {
        companyName: this.postJobForm.value.companyName || '',
        jobTitle: this.postJobForm.value.jobTitle || '',
        location: this.postJobForm.value.location || '',
        salaryRange: this.postJobForm.value.salaryRange || '',
        minSalary : 0,
        maxSalary : 0,
        description : this.postJobForm.value.description || '',
        isSaved : true,
      };
  
      this.postService.addJob(newJob as job); // Cast to job type
      this.jobAdded.emit();
      this.postJobForm.reset();
    }
    this.router.navigate(['/home']);
  }
  
  
}