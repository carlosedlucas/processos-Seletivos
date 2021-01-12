import React from 'react';
import axios from 'axios';
import './EditarUsuario.css';

class EditarUsuario extends React.Component {
  state = {
    _id: '',
    username: '',
    email: '',
    password: '',
  };

  handleChange = (event) => {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };
  handleUpdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3001/users/' + this.state._id, this.state).then(
      (res) => {
        alert('Usuário editado com sucesso!');
      },
      (error) => {
        console.log(error);
      }
    );
  };

  componentDidMount() {
    let { id } = this.props.match.params;

    this.setState({
      _id: id,
    });

    axios.get('http://localhost:3001/users/' + id).then(
      (res) => {
        this.setState({
          email: res.data.data.email,
          username: res.data.data.username,
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
        <h2 className="title-form">Edite um usuário!</h2>
        <form className="container" onSubmit={this.handleUpdate}>
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
            Editar Usuário
          </button>
        </form>
      </div>
    );
  }
}

export default EditarUsuario;
