import { NIVEL } from './nivel.enum';

export class Task{
	id = 0;
	nombre = '';
	descripcion = '';
	prioridad = NIVEL.BAJO; 
	completed = false;

	constructor(id, nombre, descripcion, prioridad, completed){
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.prioridad = prioridad;
		this.completed = completed;
	}
} 