export class Persona {
    id: number;
    nombre: string;
    primer_apellido:  string; 
    segundo_apellido: string; 
    telefono: string;
    estatus: string;
    email: string;
    password: string;
    fecha_ins:Date;
    fecha_upd?:Date;
}

export class Auth {
    email: string;
    password: string;
}