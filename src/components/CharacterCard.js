import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </div>
  );
}
