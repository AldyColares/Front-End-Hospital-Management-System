import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorComponent } from './auth-form/auth/doctor/doctor.component';
import { DoctorRegisterComponent } from './auth-form/register/doctor-register/doctor-register.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth-doctor', pathMatch: 'full' },
  { path: 'register-doctor', component: DoctorComponent },
  { path: 'auth-doctor', component: DoctorRegisterComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
