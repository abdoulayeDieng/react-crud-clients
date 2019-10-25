import React from "react";

class Client extends React.Component {
  render() {
    return (
      <li key={this.props.details.id}>
        {this.props.details.nom}
        <button onClick={() => this.props.onDelete(this.props.details.id)}>
          X
        </button>
      </li>
    );
  }
}

export default Client;
