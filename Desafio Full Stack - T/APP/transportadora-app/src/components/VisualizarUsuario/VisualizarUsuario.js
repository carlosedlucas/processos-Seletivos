import React from 'react';
import axios from 'axios';
import './VisualizarUsuario.css';

class VisualizarUsuario extends React.Component {
  state = {
    username: '',
    email: '',
  };

  handleChange = (event) => {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };

  componentDidMount() {
    //get ID FROM ROUTER
    let { id } = this.props.match.params;
    axios.get('http://localhost:3001/users/' + id).then(
      (res) => {
        this.setState({
          username: res.data.data.username,
          email: res.data.data.email,
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
        <h2 className="title-form">Usuário: {this.state.username}</h2>
        <form className="container">
          <div className="form-group">
            <input
              placeholder="Name"
              name="username"
              className="form-control"
              value={this.state.username}
              disabled
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Email"
              name="email"
              className="form-control"
              disabled
              value={this.state.email}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default VisualizarUsuario;
