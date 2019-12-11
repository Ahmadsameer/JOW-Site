import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MyMatchingComponent } from './pages/my-matching/my-matching.component';
import { ProfileAndRequestListComponent } from './pages/profile-and-request-list/profile-and-request-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddComponent } from './pages/add/add.component';


const routes: Routes = [
  { path: "", component : HomeComponent},
  { path: "login", component : SigninComponent},
  { path: "register", component : SignupComponent},
  { path: "add", component : AddComponent},
  { path: "messages", component : MessagesComponent},
  { path: "my-matches", component : MyMatchingComponent},
  { path: "list/:requestName/:id", component : ProfileAndRequestListComponent},
  { path: "dashboard", component : DashboardComponent},
  { path: "**", component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
