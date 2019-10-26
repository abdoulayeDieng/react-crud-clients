import React from "react";
import ReactDOM from "react-dom";

import Client from "./Client";
import FormAdd from "./Form-add";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Ngor Diouf" },
      { id: 2, nom: "Yero Sow" },
      { id: 3, nom: "Nafi Diop" }
    ]
  };

  handleDelete(id) {
    this.setState(prevstate => ({
      clients: prevstate.clients.filter(client => client.id !== id)
    }));
  }

  addClient(client) {
    this.setState(prevstate => prevstate.clients.push(client));
  }

  render() {
    return (
      <div className="App">
        <h1>Clients list</h1>
        <ul>
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete.bind(this)} />
          ))}
        </ul>
        <FormAdd onAdd={this.addClient.bind(this)} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
