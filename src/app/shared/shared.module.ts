import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from './material/custom-material.module';
import { DneModule } from '../dne/dne.module';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [
    CustomMaterialModule,
    DneModule
  ]
})
export class SharedModule { }
