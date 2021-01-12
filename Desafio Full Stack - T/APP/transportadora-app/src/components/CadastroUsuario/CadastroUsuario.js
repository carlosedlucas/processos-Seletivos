import React from 'react';
import axios from 'axios';
import './CadastroUsuario.css';

class CadastroUsuario extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleChange = (event) => {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };
  handleCreate = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/users', this.state).then(
      (res) => {
        alert('Usuário cadastrado com sucesso!');
      },
      (error) => {
        console.log(error);
      }
    );
  };

  /*componentDidMount() {
    //get ID FROM ROUTER
    let {id} = this.props.math.params;
    axios.get('http://localhost:3001/users/' + id).then(
      (res) => {
        this.setState(res.data)
      },
      (error) => {
        console.log(error);
      }
    );
  }*/

  render() {
    return (
      <div className="post">
        <h2 className="title-form">Crie um novo usuário!</h2>
        <form className="post" onSubmit={this.handleCreate}>
          <div className="form-group">
            <input
              placeholder="Name"
              name="username"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Email"
              name="email"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Password"
              name="password"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Create User
          </button>
        </form>
      </div>
    );
  }
}

export default CadastroUsuario;
