import React from "react";
import { Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 5px;

  a {
    padding: 5px;
    color: black;
  }
`;

export default function App() {
  return (
    <main>
      <Header />

      <NavBar>
        <nav>
          <Link to="/">Welcome Page</Link>
          <Link to="/characters">Characters page</Link>
        </nav>
      </NavBar>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
