import "./Styles/App.css";
import React from "react";

import Header from "./Components/Header";
import Paper from '@material-ui/core/Paper';

import Routes from './Routes';

function App() {
  return (
    <>
      <Header />
      <Paper className="main-container">
        <Routes />
      </Paper>
    </>
  );
}

export default App;
