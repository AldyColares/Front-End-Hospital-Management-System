import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    DoctorregisterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class RegistersModule { }
