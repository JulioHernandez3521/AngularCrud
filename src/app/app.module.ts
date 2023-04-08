import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { RegistraPersonaComponent } from './registra-persona/registra-persona.component';
import { FormsModule } from '@angular/forms';
import { AcualizaPersonaComponent } from './acualiza-persona/acualiza-persona.component';
import { DetallesPersonaComponent } from './detalles-persona/detalles-persona.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    RegistraPersonaComponent,
    AcualizaPersonaComponent,
    DetallesPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    DetallesPersonaComponent,
    ListaPersonasComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
