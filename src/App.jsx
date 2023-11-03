import React from 'react'
import Header from './components/header/Header'
import Actividades from './components/actividades/Actividades'
import NuevaActividad from './components/nuevaActividad/NuevaActividad'
import EditarActividad from './components/editarActividad/EditarActividad'

//router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//redux
import { Provider } from 'react-redux'
import store from './store'


const App = () =>{
    return(
        <Router>

            <Provider store={store}>
                <Header/>

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ Actividades } />
                        <Route exact path="/actividades/nueva" component={ NuevaActividad } />
                        <Route exact path="/actividades/editar/:id" component={ EditarActividad } />
                    </Switch>
                </div>
            </Provider>
        </Router>    
    );
}


export default App