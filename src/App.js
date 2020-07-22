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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/maps">BusLine - Mapas</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/maps'} className="nav-link">
                  Diurno
              </Link>
              </li>
              <li className="nav-item">
                <Link to={'/mapsnoturno'} className="nav-link">
                  Noturno
              </Link>
              </li>
              <li className="nav-item">
                <Link to={'/mapsterceiroturno'} className="nav-link">
                  Terceiro Turno
              </Link>
              </li>
            </ul>
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
        <div >
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
