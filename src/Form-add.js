import React from "react";

class FormAdd extends React.Component {
  state = {
    newClient: "Astou Wade"
  };

  handleChange(event) {
    this.setState({ newClient: event.currentTarget.value });
  }

  handleAdd(event) {
    const id = new Date().getTime();
    const nom = this.state.newClient;
    this.props.onAdd({ id, nom });
    this.setState({ newClient: "" });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleAdd.bind(this)}>
        <input
          value={this.state.newClient}
          onChange={this.handleChange.bind(this)}
          placeholder="Ajouter le nom d'un client"
        />
        <button>Confirmez</button>
      </form>
    );
  }
}

export default FormAdd;
