import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EstructurasSecuenciaComponent } from './pages/estructuras-secuencia/estructuras-secuencia.component';
import { DocsComponent } from './pages/docs/docs.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'perfil', component: PerfilComponent, pathMatch: 'full'},
  {path: 'estructuras-secuencia', component: EstructurasSecuenciaComponent, pathMatch: 'full'},
  {path: 'docs', component: DocsComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
