import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Ativos from './components/Ativos/Ativos';
import Dashboard from './components/Dashboard/Dashboard';
import Healthscore from './components/Healthscore/Healthscore';
import Unidades from './components/Unidades/Unidades';
import Usuarios from './components/Usuarios/Usuarios';
import Header from './components/Header/Header';
import CadastroUsuario from './components/CadastroUsuario/CadastroUsuario';
import EditarUsuario from './components/EditarUsuario/EditarUsuario';
import VisualizarUsuario from './components/VisualizarUsuario/VisualizarUsuario';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/ativos" component={Ativos} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/healthscore" component={Healthscore} />
          <Route path="/unidades" component={Unidades} />
          <Route path="/usuarios" component={Usuarios} />
          <Route path="/adicionar-usuario" component={CadastroUsuario} />
          <Route path="/editar-usuario/:id" component={EditarUsuario} />
          <Route path="/visualizar-usuario/:id" component={VisualizarUsuario} />
        </Switch>
      </div>
    );
  }
}

export default App;
