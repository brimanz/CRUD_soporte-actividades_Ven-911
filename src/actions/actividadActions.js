import {
	AGREGAR_ACTIVIDAD,
	AGREGAR_ACTIVIDAD_EXITO,
	AGREGAR_ACTIVIDAD_ERROR
} from '../types'

import clienteAxios from '../config/axios'


//crear nuevas actividades
export function crearNuevaActividad( actividad ) {
	return async (dispatch) => {
		dispatch( agregarActividad() );

		try{
			await clienteAxios.post('/actividades', actividad);

			//state update
			dispatch( agregarActividadExito(actividad) );
		}catch(error){
			console.log(error);
			//adding  error message
			dispatch( agregarActividadError(true) );
		}
	}
} 


const agregarActividad = () => ({
	type: AGREGAR_ACTIVIDAD,
	payload: true
})

//guardando actividad en base de datos
const agregarActividadExito = actividad => ({
	type: AGREGAR_ACTIVIDAD_EXITO,
	payload: actividad
})

//si se presenta un error
const agregarActividadError = estado => ({
	type: AGREGAR_ACTIVIDAD_ERROR, 
	payload: estado
})





