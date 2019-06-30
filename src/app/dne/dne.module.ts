import { NgModule } from '@angular/core';
import { DneFormComponent } from './dne-form/dne-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ DneFormComponent ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [ DneFormComponent ]
})
export class DneModule { }
