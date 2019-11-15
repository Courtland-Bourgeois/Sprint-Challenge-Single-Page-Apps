import React from "react";
import styled from 'styled-components';

const CharCard = styled.div`
  text-align: center;
`;


export default function CharacterCard(props) {
  return (
    <CharCard>
      <h1>{props.name}</h1>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </CharCard>
  );
}