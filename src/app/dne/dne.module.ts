import { NgModule } from '@angular/core';
import { DneFormComponent } from './dne-form/dne-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [ DneFormComponent ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    PdfViewerModule
  ],
  exports: [ DneFormComponent ]
})
export class DneModule { }
