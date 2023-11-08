import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './auth/doctor/doctor.component';
import { DoctorRegisterComponent } from './register/doctor-register/doctor-register.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    DoctorComponent,
    DoctorRegisterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AuthFormModule { }
