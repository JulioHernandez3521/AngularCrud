import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ListaPersonasComponent } from '../lista-personas/lista-personas.component';

@Component({
  selector: 'app-registra-persona',
  templateUrl: './registra-persona.component.html',
  styleUrls: ['./registra-persona.component.css']
})
export class RegistraPersonaComponent implements OnInit {

 
  persona : Persona = new Persona();
  constructor(
    private modalSS: SwitchService,
    private personaServicio: PersonaService,
    private router: Router,
    private personas: ListaPersonasComponent,
  ) { }

  ngOnInit(): void {
    // console.log(this.persona)

  }

  savePersona(){
    this.persona.fecha_ins = new Date();
    this.persona.estatus = "A";  
    this.personaServicio.savePersona(this.persona).subscribe(data =>{
      console.log(data);
      this.updateListPersonas();
    },error => console.error(error));
  }

  updateListPersonas(){
    // this.router.navigate(['personas']);
    Swal.fire('Empleado Agregado',`El empleado ${this.persona.nombre} ha sido Agregado con exito`,`success`);
    this.getPersonas();
  }

  onSubmit(){
    // console.log(this.persona);
    this.savePersona();
  }
  private getPersonas(){
    this.personaServicio.getPersonas.subscribe(data =>{
        this.personas.personas = data;
    });
  }
  closeModal (){
    this.modalSS.$modal.emit(false);
  }

}
