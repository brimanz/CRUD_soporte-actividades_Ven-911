import React from 'react'


const editarActividad = ()=>{
    return(
        <div className="row justify-content-center mt-4">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold text-primary">
                            Editar Actividad
                        </h2>

                        <form>
                            <div className="form-group">
                                <label>Nueva Actividad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Agrega una actividad"
                                    name="nombre"
                                />
                            </div>

                            <div className="form-group">
                                <label>Responsable</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Indique el Responsable"
                                    name="responsable"
                                />
                            </div>

                            <div className="form-group">
                                <label>Entidad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Indique la Entidad o Coordinacion"
                                    name="entidad"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase"

                            >
                                Guardar Cambios
                            </button>
                        </form>                    
                    </div>
                </div>            
            </div>
        </div>
    );
}


export default editarActividad
