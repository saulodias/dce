import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DneComponent } from './dne/dne.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { DneModule } from './dne/dne.module';
import { CepService } from './services/cep.service';
import { DneService } from './services/dne.service';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    DneComponent,
    InicioComponent,
    SobreComponent,
    CadastroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DneModule,
    SharedModule
  ],
  providers: [
    Title,
    CepService,
    DneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
