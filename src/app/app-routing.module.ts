import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DneComponent } from './dne/dne.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';

export const navbarRoutes: Routes = [
  {
    path: '',
    component: InicioComponent,
    data: { title: 'DCE - Cefet/RJ' }
  },
  {
    path: 'dne',
    component: DneComponent,
    data: { title: 'Carteirinha' }
  },
  {
    path: 'sobre',
    component: SobreComponent,
    data: { title: 'Sobre' }
  }
];

const routes = [
  ...navbarRoutes
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DneComponent,
];
