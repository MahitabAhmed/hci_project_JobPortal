import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path: 'sign-up', component:SignupComponent},
  {path: 'login', component:LogInComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
