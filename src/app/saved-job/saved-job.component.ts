import { Component, OnInit } from '@angular/core';
import { job } from '../interfaces/job';
import { JobService } from '../services/job.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-saved-job',
  templateUrl: './saved-job.component.html',
  styleUrls: ['./saved-job.component.css']
})
export class SavedJobComponent implements OnInit {
  savedJobs: job[] = [];

  constructor(private jobService: JobService,private router: Router) {}

  ngOnInit() {
    this.savedJobs = this.jobService.getSavedJobs(); // Retrieve saved jobs from service
  }
  
  viewDetails(job: job) {
    this.router.navigate(['/job-details']);
    
  }

  unsaveJob(job: job) {
    this.jobService.removeSavedJob(job); // Remove job from saved list
    this.savedJobs = this.jobService.getSavedJobs(); // Update saved jobs list
  }
}