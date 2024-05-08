import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { job } from '../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private jobs: job[] = []; // Initialize an empty array to store jobs
  private jobsSubject = new BehaviorSubject<job[]>([]); // BehaviorSubject to emit changes

  constructor() { }

  // Method to add a new job
  addJob(newJob: job) {
    this.jobs.push(newJob);
    this.jobsSubject.next(this.jobs); // Emit updated list of jobs
  }

  // Method to get the list of jobs
  getJobs() {
    return this.jobsSubject.asObservable(); // Return Observable to listen for changes
  }
}
