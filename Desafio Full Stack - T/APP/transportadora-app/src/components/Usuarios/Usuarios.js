import React from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import './Usuarios.css';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Usuarios extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get('http://localhost:3001/users').then(
      (res) => {
        this.setState({
          users: res.data.data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  render() {
    return (
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Password</th>
              <th>Visualizar</th>
              <th>Editar</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user._id} </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {' '}
                    <Link
                      className="link"
                      to={`/visualizar-usuario/${user._id}`}
                    >
                      Visualizar
                    </Link>
                  </td>
                  <td>
                    {' '}
                    <Link className="link" to={`/editar-usuario/${user._id}`}>
                      Editar
                    </Link>
                  </td>
                  <td>
                    {' '}
                    <Link className="link" to="/usuarios">
                      Remover
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Usuarios;
