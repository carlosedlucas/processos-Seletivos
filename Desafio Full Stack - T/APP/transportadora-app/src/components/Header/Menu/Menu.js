import React from 'react';
import './Menu.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Menu extends React.Component {
  render() {
    return (
      <div>
        {/* <Link className="link" to="/ativos">
          Ativos
        </Link>
        <Link className="link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="link" to="/healthscore">
          Healthscore
        </Link>
        <Link className="link" to="/unidades">
          Unidades
        </Link>
        <Link className="link" to="/usuarios">
          Usuários
        </Link> */}
        <Navbar className="navbar" bg="blue" expand="lg">
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto nav-link">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/ativos">Ativos</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/healthscore">Healthscore</Nav.Link>
              <Nav.Link href="/unidades">Unidades</Nav.Link>
              <Nav.Link href="/usuarios">Usuários</Nav.Link>
              <Nav.Link href="/adicionar-usuario">Cadastrar Usuário</Nav.Link>
              <Nav.Link href="/editar-usuario/:id">Editar Usuário</Nav.Link>
              <Nav.Link href="/visualizar-usuario/:id">
                Visualizar Usuário
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
