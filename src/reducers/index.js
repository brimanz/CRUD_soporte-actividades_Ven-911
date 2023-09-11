import { combineReducers } from 'redux'
import actividadesReducer from './actividadesReducer'


export default combineReducers({
	actividades: actividadesReducer
})