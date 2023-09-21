import {
	AGREGAR_ACTIVIDAD,
	AGREGAR_ACTIVIDAD_EXITO,
	AGREGAR_ACTIVIDAD_ERROR
} from '../types'



//crear nuevas actividades
export function crearNuevaActividad( actividad ) {
	return() => {
		console.log(actividad);
	}

} 