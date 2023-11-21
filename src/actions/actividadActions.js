import {
	AGREGAR_ACTIVIDAD,
	AGREGAR_ACTIVIDAD_EXITO,
	AGREGAR_ACTIVIDAD_ERROR,
	
	COMENZAR_DESCARGA_ACTIVIDADES,
	DESCARGA_ACTIVIDADES_EXITO,
	DESCARGA_ACTIVIDADES_ERROR
} from '../types'

import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'


//crear nuevas actividades
export function crearNuevaActividad( actividad ) {
	return async (dispatch) => {
		dispatch( agregarActividad() );

		try{
			await clienteAxios.post('/actividades', actividad);

			//state update
			dispatch( agregarActividadExito(actividad) );

			//alert
			Swal.fire({
			  title: "Buen Trabajo!",
			  text: "Actividad Guardada con Exito!",
			  icon: "success"
			});
		}catch(error){
			console.log(error);
			//adding  error message
			dispatch( agregarActividadError(true) );

			//error alert
			Swal.fire({
			  title: "Lo siento!",
			  text: "Ocurrió un Error!",
			  icon: "error"
			});
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


//descarga actividades de la BD
export function obtenerActividadesAction(){
	return async( dispatch ) => {
		dispatch( descargarActividades() );

		try{
			setTimeout(async () => {
				const response = await clienteAxios.get('/actividades');
				dispatch( descargarActividadesExitosa( response.data ) );	
			}, 1000)
		} catch(error) {
			dispatch( descargarActividadesError() );
		}

	}
}


const descargarActividades = () =>({
	type: COMENZAR_DESCARGA_ACTIVIDADES,
	payload: true
}); 

const descargarActividadesExitosa = actividades => ({
	type: DESCARGA_ACTIVIDADES_EXITO,
	payload: actividades
});

const descargarActividadesError = () => ({
	type: AGREGAR_ACTIVIDAD_ERROR,
	payload: true
})


