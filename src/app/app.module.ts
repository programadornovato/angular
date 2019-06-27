import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FrameworkService } from './framework.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { E404Component } from './e404/e404.component';
const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: '404', component: E404Component },
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    FormularioComponent,
    InicioComponent,
    UbicacionComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FrameworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
