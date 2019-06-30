import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DneFormComponent } from './dne-form/dne-form.component';
import { CustomMaterialModule } from '../shared/material/custom-material.module';

@NgModule({
  declarations: [ DneFormComponent ],
  imports: [
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ DneFormComponent ]
})
export class DneModule { }
