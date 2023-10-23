import {
	AGREGAR_ACTIVIDAD,
	AGREGAR_ACTIVIDAD_EXITO,
	AGREGAR_ACTIVIDAD_ERROR
} from '../types'

//state propio por cada reducer
const initialState = {
	actividades: [],
	error: null, 
	loading: false
}


export default function(state = initialState, action){
	switch(action.type){
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

		default:
			return state;
	}
}