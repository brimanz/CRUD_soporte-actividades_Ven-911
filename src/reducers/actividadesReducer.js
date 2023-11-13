import {
	AGREGAR_ACTIVIDAD,
	AGREGAR_ACTIVIDAD_EXITO,
	AGREGAR_ACTIVIDAD_ERROR,
	COMENZAR_DESCARGA_ACTIVIDADES,
	DESCARGA_ACTIVIDADES_EXITO,
	DESCARGA_ACTIVIDADES_ERROR
} from '../types'

//state propio por cada reducer
const initialState = {
	actividades: [],
	error: null, 
	loading: false
}


export default function(state = initialState, action){
	switch(action.type){
		case COMENZAR_DESCARGA_ACTIVIDADES:			
		case AGREGAR_ACTIVIDAD: 
			return {
				...state, 
				loading: action.payload
			}
		case AGREGAR_ACTIVIDAD_EXITO:
			return{
				...state,
				loading: false,
				actividades: [...state.actividades, action.payload]
			}
		case AGREGAR_ACTIVIDAD_ERROR:
			return{
				...state,
				loading: false, 
				error: action.payload 
			}
		
		default:
			return state;
	}
}