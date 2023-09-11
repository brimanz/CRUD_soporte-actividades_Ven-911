import React from 'react'
import { Link } from 'react-router-dom'


const Header = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success justify-content-center text-light">
            <div className="container">
                <h2>
                    <Link to={"/"} className="text-light">
                        Soporte Tecnologías - Ven 9-1-1
                    </Link>
                </h2>
            </div>

            <Link 
                className="btn btn-primary nuevo-post d-block d-md-inline-block text-light"
                to={"/actividades/nueva"}
            >
                Agregar Actividad &#43;
            </Link>
        </nav>
    );
}


export default Header
