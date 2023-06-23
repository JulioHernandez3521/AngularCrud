import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { AcualizaPersonaComponent } from './acualiza-persona/acualiza-persona.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path: 'personas', component: ListaPersonasComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo:'personas', pathMatch: 'full'},
  {path: 'actualizar-persona/:id', component: AcualizaPersonaComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
