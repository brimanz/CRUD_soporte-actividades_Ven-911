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

    //obteniendo datos del state
    const actividades = useSelector( state => state.actividades.actividades );
    const error = useSelector( state => state.actividades.error );
    const cargando = useSelector( state => state.actividades.loading );

    return(
        <>
            <h2 className="text-center my-3">Listado de Actividades</h2>
            { 
                error 
                    ? <p className="font-weight-bold alert alert-danger text-center mt-4">Ocurrió un Error</p> 
                    : null
            }  

            {
                cargando ? <p className="text-center">Cargando...</p>
                : null 
            }     


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
