import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';
import { SwitchService } from '../services/switch.service';
import { DetallesPersonaComponent } from '../detalles-persona/detalles-persona.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  personas:Persona[];
  persona : Persona = new Persona();

  modalSwich:boolean;

  constructor( 
    private personasService: PersonaService,
    private detPerson : DetallesPersonaComponent,
    private router: Router,
    private modalSS:SwitchService,
  ) { }

  ngOnInit(): void {
      this.getPersonas();
      this.modalSS.$modal.subscribe(data => this.modalSwich = data );
  }


  public renderActualizarPersona(id:number){
    this.router.navigate(['actualizar-persona',id]);

  }

  public delete(id:number){
    this.personasService.deletePersona(id).subscribe(data=>{
      console.log(data);
      Swal.fire('Empleado Desactivado',`El empleado ${this.persona.nombre} ha sido desactivado con exito`,`success`);
      this.getPersonas();
    })
  }
  
  private getPersonas(){
    this.personasService.getPersonas.subscribe(data =>{
        this.personas = data.filter(p => p.estatus === "A");
        // this.personas = data;
    });
  }

  getPersona(id:number){
    this.personasService.getPersonaById(id).subscribe(data=> {this.detPerson.getPersonaFromList( data); this.persona = data }) ;
    this.modalSS.$modal.emit(this.persona);
  }

  openModalRegistro(){
    // this.modalSwich = true;
  }

}
