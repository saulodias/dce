import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from './material/custom-material.module';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    CustomMaterialModule
  ]
})
export class SharedModule { }
