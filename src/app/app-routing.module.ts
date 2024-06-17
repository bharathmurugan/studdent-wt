import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { AboutComponent } from './about/about.component';
// import { MainComponent } from './main/main.component';
import { CollegeComponent } from './college/college.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect to home if no path is specified
  { path: 'home', component: HomeComponent },
  
  { path: 'about', component: AboutComponent },
  { path: 'student-details', component: StudentDetailsComponent },
  { path: 'college', component: CollegeComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
