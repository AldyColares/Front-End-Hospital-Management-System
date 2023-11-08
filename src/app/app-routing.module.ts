import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DoctorloginComponent } from './login/doctorlogin/doctorlogin.component';
import { DoctorregisterComponent } from './registers/doctorregister/doctorregister.component';



const routes: Routes = [
  { path: '', redirectTo: '/auth-doctor', pathMatch: 'full' },
  { path: 'register-doctor', component: DoctorloginComponent },
  { path: 'auth-doctor', component: DoctorregisterComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
