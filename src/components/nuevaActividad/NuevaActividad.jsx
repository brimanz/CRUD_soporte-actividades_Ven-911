import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
//redux actions 
import { crearNuevaActividad } from '../../actions/actividadActions'


const nuevaActividad = ({ history }) => {

    //state local
    const [nombre, setNombre] = useState("");
    const [responsable, setResponsable] = useState("");
    const [entidad, setEntidad] = useState("");


    //usando dispatch
    const dispatch = useDispatch();

    //accediendo al state del store
    const cargando = useSelector( state => state.actividades.loading );
    const error = useSelector( state => state.actividades.error );


    //llamando el action de actividadActividad
    const agregarActividad = actividad => dispatch( crearNuevaActividad( actividad ) );

    //submit de actividades
    const submitNueavaActividad = (e) =>{
        e.preventDefault();

        //validando formulario
        if(nombre.trim() === "", responsable.trim() === "", entidad.trim() === ""){
            return;
        }

        //comprobando errores
        

        //crear nueva actividad
        agregarActividad({
            nombre,
            responsable,
            entidad
        });


        //redireccionando
        history.push('/');
    }




    return(
        <div className="row justify-content-center mt-4">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold text-primary">
                            Agregar Nueva Actividad
                        </h2>

                        <form
                            onSubmit={submitNueavaActividad}
                        >
                            <div className="form-group">
                                <label>Nueva Actividad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Responsable</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="responsable"
                                    value={responsable}
                                    onChange={e => setResponsable(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Entidad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="entidad"
                                    value={entidad}
                                    onChange={e => setEntidad(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase"
                            >
                                Agregar
                            </button>
                        </form>

                        { cargando ? <p>Cargando...</p> : null }
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hay un Error</p> : null }                    
                    </div>
                </div>            
            </div>
        </div>
    );
}


export default nuevaActividad
