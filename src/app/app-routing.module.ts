import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from "./about/about.component";
import {ExperienceComponent} from "./experience/experience.component";
import {ProjectComponent} from "./project/project.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about' , component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects' , component:ProjectComponent},
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Enable scroll restoration
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
