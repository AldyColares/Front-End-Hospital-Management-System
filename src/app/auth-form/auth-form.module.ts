import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './auth/doctor/doctor.component';
import { DoctorRegisterComponent } from './register/doctor-register/doctor-register.component';



@NgModule({
  declarations: [
    DoctorComponent,
    DoctorRegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthFormModule { }
