// Angular material modules used in the application
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatStepperModule,
   MatFormFieldModule, MatInputModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule,
   MAT_DATE_LOCALE, MatTooltipModule} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import {MatFileUploadModule } from 'mat-file-upload';


@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatFileUploadModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
})
export class CustomMaterialModule {
}
