import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acualiza-persona',
  templateUrl: './acualiza-persona.component.html',
  styleUrls: ['./acualiza-persona.component.css']
})
export class AcualizaPersonaComponent implements OnInit {

  id:number;
  persona : Persona = new Persona();

  constructor(
      private personaService:PersonaService,
      private route:ActivatedRoute,
      private router:Router
    ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personaService.getPersonaById(this.id).subscribe(dato =>{
      this.persona = dato;
    });
  }

  onSubmit(){
    //  console.log(this.persona);
    this.personaService.actualizarPersona(this.id,this.persona).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
    
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/personas']);
    Swal.fire('Empleado actualizado',`El empleado ${this.persona.nombre} ha sido actualizado con exito`,`success`);
  }
}
