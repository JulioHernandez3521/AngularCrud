import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-detalles-persona',
  templateUrl: './detalles-persona.component.html',
  styleUrls: ['./detalles-persona.component.css']
})
export class DetallesPersonaComponent implements OnInit {

  persona : Persona = new Persona();
  constructor( 
    private personaServicio: PersonaService,
    private modalSS:SwitchService
  ) { }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe(data => this.persona = data );
  }

  getPersona(id:number){
    this.personaServicio.getPersonaById(id).subscribe(data=> this.persona = data);
  }


}
