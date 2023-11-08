import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    DoctorloginComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class LoginModule { }
