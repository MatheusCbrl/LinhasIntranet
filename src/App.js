import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddLine from './components/AddLine';
import Line from './components/Line';
import Maps from './components/Mapas/App';

import MapsNoturno from './components/Mapas/AppNoturno';
import MapsTerceiroTurno from './components/Mapas/AppTerceiroTurno';

import LineNoturno from './components/LineNoturno';
import LineTerceiroTurno from './components/LineTerceiroNoturno';
import LineList from './components/LineList';

function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          {/* <a href="/line" className="navbar-brand"> */}
          <a href="/maps" className="navbar-brand">
            BusLine - Linhas
          </a>
          <div className="navbar-nav mr-auto">

            <li className="nav-item">
              <Link to={'/maps'} className="nav-link">
              | Mapas Diurno |
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/mapsnoturno'} className="nav-link">
              | Mapas Noturno |
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/mapsterceiroturno'} className="nav-link">
              | Mapas Terceiro Turno |
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={'/line'} className="nav-link">
              | Linhas Diurno |
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/LineNoturno'} className="nav-link">
              Linhas Noturno |
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/LineTerceiroTurno'} className="nav-link">
                Linhas Terceiro Turno |
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/add'} className="nav-link">
              Adicionar
              </Link>
            </li> */}
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            {/* <Route exact path={['/', '/line']} component={LineList} /> */}
            <Route exact path={['/', '/maps']} component={Maps} />

            <Route exact path={['/', '/mapsnoturno']} component={MapsNoturno} />
            <Route exact path={['/', '/mapsterceiroturno']} component={MapsTerceiroTurno} />

            {/* <Route exact path={['/', '/lineNoturno']} component={LineList} />
            <Route exact path={['/', '/lineTerceiroTurno']} component={LineList} />
            <Route exact path="/add" component={AddLine} />
            <Route path="/line/:id" component={Line} /> */}

            <Route path="/maps" component={Maps} />

            <Route path="/mapsnoturno" component={MapsNoturno} />
            <Route path="/mapsterceiroturno" component={MapsTerceiroTurno} />
            
            {/* <Route path="/lineNoturno/:id" component={LineNoturno} />
            <Route path="/lineTerceiroTurno/:id" component={LineTerceiroTurno} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
