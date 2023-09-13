import {
	AGREGAR_ACTIVIDAD,
	AGREGAR_ACTIVIDAD_EXITO,
	AGREGAR_ACTIVIDAD_ERROR
} from '../types'



//crear nuevas actividades
export function crearNuevaActividad() {
	return() => {
		console.log("funcionando desde actividades action")
	}

} 