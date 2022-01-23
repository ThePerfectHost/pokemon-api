import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInRoutingModule } from './check-in-routing.module';
import { CheckInComponent } from './check-in.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CheckInComponent],
  imports: [CommonModule, CheckInRoutingModule, ReactiveFormsModule],
})
export class CheckInModule {}
