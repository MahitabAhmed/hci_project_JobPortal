import { Component } from '@angular/core';
import { job } from '../interfaces/job';
import { JobService } from '../services/job.service';
import {Router} from '@angular/router';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service'; // Import UserService
import { MatDialog } from '@angular/material/dialog';
import { PauseDialogComponent } from '../pause-dialog-component/pause-dialog-component.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  jobToEdit:job | undefined;
  filteredJobs: any[] = [];
  searchTerm: string = '';
  savedjobs: job[] = [];
  searching: boolean = false;
  addedjobs:job[] = [];
  keywordFilters = {
    front: false,
    back: false,
    ui: false,
    test: false
  };
  filtering:boolean = false;
  filter1: boolean = false;
  filter2: boolean = false;
  filter3: boolean = false;
  filter4: boolean = false;
  filter5: boolean = false;
  filter6: boolean = false;
  filter7: boolean = false;
  filter8: boolean = false;
  filter9: boolean = false;
  filter10: boolean = false;
  filter11: boolean = false;
  filter12: boolean = false;
  filter13: boolean = false;
  filter14: boolean = false;
  filter15: boolean = false;
  filter16: boolean = false;
  isCompany: boolean = false; // Initialize isCompany flag
  username: string = '';
  isCompanyProperty: boolean = false;
  openPauseDialog(job: job) {
    const dialogRef = this.dialog.open(PauseDialogComponent, {
      width: '250px',
      data: { pausedate: job.pausedate }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        job.pausedate = result;
      }
    });
  }
  ngOnInit() {

    // const defaultJobs = [...this.jobs];

    this.jobs = this.postService.getJobs();
    this.isCompany = this.userService.getIsCompany();
    this.username = this.userService.getUsername();
    for(const job of this.jobs){
      if(this.username == job.companyName){
        this.isCompanyProperty =true;
      }
    }
  //   this.postService.getJobs().subscribe(jobs => {
  //   this.addedjobs = jobs;
  // });
  for (const addedjob of this.addedjobs) {
      this.jobs.push(addedjob);
  }
    this.savedjobs = this.jobService.getSavedJobs(); 
    this.initJobs();// Retrieve saved jobs from service
  }
  constructor(private userService: UserService,
    private postService: PostService,
    private jobService: JobService, 
    private router:Router,private dialog: MatDialog) {}
  //Saved: boolean = true;
  jobs:job[] = [];
  updateJob(updatedJob: job) {
    const index = this.jobs.findIndex(job => job.id === updatedJob.id);
    if (index !== -1) {
      this.jobs[index] = updatedJob;
    }
  }
  initJobs() {
    for (const savedjob of this.savedjobs) {
      for (const job of this.jobs) {
        if(savedjob.id == job.id){
          job.isSaved = false;
        }


      // // Check if the job's ID exists in the saved jobs list
      // const isSaved = this.savedjobs.some(savedJob => savedJob.id === job.id);
      // // Update the isSaved property of the current job
      // job.isSaved = isSaved;
      }
    }
  }
  toggleSaved(job: job) {
    job.isSaved = !job.isSaved;
    if (job.isSaved) {
      this.jobService.removeSavedJob(job);
    } else {
      this.jobService.saveJob(job);
    }
  }
  getRowIndexArray(): number[] {
    return Array(Math.ceil(this.jobs.length / 2)).fill(0).map((x, i) => i);
  }

  filterJobs() {
      // Filter jobs if searchTerm is not empty
      if (this.searchTerm.trim() !== '') {
        this.searching = true;
        this.filteredJobs = this.jobs.filter(job =>
          job.companyName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          job.jobTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        // Perform filtering here as before
      } else {
        this.searching = false;
      }
  }
  postJob( ){
    this.router.navigate(['/post-jobs'], { state: { jobToEdit: undefined } });
  }
  toggleFilters(filterNumber: number) {
    switch (filterNumber) {
      case 1:

        this.filter1 = !this.filter1;
        
        break;
      case 2:

        this.filter2 = !this.filter2;
        
        break;
      case 3:

        this.filter3 = !this.filter3;
        break;
      case 4:

        this.filter4 = !this.filter4;
        break;
      case 5:

        this.filter5 = !this.filter5;
        break;
      case 6:

        this.filter6 = !this.filter6;
        break;
      case 7:

        this.filter7 = !this.filter7;
        break;
      case 8:

        this.filter8 = !this.filter8;
        break;
      case 9:

        this.filter9 = !this.filter9;
        break;
      case 10:

        this.filter10 = !this.filter10;
        break;
      case 11:

        this.filter11 = !this.filter11;
        break;
      case 12:

        this.filter12 = !this.filter12;
        break;
      case 13:
        this.filter13 = !this.filter13;
        break;
      case 14:
        this.filter14 = !this.filter14;
        break;
      case 15:

        this.filter15 = !this.filter15;
        break;
      default:
        this.filter16 = !this.filter16;
        break;
    }
    this.checkFilters()
  }
  checkFilters() {
    
      if (this.filter1 || this.filter6 || this.filter9 || this.filter13) {
        for(const jobb of this.jobs.filter(job =>
          job.companyName.toLowerCase().includes('front')
          
        )){
          if (!this.filteredJobs.some(filteredJob => filteredJob.id === jobb.id)) {
            // Check if jobb is not already in filteredJobs list
            this.filteredJobs.push(jobb);
          }
        }
        this.filtering = this.filteredJobs.length != 0;
      }
      else if(!this.filter1 && !this.filter6 && !this.filter9 && !this.filter13){
        // Remove the specified job from filteredJobs
        const indexToRemove = this.filteredJobs.findIndex(filteredJob =>
          filteredJob.companyName.toLowerCase().includes('front')
        );
        if (indexToRemove !== -1) {
          this.filteredJobs.splice(indexToRemove, 1);
        }
        this.filtering = this.filteredJobs.length != 0;
      }

      if (this.filter2 || this.filter8 || this.filter11 || this.filter16) {
        for(const jobb of this.jobs.filter(job =>
          job.companyName.toLowerCase().includes('back')
          
        )){
          if (!this.filteredJobs.some(filteredJob => filteredJob.id === jobb.id)) {
            // Check if jobb is not already in filteredJobs list
            this.filteredJobs.push(jobb);
          }
        }
        this.filtering = this.filteredJobs.length != 0;
      }
      else if(!this.filter2 && !this.filter8 && !this.filter11 && !this.filter16){
        // Remove the specified job from filteredJobs
        const indexToRemove = this.filteredJobs.findIndex(filteredJob =>
          filteredJob.companyName.toLowerCase().includes('back')
        );
        if (indexToRemove !== -1) {
          this.filteredJobs.splice(indexToRemove, 1);
        }
        this.filtering = this.filteredJobs.length != 0;
      }

      if (this.filter3 || this.filter7 || this.filter10 || this.filter14) {
        for(const jobb of this.jobs.filter(job =>
          job.companyName.toLowerCase().includes('ui')
          
        )){
          if (!this.filteredJobs.some(filteredJob => filteredJob.id === jobb.id)) {
            // Check if jobb is not already in filteredJobs list
            this.filteredJobs.push(jobb);
          }
        }
        this.filtering = this.filteredJobs.length != 0;
      }
      else if(!this.filter3 && !this.filter7 && !this.filter10 && !this.filter14){
        // Remove the specified job from filteredJobs
        const indexToRemove = this.filteredJobs.findIndex(filteredJob =>
          filteredJob.companyName.toLowerCase().includes('ui')
        );
        if (indexToRemove !== -1) {
          this.filteredJobs.splice(indexToRemove, 1);
        }
        this.filtering = this.filteredJobs.length != 0;
      }

      if (this.filter4 || this.filter5 || this.filter12 || this.filter15) {
        for(const jobb of this.jobs.filter(job =>
          job.companyName.toLowerCase().includes('test')
          
        )){
          if (!this.filteredJobs.some(filteredJob => filteredJob.id === jobb.id)) {
            // Check if jobb is not already in filteredJobs list
            this.filteredJobs.push(jobb);
          }
        }
        this.filtering = this.filteredJobs.length != 0;
      }
      else if(!this.filter4 && !this.filter5 && !this.filter12 && !this.filter15){
        // Remove the specified job from filteredJobs
        const indexToRemove = this.filteredJobs.findIndex(filteredJob =>
          filteredJob.companyName.toLowerCase().includes('test')
        );
        if (indexToRemove !== -1) {
          this.filteredJobs.splice(indexToRemove, 1);
        }
        this.filtering = this.filteredJobs.length != 0;
      }
  }
  deleteJob(rowIndex: number, columnIndex: number) {
    const indexToRemove = rowIndex * 2 + columnIndex;
    if (indexToRemove >= 0 && indexToRemove < this.jobs.length) {
      this.jobs.splice(indexToRemove, 1);
      // You may want to update other relevant data or UI elements after deleting the job.
      // For example, you might need to update the saved jobs list if the deleted job was saved.
    }
  }
  editJob(job?: job) {
    this.router.navigate(['/post-jobs'], { state: { jobToEdit: job } }); // Pass job to edit
  }
  viewDetails(job: job) {
    this.router.navigate(['/job-details']);
    
  }
}
