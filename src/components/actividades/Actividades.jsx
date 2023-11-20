import React, { useEffect } from 'react'

//components 
import Actividad from '../actividad/Actividad'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { obtenerActividadesAction } from '../../actions/actividadActions'


const Actividades = ()=> {

    const dispatch = useDispatch();

    useEffect( () => {
        //lamada a la API
        const cargarActividades = () => dispatch( obtenerActividadesAction() );
        cargarActividades();

    }, []); 

    const actividades = useSelector( state => state.actividades.actividades )
    console.log( actividades )

    return(
        <>
            <h2 className="text-center my-3">Listado de Actividades</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Actividad</th>
                        <th scope="col">Responsable</th>
                        <th scope="col">Entidad</th>
                    </tr>
                </thead>

                <tbody>
                    { actividades.length === 0 ? "No Hay Actividades" : (
                        actividades.map(actividad => (
                            <Actividad
                                key={ actividad.id }
                                actividad={ actividad }
                            />
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
}


export default Actividades
