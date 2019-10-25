import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Ngor Diouf" },
      { id: 2, nom: "Yero Sow" },
      { id: 3, nom: "Nafi Diop" }
    ],
    newClient: "Astou Wade"
  };

  handleDelete(id) {
    this.setState(prevstate => ({
      clients: prevstate.clients.filter(client => client.id !== id)
    }));
  }

  handleChange(event) {
    this.setState({ newClient: event.currentTarget.value });
  }

  handleAdd(event) {
    const id = new Date().getTime();
    const nom = this.state.newClient;
    this.setState(prevstate => prevstate.clients.push({ id, nom }));
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Clients list</h1>
        <ul>
          {this.state.clients.map(client => (
            <li key={client.id}>
              {client.nom}
              <button onClick={() => this.handleDelete(client.id)}>X</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleAdd.bind(this)}>
          <input
            value={this.state.newClient}
            onChange={this.handleChange.bind(this)}
            placeholder="Ajouter le nom d'un client"
          />
          <button>Confirmez</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
