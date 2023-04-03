import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { AcualizaPersonaComponent } from './acualiza-persona/acualiza-persona.component';

const routes: Routes = [
  {path: 'personas', component: ListaPersonasComponent},
  {path: '', redirectTo:'personas', pathMatch: 'full'},
  {path: 'actualizar-persona/:id', component: AcualizaPersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
