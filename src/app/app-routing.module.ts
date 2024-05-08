import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LogInComponent } from './log-in/log-in.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { PostJobComponent } from './post-job/post-job.component';
import {HomeComponent } from './home/home.component';
import {SavedJobComponent } from './saved-job/saved-job.component';

const routes: Routes = [
  {path: '', component:SignupComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LogInComponent},
  {path: 'home', component:HomeComponent}, // modify it
  {path: 'saved-jobs', component:SavedJobComponent},
  {path: 'post-jobs', component:PostJobComponent},
  {path: 'com', component:ApplyForJobComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
