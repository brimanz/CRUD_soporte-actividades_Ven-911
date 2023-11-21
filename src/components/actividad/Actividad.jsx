import React from 'react'
import { Link } from 'react-router-dom'


const Actividad = ({ actividad, id }) => {

	const { nombre, responsable, entidad } = actividad

	return(
		<tr>
			<td>{nombre}</td>
			<td>{responsable}</td>
			<td className="font-weight-bold">{entidad}</td>
			<td className="acciones">
				<Link 
					to={`/actividades/editar/${id}`}
					className="btn btn-primary"
				>
					Editar
				</Link>
				<button
					type="button"
					className="btn btn-danger"
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
}


export default Actividad