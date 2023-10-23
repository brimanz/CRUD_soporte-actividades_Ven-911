import {
	AGREGAR_ACTIVIDAD,
	AGREGAR_ACTIVIDAD_EXITO,
	AGREGAR_ACTIVIDAD_ERROR
} from '../types'



//crear nuevas actividades
export function crearNuevaActividad( actividad ) {
	return(dispatch) => {
		dispatch( agregarActividad() );

		try{
			dispatch( agregarActividadExito(actividad) );
		}catch(error){
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
const agregarActividadError = () =>{

}





