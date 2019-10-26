import React from "react";

function Client(props) {
  return (
    <li key={props.details.id}>
      {props.details.nom}
      <button onClick={() => props.onDelete(props.details.id)}>X</button>
    </li>
  );
}

export default Client;
